'use client';
import { useMemo } from 'react';
import { useState } from 'react';
import Link from 'next/link';

export default function WordCounterPage() {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const chars = text.length;
    const charsNoSpace = text.replace(/\s/g, '').length;
    const sentences = trimmed ? (trimmed.match(/[.!?]+/g) || []).length : 0;
    const paragraphs = trimmed ? text.split(/\n\n+/).filter(Boolean).length : 0;
    const readTime = Math.ceil(words / 200); // avg 200 wpm
    return { words, chars, charsNoSpace, sentences, paragraphs, readTime };
  }, [text]);

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-8 pb-16">

      <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 shadow-lg border border-slate-200 dark:border-slate-800 mb-5">
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Paste or type your text here…"
          rows={12}
          className="w-full px-4 py-3 border-2 border-slate-200 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:border-slate-500 resize-y text-sm leading-relaxed"
        />
        <div className="flex justify-end gap-3 mt-3">
          <button onClick={() => setText('')} className="text-xs text-slate-400 hover:text-red-400 transition-colors">
            <i className="fas fa-trash mr-1" />Clear
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          { label: 'Words', value: stats.words, icon: 'fa-file-word', color: 'from-blue-500 to-blue-700' },
          { label: 'Characters', value: stats.chars, icon: 'fa-font', color: 'from-violet-500 to-violet-700' },
          { label: 'Chars (no spaces)', value: stats.charsNoSpace, icon: 'fa-text-width', color: 'from-indigo-500 to-indigo-700' },
          { label: 'Sentences', value: stats.sentences, icon: 'fa-ellipsis-h', color: 'from-emerald-500 to-emerald-700' },
          { label: 'Paragraphs', value: stats.paragraphs, icon: 'fa-paragraph', color: 'from-amber-500 to-amber-600' },
          { label: 'Read Time', value: `${stats.readTime} min`, icon: 'fa-clock', color: 'from-pink-500 to-rose-600' },
        ].map(s => (
          <div key={s.label} className={`rounded-2xl p-5 bg-gradient-to-br ${s.color} text-white text-center shadow-md`}>
            <i className={`fas ${s.icon} text-lg mb-2 opacity-80 block`} />
            <div className="text-2xl font-extrabold mb-1">{s.value}</div>
            <div className="text-xs opacity-80">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/education" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-500 dark:text-indigo-400 hover:underline">
          <i className="fas fa-arrow-left text-xs" /> All Education Calculators
        </Link>
      </div>
    </div>
  );
}
