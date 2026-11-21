'use client';
import { useState } from 'react';
import Link from 'next/link';

interface Course { name: string; grade: string; credits: string; }

function gradeToPoints(g: string): number {
  const map: Record<string, number> = { 'A+': 4.0, 'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7, 'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D+': 1.3, 'D': 1.0, 'D-': 0.7, 'F': 0.0 };
  return map[g.toUpperCase()] ?? parseFloat(g);
}

export default function GPACalculatorPage() {
  const [courses, setCourses] = useState<Course[]>([
    { name: 'Mathematics', grade: 'A', credits: '3' },
    { name: 'English', grade: 'B+', credits: '3' },
    { name: 'Physics', grade: 'A-', credits: '4' },
  ]);
  const [gpa, setGpa] = useState<number | null>(null);

  function addCourse() { setCourses(c => [...c, { name: '', grade: 'A', credits: '3' }]); }
  function removeCourse(i: number) { setCourses(c => c.filter((_, idx) => idx !== i)); }
  function updateCourse(i: number, field: keyof Course, val: string) {
    setCourses(c => c.map((co, idx) => idx === i ? { ...co, [field]: val } : co));
  }

  function calculate() {
    let totalPoints = 0, totalCredits = 0;
    for (const c of courses) {
      const cr = parseFloat(c.credits) || 0;
      const gp = gradeToPoints(c.grade);
      if (!isNaN(gp)) { totalPoints += gp * cr; totalCredits += cr; }
    }
    setGpa(totalCredits > 0 ? totalPoints / totalCredits : null);
  }

  const GRADES = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  const gpaColor = gpa === null ? 'text-slate-400' : gpa >= 3.5 ? 'text-emerald-500' : gpa >= 2.5 ? 'text-amber-500' : 'text-red-500';

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <div className="space-y-3 mb-5">
          <div className="grid grid-cols-[1fr_auto_auto_auto] gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 px-1">
            <span>Course Name</span><span>Grade</span><span>Credits</span><span></span>
          </div>
          {courses.map((c, i) => (
            <div key={i} className="grid grid-cols-[1fr_100px_80px_40px] gap-2 items-center">
              <input value={c.name} onChange={e => updateCourse(i, 'name', e.target.value)} placeholder="Course name"
                className="px-3 py-2.5 border-2 border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-pink-400" />
              <select value={c.grade} onChange={e => updateCourse(i, 'grade', e.target.value)}
                className="px-2 py-2.5 border-2 border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-pink-400 appearance-none text-center">
                {GRADES.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
              <input type="number" value={c.credits} min={0} max={6} step={0.5} onChange={e => updateCourse(i, 'credits', e.target.value)}
                className="px-2 py-2.5 border-2 border-slate-200 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-pink-400 text-center" />
              <button onClick={() => removeCourse(i)} className="w-9 h-9 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-400 hover:bg-red-100 transition-colors flex items-center justify-center text-sm">
                <i className="fas fa-times" />
              </button>
            </div>
          ))}
        </div>

        <button onClick={addCourse}
          className="flex items-center gap-2 text-sm text-pink-500 dark:text-pink-400 font-semibold hover:underline mb-5">
          <i className="fas fa-plus" /> Add Course
        </button>

        <button onClick={calculate}
          className="w-full py-3.5 bg-gradient-to-br from-pink-500 to-pink-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
          <i className="fas fa-graduation-cap" /> Calculate GPA
        </button>
      </div>

      {gpa !== null && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 text-center">
          <div className="text-sm text-slate-400 mb-2">Your GPA</div>
          <div className={`text-7xl font-extrabold mb-3 ${gpaColor}`}>{gpa.toFixed(2)}</div>
          <div className="text-slate-500 dark:text-slate-400 text-sm">
            {gpa >= 3.7 ? '🏆 Summa Cum Laude (Highest Honors)' : gpa >= 3.5 ? '🎓 Magna Cum Laude (High Honors)' : gpa >= 3.0 ? '✅ Cum Laude (Honors)' : gpa >= 2.0 ? '📘 Good Standing' : '⚠️ Academic Probation Risk'}
          </div>
          <div className="mt-5 grid grid-cols-4 gap-3">
            {[['A', '4.0', '#10b981'], ['B', '3.0', '#3b82f6'], ['C', '2.0', '#f59e0b'], ['D/F', '< 2.0', '#ef4444']].map(([g, pts, color]) => (
              <div key={g} className="rounded-xl p-3 border border-slate-200 dark:border-slate-800">
                <div className="text-sm font-bold" style={{ color }}>{g}</div>
                <div className="text-xs text-slate-400">{pts} pts</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/education" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Education Calculators
        </Link>
      </div>
    </div>
  );
}
