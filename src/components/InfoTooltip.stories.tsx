import type { Meta, StoryObj } from "@storybook/react";
import { InfoTooltip } from "./InfoTooltip";

const meta = {
  title: "Design System/Tooltip/InfoTooltip",
  component: InfoTooltip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    body: { control: "text" },
    triggerVariant: { control: "select", options: ["default", "status"] },
  },
} satisfies Meta<typeof InfoTooltip>;

export default meta;

type Story = StoryObj<typeof InfoTooltip>;

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div dir="rtl" className="bg-white p-10 rounded-[16px] border border-[#E6ECF5]">
    {children}
  </div>
);

export const Default: Story = {
  args: {
    title: "כספים נזילים",
    body: "אלו כספים שניתן לגשת אליהם במהירות ובקלות, כמו מזומן או כסף בחשבון בנק.",
  },
  render: (args) => (
    <Frame>
      <div className="flex items-center gap-2">
        <span className="text-[16px] text-[var(--color-primary)]">סטטוס הכספים</span>
        <InfoTooltip {...args} />
      </div>
    </Frame>
  ),
};

export const InterestFixed: Story = {
  args: {
    title: "ריבית קבועה",
    body: "ריבית קבועה מבטיחה תשלום חודשי צפוי לאורך כל תקופת ההלוואה, ללא שינויים.",
  },
  render: (args) => (
    <Frame>
      <div className="flex items-center gap-2">
        <span className="text-[16px] text-[var(--color-primary)]">ריבית</span>
        <InfoTooltip {...args} />
      </div>
    </Frame>
  ),
};

export const CustomTrigger: Story = {
  args: {
    title: "שיעור ריבית נומינלית שנתית",
    body: "זהו שיעור הריבית השנתי שעל פיו מחושבים תשלומי ההחזר.",
  },
  render: (args) => (
    <Frame>
      <div className="flex items-center gap-2">
        <span className="text-[18px] font-bold text-[var(--color-primary)]">3.1%</span>
        <InfoTooltip {...args}>
          <span className="flex size-5 cursor-pointer items-center justify-center rounded-full bg-[#E1E9F3] text-[12px] text-[var(--color-primary)]">
            ?
          </span>
        </InfoTooltip>
      </div>
    </Frame>
  ),
};

export const StatusIcon: Story = {
  args: {
    title: "שיעור ריבית נומינלית שנתית",
    body: "זהו שיעור הריבית השנתי שעל פיו מחושבים תשלומי ההחזר. הריבית מוצגת באחוזים ומהווה מדד להערכת עלות ההלוואה.",
    triggerVariant: "status",
  },
  render: (args) => (
    <Frame>
      <div className="flex items-center gap-2">
        <span className="text-[18px] font-bold text-[var(--color-primary)]">3.1%</span>
        <InfoTooltip {...args} />
      </div>
    </Frame>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Frame>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <span className="text-[16px] text-[var(--color-primary)]">ריבית קבועה</span>
          <InfoTooltip
            title="ריבית קבועה"
            body="ריבית קבועה מבטיחה תשלום חודשי צפוי לאורך כל תקופת ההלוואה, ללא שינויים."
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[16px] text-[var(--color-primary)]">ריבית משתנה פריים</span>
          <InfoTooltip
            title="ריבית משתנה פריים"
            body="ריבית משתנה לפי פריים עשויה להיות נמוכה יותר, אך עלולה להשתנות לאורך התקופה."
          />
        </div>
      </div>
    </Frame>
  ),
};
