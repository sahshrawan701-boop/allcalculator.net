"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type CalculatorActionsProps = {
  calculatorId: string;
  calculatorName: string;
  inputData: Record<string, any>;
  resultData: Record<string, any>;
  resultRef: React.RefObject<HTMLElement | null>;
};

export default function CalculatorActions({
  calculatorId,
  calculatorName,
  inputData,
  resultData,
  resultRef,
}: CalculatorActionsProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSave = async () => {
    if (!session) {
      router.push(`/login?callbackUrl=${encodeURIComponent(window.location.pathname)}`);
      return;
    }

    setIsSaving(true);
    setSaveStatus("idle");
    try {
      const res = await fetch("/api/calculations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          calculatorId,
          calculatorName,
          inputData,
          resultData,
        }),
      });

      if (res.ok) {
        setSaveStatus("success");
        setTimeout(() => setSaveStatus("idle"), 3000);
      } else {
        setSaveStatus("error");
      }
    } catch (error) {
      setSaveStatus("error");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!resultRef.current) return;
    
    setIsDownloading(true);
    try {
      const element = resultRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: document.documentElement.classList.contains("dark") ? "#0f172a" : "#ffffff"
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.text(`${calculatorName} Results`, 14, 15);
      pdf.addImage(imgData, "PNG", 0, 20, pdfWidth, pdfHeight);
      pdf.save(`${calculatorId}-results.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
      <button
        onClick={handleSave}
        disabled={isSaving}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          saveStatus === "success" 
            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
            : "bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400 dark:hover:bg-indigo-900/50"
        }`}
      >
        {isSaving ? (
          <i className="fas fa-spinner fa-spin" />
        ) : saveStatus === "success" ? (
          <i className="fas fa-check" />
        ) : (
          <i className="fas fa-bookmark" />
        )}
        {saveStatus === "success" ? "Saved!" : isSaving ? "Saving..." : "Save Calculation"}
      </button>

      <button
        onClick={handleDownloadPDF}
        disabled={isDownloading}
        className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium transition-colors"
      >
        {isDownloading ? (
          <i className="fas fa-spinner fa-spin" />
        ) : (
          <i className="fas fa-file-pdf" />
        )}
        Download PDF
      </button>
    </div>
  );
}
