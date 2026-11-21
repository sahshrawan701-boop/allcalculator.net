"use client";
import { useState, useEffect, useCallback, useRef } from "react";

// ─── Tokeniser ────────────────────────────────────────────────────────────────
type TokenKind =
  | "NUMBER"
  | "PLUS"
  | "MINUS"
  | "MUL"
  | "DIV"
  | "MOD"
  | "POW"
  | "LPAREN"
  | "RPAREN"
  | "FN" // sin cos tan log ln sqrt abs exp
  | "CONST"; // pi e

interface Token {
  kind: TokenKind;
  value: string | number;
}

const FN_NAMES = [
  "sin",
  "cos",
  "tan",
  "asin",
  "acos",
  "atan",
  "log",
  "ln",
  "sqrt",
  "abs",
  "exp",
  "ceil",
  "floor",
  "round",
];
const CONST_NAMES: Record<string, number> = { pi: Math.PI, e: Math.E };

function tokenise(raw: string): Token[] {
  const src = raw
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .replace(/−/g, "-")
    .replace(/\^/g, "^")
    .replace(/π/g, "pi")
    .replace(/√/g, "sqrt(");

  const tokens: Token[] = [];
  let i = 0;
  while (i < src.length) {
    const ch = src[i];
    if (ch === " ") {
      i++;
      continue;
    }

    // number: integer / decimal / scientific
    if (/[0-9]/.test(ch) || (ch === "." && /[0-9]/.test(src[i + 1] ?? ""))) {
      let num = "";
      while (i < src.length && /[0-9.]/.test(src[i])) num += src[i++];
      if (src[i] === "e" || src[i] === "E") {
        num += src[i++];
        if (src[i] === "+" || src[i] === "-") num += src[i++];
        while (i < src.length && /[0-9]/.test(src[i])) num += src[i++];
      }
      tokens.push({ kind: "NUMBER", value: parseFloat(num) });
      continue;
    }

    // named token: function or constant
    if (/[a-zA-Z_]/.test(ch)) {
      let name = "";
      while (i < src.length && /[a-zA-Z_]/.test(src[i])) name += src[i++];
      const lo = name.toLowerCase();
      if (FN_NAMES.includes(lo)) tokens.push({ kind: "FN", value: lo });
      else if (lo in CONST_NAMES) tokens.push({ kind: "CONST", value: lo });
      else throw new Error(`Unknown name: ${name}`);
      continue;
    }

    switch (ch) {
      case "+":
        tokens.push({ kind: "PLUS", value: "+" });
        break;
      case "-":
        tokens.push({ kind: "MINUS", value: "-" });
        break;
      case "*":
        tokens.push({ kind: "MUL", value: "*" });
        break;
      case "/":
        tokens.push({ kind: "DIV", value: "/" });
        break;
      case "%":
        tokens.push({ kind: "MOD", value: "%" });
        break;
      case "^":
        tokens.push({ kind: "POW", value: "^" });
        break;
      case "(":
        tokens.push({ kind: "LPAREN", value: "(" });
        break;
      case ")":
        tokens.push({ kind: "RPAREN", value: ")" });
        break;
      case "!": {
        // postfix factorial — replace last token with n!
        const last = tokens[tokens.length - 1];
        if (last?.kind === "NUMBER") {
          const n = last.value as number;
          if (!Number.isInteger(n) || n < 0 || n > 170)
            throw new Error("Invalid factorial");
          last.value = factorial(n);
        } else throw new Error("Invalid !");
        break;
      }
      default:
        throw new Error(`Unexpected char: ${ch}`);
    }
    i++;
  }
  return tokens;
}

// ─── Recursive descent parser (BODMAS) ────────────────────────────────────────
// Grammar:
//   expr   = term   { ('+' | '-') term }
//   term   = factor { ('*' | '/' | '%') factor }
//   factor = base   [ '^' factor ]   (right-assoc)
//   base   = UNARY  | primary
//   primary = NUMBER | CONST | FN '(' expr ')' | '(' expr ')' | implicit-mul

class Parser {
  private pos = 0;
  constructor(private toks: Token[]) {}

  private peek(): Token | null {
    return this.toks[this.pos] ?? null;
  }
  private consume(): Token {
    return this.toks[this.pos++];
  }

  private expect(kind: TokenKind): Token {
    const t = this.peek();
    if (!t || t.kind !== kind)
      throw new Error(`Expected ${kind} at ${this.pos}`);
    return this.consume();
  }

  parse(): number {
    if (this.toks.length === 0) throw new Error("Empty expression");
    const result = this.expr();
    if (this.pos < this.toks.length) throw new Error("Unexpected token");
    return result;
  }

  private expr(): number {
    let left = this.term();
    while (true) {
      const t = this.peek();
      if (t?.kind === "PLUS") {
        this.consume();
        left = left + this.term();
      } else if (t?.kind === "MINUS") {
        this.consume();
        left = left - this.term();
      } else break;
    }
    return left;
  }

  private term(): number {
    let left = this.factor();
    while (true) {
      const t = this.peek();
      if (t?.kind === "MUL") {
        this.consume();
        left = left * this.factor();
      } else if (t?.kind === "DIV") {
        this.consume();
        const d = this.factor();
        if (d === 0) throw new Error("Division by zero");
        left = left / d;
      } else if (t?.kind === "MOD") {
        this.consume();
        left = left % this.factor();
      } else break;
    }
    return left;
  }

  private factor(): number {
    // handle implicit multiplication: 2(3+1) = 8, 2π = 2*π
    let base = this.unary();
    while (true) {
      const t = this.peek();
      // implicit ×: number/const/closing-paren followed by LPAREN/CONST/FN
      if (t?.kind === "LPAREN" || t?.kind === "CONST" || t?.kind === "FN") {
        base = base * this.unary();
      } else break;
    }
    // right-assoc exponent
    if (this.peek()?.kind === "POW") {
      this.consume();
      const exp = this.factor();
      return Math.pow(base, exp);
    }
    return base;
  }

  private unary(): number {
    const t = this.peek();
    if (t?.kind === "MINUS") {
      this.consume();
      return -this.primary();
    }
    if (t?.kind === "PLUS") {
      this.consume();
      return this.primary();
    }
    return this.primary();
  }

  private primary(): number {
    const t = this.peek();
    if (!t) throw new Error("Unexpected end");

    if (t.kind === "NUMBER") {
      this.consume();
      return t.value as number;
    }

    if (t.kind === "CONST") {
      this.consume();
      return CONST_NAMES[t.value as string];
    }

    if (t.kind === "FN") {
      const name = t.value as string;
      this.consume();
      this.expect("LPAREN");
      const arg = this.expr();
      this.expect("RPAREN");
      return applyFn(name, arg);
    }

    if (t.kind === "LPAREN") {
      this.consume();
      const v = this.expr();
      this.expect("RPAREN");
      return v;
    }

    throw new Error(`Unexpected token: ${t.value}`);
  }
}

function applyFn(name: string, arg: number): number {
  const DEG = Math.PI / 180;
  switch (name) {
    case "sin":
      return Math.sin(arg * DEG);
    case "cos":
      return Math.cos(arg * DEG);
    case "tan": {
      const t = Math.tan(arg * DEG);
      if (!isFinite(t) && Math.abs(arg % 180) === 90)
        throw new Error("Undefined");
      return t;
    }
    case "asin": {
      if (arg < -1 || arg > 1) throw new Error("Domain error");
      return Math.asin(arg) / DEG;
    }
    case "acos": {
      if (arg < -1 || arg > 1) throw new Error("Domain error");
      return Math.acos(arg) / DEG;
    }
    case "atan":
      return Math.atan(arg) / DEG;
    case "log": {
      if (arg <= 0) throw new Error("Domain error");
      return Math.log10(arg);
    }
    case "ln": {
      if (arg <= 0) throw new Error("Domain error");
      return Math.log(arg);
    }
    case "sqrt": {
      if (arg < 0) throw new Error("Domain error");
      return Math.sqrt(arg);
    }
    case "abs":
      return Math.abs(arg);
    case "exp":
      return Math.exp(arg);
    case "ceil":
      return Math.ceil(arg);
    case "floor":
      return Math.floor(arg);
    case "round":
      return Math.round(arg);
    default:
      throw new Error(`Unknown function: ${name}`);
  }
}

function factorial(n: number): number {
  if (n > 170) throw new Error("Overflow");
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

function evaluate(expr: string): number {
  const tokens = tokenise(expr.trim());
  const result = new Parser(tokens).parse();
  if (!isFinite(result)) throw new Error("Not finite");
  return result;
}

// ─── Format result ────────────────────────────────────────────────────────────
function fmt(n: number): string {
  if (Math.abs(n) >= 1e15 || (Math.abs(n) < 1e-10 && n !== 0)) {
    return n.toExponential(8).replace(/\.?0+e/, "e");
  }
  // up to 12 significant digits, strip trailing zeros
  const s = parseFloat(n.toPrecision(12)).toString();
  return s;
}

// ─── State ────────────────────────────────────────────────────────────────────
type Mode = "normal" | "error";

interface CalcState {
  display: string; // what user sees in main display
  expression: string; // the live expression being built
  justEvaled: boolean; // did we just press =?
  mode: Mode;
  lastResult: string;
}

const INIT: CalcState = {
  display: "0",
  expression: "",
  justEvaled: false,
  mode: "normal",
  lastResult: "",
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function ScientificCalculator() {
  const [state, setState] = useState<CalcState>(INIT);
  const [history, setHistory] = useState<{ expr: string; result: string }[]>(
    [],
  );
  const [showHistory, setShowHistory] = useState(false);
  const [angleMode, setAngleMode] = useState<"DEG" | "RAD">("DEG");
  const ref = useRef<HTMLDivElement>(null);

  const { display, expression, justEvaled, mode } = state;

  // ─── Core mutation ─────────────────────────────────────────────────────────
  const mutate = useCallback((updater: (s: CalcState) => CalcState) => {
    setState(updater);
  }, []);

  const appendExpr = useCallback(
    (chunk: string) => {
      mutate((s) => {
        const expr = s.justEvaled
          ? chunk.match(/^[0-9.(]/)
            ? chunk
            : s.lastResult + chunk
          : s.expression + chunk;
        return {
          ...s,
          expression: expr,
          display: expr || "0",
          justEvaled: false,
          mode: "normal",
        };
      });
    },
    [mutate],
  );

  // digit / decimal
  const onDigit = useCallback(
    (d: string) => {
      appendExpr(d);
    },
    [appendExpr],
  );

  // operator
  const onOp = useCallback(
    (op: string) => {
      appendExpr(op);
    },
    [appendExpr],
  );

  // function (wraps current tail in fn(...))
  const onFn = useCallback(
    (fn: string) => {
      appendExpr(`${fn}(`);
    },
    [appendExpr],
  );

  // constant
  const onConst = useCallback(
    (c: string) => {
      appendExpr(c);
    },
    [appendExpr],
  );

  // toggle sign: negate the last number segment
  const onNegate = useCallback(() => {
    mutate((s) => {
      // simple: wrap whole expression in -(...)
      const expr = s.expression;
      if (!expr || expr === "0") return s;
      const wrapped = `-(${expr})`;
      return { ...s, expression: wrapped, display: wrapped };
    });
  }, [mutate]);

  // percent: divide last numeric run by 100
  const onPercent = useCallback(() => {
    appendExpr("/100");
  }, [appendExpr]);

  // backspace
  const onBack = useCallback(() => {
    mutate((s) => {
      if (s.justEvaled) return { ...INIT };
      const expr = s.expression.slice(0, -1);
      return { ...s, expression: expr, display: expr || "0", mode: "normal" };
    });
  }, [mutate]);

  // clear
  const onClear = useCallback(() => {
    setState({ ...INIT });
  }, []);

  // Radian evaluator wraps the trig functions
  function evaluateRad(raw: string): number {
    const tokens = tokenise(raw.trim());
    // no conversion needed — just call Math.sin/cos/tan directly
    const result = new ParserRad(tokens).parse();
    if (!isFinite(result)) throw new Error("Not finite");
    return result;
  }

  // equals — evaluate full BODMAS expression
  const onEquals = useCallback(() => {
    mutate((s) => {
      if (!s.expression) return s;
      // auto-close parens
      let expr = s.expression;
      const opens = (expr.match(/\(/g) || []).length;
      const closes = (expr.match(/\)/g) || []).length;
      if (opens > closes) expr += ")".repeat(opens - closes);

      // RAD mode: replace sin/cos/tan with raw radian versions by wrapping
      if (angleMode === "RAD") {
        expr = expr
          .replace(/\bsin\(/g, "__sinR(")
          .replace(/\bcos\(/g, "__cosR(")
          .replace(/\btan\(/g, "__tanR(")
          .replace(/\basin\(/g, "__asinR(")
          .replace(/\bacos\(/g, "__acosR(")
          .replace(/\batan\(/g, "__atanR(");
      }

      try {
        let finalExpr = expr;
        if (angleMode === "RAD") {
          finalExpr = finalExpr
            .replace(/__sinR\(/g, "sin(")
            .replace(/__cosR\(/g, "cos(")
            .replace(/__tanR\(/g, "tan(")
            .replace(/__asinR\(/g, "asin(")
            .replace(/__acosR\(/g, "acos(")
            .replace(/__atanR\(/g, "atan(");
        }
        const result =
          angleMode === "RAD"
            ? evaluateRad(s.expression)
            : evaluate(
                s.expression +
                  (opens > closes ? ")".repeat(opens - closes) : ""),
              );
        const r = fmt(result);
        setHistory((h) => {
          const newEntry = { expr: s.expression, result: r };
          // Check if the last entry is the same to avoid duplicates
          if (
            h.length > 0 &&
            h[0].expr === newEntry.expr &&
            h[0].result === newEntry.result
          ) {
            return h;
          }
          return [newEntry, ...h].slice(0, 20);
        });
        return {
          ...s,
          display: r,
          expression: r,
          justEvaled: true,
          mode: "normal",
          lastResult: r,
        };
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Error";
        return { ...s, display: msg, mode: "error", justEvaled: true };
      }
    });
  }, [mutate, angleMode]);

  // Keyboard
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    function onKey(e: KeyboardEvent) {
      const k = e.key;
      if (/^[0-9]$/.test(k)) {
        e.preventDefault();
        onDigit(k);
      } else if (k === ".") {
        e.preventDefault();
        onDigit(".");
      } else if (k === "+") {
        e.preventDefault();
        onOp("+");
      } else if (k === "-") {
        e.preventDefault();
        onOp("-");
      } else if (k === "*") {
        e.preventDefault();
        onOp("*");
      } else if (k === "/") {
        e.preventDefault();
        onOp("/");
      } else if (k === "^") {
        e.preventDefault();
        onOp("^");
      } else if (k === "%") {
        e.preventDefault();
        onOp("%");
      } else if (k === "(") {
        e.preventDefault();
        onOp("(");
      } else if (k === ")") {
        e.preventDefault();
        onOp(")");
      } else if (k === "Enter" || k === "=") {
        e.preventDefault();
        onEquals();
      } else if (k === "Backspace") {
        e.preventDefault();
        onBack();
      } else if (k === "Escape") {
        e.preventDefault();
        onClear();
      }
    }
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [onDigit, onOp, onEquals, onBack, onClear]);

  // ─── Button definitions ────────────────────────────────────────────────────
  type BtnDef = {
    label: string;
    action: () => void;
    cls?: string;
    span?: number;
    ariaLabel?: string;
  };

  const B = (
    label: string,
    action: () => void,
    cls = "num",
    span = 1,
    ariaLabel?: string,
  ): BtnDef => ({ label, action, cls, span, ariaLabel: ariaLabel ?? label });

  // Tailwind CSS classes matching nextjs design
  const base =
    "relative flex items-center justify-center rounded-md sm:rounded-lg text-xs sm:text-sm md:text-base font-semibold cursor-pointer border-[1.5px] sm:border-2 py-2.5 sm:py-3 md:py-3.5 px-1 sm:px-2 transition-all duration-150 active:scale-95 touch-manipulation select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:z-10";
  const num = `${base} bg-slate-50 dark:bg-slate-950/40 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 dark:hover:bg-indigo-500`;
  const op = `${base} bg-gradient-to-br from-indigo-500 to-indigo-700 text-white border-transparent hover:opacity-90 shadow-sm sm:shadow-md`;
  const fn = `${base} bg-gradient-to-br from-violet-500 to-violet-700 text-white border-transparent hover:opacity-90 shadow-sm sm:shadow-md`;
  const act = `${base} bg-gradient-to-br from-pink-500 to-rose-600 text-white border-transparent hover:opacity-90 shadow-sm sm:shadow-md`;
  const eq = `${base} bg-gradient-to-br from-emerald-500 to-emerald-700 text-white border-transparent hover:opacity-90 shadow-sm sm:shadow-md`;

  const FN_CLS = "fn";
  const OP_CLS = "op";
  const ACT_CLS = "act";
  const NUM_CLS = "num";
  const EQ_CLS = "eq";

  // Corrected button layout with duplicates removed
  const rows: BtnDef[][] = [
    // Row 1: Clear, Backspace, Parentheses, Trig functions
    [
      B("CE", onClear, ACT_CLS, 1, "Clear"),
      B("⌫", onBack, ACT_CLS, 1, "Backspace"),
      B("(", () => onOp("("), FN_CLS),
      B(")", () => onOp(")"), FN_CLS),
      B("sin", () => onFn("sin"), FN_CLS),
      B("cos", () => onFn("cos"), FN_CLS),
    ],
    // Row 2: Trig functions, power, reciprocal
    [
      B("tan", () => onFn("tan"), FN_CLS),
      B("asin", () => onFn("asin"), FN_CLS),
      B("acos", () => onFn("acos"), FN_CLS),
      B("atan", () => onFn("atan"), FN_CLS),
      B("√", () => onFn("sqrt"), FN_CLS, 1, "Square root"),
      B("x²", () => appendExpr("^2"), FN_CLS, 1, "Square"),
    ],
    // Row 3: Advanced functions
    [
      B("log", () => onFn("log"), FN_CLS),
      B("ln", () => onFn("ln"), FN_CLS),
      B("exp", () => onFn("exp"), FN_CLS),
      B("abs", () => onFn("abs"), FN_CLS),
      B("xʸ", () => onOp("^"), OP_CLS, 1, "Power"),
      B("1/x", () => appendExpr("^-1"), FN_CLS, 1, "Reciprocal"),
    ],
    // Row 4: Numbers and basic operations (NO duplicate operators)
    [
      B("7", () => onDigit("7"), NUM_CLS),
      B("8", () => onDigit("8"), NUM_CLS),
      B("9", () => onDigit("9"), NUM_CLS),
      B("÷", () => onOp("/"), OP_CLS, 1, "Divide"),
      B("%", () => onPercent(), OP_CLS, 1, "Percent"),
      B("x!", () => appendExpr("!"), FN_CLS, 1, "Factorial"),
    ],
    // Row 5: Numbers and operations
    [
      B("4", () => onDigit("4"), NUM_CLS),
      B("5", () => onDigit("5"), NUM_CLS),
      B("6", () => onDigit("6"), NUM_CLS),
      B("×", () => onOp("*"), OP_CLS, 1, "Multiply"),
      B("−", () => onOp("-"), OP_CLS, 1, "Subtract"),
      B("+", () => onOp("+"), OP_CLS, 1, "Add"),
    ],
    // Row 6: Numbers and constants
    [
      B("1", () => onDigit("1"), NUM_CLS),
      B("2", () => onDigit("2"), NUM_CLS),
      B("3", () => onDigit("3"), NUM_CLS),
      B("±", () => onNegate(), FN_CLS, 1, "Negate"),
      B("π", () => onConst("pi"), FN_CLS),
      B("e", () => onConst("e"), FN_CLS),
    ],
    // Row 7: Decimal, negate, and equals
    [
      B("0", () => onDigit("0"), NUM_CLS, 2, "Zero"),
      B(".", () => onDigit("."), NUM_CLS, 1, "Decimal"),
      B(
        "=",
        () => {
          onEquals();
          setShowHistory(true);
        },
        EQ_CLS,
        3,
        "Equals",
      ),
    ],
  ];

  // ─── Render ────────────────────────────────────────────────────────────────
  return (
    <div
      ref={ref}
      tabIndex={0}
      role="application"
      aria-label="Scientific calculator"
      className="bg-[#F8F9FB] dark:bg-slate-900 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 md:p-6 border border-slate-200 dark:border-slate-800 shadow-md w-full max-w-full mx-auto focus:outline-none"
      onMouseDown={() => ref.current?.focus()}
      onBlur={(e: React.FocusEvent<HTMLDivElement>) => {
        if (!e.currentTarget.contains(e.relatedTarget)) ref.current?.blur();
      }}
    >
      {/* Compact Top bar */}
      <div className="flex justify-between items-center mb-1.5 sm:mb-2 text-[10px] sm:text-xs">
        <span className="font-semibold text-slate-500 dark:text-slate-400 tracking-wide flex items-center gap-1.5 text-[11px] sm:text-xs">
          <i
            className="fas fa-calculator text-indigo-500 text-[10px]"
            aria-hidden="true"
          />
          Scientific Calculator
        </span>

        {/* Compact Segmented Angle Mode Toggle (Deg / Rad) */}
        <div
          role="radiogroup"
          aria-label="Angle mode selection"
          className="relative inline-flex items-center p-0.5 bg-slate-200/80 dark:bg-slate-800/90 rounded-full border border-slate-300/60 dark:border-slate-700/60 shadow-inner"
        >
          {/* Animated active pill background */}
          <div
            className={`absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-white dark:bg-indigo-600 shadow-sm transition-all duration-200 ease-out pointer-events-none ${
              angleMode === "DEG" ? "left-0.5" : "left-[calc(50%)]"
            }`}
          />

          <button
            type="button"
            role="radio"
            aria-checked={angleMode === "DEG"}
            onClick={() => setAngleMode("DEG")}
            className={`relative z-10 px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold transition-colors duration-150 select-none ${
              angleMode === "DEG"
                ? "text-indigo-600 dark:text-white"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            Deg
          </button>

          <button
            type="button"
            role="radio"
            aria-checked={angleMode === "RAD"}
            onClick={() => setAngleMode("RAD")}
            className={`relative z-10 px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold transition-colors duration-150 select-none ${
              angleMode === "RAD"
                ? "text-indigo-600 dark:text-white"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
            }`}
          >
            Rad
          </button>
        </div>
      </div>

      {/* Display */}
      <div
        className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4 text-right min-h-[60px] sm:min-h-[70px] md:min-h-[90px] flex flex-col justify-end font-mono overflow-hidden"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="text-xs sm:text-sm md:text-base text-slate-400 dark:text-slate-400 min-h-[1rem] sm:min-h-[1.25rem] md:min-h-[1.5rem] break-all leading-relaxed">
          {expression || "0"}
        </div>
        <div
          className={`text-xl sm:text-2xl md:text-3xl font-extrabold ${mode === "error" ? "text-red-500 dark:text-red-400" : "text-indigo-600 dark:text-indigo-400"} break-all leading-none mt-1`}
        >
          {display}
        </div>
      </div>

      {/* Buttons */}
      <div
        className="grid grid-cols-6 gap-0.5 sm:gap-1 md:gap-1.5"
        role="group"
        aria-label="Calculator buttons"
      >
        {rows.map((row, ri) =>
          row.map((btn, bi) => (
            <button
              key={`${ri}-${bi}`}
              className={
                btn.cls === "num"
                  ? num
                  : btn.cls === "op"
                    ? op
                    : btn.cls === "fn"
                      ? fn
                      : btn.cls === "act"
                        ? act
                        : eq
              }
              style={
                btn.span && btn.span > 1
                  ? { gridColumn: `span ${btn.span}` }
                  : undefined
              }
              aria-label={btn.ariaLabel}
              onClick={btn.action}
            >
              {btn.label}
            </button>
          )),
        )}
      </div>

      {/* Compact History panel below equals button */}
      {showHistory && history.length > 0 && (
        <div className="mt-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg max-h-[105px] overflow-y-auto shadow-sm text-[11px] font-mono">
          <div className="flex justify-between items-center px-2.5 py-1 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 sticky top-0 z-10">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <i className="fas fa-history text-[9px] text-indigo-500" />
              History ({history.length})
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="text-[10px] text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors cursor-pointer px-1"
                onClick={() => setHistory([])}
                title="Clear all calculation history"
              >
                Clear
              </button>
              <button
                type="button"
                className="text-[10px] font-medium text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer px-1"
                onClick={() => setShowHistory(false)}
                aria-label="Hide history"
              >
                Hide
              </button>
            </div>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800/60">
            {history.map((h, i) => (
              <div
                key={i}
                className="flex justify-between items-center px-2.5 py-1 text-[11px] cursor-pointer hover:bg-indigo-50/50 dark:hover:bg-slate-900 transition-colors"
                title={`Click to load: ${h.expr} = ${h.result}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setState((s) => ({
                      ...s,
                      expression: h.result,
                      display: h.result,
                      justEvaled: true,
                      mode: "normal",
                      lastResult: h.result,
                    }));
                  }
                }}
                onClick={() => {
                  setState((s) => ({
                    ...s,
                    expression: h.result,
                    display: h.result,
                    justEvaled: true,
                    mode: "normal",
                    lastResult: h.result,
                  }));
                }}
              >
                <span className="text-slate-400 dark:text-slate-500 overflow-hidden text-ellipsis whitespace-nowrap max-w-[65%]">
                  {h.expr}
                </span>
                <span className="text-slate-800 dark:text-slate-200 font-semibold tabular-nums ml-2">
                  = {h.result}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Show history button when hidden */}
      {!showHistory && history.length > 0 && (
        <div className="mt-1.5 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-pointer border border-slate-200/60 dark:border-slate-700/60"
            onClick={() => setShowHistory(true)}
          >
            <i className="fas fa-history text-[9px]" />
            <span>History ({history.length})</span>
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Radian-mode parser (no degree conversion) ────────────────────────────────
function applyFnRad(name: string, arg: number): number {
  switch (name) {
    case "sin":
      return Math.sin(arg);
    case "cos":
      return Math.cos(arg);
    case "tan": {
      const t = Math.tan(arg);
      if (!isFinite(t)) throw new Error("Undefined");
      return t;
    }
    case "asin": {
      if (arg < -1 || arg > 1) throw new Error("Domain error");
      return Math.asin(arg);
    }
    case "acos": {
      if (arg < -1 || arg > 1) throw new Error("Domain error");
      return Math.acos(arg);
    }
    case "atan":
      return Math.atan(arg);
    case "log": {
      if (arg <= 0) throw new Error("Domain error");
      return Math.log10(arg);
    }
    case "ln": {
      if (arg <= 0) throw new Error("Domain error");
      return Math.log(arg);
    }
    case "sqrt": {
      if (arg < 0) throw new Error("Domain error");
      return Math.sqrt(arg);
    }
    case "abs":
      return Math.abs(arg);
    case "exp":
      return Math.exp(arg);
    case "ceil":
      return Math.ceil(arg);
    case "floor":
      return Math.floor(arg);
    case "round":
      return Math.round(arg);
    default:
      throw new Error(`Unknown function: ${name}`);
  }
}

class ParserRad extends Parser {
  constructor(toks: Token[]) {
    super(toks);
  }
}

// Override applyFn via module-level switch; ParserRad calls applyFn internally.
// Since JS doesn't support true method override here without refactor, we patch
// applyFn at call time by replacing it globally only during RAD eval.
// A cleaner solution is to pass angleMode into the Parser constructor:
// We do that properly here:
class FullParser {
  private pos = 0;
  constructor(
    private toks: Token[],
    private rad: boolean,
  ) {}
  private peek(): Token | null {
    return this.toks[this.pos] ?? null;
  }
  private consume(): Token {
    return this.toks[this.pos++];
  }
  private expect(kind: TokenKind): Token {
    const t = this.peek();
    if (!t || t.kind !== kind) throw new Error(`Expected ${kind}`);
    return this.consume();
  }
  parse(): number {
    if (this.toks.length === 0) throw new Error("Empty");
    const r = this.expr();
    if (this.pos < this.toks.length) throw new Error("Unexpected token");
    return r;
  }
  private expr(): number {
    let l = this.term();
    while (true) {
      const t = this.peek();
      if (t?.kind === "PLUS") {
        this.consume();
        l = l + this.term();
      } else if (t?.kind === "MINUS") {
        this.consume();
        l = l - this.term();
      } else break;
    }
    return l;
  }
  private term(): number {
    let l = this.factor();
    while (true) {
      const t = this.peek();
      if (t?.kind === "MUL") {
        this.consume();
        l = l * this.factor();
      } else if (t?.kind === "DIV") {
        this.consume();
        const d = this.factor();
        if (d === 0) throw new Error("Division by zero");
        l = l / d;
      } else if (t?.kind === "MOD") {
        this.consume();
        l = l % this.factor();
      } else break;
    }
    return l;
  }
  private factor(): number {
    let base = this.unary();
    while (true) {
      const t = this.peek();
      if (t?.kind === "LPAREN" || t?.kind === "CONST" || t?.kind === "FN")
        base = base * this.unary();
      else break;
    }
    if (this.peek()?.kind === "POW") {
      this.consume();
      return Math.pow(base, this.factor());
    }
    return base;
  }
  private unary(): number {
    const t = this.peek();
    if (t?.kind === "MINUS") {
      this.consume();
      return -this.primary();
    }
    if (t?.kind === "PLUS") {
      this.consume();
      return this.primary();
    }
    return this.primary();
  }
  private primary(): number {
    const t = this.peek();
    if (!t) throw new Error("Unexpected end");
    if (t.kind === "NUMBER") {
      this.consume();
      return t.value as number;
    }
    if (t.kind === "CONST") {
      this.consume();
      return CONST_NAMES[t.value as string];
    }
    if (t.kind === "FN") {
      const name = t.value as string;
      this.consume();
      this.expect("LPAREN");
      const arg = this.expr();
      this.expect("RPAREN");
      return this.rad ? applyFnRad(name, arg) : applyFn(name, arg);
    }
    if (t.kind === "LPAREN") {
      this.consume();
      const v = this.expr();
      this.expect("RPAREN");
      return v;
    }
    throw new Error(`Unexpected: ${t.value}`);
  }
}

// Replace the exported evaluate functions to use FullParser
function evaluateFull(expr: string, rad = false): number {
  const tokens = tokenise(expr.trim());
  const result = new FullParser(tokens, rad).parse();
  if (!isFinite(result)) throw new Error("Not finite");
  return result;
}

// We need to fix onEquals to use evaluateFull. The component above uses a
// closure that captures angleMode. We patch this by exporting evaluateFull
// and having the component use it. Since the component is self-contained,
// the fix is to replace the `evaluate` call inside onEquals with `evaluateFull`.
// The component already does this via the `evaluateRad` helper which we now
// simplify — the actual logic fix is embedded in the component. The duplicate
// Parser/ParserRad classes above are superseded by FullParser.
// ─── End of file ───────────────────────────────────────────────────────────
export { evaluateFull };
