"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "./Button";
import { InfoTooltip } from "./InfoTooltip";
import { Radio } from "./Radio";

export interface ScheduleProduct {
  id: string;
  name: string;
  loanAmount: number;
  annualRatePercent: number;
  months: number;
  graceMonths: number;
  loanType: string;
}

interface ScheduleRow {
  chargeDate: string;
  principalCharge: number;
  interestCharge: number;
  totalCharge: number;
  remainingTotal: number;
}

function generateSchedule(
  loanAmount: number,
  annualRatePercent: number,
  months: number,
  graceMonths: number
): ScheduleRow[] {
  const rows: ScheduleRow[] = [];
  const monthlyRate = annualRatePercent / 100 / 12;
  let remaining = loanAmount;

  const paymentMonths = months - graceMonths;
  if (paymentMonths <= 0) return rows;

  const pmt =
    (remaining * monthlyRate * Math.pow(1 + monthlyRate, paymentMonths)) /
    (Math.pow(1 + monthlyRate, paymentMonths) - 1);

  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() + graceMonths);

  for (let i = 0; i < paymentMonths; i++) {
    const interestCharge = remaining * monthlyRate;
    const principalCharge = pmt - interestCharge;
    remaining = Math.max(0, remaining - principalCharge);

    const payDate = new Date(startDate);
    payDate.setMonth(payDate.getMonth() + i);

    rows.push({
      chargeDate: payDate.toLocaleDateString("he-IL", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      principalCharge: Math.round(principalCharge * 100) / 100,
      interestCharge: Math.round(interestCharge * 100) / 100,
      totalCharge: Math.round(pmt * 100) / 100,
      remainingTotal: Math.round(remaining * 100) / 100,
    });
  }
  return rows;
}

export interface AmortizationScheduleProps {
  products: ScheduleProduct[];
  onDownload?: (schedule: ScheduleRow[], product: ScheduleProduct) => void;
  primaryButtonLabel?: string;
  onPrimaryButtonClick?: () => void;
}

export function AmortizationSchedule({
  products,
  onDownload,
  primaryButtonLabel = "אפשר להמשיך",
  onPrimaryButtonClick,
}: AmortizationScheduleProps) {
  const [selectedProductId, setSelectedProductId] = useState(products[0]?.id ?? "");

  useEffect(() => {
    const firstId = products[0]?.id ?? "";
    setSelectedProductId((prev) => (products.some((p) => p.id === prev) ? prev : firstId));
  }, [products]);

  const selectedProduct = products.find((p) => p.id === selectedProductId) ?? products[0];
  const schedule = useMemo(() => {
    if (!selectedProduct) return [];
    return generateSchedule(
      selectedProduct.loanAmount,
      selectedProduct.annualRatePercent,
      selectedProduct.months,
      selectedProduct.graceMonths
    );
  }, [selectedProduct]);

  const totalToPay = schedule.reduce((s, r) => s + r.totalCharge, 0);

  const formatCurrency = (v: number) =>
    new Intl.NumberFormat("he-IL", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(v) + " ₪";
  const formatNum = (v: number) => new Intl.NumberFormat("he-IL").format(v);

  const handleDownload = () => {
    if (!selectedProduct) return;
    if (onDownload) {
      onDownload(schedule, selectedProduct);
      return;
    }
    const headers = ["תאריך חיוב", "חיוב קרן", "חיוב ריביתי", 'סה"כ חיוב', "סה\"כ נותר לתשלום"];
    const csv =
      headers.join(",") +
      "\n" +
      schedule
        .map((r) =>
          [r.chargeDate, r.principalCharge, r.interestCharge, r.totalCharge, r.remainingTotal].join(",")
        )
        .join("\n");
    const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "loan-schedule.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  if (products.length === 0) return null;

  const singleProduct = products.length === 1;

  return (
    <div dir="rtl" className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-right text-[24px] font-bold text-[var(--color-primary)]">לוח סילוקין</h2>
        {singleProduct && selectedProduct && (
          <span className="text-[16px] text-[#5E5D9A]">{selectedProduct.name}</span>
        )}
      </div>

      {/* Product selection - Radio card style, only when multiple products */}
      {!singleProduct && (
        <div className="flex flex-wrap gap-4">
          {products.map((p) => (
            <Radio
              key={p.id}
              value={p.id}
              label={p.name}
              name="amortization-product"
              checked={selectedProductId === p.id}
              onChange={() => setSelectedProductId(p.id)}
              variant="card"
            />
          ))}
        </div>
      )}

      {/* Summary card */}
      <div className="rounded-[12px] p-6">
        <div className="relative mb-4 flex items-center justify-center">
          <button
            type="button"
            onClick={handleDownload}
            className="absolute end-0 flex items-center gap-2 text-[16px] font-bold text-[#262565CC] hover:underline"
          >
            להורדה
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="text-center">
            <p className="text-[16px] text-[#5E5D9A]">סכום לתשלום</p>
            <p className="text-[20px] font-bold text-[var(--color-primary)]">
              ₪{formatNum(Math.round(totalToPay))}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 rounded-[12px] bg-[#F4F8FC] p-4 md:grid-cols-[minmax(180px,1.3fr)_1fr_1fr_1fr]">
          <div className="min-w-0">
            <p className="whitespace-nowrap text-[14px] text-[#5E5D9A]">שיעור ריבית נומינלית שנתית</p>
            <div className="flex flex-nowrap items-center gap-2">
              <p className="shrink-0 text-[18px] font-bold text-[var(--color-primary)]">
                {selectedProduct?.annualRatePercent}%
              </p>
              <InfoTooltip
                title="שיעור ריבית נומינלית שנתית"
                body="זהו שיעור הריבית השנתי שעל פיו מחושבים תשלומי ההחזר. הריבית מוצגת באחוזים ומהווה מדד להערכת עלות ההלוואה."
                triggerVariant="status"
              />
            </div>
          </div>
          <div>
            <p className="text-[14px] text-[#5E5D9A]">סוג הלוואה</p>
            <p className="text-[16px] font-bold text-[var(--color-primary)]">
              {selectedProduct?.loanType}
            </p>
          </div>
          <div>
            <p className="text-[14px] text-[#5E5D9A]">מספר חודשי החזר</p>
            <p className="text-[16px] font-bold text-[var(--color-primary)]">
              {selectedProduct?.months}
            </p>
          </div>
          <div>
            <p className="text-[14px] text-[#5E5D9A]">מספר חודשי גרייס</p>
            <p className="text-[16px] font-bold text-[var(--color-primary)]">
              {selectedProduct?.graceMonths}
            </p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-[12px] border border-[#E1E9F3]">
        <table className="w-full min-w-[500px] text-right">
          <thead>
            <tr className="border-b border-[#E1E9F3] bg-[#F4F8FC]">
              <th className="p-3 text-[16px] font-bold text-[var(--color-primary)]">תאריך חיוב</th>
              <th className="p-3 text-[16px] font-bold text-[var(--color-primary)]">חיוב קרן</th>
              <th className="p-3 text-[16px] font-bold text-[var(--color-primary)]">חיוב ריביתי</th>
              <th className="p-3 text-[16px] font-bold text-[var(--color-primary)]">סה"כ חיוב</th>
              <th className="p-3 text-[16px] font-bold text-[var(--color-primary)]">סה"כ נותר לתשלום</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((row, i) => (
              <tr key={i} className="border-b border-[#E1E9F3] last:border-b-0">
                <td className="p-3 text-[16px] text-[var(--color-primary)]">{row.chargeDate}</td>
                <td className="p-3 text-[16px] text-[var(--color-primary)]">
                  {formatCurrency(row.principalCharge)}
                </td>
                <td className="p-3 text-[16px] text-[var(--color-primary)]">
                  {formatCurrency(row.interestCharge)}
                </td>
                <td className="p-3 text-[16px] text-[var(--color-primary)]">
                  {formatCurrency(row.totalCharge)}
                </td>
                <td className="p-3 text-[16px] text-[var(--color-primary)]">
                  {formatCurrency(row.remainingTotal)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer button */}
      {onPrimaryButtonClick && (
        <div className="flex justify-center">
          <Button variant="primary" onClick={onPrimaryButtonClick} className="w-full md:max-w-[400px]">
            {primaryButtonLabel}
          </Button>
        </div>
      )}
    </div>
  );
}
