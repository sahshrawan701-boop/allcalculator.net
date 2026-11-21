'use client';
import { useState } from 'react';
import Link from 'next/link';

interface DiabetesRiskResult {
  score: number;
  riskLevel: string;
  color: string;
  recommendation: string;
}

function getRiskLevel(score: number): { riskLevel: string; color: string; recommendation: string } {
  if (score < 7) return { riskLevel: 'Low Risk', color: '#10b981', recommendation: 'Your risk is low. Maintain a healthy lifestyle with regular exercise and balanced diet.' };
  if (score < 15) return { riskLevel: 'Moderate Risk', color: '#f59e0b', recommendation: 'You have some risk factors. Consider lifestyle changes and regular check-ups.' };
  if (score < 20) return { riskLevel: 'High Risk', color: '#ef4444', recommendation: 'You have significant risk factors. Consult a healthcare provider for screening.' };
  return { riskLevel: 'Very High Risk', color: '#dc2626', recommendation: 'Your risk is very high. Please consult a healthcare provider immediately for evaluation.' };
}

export default function DiabetesRiskCalculatorPage() {
  const [age, setAge] = useState(40);
  const [bmi, setBmi] = useState(25);
  const [waist, setWaist] = useState(90);
  const [activity, setActivity] = useState('moderate');
  const [familyHistory, setFamilyHistory] = useState(false);
  const [bloodPressure, setBloodPressure] = useState(false);
  const [result, setResult] = useState<DiabetesRiskResult | null>(null);

  function calculate() {
    let score = 0;
    
    // Age score
    if (age < 45) score += 0;
    else if (age < 55) score += 2;
    else if (age < 65) score += 4;
    else score += 6;
    
    // BMI score
    if (bmi < 25) score += 0;
    else if (bmi < 30) score += 3;
    else score += 5;
    
    // Waist circumference
    if (waist < 94) score += 0;
    else if (waist < 102) score += 3;
    else score += 4;
    
    // Physical activity
    if (activity === 'active') score += 0;
    else if (activity === 'moderate') score += 2;
    else score += 3;
    
    // Family history
    if (familyHistory) score += 5;
    
    // High blood pressure
    if (bloodPressure) score += 3;
    
    const risk = getRiskLevel(score);
    setResult({
      score,
      riskLevel: risk.riskLevel,
      color: risk.color,
      recommendation: risk.recommendation,
    });
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">
      

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        {/* Age */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Age</label>
          <div className="relative">
            <input type="number" value={age} min={18} max={100} onChange={e => setAge(Number(e.target.value))}
              className="w-full px-4 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-cyan-500" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">years</span>
          </div>
        </div>

        {/* BMI */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">BMI</label>
          <div className="relative">
            <input type="number" value={bmi} min={15} max={50} step={0.1} onChange={e => setBmi(Number(e.target.value))}
              className="w-full px-4 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-cyan-500" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">kg/m²</span>
          </div>
        </div>

        {/* Waist */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Waist Circumference</label>
          <div className="relative">
            <input type="number" value={waist} min={50} max={150} onChange={e => setWaist(Number(e.target.value))}
              className="w-full px-4 py-3 pr-14 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-cyan-500" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">cm</span>
          </div>
        </div>

        {/* Activity */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Physical Activity</label>
          <div className="grid grid-cols-3 gap-2">
            {([
              { key: 'active', label: 'Active' },
              { key: 'moderate', label: 'Moderate' },
              { key: 'sedentary', label: 'Sedentary' },
            ] as const).map(opt => (
              <button key={opt.key} onClick={() => setActivity(opt.key)}
                className={`py-3 rounded-xl border-2 text-sm font-medium transition-all ${activity === opt.key ? 'bg-cyan-500 border-cyan-500 text-white' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Risk Factors */}
        <div className="mb-5 space-y-3">
          <label className="block text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2">Additional Risk Factors</label>
          
          <button onClick={() => setFamilyHistory(!familyHistory)}
            className={`w-full py-3 px-4 rounded-xl border-2 text-sm font-medium flex items-center justify-between transition-all ${familyHistory ? 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-400 dark:border-cyan-600 text-cyan-700 dark:text-cyan-400' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
            <span>Family history of diabetes</span>
            <i className={`fas ${familyHistory ? 'fa-check-square' : 'fa-square'}`} />
          </button>
          
          <button onClick={() => setBloodPressure(!bloodPressure)}
            className={`w-full py-3 px-4 rounded-xl border-2 text-sm font-medium flex items-center justify-between transition-all ${bloodPressure ? 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-400 dark:border-cyan-600 text-cyan-700 dark:text-cyan-400' : 'border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-400'}`}>
            <span>High blood pressure or treatment</span>
            <i className={`fas ${bloodPressure ? 'fa-check-square' : 'fa-square'}`} />
          </button>
        </div>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-cyan-500 to-teal-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-calculator" /> Calculate Risk
        </button>
      </div>

      {result && (
        <>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-4">
            <div className="text-center mb-6">
              <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">Risk Score</div>
              <div className="text-6xl font-extrabold mb-2" style={{ color: result.color }}>
                {result.score}
              </div>
              <div className="text-lg font-semibold text-slate-800 dark:text-slate-100">{result.riskLevel}</div>
            </div>

            {/* Risk Scale */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 mb-5">
              <div className="h-4 bg-gradient-to-r from-emerald-400 via-amber-400 to-red-600 rounded-full relative">
                <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-slate-800 rounded-full shadow-lg transition-all duration-500"
                  style={{ left: `${Math.min(100, (result.score / 25) * 100)}%` }} />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 mt-2">
                <span>Low</span>
                <span>Moderate</span>
                <span>High</span>
                <span>Very High</span>
              </div>
            </div>

            {/* Recommendation */}
            <div className={`rounded-xl p-5 border-2 ${result.score < 7 ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-300 dark:border-emerald-700' : result.score < 15 ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-300 dark:border-amber-700' : 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700'}`}>
              <div className="flex items-start gap-3">
                <i className={`fas ${result.score < 7 ? 'fa-check-circle text-emerald-500' : result.score < 15 ? 'fa-exclamation-circle text-amber-500' : 'fa-exclamation-triangle text-red-500'} text-xl mt-0.5`} />
                <div>
                  <div className={`font-bold mb-1 ${result.score < 7 ? 'text-emerald-700 dark:text-emerald-400' : result.score < 15 ? 'text-amber-700 dark:text-amber-400' : 'text-red-700 dark:text-red-400'}`}>
                    Recommendation
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{result.recommendation}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Factors Breakdown */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">Your Risk Factors</h3>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Age ({age} years)</span>
                <span className="font-semibold text-slate-800 dark:text-slate-100">{age < 45 ? '+0' : age < 55 ? '+2' : age < 65 ? '+4' : '+6'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">BMI ({bmi})</span>
                <span className="font-semibold text-slate-800 dark:text-slate-100">{bmi < 25 ? '+0' : bmi < 30 ? '+3' : '+5'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Waist ({waist} cm)</span>
                <span className="font-semibold text-slate-800 dark:text-slate-100">{waist < 94 ? '+0' : waist < 102 ? '+3' : '+4'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Activity Level</span>
                <span className="font-semibold text-slate-800 dark:text-slate-100">{activity === 'active' ? '+0' : activity === 'moderate' ? '+2' : '+3'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">Family History</span>
                <span className="font-semibold text-slate-800 dark:text-slate-100">{familyHistory ? '+5' : '+0'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 dark:text-slate-400">High Blood Pressure</span>
                <span className="font-semibold text-slate-800 dark:text-slate-100">{bloodPressure ? '+3' : '+0'}</span>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800 text-xs text-amber-700 dark:text-amber-400">
        <strong>Medical Disclaimer:</strong> This calculator is for informational purposes only and is not a diagnostic tool. Only a healthcare provider can diagnose diabetes. If you have concerns, please consult a medical professional.
      </div>

      <div className="mt-6 text-center">
        <Link href="/health" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Health Calculators
        </Link>
      </div>
    </div>
  );
}
