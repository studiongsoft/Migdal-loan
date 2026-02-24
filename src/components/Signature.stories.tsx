import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Signature } from "./Signature";

const meta = {
  title: "Design System/Signature",
  component: Signature,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Signature>;

export default meta;

type Story = StoryObj<typeof Signature>;

export const Empty: Story = {
  args: {
    value: "",
    onChange: () => {},
  },
};

export const Signed: Story = {
  args: {
    value: "ישראל ישראלי",
    onChange: () => {},
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="w-full max-w-[500px]">
        <Signature value={value} onChange={setValue} />
      </div>
    );
  },
};
