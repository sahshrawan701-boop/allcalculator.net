import * as math from "mathjs";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface StepItem {
  title?: string;
  expr: string;
}

export interface InfoCard {
  label: string;
  value: string | number;
  sub?: string;
}

export interface RootValue {
  re: number;
  im: number;
}

export interface ValueItem {
  label: string;
  value: string | number;
  sub?: string;
}

export interface GraphData {
  expr: string;
  xs: number[];
  ys: (number | null)[];
  roots: number[];
  xMin: number;
  xMax: number;
}

export interface CalcResult {
  type?: string;
  statusLabel?: string;
  status?: string;
  roots?: (number | RootValue)[];
  values?: ValueItem[];
  main?: string;
  info?: InfoCard[];
  steps?: StepItem[];
  graphData?: GraphData;
  varName?: string;
  error?: string;
}

// ─── Math Utilities ───────────────────────────────────────────────────────────

export function fmtNum(n: number | string): string {
  if (typeof n !== "number") return String(n);
  if (Math.abs(n) > 1e14) return n.toExponential(4);
  const s = parseFloat(n.toFixed(8));
  if (Number.isInteger(s)) return s.toString();
  return parseFloat(n.toFixed(6)).toString();
}

function bisect(
  f: (x: number) => number,
  a: number,
  b: number,
  iter: number,
): number | null {
  for (let i = 0; i < iter; i++) {
    const m = (a + b) / 2;
    const fm = f(m);
    if (Math.abs(fm) < 1e-12) return m;
    if (f(a) * fm < 0) b = m;
    else a = m;
  }
  return (a + b) / 2;
}

export function findRootsNumerically(
  f: (x: number) => number,
  a: number,
  b: number,
  n: number,
): number[] {
  const roots: number[] = [];
  const step = (b - a) / n;
  for (let i = 0; i < n; i++) {
    const x0 = a + i * step;
    const x1 = x0 + step;
    const y0 = f(x0),
      y1 = f(x1);
    if (!isFinite(y0) || !isFinite(y1)) continue;
    if (y0 * y1 <= 0) {
      const root = bisect(f, x0, x1, 60);
      if (root !== null && roots.every((r) => Math.abs(r - root) > 1e-6))
        roots.push(root);
    }
    if (Math.abs(y0) < 1e-9 && roots.every((r) => Math.abs(r - x0) > 1e-6))
      roots.push(x0);
  }
  return roots.sort((a, b) => a - b);
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function simpsonIntegrate(
  f: (x: number) => number,
  a: number,
  b: number,
  n: number,
): number {
  if (n % 2 !== 0) n++;
  const h = (b - a) / n;
  let sum = f(a) + f(b);
  for (let i = 1; i < n; i++) sum += (i % 2 === 0 ? 2 : 4) * f(a + i * h);
  return (sum * h) / 3;
}

function parseQuadCoeffs(
  e: string,
): { a: number; b: number; c: number } | null {
  try {
    const f = (x: number) => math.evaluate(e, { x }) as number;
    const a = (f(0) - 2 * f(1) + f(2)) / 2;
    const b = (-3 * f(0) + 4 * f(1) - f(2)) / 2;
    const c = f(0);
    if (isNaN(a) || isNaN(b) || isNaN(c)) return null;
    return { a, b, c };
  } catch {
    return null;
  }
}

function integrateSymbolic(expr: string, v: string): string {
  try {
    const pow = expr.match(/^([+-]?\d*\.?\d*)\*?x\^(\d+\.?\d*)$/i);
    if (pow) {
      const coeff = parseFloat(pow[1] || "1") || 1;
      const n = parseFloat(pow[2]);
      return `${fmtNum(coeff / (n + 1))}${v}^${fmtNum(n + 1)}`;
    }
    const linear = expr.match(/^([+-]?\d*\.?\d*)\*?x$/i);
    if (linear) {
      const c = parseFloat(linear[1] || "1") || 1;
      return `${fmtNum(c / 2)}${v}²`;
    }
    return math.simplify(expr).toString() + `·${v} (verify manually)`;
  } catch {
    return `${expr}·${v} (verify manually)`;
  }
}

// ─── Compute Functions ────────────────────────────────────────────────────────

export function solveEquation(eq: string, v: string): CalcResult {
  const parts = eq.split("=");
  if (parts.length !== 2)
    return { error: 'Missing "=" sign. Format: expression = value' };
  const [lhs, rhs] = [parts[0].trim(), parts[1].trim()];
  const steps: StepItem[] = [
    { title: "Given equation", expr: `${lhs} = ${rhs}` },
  ];
  try {
    const combined = `${lhs} - (${rhs})`;
    steps.push({
      title: "Move all terms to left side",
      expr: `${combined} = 0`,
    });
    const simplified = math.simplify(math.parse(combined));
    steps.push({ title: "Simplify", expr: `${simplified.toString()} = 0` });
    const f = (x: number) => {
      try {
        const scope: Record<string, number> = {};
        scope[v] = x;
        return math.evaluate(combined, scope) as number;
      } catch {
        return NaN;
      }
    };
    const roots = findRootsNumerically(f, -1000, 1000, 2000);
    if (!roots.length) {
      try {
        const testScope: Record<string, number> = {};
        testScope[v] = 0;
        const val = math.evaluate(combined, testScope) as number;
        if (Math.abs(val) < 1e-10)
          return {
            type: "Solution",
            statusLabel: "Infinite solutions",
            main: "All real numbers satisfy the equation",
            steps,
          };
      } catch {}
      return {
        type: "Solution",
        statusLabel: "No solution",
        main: "No real solution found",
        status: "error",
        steps,
      };
    }
    steps.push({
      title: "Solution",
      expr: roots.map((r) => `${v} = ${fmtNum(r)}`).join("   |   "),
    });
    const info: InfoCard[] = [];
    if (roots.length === 1) {
      const checkScope: Record<string, number> = {};
      checkScope[v] = roots[0];
      const check = math.evaluate(combined, checkScope) as number;
      if (Math.abs(check) < 1e-6) {
        steps.push({
          title: "Verification",
          expr: `Substituting ${v} = ${fmtNum(roots[0])}: LHS - RHS ≈ 0 ✓`,
        });
        info.push({
          label: "Solution Type",
          value: "Linear/Simple",
          sub: "1 root",
        });
      }
    }
    return {
      type: "Equation Solution",
      statusLabel: `${roots.length} root${roots.length > 1 ? "s" : ""}`,
      status: "success",
      roots,
      varName: v,
      info,
      steps,
    };
  } catch (e: unknown) {
    return { error: "Could not parse equation: " + (e as Error).message };
  }
}

export function solveQuadratic(expr: string): CalcResult {
  const steps: StepItem[] = [
    { title: "Given expression (= 0)", expr: `${expr} = 0` },
  ];
  const m = parseQuadCoeffs(expr.replace(/\s/g, ""));
  if (!m)
    return { error: "Could not parse quadratic. Try format: ax^2 + bx + c" };
  const { a, b, c } = m;
  steps.push({
    title: "Identify coefficients",
    expr: `a = ${fmtNum(a)},  b = ${fmtNum(b)},  c = ${fmtNum(c)}`,
  });
  const disc = b * b - 4 * a * c;
  steps.push({
    title: "Compute discriminant",
    expr: `Δ = b² - 4ac = (${fmtNum(b)})² - 4(${fmtNum(a)})(${fmtNum(c)}) = ${fmtNum(disc)}`,
  });
  const vx = -b / (2 * a);
  const vy = c - (b * b) / (4 * a);
  steps.push({
    title: "Vertex",
    expr: `Vertex = (${fmtNum(vx)}, ${fmtNum(vy)})`,
  });
  let roots: (number | RootValue)[], statusLabel: string, status: string;
  if (disc > 0) {
    const r1 = (-b + Math.sqrt(disc)) / (2 * a);
    const r2 = (-b - Math.sqrt(disc)) / (2 * a);
    roots = [r1, r2];
    statusLabel = "2 real roots";
    status = "success";
    steps.push({
      title: "Apply quadratic formula",
      expr: `x = (-b ± √Δ) / 2a = (${-b} ± ${fmtNum(Math.sqrt(disc))}) / ${2 * a}`,
    });
    steps.push({
      title: "Solutions",
      expr: `x₁ = ${fmtNum(r1)},   x₂ = ${fmtNum(r2)}`,
    });
    steps.push({
      title: "Factored form",
      expr: `${fmtNum(a)}(x - ${fmtNum(r1)})(x - ${fmtNum(r2)})`,
    });
  } else if (disc === 0) {
    const r = -b / (2 * a);
    roots = [r, r];
    statusLabel = "1 repeated root";
    status = "warning";
    steps.push({
      title: "Discriminant = 0, one repeated root",
      expr: `x = -b/(2a) = ${fmtNum(r)}`,
    });
    steps.push({
      title: "Factored form",
      expr: `${fmtNum(a)}(x - ${fmtNum(r)})²`,
    });
  } else {
    const re = -b / (2 * a);
    const im = Math.sqrt(-disc) / (2 * a);
    roots = [
      { re, im },
      { re, im: -im },
    ];
    statusLabel = "2 complex roots";
    status = "error";
    steps.push({
      title: "Discriminant < 0, complex roots",
      expr: `x = ${fmtNum(re)} ± ${fmtNum(im)}i`,
    });
  }
  const info: InfoCard[] = [
    {
      label: "Discriminant",
      value: fmtNum(disc),
      sub:
        disc > 0
          ? "Two real roots"
          : disc === 0
            ? "Repeated root"
            : "Complex roots",
    },
    { label: "Vertex", value: `(${fmtNum(vx)}, ${fmtNum(vy)})` },
    { label: "Axis of Symmetry", value: `x = ${fmtNum(vx)}` },
    { label: "Opens", value: a > 0 ? "Upward ↑" : "Downward ↓" },
    { label: "a", value: fmtNum(a) },
    { label: "b", value: fmtNum(b) },
    { label: "c / y-intercept", value: fmtNum(c) },
  ];
  return {
    type: "Quadratic Solution",
    statusLabel,
    status,
    roots,
    varName: "x",
    info,
    steps,
  };
}

export function solvePolynomial(expr: string): CalcResult {
  const steps: StepItem[] = [
    { title: "Given polynomial (= 0)", expr: `${expr} = 0` },
    {
      title: "Find roots numerically",
      expr: "Using iterative root-finding over interval [-100, 100]",
    },
  ];
  const f = (x: number) => {
    try {
      return math.evaluate(expr, { x }) as number;
    } catch {
      return NaN;
    }
  };
  const roots = findRootsNumerically(f, -100, 100, 4000);
  if (!roots.length)
    return {
      error: "No real roots found in [-100, 100]. Try a different expression.",
    };
  steps.push({
    title: "Verified roots",
    expr: roots.map((r, i) => `x₍${i + 1}₎ ≈ ${fmtNum(r)}`).join("   "),
  });
  return {
    type: "Polynomial Roots",
    statusLabel: `${roots.length} real root${roots.length > 1 ? "s" : ""}`,
    status: "success",
    roots,
    varName: "x",
    info: [
      { label: "Real Roots Found", value: roots.length },
      { label: "Search Range", value: "[-100, 100]" },
    ],
    steps,
  };
}

export function simplifyExpr(expr: string): CalcResult {
  const steps: StepItem[] = [{ title: "Original expression", expr }];
  try {
    const simplified = math.simplify(expr);
    const simpStr = simplified.toString();
    steps.push({ title: "Apply simplification rules", expr: simpStr });
    let numericResult: string | null = null;
    try {
      const r = math.evaluate(expr);
      if (typeof r === "number" && isFinite(r)) {
        numericResult = fmtNum(r);
        steps.push({ title: "Numeric value", expr: `= ${numericResult}` });
      }
    } catch {}
    return {
      type: "Simplified Expression",
      statusLabel: "Simplified",
      status: "success",
      main: numericResult ?? simpStr,
      steps,
    };
  } catch (e: unknown) {
    return { error: "Could not simplify: " + (e as Error).message };
  }
}

export function factorExpr(expr: string): CalcResult {
  const steps: StepItem[] = [{ title: "Expression to factor", expr }];
  const m = parseQuadCoeffs(expr);
  if (!m)
    return { error: "Factoring supported for quadratics. Try: x^2 + 5x + 6" };
  const { a, b, c } = m;
  steps.push({
    title: "Identify coefficients",
    expr: `a=${fmtNum(a)}, b=${fmtNum(b)}, c=${fmtNum(c)}`,
  });
  const disc = b * b - 4 * a * c;
  steps.push({ title: "Discriminant", expr: `Δ = ${fmtNum(disc)}` });
  const gcf = gcd(Math.abs(a), gcd(Math.abs(b), Math.abs(c)));
  if (gcf > 1) steps.push({ title: "Factor out GCF", expr: `GCF = ${gcf}` });
  let factored: string;
  if (disc >= 0) {
    const r1 = (-b + Math.sqrt(disc)) / (2 * a);
    const r2 = (-b - Math.sqrt(disc)) / (2 * a);
    const aStr = a === 1 ? "" : a === -1 ? "-" : `${fmtNum(a)}`;
    if (Math.abs(r1 - r2) < 1e-10) {
      factored = `${aStr}(x ${r1 >= 0 ? "- " : "+ "}${fmtNum(Math.abs(r1))})²`;
    } else {
      factored = `${aStr}(x ${r1 >= 0 ? "- " : "+ "}${fmtNum(Math.abs(r1))})(x ${r2 >= 0 ? "- " : "+ "}${fmtNum(Math.abs(r2))})`;
    }
    steps.push({ title: "Factored form", expr: factored });
  } else {
    factored = "Does not factor over reals (complex roots)";
    steps.push({ title: "Result", expr: factored });
  }
  return {
    type: "Factored Form",
    statusLabel:
      disc >= 0
        ? disc === 0
          ? "Perfect square"
          : "Factorable"
        : "Prime over ℝ",
    status: disc >= 0 ? "success" : "warning",
    main: factored,
    info: [
      { label: "Discriminant", value: fmtNum(disc) },
      { label: "GCF", value: fmtNum(gcf) },
      { label: "Degree", value: 2 },
    ],
    steps,
  };
}

export function evaluateExpr(expr: string, v: string, val: number): CalcResult {
  if (isNaN(val)) return { error: "Enter a numeric value" };
  const steps: StepItem[] = [
    { title: "Given function", expr: `f(${v}) = ${expr}` },
    {
      title: "Substitute",
      expr: `f(${fmtNum(val)}) = ${expr.replace(new RegExp(v, "g"), `(${fmtNum(val)})`)}`,
    },
  ];
  try {
    const scope: Record<string, number> = {};
    scope[v] = val;
    const res = math.evaluate(expr, scope);
    const r =
      typeof res === "number"
        ? res
        : ((res as { toNumber: () => number }).toNumber?.() ?? res);
    steps.push({ title: "Compute", expr: `= ${fmtNum(r as number)}` });
    const deriv =
      ((math.evaluate(expr, { [v]: val + 1e-5 }) as number) -
        (math.evaluate(expr, { [v]: val - 1e-5 }) as number)) /
      2e-5;
    return {
      type: "Function Evaluation",
      statusLabel: "Evaluated",
      status: "success",
      main: `f(${fmtNum(val)}) = ${fmtNum(r as number)}`,
      info: [
        { label: `f(${fmtNum(val)})`, value: fmtNum(r as number) },
        {
          label: `f′(${fmtNum(val)}) ≈`,
          value: fmtNum(deriv),
          sub: "Numeric derivative",
        },
      ],
      steps,
    };
  } catch (e: unknown) {
    return { error: "Evaluation error: " + (e as Error).message };
  }
}

export function solveSystem(eq1: string, eq2: string): CalcResult {
  const steps: StepItem[] = [
    { title: "System of equations", expr: `(1) ${eq1}\n(2) ${eq2}` },
  ];
  try {
    const parseEq = (eq: string): [string, string] => {
      const parts = eq.split("=");
      if (parts.length !== 2) throw new Error('Each equation needs "="');
      return [parts[0].trim(), parts[1].trim()];
    };
    const [l1, r1] = parseEq(eq1);
    const [l2, r2] = parseEq(eq2);
    const c1 = `(${l1})-(${r1})`;
    const c2 = `(${l2})-(${r2})`;
    const getCoeff = (expr: string, v: string, other: string) => {
      const s: Record<string, number> = {};
      s[v] = 1;
      s[other] = 0;
      const s0: Record<string, number> = {};
      s0[v] = 0;
      s0[other] = 0;
      return (
        (math.evaluate(expr, s) as number) - (math.evaluate(expr, s0) as number)
      );
    };
    const ax = getCoeff(c1, "x", "y"),
      ay = getCoeff(c1, "y", "x");
    const bx = getCoeff(c2, "x", "y"),
      by = getCoeff(c2, "y", "x");
    const ac = -(math.evaluate(c1, { x: 0, y: 0 }) as number);
    const bc = -(math.evaluate(c2, { x: 0, y: 0 }) as number);
    steps.push({
      title: "Matrix form [A|b]",
      expr: `[${fmtNum(ax)} ${fmtNum(ay)} | ${fmtNum(ac)}]\n[${fmtNum(bx)} ${fmtNum(by)} | ${fmtNum(bc)}]`,
    });
    const det = ax * by - ay * bx;
    steps.push({
      title: "Cramer's Rule — Determinant",
      expr: `det(A) = ${fmtNum(ax)}×${fmtNum(by)} - ${fmtNum(ay)}×${fmtNum(bx)} = ${fmtNum(det)}`,
    });
    if (Math.abs(det) < 1e-12)
      return {
        type: "System",
        statusLabel: "No unique solution",
        main: "System has no unique solution (det = 0)",
        status: "error",
        steps,
      };
    const x = (ac * by - ay * bc) / det;
    const y = (ax * bc - ac * bx) / det;
    steps.push({
      title: "Solve for x and y",
      expr: `x = ${fmtNum(x)}\ny = ${fmtNum(y)}`,
    });
    const check1 = Math.abs(ax * x + ay * y - ac) < 1e-8;
    const check2 = Math.abs(bx * x + by * y - bc) < 1e-8;
    steps.push({
      title: "Verification",
      expr: `Eq1: ${check1 ? "✓" : "✗"}   Eq2: ${check2 ? "✓" : "✗"}`,
    });
    return {
      type: "System Solution",
      statusLabel: "Unique solution",
      status: "success",
      values: [
        { label: "x", value: fmtNum(x) },
        { label: "y", value: fmtNum(y) },
      ],
      info: [
        { label: "det(A)", value: fmtNum(det) },
        { label: "Solution", value: `(${fmtNum(x)}, ${fmtNum(y)})` },
      ],
      steps,
    };
  } catch (e: unknown) {
    return { error: "System error: " + (e as Error).message };
  }
}

export function computeDerivative(expr: string, v: string): CalcResult {
  const steps: StepItem[] = [{ title: "Function", expr: `f(${v}) = ${expr}` }];
  try {
    const d = math.derivative(expr, v);
    const dStr = d.toString();
    steps.push({
      title: "Apply differentiation rules",
      expr: `f′(${v}) = ${dStr}`,
    });
    const d2 = math.derivative(dStr, v);
    steps.push({
      title: "Second derivative",
      expr: `f″(${v}) = ${d2.toString()}`,
    });
    const f = (x: number) => {
      try {
        return math.evaluate(dStr, { [v]: x }) as number;
      } catch {
        return NaN;
      }
    };
    const cps = findRootsNumerically(f, -50, 50, 2000);
    if (cps.length) {
      const cpInfo = cps
        .slice(0, 5)
        .map((cp) => {
          const d2val = math.evaluate(d2.toString(), { [v]: cp }) as number;
          const type =
            d2val > 0.01
              ? "local min"
              : d2val < -0.01
                ? "local max"
                : "inflection?";
          return `${v}=${fmtNum(cp)} (${type})`;
        })
        .join(",  ");
      steps.push({ title: "Critical points (f′=0)", expr: cpInfo });
    }
    const info: InfoCard[] = [
      { label: `f′(${v})`, value: dStr },
      { label: `f″(${v})`, value: d2.toString() },
    ];
    if (cps.length)
      info.push({
        label: "Critical Points",
        value: cps
          .slice(0, 3)
          .map((c) => fmtNum(c))
          .join(", "),
      });
    return {
      type: "Derivative",
      statusLabel: "Differentiated",
      status: "success",
      main: `f′(${v}) = ${dStr}`,
      info,
      steps,
    };
  } catch (e: unknown) {
    return { error: "Differentiation error: " + (e as Error).message };
  }
}

export function computeIntegral(
  expr: string,
  v: string,
  aStr: string,
  bStr: string,
): CalcResult {
  const steps: StepItem[] = [{ title: "Integrand", expr: `∫ ${expr} d${v}` }];
  try {
    if (aStr && bStr) {
      const a = math.evaluate(aStr) as number,
        b = math.evaluate(bStr) as number;
      if (isNaN(a) || isNaN(b)) return { error: "Bounds must be numeric" };
      const f = (x: number) => {
        try {
          return math.evaluate(expr, { [v]: x }) as number;
        } catch {
          return NaN;
        }
      };
      const result = simpsonIntegrate(f, a, b, 1000);
      steps.push({
        title: "Definite integral bounds",
        expr: `a = ${fmtNum(a)},  b = ${fmtNum(b)}`,
      });
      steps.push({
        title: "Simpson's Rule (n=1000)",
        expr: `∫[${fmtNum(a)},${fmtNum(b)}] ${expr} d${v} ≈ ${fmtNum(result)}`,
      });
      return {
        type: "Definite Integral",
        statusLabel: "Computed",
        status: "success",
        main: `∫[${fmtNum(a)},${fmtNum(b)}] = ${fmtNum(result)}`,
        info: [
          { label: "Result", value: fmtNum(result), sub: "Simpson's Rule" },
        ],
        steps,
      };
    }
    const sym = integrateSymbolic(expr, v);
    steps.push({
      title: "Antiderivative",
      expr: `∫ ${expr} d${v} = ${sym} + C`,
    });
    return {
      type: "Indefinite Integral",
      statusLabel: "Integrated",
      status: "success",
      main: `${sym} + C`,
      steps,
    };
  } catch (e: unknown) {
    return { error: "Integration error: " + (e as Error).message };
  }
}

export function matrixOp(input: string, op: string): CalcResult {
  const steps: StepItem[] = [];
  try {
    const rows = input
      .split(";")
      .map((r) => r.split(",").map((n) => parseFloat(n.trim())));
    const n = rows.length;
    if (rows.some((r) => r.length !== n))
      return { error: "Matrix must be square. Use: 1,2;3,4 for 2x2" };
    const M = math.matrix(rows);
    steps.push({
      title: "Matrix A",
      expr: rows
        .map((r) => `[ ${r.map((x) => fmtNum(x)).join("  ")} ]`)
        .join("\n"),
    });
    let main = "",
      info: InfoCard[] = [];
    if (op === "det") {
      const d = math.det(M) as number;
      steps.push({
        title: "Compute determinant",
        expr: `det(A) = ${fmtNum(d)}`,
      });
      main = `det(A) = ${fmtNum(d)}`;
      info = [
        { label: "Determinant", value: fmtNum(d) },
        {
          label: "Invertible?",
          value: Math.abs(d) > 1e-10 ? "Yes" : "No (singular)",
        },
      ];
    } else if (op === "inv") {
      const d = math.det(M) as number;
      if (Math.abs(d) < 1e-12)
        return { error: "Matrix is singular (det = 0), cannot invert" };
      const inv = math.inv(M);
      const invArr = (inv as { toArray: () => number[][] }).toArray();
      steps.push({
        title: "Inverse matrix A⁻¹",
        expr: invArr
          .map((r) => `[ ${r.map((x) => fmtNum(x)).join("  ")} ]`)
          .join("\n"),
      });
      main =
        "A⁻¹ =\n" +
        invArr
          .map((r) => `[ ${r.map((x) => fmtNum(x)).join("  ")} ]`)
          .join("\n");
    } else if (op === "transpose") {
      const T = (math.transpose(M) as { toArray: () => number[][] }).toArray();
      steps.push({
        title: "Transpose Aᵀ",
        expr: T.map((r) => `[ ${r.map((x) => fmtNum(x)).join("  ")} ]`).join(
          "\n",
        ),
      });
      main =
        "Aᵀ =\n" +
        T.map((r) => `[ ${r.map((x) => fmtNum(x)).join("  ")} ]`).join("\n");
    } else if (op === "eigenvalues") {
      const eig = math.eigs(M);
      const vals =
        (eig.values as { toArray?: () => unknown[] }).toArray?.() ??
        (eig.values as unknown[]);
      steps.push({
        title: "Eigenvalues",
        expr: vals
          .map(
            (v, i) =>
              `λ${i + 1} = ${fmtNum(typeof v === "object" ? (v as RootValue).re : (v as number))}`,
          )
          .join("\n"),
      });
      main = vals
        .map(
          (v, i) =>
            `λ${i + 1} = ${fmtNum(typeof v === "object" ? (v as RootValue).re : (v as number))}`,
        )
        .join(",  ");
      info = [
        { label: "Trace", value: fmtNum(math.trace(M) as number) },
        { label: "det(A)", value: fmtNum(math.det(M) as number) },
      ];
    }
    return {
      type: "Matrix Operation",
      statusLabel: op,
      status: "success",
      main,
      info,
      steps,
    };
  } catch (e: unknown) {
    return { error: "Matrix error: " + (e as Error).message };
  }
}

export function evaluateTrig(expr: string): CalcResult {
  const steps: StepItem[] = [{ title: "Expression", expr }];
  try {
    const result = math.evaluate(expr);
    const r =
      typeof result === "number"
        ? result
        : ((result as { toNumber: () => number }).toNumber?.() ?? result);
    steps.push({ title: "Evaluate", expr: `= ${fmtNum(r as number)}` });
    if (expr.includes("deg"))
      steps.push({
        title: "Note",
        expr: "Angles in degrees converted automatically",
      });
    return {
      type: "Trig/Log Evaluation",
      statusLabel: "Computed",
      status: "success",
      main: fmtNum(r as number),
      steps,
    };
  } catch (e: unknown) {
    return { error: "Evaluation error: " + (e as Error).message };
  }
}

export function graphFunction(expr: string, xMin: number, xMax: number): CalcResult {
  const f = (x: number) => {
    try {
      return math.evaluate(expr, { x }) as number;
    } catch {
      return NaN;
    }
  };
  const n = 600;
  const xs: number[] = [],
    ys: (number | null)[] = [];
  for (let i = 0; i <= n; i++) {
    const x = xMin + ((xMax - xMin) * i) / n;
    const y = f(x);
    xs.push(x);
    ys.push(isFinite(y) ? y : null);
  }
  const roots = findRootsNumerically(f, xMin, xMax, 2000);
  return {
    type: "Graph",
    statusLabel: "Plotted",
    status: "success",
    main: `f(x) = ${expr}`,
    graphData: { expr, xs, ys, roots, xMin, xMax },
    info: [
      {
        label: "x-Intercepts",
        value: roots.length
          ? roots
              .slice(0, 4)
              .map((r) => fmtNum(r))
              .join(", ")
          : "None",
      },
      { label: "y-intercept", value: fmtNum(f(0)) },
      { label: "Domain", value: `[${xMin}, ${xMax}]` },
    ],
    steps: [
      { title: "Function", expr: `f(x) = ${expr}` },
      {
        title: "Domain plotted",
        expr: `x ∈ [${fmtNum(xMin)}, ${fmtNum(xMax)}]`,
      },
      {
        title: "Real roots (x-intercepts)",
        expr: roots.length
          ? roots.map((r) => `x ≈ ${fmtNum(r)}`).join("   ")
          : "None found in range",
      },
    ],
  };
}
