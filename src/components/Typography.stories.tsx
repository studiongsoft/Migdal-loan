import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta = {
  title: "Design System/Typography",
  component: Typography,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof Typography>;

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-[700px]">
      <Typography variant="h1">כותרת ראשית H1</Typography>
      <Typography variant="h2">כותרת משנית H2</Typography>
      <Typography variant="h3">כותרת קטנה H3</Typography>
      <Typography variant="body-lg">טקסט גוף גדול</Typography>
      <Typography variant="body-md">טקסט גוף רגיל</Typography>
      <Typography variant="body-sm">טקסט גוף קטן</Typography>
      <Typography variant="caption">כיתוב קטן / Caption</Typography>
    </div>
  ),
};
