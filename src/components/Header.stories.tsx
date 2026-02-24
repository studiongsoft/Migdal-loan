import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta = {
  title: "Design System/Header",
  component: Header,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
  argTypes: {
    onBack: { action: "back" },
    onNewProcess: { action: "newProcess" },
    onMenuClick: { action: "menuClick" },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof Header>;

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div dir="rtl" className="min-h-[300px] w-full bg-[#f4f8fc]">
    {children}
  </div>
);

export const LogoOnly: Story = {
  render: () => (
    <Frame>
      <Header />
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: "דסקטופ – לוגו + כפתור עליון (הי טל | התנתק) לדף הבית.",
      },
    },
  },
};

export const WithBackArrow: Story = {
  render: () => (
    <Frame>
      <Header onBack={() => alert("חזרה")} />
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: "דסקטופ – לוגו + חץ חזרה.",
      },
    },
  },
};

export const WithNewProcess: Story = {
  render: () => (
    <Frame>
      <Header onNewProcess={() => alert("תהליך חדש")} />
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: "דסקטופ – לוגו + כפתור עליון + תהליך חדש.",
      },
    },
  },
};

export const Full: Story = {
  render: () => (
    <Frame>
      <Header
        onBack={() => alert("חזרה")}
        onNewProcess={() => alert("תהליך חדש")}
      />
    </Frame>
  ),
  parameters: {
    docs: {
      description: {
        story: "דסקטופ – מלא: לוגו, חץ חזרה, כפתור עליון, תהליך חדש.",
      },
    },
  },
};

/** מובייל – התחלת תהליך: תפריט | לוגו | פרופיל */
export const MobileDefault: Story = {
  render: () => (
    <Frame>
      <Header onMenuClick={() => alert("תפריט נפתח")} />
    </Frame>
  ),
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    docs: {
      description: {
        story:
          "מובייל – בתחילת תהליך: תפריט (3 נקודות) | לוגו מגדל (Layer_1) | פרופיל. לחיצה על תפריט פותחת sheet עם חזור/תהליך חדש.",
      },
    },
  },
};

/** מובייל – בעת ניווט: חץ חזרה | לוגו | תפריט + פרופיל */
export const MobileWithBack: Story = {
  render: () => (
    <Frame>
      <Header
        onBack={() => alert("חזרה")}
        onMenuClick={() => alert("תפריט נפתח")}
      />
    </Frame>
  ),
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    docs: {
      description: {
        story:
          "מובייל – כשיש לאן לחזור: חץ חזרה | לוגו | תפריט + פרופיל (מקבילים). התפריט עובר לצד הפרופיל.",
      },
    },
  },
};

/** מובייל – מלא עם תפריט */
export const MobileFull: Story = {
  render: () => (
    <Frame>
      <Header
        onBack={() => alert("חזרה")}
        onNewProcess={() => alert("תהליך חדש")}
        onMenuClick={() => alert("תפריט נפתח")}
      />
    </Frame>
  ),
  parameters: {
    viewport: { defaultViewport: "mobile1" },
    docs: {
      description: {
        story: "מובייל – חץ חזרה | לוגו | תפריט + פרופיל. התפריט מציג חזור ותהליך חדש.",
      },
    },
  },
};
