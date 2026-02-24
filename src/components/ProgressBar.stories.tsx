import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar, type ProgressStage } from "./ProgressBar";

const meta = {
  title: "Design System/Progress/ProgressBar",
  component: ProgressBar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: { onStepClick: { action: "stepClick" } },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof ProgressBar>;

/** שלבי loan-simulator – כמו בדסקטופ */
const LOAN_STAGES = [
  "בירור צרכים",
  "פרטי הלוואה",
  "פרטי בנק",
  "מסמכים והצהרות",
  "סיום",
] as const;

function makeStages(currentIndex: number): ProgressStage[] {
  return LOAN_STAGES.map((title, i) => ({
    title,
    status: i < currentIndex ? "complete" : i === currentIndex ? "current" : "pending",
  }));
}

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div dir="rtl" className="w-[360px] rounded-[16px] border border-[#E6ECF5] bg-white p-8">
    {children}
  </div>
);

const FrameMobile = ({ children }: { children: React.ReactNode }) => (
  <div dir="rtl" className="w-[360px] bg-[#f4f8fc] p-4">
    {children}
  </div>
);

export const Step1Current: Story = {
  args: { stages: makeStages(0), onStepClick: () => {} },
  render: (args) => (
    <Frame>
      <ProgressBar {...args} />
    </Frame>
  ),
  parameters: {
    docs: { description: { story: "שלב 1 – בירור צרכים." } },
  },
};

export const Step2Current: Story = {
  args: { stages: makeStages(1), onStepClick: () => {} },
  render: (args) => (
    <Frame>
      <ProgressBar {...args} />
    </Frame>
  ),
  parameters: {
    docs: { description: { story: "שלב 2 – פרטי הלוואה." } },
  },
};

export const Step3Current: Story = {
  args: { stages: makeStages(2), onStepClick: () => {} },
  render: (args) => (
    <Frame>
      <ProgressBar {...args} />
    </Frame>
  ),
  parameters: {
    docs: { description: { story: "שלב 3 – פרטי בנק." } },
  },
};

export const Step4Current: Story = {
  args: { stages: makeStages(3), onStepClick: () => {} },
  render: (args) => (
    <Frame>
      <ProgressBar {...args} />
    </Frame>
  ),
  parameters: {
    docs: { description: { story: "שלב 4 – מסמכים והצהרות." } },
  },
};

export const Step5Current: Story = {
  args: { stages: makeStages(4), onStepClick: () => {} },
  render: (args) => (
    <Frame>
      <ProgressBar {...args} />
    </Frame>
  ),
  parameters: {
    docs: { description: { story: "שלב 5 – סיום." } },
  },
};

export const AllComplete: Story = {
  args: {
    stages: LOAN_STAGES.map((title) => ({ title, status: "complete" as const })),
    onStepClick: () => {},
  },
  render: (args) => (
    <Frame>
      <ProgressBar {...args} />
    </Frame>
  ),
};

/** מובייל – stepper אופקי בכרטיס */
export const MobileStep2: Story = {
  args: { stages: makeStages(1), onStepClick: () => {} },
  render: (args) => (
    <FrameMobile>
      <ProgressBar {...args} />
    </FrameMobile>
  ),
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    docs: { description: { story: "מובייל – שלב פרטי הלוואה." } },
  },
};

export const MobileStep4: Story = {
  args: { stages: makeStages(3), onStepClick: () => {} },
  render: (args) => (
    <FrameMobile>
      <ProgressBar {...args} />
    </FrameMobile>
  ),
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    docs: { description: { story: "מובייל – שלב מסמכים והצהרות." } },
  },
};
