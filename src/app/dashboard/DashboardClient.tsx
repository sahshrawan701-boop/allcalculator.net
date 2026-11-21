"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Calculation = {
  id: string;
  calculatorId: string;
  calculatorName: string;
  inputData: string;
  resultData: string;
  createdAt: Date;
};

export default function DashboardClient({ initialCalculations }: { initialCalculations: Calculation[] }) {
  const [calculations, setCalculations] = useState(initialCalculations);
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this calculation?")) return;

    try {
      const res = await fetch(`/api/calculations/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setCalculations((prev) => prev.filter((calc) => calc.id !== id));
        router.refresh();
      } else {
        alert("Failed to delete calculation");
      }
    } catch (err) {
      alert("Error deleting calculation");
    }
  };

  const renderData = (dataStr: string) => {
    try {
      const data = JSON.parse(dataStr);
      return (
        <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400">
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>
              <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span> {String(value)}
            </li>
          ))}
        </ul>
      );
    } catch {
      return <p className="text-sm text-slate-600 dark:text-slate-400">{dataStr}</p>;
    }
  };

  if (calculations.length === 0) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 text-center border border-slate-100 dark:border-slate-800 shadow-sm">
        <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-calculator text-2xl text-slate-400" />
        </div>
        <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">No saved calculations yet</h3>
        <p className="text-slate-500 dark:text-slate-400 mb-6">
          When you use our calculators, you can save the results here for future reference.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-xl transition-colors"
        >
          Explore Calculators
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {calculations.map((calc) => (
        <div key={calc.id} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm relative group">
          <button
            onClick={() => handleDelete(calc.id)}
            className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors"
            title="Delete calculation"
          >
            <i className="fas fa-trash" />
          </button>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              {calc.calculatorName}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {new Date(calc.createdAt).toLocaleString()}
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
              <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Inputs</h4>
              {renderData(calc.inputData)}
            </div>
            
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800/30">
              <h4 className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">Results</h4>
              {renderData(calc.resultData)}
            </div>
            
            <button
              onClick={() => {
                const dataParam = encodeURIComponent(calc.inputData);
                router.push(`/finance/${calc.calculatorId}?data=${dataParam}`);
              }}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-colors mt-2"
            >
              Load Calculation
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
