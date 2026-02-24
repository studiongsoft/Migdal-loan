import React from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "body-lg"
  | "body-md"
  | "body-sm"
  | "caption";

interface TypographyProps {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
}

const styles: Record<Variant, string> = {
  h1: "text-[48px] font-black leading-[1.1]",
  h2: "text-[36px] font-bold leading-[1.2]",
  h3: "text-[28px] font-bold leading-[1.3]",
  "body-lg": "text-[20px] font-regular leading-[1.6]",
  "body-md": "text-[18px] font-regular leading-[1.6]",
  "body-sm": "text-[16px] font-light leading-[1.6]",
  caption: "text-[14px] font-light leading-[1.4]",
};

export function Typography({
  variant,
  children,
  className = "",
}: TypographyProps) {
  return (
    <div className={`font-migdal ${styles[variant]} ${className}`}>
      {children}
    </div>
  );
}
