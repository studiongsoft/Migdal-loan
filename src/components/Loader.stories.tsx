import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";

const meta = {
  title: "Design System/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "אנימציית Lottie לטעינה – Loader.json (68×310px ברירת מחדל).",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    width: { control: "number" },
    height: { control: "number" },
  },
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    width: 68,
    height: 310,
  },
};

export const Small: Story = {
  args: {
    width: 34,
    height: 155,
  },
  parameters: {
    docs: {
      description: {
        story: "גודל מוקטן – חצי מהמקורי.",
      },
    },
  },
};

export const Large: Story = {
  args: {
    width: 136,
    height: 620,
  },
  parameters: {
    docs: {
      description: {
        story: "גודל מוגדל – פי 2 מהמקורי.",
      },
    },
  },
};
