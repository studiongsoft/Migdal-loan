import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Design System/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "רוצה למשוך",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "אפשרי",
    variant: "secondary",
  },
};

export const Link: Story = {
  args: {
    children: "מידע נוסף",
    variant: "link",
  },
};

export const LinkShowLess: Story = {
  args: {
    children: "הצג פחות",
    variant: "link",
  },
};
