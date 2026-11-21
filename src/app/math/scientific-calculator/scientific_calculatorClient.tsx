"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────
type AngleMode = "DEG" | "RAD" | "GRAD";
type ShiftState = "none" | "shift" | "alpha";

// ─── Math Utilities ───────────────────────────────────────────────────────────
function factorial(n: number): number {
  if (n < 0 || !Number.isInteger(n) || n > 170) return NaN;
  if (n === 0 || n === 1) return 1;
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

function toRad(v: number, mode: AngleMode): number {
  if (mode === "RAD") return v;
  if (mode === "GRAD") return (v * Math.PI) / 200;
  return (v * Math.PI) / 180;
}

function fromRad(v: number, mode: AngleMode): number {
  if (mode === "RAD") return v;
  if (mode === "GRAD") return (v * 200) / Math.PI;
  return (v * 180) / Math.PI;
}

function fmtNum(n: number): string {
  if (isNaN(n)) return "Math ERROR";
  if (!isFinite(n)) return n > 0 ? "+∞" : "-∞";
  if (n === 0) return "0";
  const abs = Math.abs(n);
  if (abs >= 1e10 || (abs < 1e-9 && abs > 0)) {
    return n
      .toExponential(6)
      .replace("e+", "×10^")
      .replace("e-", "×10^-")
      .replace("e", "×10^");
  }
  const rounded = parseFloat(n.toPrecision(10));
  return rounded.toString();
}

// ─── Expression Parser (correct operator precedence) ─────────────────────────
// Supports: numbers, +, -, *, /, ^, unary minus, parentheses
function parseExpression(expr: string): number {
  const tokens = tokenize(expr);
  let pos = 0;

  function tokenize(s: string): string[] {
    const re = /\s*(\d+\.?\d*(?:[eE][+-]?\d+)?|[+\-*/^()!]|π|℮)\s*/g;
    const toks: string[] = [];
    let m;
    while ((m = re.exec(s)) !== null) toks.push(m[1]);
    return toks;
  }

  function peek() {
    return tokens[pos];
  }
  function consume() {
    return tokens[pos++];
  }

  function parseExpr(): number {
    return parseAddSub();
  }

  function parseAddSub(): number {
    let left = parseMulDiv();
    while (peek() === "+" || peek() === "-") {
      const op = consume();
      const right = parseMulDiv();
      left = op === "+" ? left + right : left - right;
    }
    return left;
  }

  function parseMulDiv(): number {
    let left = parsePow();
    while (peek() === "*" || peek() === "/") {
      const op = consume();
      const right = parsePow();
      if (op === "/") {
        if (right === 0) return NaN;
        left = left / right;
      } else {
        left = left * right;
      }
    }
    return left;
  }

  function parsePow(): number {
    const base = parseUnary();
    if (peek() === "^") {
      consume();
      const exp = parsePow(); // right-associative
      return Math.pow(base, exp);
    }
    return base;
  }

  function parseUnary(): number {
    if (peek() === "-") {
      consume();
      return -parseUnary();
    }
    if (peek() === "+") {
      consume();
      return parseUnary();
    }
    return parseFactorial();
  }

  function parseFactorial(): number {
    let v = parsePrimary();
    while (peek() === "!") {
      consume();
      v = factorial(v);
    }
    return v;
  }

  function parsePrimary(): number {
    const t = peek();
    if (t === undefined) return 0;
    if (t === "π") {
      consume();
      return Math.PI;
    }
    if (t === "℮") {
      consume();
      return Math.E;
    }
    if (t === "(") {
      consume();
      const v = parseExpr();
      if (peek() === ")") consume();
      return v;
    }
    if (/^-?\d/.test(t) || /^\d/.test(t)) {
      consume();
      return parseFloat(t);
    }
    consume();
    return 0;
  }

  try {
    const result = parseExpr();
    return result;
  } catch {
    return NaN;
  }
}

// ─── Button Component (defined outside render) ───────────────────────────────
interface BtnKeyProps {
  id: string;
  top?: string;
  topColor?: string;
  mid: string;
  bot?: string;
  color: string;
  wide?: boolean;
  onClick: () => void;
  onShiftClick?: () => void;
  onAlphaClick?: () => void;
  justPressed: string | null;
  isS: boolean;
  isA: boolean;
  setShift: (s: ShiftState) => void;
}

function BtnKey({
  id,
  top,
  topColor = "#ff9500",
  mid,
  bot,
  color,
  wide = false,
  onClick,
  onShiftClick,
  onAlphaClick,
  justPressed,
  isS,
  isA,
  setShift,
}: BtnKeyProps) {
  const active = justPressed === id;
  const handleClick = () => {
    if (isS && onShiftClick) {
      onShiftClick();
      setShift("none");
    } else if (isA && onAlphaClick) {
      onAlphaClick();
      setShift("none");
    } else onClick();
  };
  return (
    <button
      onClick={handleClick}
      style={{
        gridColumn: wide ? "span 2" : undefined,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 1,
        background: active ? `color-mix(in srgb, ${color} 80%, white)` : color,
        borderRadius: 5,
        padding: "3px 2px 5px",
        border: "none",
        boxShadow: active
          ? `0 1px 0 rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)`
          : `0 3px 0 rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.15)`,
        cursor: "pointer",
        transform: active ? "translateY(2px)" : "none",
        transition: "transform 0.06s, box-shadow 0.06s, background 0.06s",
        minHeight: 40,
        position: "relative",
        userSelect: "none",
      }}
    >
      {/* SHIFT label */}
      {top && (
        <span
          style={{
            fontSize: 8,
            fontFamily: "'DM Mono', monospace",
            fontWeight: 600,
            color: topColor,
            letterSpacing: "0.03em",
            lineHeight: 1,
            marginBottom: 1,
            opacity: isS && onShiftClick ? 1 : 0.75,
            textTransform: "uppercase",
          }}
        >
          {top}
        </span>
      )}
      {/* Main label */}
      <span
        style={{
          fontSize: mid.length > 4 ? 9 : mid.length > 3 ? 10 : 12,
          fontFamily: "'DM Mono', monospace",
          fontWeight: 700,
          color: "#fff",
          letterSpacing: "-0.01em",
          lineHeight: 1,
        }}
      >
        {mid}
      </span>
      {/* ALPHA label */}
      {bot && (
        <span
          style={{
            fontSize: 7,
            fontFamily: "'DM Mono', monospace",
            fontWeight: 500,
            color: "#b8e4ff",
            letterSpacing: "0.04em",
            lineHeight: 1,
            marginTop: 1,
            opacity: isA && onAlphaClick ? 1 : 0.6,
          }}
        >
          {bot}
        </span>
      )}
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ScientificCalculatorPage() {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");
  const [pendingOp, setPendingOp] = useState(""); // the raw expression building
  const [memory, setMemory] = useState(0);
  const [angleMode, setAngleMode] = useState<AngleMode>("DEG");
  const [shift, setShift] = useState<ShiftState>("none");
  const [isResult, setIsResult] = useState(false);
  const [history, setHistory] = useState<{ expr: string; result: string }[]>(
    [],
  );
  const [justPressed, setJustPressed] = useState<string | null>(null);
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const flashBtn = (id: string) => {
    setJustPressed(id);
    if (pressTimer.current) clearTimeout(pressTimer.current);
    pressTimer.current = setTimeout(() => setJustPressed(null), 120);
  };

  // ── Input helpers ──────────────────────────────────────────────────────────
  const appendToDisplay = useCallback(
    (char: string) => {
      setDisplay((prev) => {
        if (prev === "0" && /^[0-9]$/.test(char)) return char;
        if (prev === "Math ERROR" || isResult) {
          setIsResult(false);
          return char;
        }
        return prev + char;
      });
    },
    [isResult],
  );

  const handleNumber = useCallback(
    (n: string) => {
      flashBtn(n);
      appendToDisplay(n);
    },
    [appendToDisplay],
  );
  const handleDot = useCallback(() => {
    flashBtn(".");
    setDisplay((prev) => {
      if (isResult || prev === "Math ERROR") {
        setIsResult(false);
        return "0.";
      }
      if (prev.includes(".")) return prev;
      return prev + ".";
    });
  }, [isResult]);

  // ── Operators (build pending expression) ──────────────────────────────────
  const handleOperator = useCallback(
    (op: string, symbol: string) => {
      flashBtn("op_" + op);
      setPendingOp((prev) => {
        const ops = ["+", "-", "*", "/"];
        if (ops.includes(prev.slice(-1))) return prev.slice(0, -1) + op;
        return prev + display + op;
      });
      setExpression((prev) => {
        const ops = ["+", "-", "×", "÷"];
        if (ops.some((o) => prev.endsWith(o)))
          return prev.slice(0, -1) + symbol;
        return prev + display + symbol;
      });
      setIsResult(true);
    },
    [display],
  );

  // ── Scientific functions ───────────────────────────────────────────────────
  const applyFn = useCallback(
    (func: string) => {
      flashBtn("fn_" + func);
      const v = parseFloat(display);
      let r: number = NaN;
      let exprLabel = "";

      switch (func) {
        // Trig
        case "sin":
          r = Math.sin(toRad(v, angleMode));
          exprLabel = `sin(${v})`;
          break;
        case "cos":
          r = Math.cos(toRad(v, angleMode));
          exprLabel = `cos(${v})`;
          break;
        case "tan": {
          const rad = toRad(v, angleMode);
          const nearPiOver2 = Math.abs(Math.cos(rad)) < 1e-10;
          r = nearPiOver2 ? NaN : Math.tan(rad);
          exprLabel = `tan(${v})`;
          break;
        }
        // Inverse trig
        case "asin":
          r = fromRad(Math.asin(v), angleMode);
          exprLabel = `sin⁻¹(${v})`;
          break;
        case "acos":
          r = fromRad(Math.acos(v), angleMode);
          exprLabel = `cos⁻¹(${v})`;
          break;
        case "atan":
          r = fromRad(Math.atan(v), angleMode);
          exprLabel = `tan⁻¹(${v})`;
          break;
        // Hyperbolic
        case "sinh":
          r = Math.sinh(v);
          exprLabel = `sinh(${v})`;
          break;
        case "cosh":
          r = Math.cosh(v);
          exprLabel = `cosh(${v})`;
          break;
        case "tanh":
          r = Math.tanh(v);
          exprLabel = `tanh(${v})`;
          break;
        case "asinh":
          r = Math.asinh(v);
          exprLabel = `sinh⁻¹(${v})`;
          break;
        case "acosh":
          r = Math.acosh(v);
          exprLabel = `cosh⁻¹(${v})`;
          break;
        case "atanh":
          r = Math.atanh(v);
          exprLabel = `tanh⁻¹(${v})`;
          break;
        // Logarithms
        case "log":
          r = Math.log10(v);
          exprLabel = `log(${v})`;
          break;
        case "ln":
          r = Math.log(v);
          exprLabel = `ln(${v})`;
          break;
        case "log2":
          r = Math.log2(v);
          exprLabel = `log₂(${v})`;
          break;
        case "10x":
          r = Math.pow(10, v);
          exprLabel = `10^(${v})`;
          break;
        case "ex":
          r = Math.exp(v);
          exprLabel = `e^(${v})`;
          break;
        case "2x":
          r = Math.pow(2, v);
          exprLabel = `2^(${v})`;
          break;
        // Power / roots
        case "sq":
          r = v * v;
          exprLabel = `(${v})²`;
          break;
        case "cube":
          r = v * v * v;
          exprLabel = `(${v})³`;
          break;
        case "sqrt":
          r = Math.sqrt(v);
          exprLabel = `√(${v})`;
          break;
        case "cbrt":
          r = Math.cbrt(v);
          exprLabel = `∛(${v})`;
          break;
        case "recip":
          r = 1 / v;
          exprLabel = `1/(${v})`;
          break;
        // Other
        case "abs":
          r = Math.abs(v);
          exprLabel = `|${v}|`;
          break;
        case "fact":
          r = factorial(v);
          exprLabel = `${v}!`;
          break;
        case "pct":
          r = v / 100;
          exprLabel = `${v}%`;
          break;
        case "pi":
          r = Math.PI;
          exprLabel = "π";
          break;
        case "e_const":
          r = Math.E;
          exprLabel = "e";
          break;
        case "rand":
          r = Math.random();
          exprLabel = "Ran#";
          break;
        case "floor":
          r = Math.floor(v);
          exprLabel = `Int(${v})`;
          break;
        case "neg":
          setDisplay((d) => (d.startsWith("-") ? d.slice(1) : "-" + d));
          return;
        default:
          return;
      }

      const res = fmtNum(r);
      setHistory((h) => [{ expr: exprLabel, result: res }, ...h.slice(0, 29)]);
      setDisplay(res);
      setIsResult(true);
      setShift("none");
    },
    [display, angleMode],
  );

  // ── Equals ─────────────────────────────────────────────────────────────────
  const handleEquals = useCallback(() => {
    flashBtn("eq");
    try {
      const fullExpr = pendingOp + display;
      if (!fullExpr || fullExpr === display) {
        // No pending op — just show current
        setIsResult(true);
        return;
      }
      const r = parseExpression(fullExpr);
      const res = fmtNum(r);
      setHistory((h) => [
        { expr: expression + display, result: res },
        ...h.slice(0, 29),
      ]);
      setDisplay(res);
      setPendingOp("");
      setExpression("");
      setIsResult(true);
    } catch {
      setDisplay("Math ERROR");
      setPendingOp("");
      setExpression("");
    }
  }, [display, pendingOp, expression]);

  // ── Actions ────────────────────────────────────────────────────────────────
  const handleAction = useCallback(
    (action: string) => {
      flashBtn("act_" + action);
      switch (action) {
        case "AC":
          setDisplay("0");
          setExpression("");
          setPendingOp("");
          setIsResult(false);
          break;
        case "DEL":
          setDisplay((prev) =>
            prev.length > 1 && prev !== "Math ERROR" ? prev.slice(0, -1) : "0",
          );
          break;
        case "MC":
          setMemory(0);
          break;
        case "MR":
          setDisplay(fmtNum(memory));
          setIsResult(true);
          break;
        case "MS":
          setMemory(parseFloat(display) || 0);
          break;
        case "M+":
          setMemory((m) => m + (parseFloat(display) || 0));
          break;
        case "M-":
          setMemory((m) => m - (parseFloat(display) || 0));
          break;
        case "SHIFT":
          setShift((s) => (s === "shift" ? "none" : "shift"));
          break;
        case "ALPHA":
          setShift((s) => (s === "alpha" ? "none" : "alpha"));
          break;
        case "MODE":
          setAngleMode((m) =>
            m === "DEG" ? "RAD" : m === "RAD" ? "GRAD" : "DEG",
          );
          setShift("none");
          break;
      }
    },
    [display, memory],
  );

  // ── Parentheses ────────────────────────────────────────────────────────────
  const handleParen = useCallback(
    (p: string) => {
      flashBtn("paren_" + p);
      if (p === "(") {
        setPendingOp((prev) => prev + display + "*(");
        setExpression((prev) => prev + display + "×(");
        setDisplay("0");
        setIsResult(false);
      } else {
        setPendingOp((prev) => prev + display + ")");
        setExpression((prev) => prev + display + ")");
        setIsResult(true);
      }
    },
    [display],
  );

  // ── Power operator (xʸ) ──────────────────────────────────────────────────
  const handlePow = useCallback(() => {
    flashBtn("pow");
    setPendingOp((p) => p + display + "^");
    setExpression((p) => p + display + "^");
    setIsResult(true);
  }, [display]);

  // ── Keyboard support ──────────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) return;
      if ("0123456789".includes(e.key)) handleNumber(e.key);
      else if (e.key === ".") handleDot();
      else if (e.key === "+") handleOperator("+", "+");
      else if (e.key === "-") handleOperator("-", "−");
      else if (e.key === "*") handleOperator("*", "×");
      else if (e.key === "/") {
        e.preventDefault();
        handleOperator("/", "÷");
      } else if (e.key === "Enter" || e.key === "=") handleEquals();
      else if (e.key === "Backspace") handleAction("DEL");
      else if (e.key === "Escape") handleAction("AC");
      else if (e.key === "(") handleParen("(");
      else if (e.key === ")") handleParen(")");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [
    handleNumber,
    handleDot,
    handleOperator,
    handleEquals,
    handleAction,
    handleParen,
  ]);

  // ─── Button definitions ───────────────────────────────────────────────────
  // Each key: { id, primary, secondary (SHIFT), alpha, color, action }
  const isS = shift === "shift";
  const isA = shift === "alpha";

  // ─── Color palette (Casio-inspired) ──────────────────────────────────────
  const C = {
    dark: "#2a2d35", // dark function keys
    num: "#3a3d45", // number keys
    op: "#1a1f2e", // operators (dark blue-black)
    orange: "#e07020", // SHIFT key
    blue: "#2255aa", // ALPHA key
    eq: "#cc3322", // equals (red)
    ac: "#553311", // AC (dark amber)
    exec: "#1a4488", // EXE / mode keys
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500;600;700&display=swap');
        .calc-lcd { font-family: 'DM Mono', 'Courier New', monospace; }
        .calc-body {
          background: linear-gradient(160deg, #383c46 0%, #2a2d35 40%, #1e2028 100%);
          border-radius: 14px 14px 22px 22px;
          box-shadow: none;
          position: relative;
        }
        .calc-body::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 14px 14px 22px 22px;
          background: repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(255,255,255,0.008) 2px, rgba(255,255,255,0.008) 4px
          );
          pointer-events: none;
        }
        .lcd-screen {
          background: #b8c8a0;
          border-radius: 4px;
          box-shadow:
            inset 0 2px 6px rgba(0,0,0,0.5),
            inset 0 0 0 1px rgba(0,0,0,0.3),
            0 1px 0 rgba(255,255,255,0.15);
          font-family: 'DM Mono', monospace;
          color: #1a2400;
          position: relative;
          overflow: hidden;
        }
        .lcd-screen::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(160deg, rgba(255,255,255,0.12) 0%, transparent 60%);
          pointer-events: none;
        }
        .lcd-text-main {
          font-size: 26px; font-weight: 700; text-align: right;
          line-height: 1; letter-spacing: 0.02em;
          color: #1a2800;
          text-shadow: 0 0 0px #1a2800;
        }
        .lcd-text-expr {
          font-size: 11px; text-align: right; opacity: 0.65;
          min-height: 14px; letter-spacing: 0.02em;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
          direction: rtl; unicode-bidi: bidi-override;
        }
        .lcd-indicators {
          display: flex; gap: 5px; font-size: 9px; font-weight: 700;
          letter-spacing: 0.06em; opacity: 0.75; margin-bottom: 4px;
        }
        .lcd-indicator { opacity: 0.3; }
        .lcd-indicator.on { opacity: 1; }
        .btn-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 5px;
        }
        .hist-entry:hover { background: rgba(255,255,255,0.07) !important; }
      `}</style>

      <div
        className="mx-auto px-4 sm:px-6 py-6 sm:py-8 pb-16 sm:pb-20"
        style={{
          maxWidth: 860,
          fontFamily: "'DM Mono', monospace",
        }}
      >

        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* ── CALCULATOR BODY ── */}
          <div
            className="calc-body"
            style={{ flex: "0 0 auto", width: "100%", maxWidth: 340, padding: "16px 14px 20px" }}
          >
            {/* Brand strip */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#c8d4e8",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  fx-991
                </span>
                <span
                  style={{
                    fontSize: 9,
                    color: "#6680aa",
                    marginLeft: 4,
                    letterSpacing: "0.1em",
                  }}
                >
                  CLASSWIZ
                </span>
              </div>
              <div
                style={{
                  fontSize: 9,
                  color: "#445566",
                  letterSpacing: "0.08em",
                }}
              >
                NATURAL-V.P.A.M.
              </div>
            </div>

            {/* LCD Screen */}
            <div
              className="lcd-screen"
              style={{ padding: "10px 12px 12px", marginBottom: 12 }}
            >
              {/* Status indicators */}
              <div className="lcd-indicators calc-lcd">
                <span
                  className={`lcd-indicator ${shift === "shift" ? "on" : ""}`}
                >
                  SHIFT
                </span>
                <span
                  className={`lcd-indicator ${shift === "alpha" ? "on" : ""}`}
                >
                  ALPHA
                </span>
                <span className="lcd-indicator on">{angleMode}</span>
                <span className={`lcd-indicator ${memory !== 0 ? "on" : ""}`}>
                  M
                </span>
                <span
                  className="lcd-indicator"
                  style={{ marginLeft: "auto", opacity: 0.4 }}
                >
                  ◀ ▶
                </span>
              </div>
              {/* Expression line */}
              <div
                className="lcd-text-expr calc-lcd"
                style={{ direction: "ltr", overflow: "hidden" }}
              >
                {expression + (isResult ? "" : expression ? display : "")}&nbsp;
              </div>
              {/* Main display */}
              <div
                className="lcd-text-main calc-lcd"
                style={{
                  fontSize:
                    display.length > 14 ? 16 : display.length > 10 ? 20 : 26,
                  color: display.includes("ERROR") ? "#aa2200" : "#1a2800",
                }}
              >
                {isResult || expression ? display : display}
              </div>
            </div>

            {/* ── BUTTON GRID ── */}
            <div className="btn-grid">
              {/* Row 1: SHIFT ALPHA MODE DEL AC */}
              <BtnKey
                id="SHIFT"
                mid="SHIFT"
                color={C.orange}
                onClick={() => handleAction("SHIFT")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="ALPHA"
                mid="ALPHA"
                color={C.blue}
                onClick={() => handleAction("ALPHA")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="MODE"
                top="NORM"
                mid="MODE"
                color={C.exec}
                onClick={() => handleAction("MODE")}
                onShiftClick={() => {
                  setAngleMode("DEG");
                  setShift("none");
                }}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="ACT_DEL"
                top="INS"
                mid="DEL"
                color={C.ac}
                onClick={() => handleAction("DEL")}
                onShiftClick={() => {
                  setDisplay((d) => d + "");
                }}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="ACT_AC"
                mid="AC"
                color={C.eq}
                onClick={() => handleAction("AC")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />

              {/* Row 2: x^-1  sin  cos  tan  ← (memory row on shift) */}
              <BtnKey
                id="fn_recip"
                top="FRAC"
                mid="x⁻¹"
                color={C.dark}
                onClick={() => applyFn("recip")}
                onShiftClick={() => {
                  /* fraction placeholder */
                }}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="fn_sin"
                top="sin⁻¹"
                mid="sin"
                bot="A"
                color={C.dark}
                onClick={() => applyFn("sin")}
                onShiftClick={() => applyFn("asin")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="fn_cos"
                top="cos⁻¹"
                mid="cos"
                bot="B"
                color={C.dark}
                onClick={() => applyFn("cos")}
                onShiftClick={() => applyFn("acos")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="fn_tan"
                top="tan⁻¹"
                mid="tan"
                bot="C"
                color={C.dark}
                onClick={() => applyFn("tan")}
                onShiftClick={() => applyFn("atan")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="fn_ms"
                top="RCL"
                mid="STO"
                color={C.exec}
                onClick={() => handleAction("MS")}
                onShiftClick={() => handleAction("MR")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />

              {/* Row 3: log  ln  (  )  % */}
              <BtnKey
                id="fn_log"
                top="10ˣ"
                mid="log"
                bot="D"
                color={C.dark}
                onClick={() => applyFn("log")}
                onShiftClick={() => applyFn("10x")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="fn_ln"
                top="eˣ"
                mid="ln"
                bot="E"
                color={C.dark}
                onClick={() => applyFn("ln")}
                onShiftClick={() => applyFn("ex")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="paren_("
                top="ALOG"
                mid="("
                bot="F"
                color={C.dark}
                onClick={() => handleParen("(")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="paren_)"
                top="HYPER"
                mid=")"
                color={C.dark}
                onClick={() => handleParen(")")}
                onShiftClick={() => {
                  applyFn("sinh"); // cycle hyp
                }}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="fn_fact"
                top="nPr"
                mid="n!"
                bot="G"
                color={C.dark}
                onClick={() => applyFn("fact")}
                onShiftClick={() => {
                  const v = parseFloat(display);
                  const r2 = parseFloat(
                    pendingOp.replace(/[^0-9.]/g, "") || "0",
                  );
                  setDisplay(fmtNum(factorial(r2) / factorial(r2 - v)));
                  setIsResult(true);
                }}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />

              {/* Row 4: √  x²  ^  SP  M+ */}
              <BtnKey
                id="fn_sqrt"
                top="∛"
                mid="√"
                bot="H"
                color={C.dark}
                onClick={() => applyFn("sqrt")}
                onShiftClick={() => applyFn("cbrt")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="fn_sq"
                top="x³"
                mid="x²"
                bot="I"
                color={C.dark}
                onClick={() => applyFn("sq")}
                onShiftClick={() => applyFn("cube")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="pow"
                top="ˣ√y"
                mid="xʸ"
                bot="J"
                color={C.dark}
                onClick={handlePow}
                onShiftClick={() => {
                  // ˣ√y: opposite
                  setPendingOp((p) => p + `1/${display}` + "^");
                  setExpression((p) => p + `1/${display}` + "^");
                  setIsResult(true);
                }}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="fn_neg"
                top="%"
                mid="+/−"
                color={C.dark}
                onClick={() => applyFn("neg")}
                onShiftClick={() => applyFn("pct")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="act_mplus"
                top="M−"
                mid="M+"
                color={C.exec}
                onClick={() => handleAction("M+")}
                onShiftClick={() => handleAction("M-")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />

              {/* Row 5: 7 8 9 DEL (ops) */}
              <BtnKey
                id="7"
                mid="7"
                color={C.num}
                onClick={() => handleNumber("7")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="8"
                mid="8"
                color={C.num}
                onClick={() => handleNumber("8")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="9"
                mid="9"
                color={C.num}
                onClick={() => handleNumber("9")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="op_/"
                top="abs"
                mid="÷"
                color={C.op}
                onClick={() => handleOperator("/", "÷")}
                onShiftClick={() => applyFn("abs")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="fn_sqrt2"
                top="log₂"
                mid="sinh"
                color={C.dark}
                onClick={() => applyFn("sinh")}
                onShiftClick={() => applyFn("log2")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />

              {/* Row 6: 4 5 6 */}
              <BtnKey
                id="4"
                mid="4"
                color={C.num}
                onClick={() => handleNumber("4")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="5"
                mid="5"
                color={C.num}
                onClick={() => handleNumber("5")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="6"
                mid="6"
                color={C.num}
                onClick={() => handleNumber("6")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="op_*"
                top="floor"
                mid="×"
                color={C.op}
                onClick={() => handleOperator("*", "×")}
                onShiftClick={() => applyFn("floor")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="fn_cosh"
                top="2ˣ"
                mid="cosh"
                color={C.dark}
                onClick={() => applyFn("cosh")}
                onShiftClick={() => applyFn("2x")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />

              {/* Row 7: 1 2 3 */}
              <BtnKey
                id="1"
                mid="1"
                color={C.num}
                onClick={() => handleNumber("1")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="2"
                mid="2"
                color={C.num}
                onClick={() => handleNumber("2")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="3"
                mid="3"
                color={C.num}
                onClick={() => handleNumber("3")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="op_-"
                top="asinh"
                mid="−"
                color={C.op}
                onClick={() => handleOperator("-", "−")}
                onShiftClick={() => applyFn("asinh")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="fn_tanh"
                top="acosh"
                mid="tanh"
                color={C.dark}
                onClick={() => applyFn("tanh")}
                onShiftClick={() => applyFn("acosh")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />

              {/* Row 8: 0 . ×10 + = */}
              <BtnKey
                id="0"
                mid="0"
                color={C.num}
                onClick={() => handleNumber("0")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="."
                top="RAND"
                mid="."
                color={C.num}
                onClick={handleDot}
                onShiftClick={() => applyFn("rand")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="exp_e"
                top="atanh"
                mid="×10ˣ"
                color={C.dark}
                onClick={() => {
                  setDisplay((d) => d + "e");
                  setIsResult(false);
                }}
                onShiftClick={() => applyFn("atanh")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              <BtnKey
                id="op_+"
                top="π"
                mid="+"
                color={C.op}
                onClick={() => handleOperator("+", "+")}
                onShiftClick={() => applyFn("pi")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
              {/* = button (EXE) */}
              <BtnKey
                id="eq"
                top="e"
                mid="EXE"
                color={C.eq}
                onClick={handleEquals}
                onShiftClick={() => applyFn("e_const")}
                justPressed={justPressed}
                isS={isS}
                isA={isA}
                setShift={setShift}
              />
            </div>

            {/* Memory display */}
            {memory !== 0 && (
              <div
                style={{
                  marginTop: 8,
                  textAlign: "center",
                  fontSize: 10,
                  color: "#8899aa",
                  letterSpacing: "0.06em",
                }}
              >
                M = {fmtNum(memory)}
              </div>
            )}
          </div>

          {/* ── HISTORY PANEL ── */}
          <div className="flex-1 min-w-[180px] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden flex flex-col max-h-[560px] shadow-lg border border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-100 tracking-wider uppercase">
                History
              </span>
              {history.length > 0 && (
                <button
                  onClick={() => setHistory([])}
                  className="bg-transparent border-none text-slate-500 dark:text-slate-400 cursor-pointer text-xs font-['DM_Mono',monospace] hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                  clear
                </button>
              )}
            </div>

            <div className="flex-1 overflow-y-auto p-2">
              {history.length === 0 ? (
                <p className="text-xs text-slate-500 dark:text-slate-400 text-center py-6 m-0">
                  No calculations yet
                </p>
              ) : (
                history.map((h, i) => (
                  <div
                    key={i}
                    className="hist-entry p-2 rounded-lg cursor-pointer mb-1 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                    onClick={() => {
                      setDisplay(h.result);
                      setIsResult(true);
                    }}
                  >
                    <div className="text-[9px] text-slate-500 dark:text-slate-400 font-['DM_Mono',monospace] mb-0.5">
                      {h.expr}
                    </div>
                    <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 font-['DM_Mono',monospace]">
                      = {h.result}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Keyboard shortcuts */}
        <div className="mt-4 bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-lg border border-slate-200 dark:border-slate-800">
          <div className="text-xs font-semibold text-slate-800 dark:text-slate-100 tracking-wider uppercase mb-3">
            Keyboard Shortcuts
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-6">
            {[
              ["0–9", "Input"],
              [".", "Decimal"],
              ["+−×/", "Operators"],
              ["Enter", "EXE"],
              ["Backspace", "DEL"],
              ["Esc", "AC"],
              ["( )", "Parentheses"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center gap-2">
                <kbd className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded px-2 py-0.5 text-[10px] text-indigo-600 dark:text-indigo-400 font-['DM_Mono',monospace]">
                  {k}
                </kbd>
                <span className="text-xs text-slate-800 dark:text-slate-400">
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* SHIFT/ALPHA hint */}
        <div className="mt-3 bg-white dark:bg-slate-900 rounded-2xl p-4 shadow-lg border border-slate-200 dark:border-slate-800 flex flex-wrap gap-4">
          <div className="text-xs font-semibold text-slate-800 dark:text-slate-100 tracking-wider uppercase w-full mb-1">
            Key Modes
          </div>
          <div className="text-xs text-slate-800 dark:text-slate-400">
            <span className="text-orange-600 dark:text-orange-400 font-bold">
              SHIFT
            </span>{" "}
            · Press then key to access orange functions (e.g. sin⁻¹, 10ˣ, ∛)
          </div>
          <div className="text-xs text-slate-800 dark:text-slate-400">
            <span className="text-blue-600 dark:text-blue-400 font-bold bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">
              ALPHA
            </span>{" "}
            · Press then key to access blue-label constants
          </div>
          <div className="text-xs text-slate-800 dark:text-slate-400">
            <span className="font-bold text-slate-500 dark:text-slate-100">
              MODE
            </span>{" "}
            · Cycles angle unit: DEG → RAD → GRAD
          </div>
        </div>

        <div style={{ marginTop: 16, textAlign: "center" }}>
          <Link
            href="/math"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              fontWeight: 600,
              color: "#6b60c0",
              textDecoration: "none",
            }}
          >
            ← All Math Calculators
          </Link>
        </div>
      </div>
    </>
  );
}
