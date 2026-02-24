import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Radio } from "./Radio";

const meta = {
  title: "Design System/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    variant: { control: "select", options: ["card", "minimal"] },
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof Radio>;

export const Unchecked: Story = {
  args: {
    value: "option1",
    label: "אפשרות ראשונה",
    name: "demo",
    checked: false,
    onChange: () => {},
  },
};

export const Checked: Story = {
  args: {
    value: "option1",
    label: "אפשרות ראשונה",
    name: "demo",
    checked: true,
    onChange: () => {},
  },
};

export const Interactive: Story = {
  render: () => {
    const [selected, setSelected] = useState("fixed");
    const options = [
      { value: "fixed", label: "קבועה 3.1%" },
      { value: "variable", label: "משתנה פריים- 3.3%" },
    ];
    return (
      <div className="flex flex-wrap gap-2" dir="rtl">
        {options.map((opt) => (
          <Radio
            key={opt.value}
            value={opt.value}
            label={opt.label}
            name="interest"
            checked={selected === opt.value}
            onChange={() => setSelected(opt.value)}
          />
        ))}
      </div>
    );
  },
};

export const GroupExample: Story = {
  render: () => {
    const [rate, setRate] = useState("fixed");
    const [loanType, setLoanType] = useState("spitzer");
    const [hasGrace, setHasGrace] = useState(false);
    return (
      <div className="flex flex-col gap-6" dir="rtl">
        <div>
          <p className="mb-2 text-[14px] font-normal text-[#5E5D9A]">ריבית</p>
          <div className="flex flex-wrap gap-2">
            <Radio
              value="fixed"
              label="קבועה 3.1%"
              name="rate"
              checked={rate === "fixed"}
              onChange={() => setRate("fixed")}
            />
            <Radio
              value="variable"
              label="משתנה פריים- 3.3%"
              name="rate"
              checked={rate === "variable"}
              onChange={() => setRate("variable")}
            />
          </div>
        </div>
        <div>
          <p className="mb-2 text-[14px] font-normal text-[#5E5D9A]">סוג הלוואה</p>
          <div className="flex flex-wrap gap-2">
            <Radio
              value="spitzer"
              label="שפיצר"
              name="loanType"
              checked={loanType === "spitzer"}
              onChange={() => setLoanType("spitzer")}
            />
            <Radio
              value="balloon"
              label="בלון"
              name="loanType"
              checked={loanType === "balloon"}
              onChange={() => setLoanType("balloon")}
            />
            <Radio
              value="partial_balloon"
              label="בלון חלקי"
              name="loanType"
              checked={loanType === "partial_balloon"}
              onChange={() => setLoanType("partial_balloon")}
            />
          </div>
        </div>
        <div>
          <p className="mb-2 text-[14px] font-normal text-[#5E5D9A]">גרייס</p>
          <div className="flex flex-wrap gap-2">
            <Radio value="yes" label="כן" name="grace" checked={hasGrace} onChange={() => setHasGrace(true)} />
            <Radio value="no" label="ללא" name="grace" checked={!hasGrace} onChange={() => setHasGrace(false)} />
          </div>
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    value: "option1",
    label: "אפשרות לא זמינה",
    name: "demo",
    checked: false,
    onChange: () => {},
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    value: "option1",
    label: "אפשרות נבחרת (לא זמינה)",
    name: "demo",
    checked: true,
    onChange: () => {},
    disabled: true,
  },
};

export const MinimalUnchecked: Story = {
  args: {
    value: "variable",
    label: "משתנה פריים- 3.3%",
    name: "interest",
    checked: false,
    onChange: () => {},
    variant: "minimal",
  },
};

export const MinimalChecked: Story = {
  args: {
    value: "fixed",
    label: "קבועה 3.1%",
    name: "interest",
    checked: true,
    onChange: () => {},
    variant: "minimal",
  },
};

export const MinimalInteractive: Story = {
  render: () => {
    const [selected, setSelected] = useState("fixed");
    const options = [
      { value: "fixed", label: "קבועה 3.1%" },
      { value: "variable", label: "משתנה פריים- 3.3%" },
    ];
    return (
      <div dir="rtl">
        <p className="mb-3 text-[14px] font-normal text-[#5E5D9A]">ריבית</p>
        <div className="flex flex-wrap gap-6">
          {options.map((opt) => (
            <Radio
              key={opt.value}
              value={opt.value}
              label={opt.label}
              name="interest-minimal"
              checked={selected === opt.value}
              onChange={() => setSelected(opt.value)}
              variant="minimal"
            />
          ))}
        </div>
      </div>
    );
  },
};
