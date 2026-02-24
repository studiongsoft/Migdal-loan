import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Design System/Typography/Fonts",
  parameters: { layout: "centered" },
} satisfies Meta;

export default meta;

type Story = StoryObj;

const Row = ({
  label,
  className,
  weight,
}: {
  label: string;
  className: string;
  weight: number;
}) => (
  <div className="w-[720px] rounded-[16px] border border-[rgba(0,0,0,0.08)] bg-white p-6">
    <div className="mb-2 text-sm opacity-60">{label}</div>
    <div className={`${className} text-[32px] leading-[1.2]`} style={{ fontWeight: weight }}>
      מגדל קשת, בדיקת פונט 123456
    </div>
    <div className="mt-3 text-sm opacity-60">
      font-weight: {weight}
    </div>
  </div>
);

export const MigdalWeights: Story = {
  render: () => (
    <div className="flex flex-col gap-4 font-migdal">
      <Row label="ExtraLight" className="" weight={200} />
      <Row label="Light" className="" weight={300} />
      <Row label="Regular" className="" weight={400} />
      <Row label="Bold" className="" weight={700} />
      <Row label="Black" className="" weight={900} />
    </div>
  ),
};
