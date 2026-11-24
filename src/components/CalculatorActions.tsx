"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";

type CalculatorActionsProps = {
  calculatorId: string;
  calculatorName: string;
  inputData: Record<string, unknown>;
  resultData: Record<string, unknown>;
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
    } catch {
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
      const isDark = document.documentElement.classList.contains("dark");

      // Use html2canvas-pro to support Tailwind CSS v4 oklch colors & modern CSS
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: isDark ? "#0f172a" : "#ffffff",
        windowWidth: element.scrollWidth,
      });

      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const margin = 10; // 10mm margin
      const printableWidth = pageWidth - margin * 2;
      const printableHeight = pageHeight - margin * 2;

      const totalPdfHeight = (canvas.height * printableWidth) / canvas.width;

      if (totalPdfHeight <= printableHeight) {
        // Fits comfortably on a single A4 page
        const imgData = canvas.toDataURL("image/png");
        pdf.addImage(imgData, "PNG", margin, margin, printableWidth, totalPdfHeight);
      } else {
        // Multi-page pagination: Slice canvas vertically so tall content is never truncated
        const sliceHeightPx = (printableHeight / printableWidth) * canvas.width;
        let renderedHeight = 0;
        let pageIndex = 0;

        while (renderedHeight < canvas.height) {
          if (pageIndex > 0) {
            pdf.addPage();
          }

          const currentSliceHeight = Math.min(sliceHeightPx, canvas.height - renderedHeight);

          const sliceCanvas = document.createElement("canvas");
          sliceCanvas.width = canvas.width;
          sliceCanvas.height = currentSliceHeight;

          const ctx = sliceCanvas.getContext("2d");
          if (ctx) {
            ctx.fillStyle = isDark ? "#0f172a" : "#ffffff";
            ctx.fillRect(0, 0, sliceCanvas.width, sliceCanvas.height);
            ctx.drawImage(
              canvas,
              0,
              renderedHeight,
              canvas.width,
              currentSliceHeight,
              0,
              0,
              canvas.width,
              currentSliceHeight
            );

            const sliceData = sliceCanvas.toDataURL("image/png");
            const sliceHeightMm = (currentSliceHeight * printableWidth) / canvas.width;
            pdf.addImage(sliceData, "PNG", margin, margin, printableWidth, sliceHeightMm);
          }

          renderedHeight += currentSliceHeight;
          pageIndex++;
        }
      }

      pdf.save(`${calculatorId}-results.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div
      data-html2canvas-ignore="true"
      className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700"
    >
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
        className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium transition-colors cursor-pointer"
      >
        {isDownloading ? (
          <i className="fas fa-spinner fa-spin" />
        ) : (
          <i className="fas fa-file-pdf" />
        )}
        {isDownloading ? "Generating PDF..." : "Download PDF"}
      </button>
    </div>
  );
}
