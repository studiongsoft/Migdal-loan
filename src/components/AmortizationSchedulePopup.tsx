"use client";

import { AmortizationSchedule, type ScheduleProduct } from "./AmortizationSchedule";
import { Popup } from "./Popup";

export interface AmortizationSchedulePopupProps {
  isOpen: boolean;
  onClose: () => void;
  /** Single-product mode: pass loan params directly */
  loanAmount: number;
  monthlyPayment: number;
  annualRatePercent?: number;
  months?: number;
  graceMonths?: number;
  /** Multi-product mode: when provided, product selection changes schedule */
  products?: ScheduleProduct[];
}

export function AmortizationSchedulePopup({
  isOpen,
  onClose,
  loanAmount,
  monthlyPayment,
  annualRatePercent = 2.8,
  months = 17,
  graceMonths = 2,
  products: productsProp,
}: AmortizationSchedulePopupProps) {
  const products: ScheduleProduct[] =
    productsProp && productsProp.length > 0
      ? productsProp
      : [
          {
            id: "default",
            name: "הלוואה",
            loanAmount,
            annualRatePercent,
            months,
            graceMonths,
            loanType: "שפיצר",
          },
        ];

  return (
    <Popup isOpen={isOpen} onClose={onClose} maxWidth="780px">
      {(close) => (
        <AmortizationSchedule
          products={products}
          primaryButtonLabel="אפשר להמשיך"
          onPrimaryButtonClick={close}
        />
      )}
    </Popup>
  );
}
