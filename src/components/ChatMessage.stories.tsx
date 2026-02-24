import type { Meta, StoryObj } from "@storybook/react";
import { ChatMessage } from "./ChatMessage";

const meta = {
  title: "Design System/Chat/ChatMessage",
  component: ChatMessage,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof ChatMessage>;

export default meta;

type Story = StoryObj<typeof ChatMessage>;

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div
    dir="rtl"
    className="w-[900px] bg-white p-10 rounded-[16px] border border-[#E6ECF5]"
  >
    <div className="flex flex-col gap-4">{children}</div>
  </div>
);

export const System: Story = {
  args: {
    type: "system",
    message: "שלום ישראל!\nאני כאן כדי לעזור לך להמשיך כספים מקופת קשת שלך.",
  },
  render: (args) => (
    <Frame>
      <ChatMessage {...args} />
    </Frame>
  ),
};

export const User: Story = {
  args: {
    type: "user",
    message: "כן, אני רוצה להמשיך",
  },
  render: (args) => (
    <Frame>
      <ChatMessage {...args} />
    </Frame>
  ),
};

export const Conversation: Story = {
  render: () => (
    <Frame>
      <ChatMessage
        type="system"
        message={"שלום ישראל!\nאני כאן כדי לעזור לך בתהליך."}
      />
      <ChatMessage type="user" message={"כן, אני רוצה להמשיך"} />
      <ChatMessage type="system" message={"מעולה, בוא נתחיל"} />
    </Frame>
  ),
};
