
import Link from 'next/link';
import { getRelatedCalculators, Calculator } from '@/data/calculators';

export default function RelatedCalculators({ calculator }: { calculator: Calculator }) {
  const related = getRelatedCalculators(calculator.slug).slice(0, 5);
  
  if (related.length === 0) return null;

  return (
    <div className="mt-12 mb-8">
      <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">Related Calculators</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {related.map(calc => (
          <Link key={calc.slug} href={calc.href} className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <i className={`fas ${calc.icon} text-blue-500`} />
              <span className="font-semibold text-slate-800 dark:text-slate-100">{calc.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
