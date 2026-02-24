import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FileUploadSlot } from "./FileUploadSlot";

const meta = {
  title: "Design System/FileUploadSlot",
  component: FileUploadSlot,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    maxSizeMb: { control: "number" },
    error: { control: "text" },
  },
} satisfies Meta<typeof FileUploadSlot>;

export default meta;

type Story = StoryObj<typeof FileUploadSlot>;

export const Default: Story = {
  args: {
    label: "דוח נתוני אשראי מבנק ישראל",
    value: null,
    onChange: () => {},
  },
};

export const WithError: Story = {
  args: {
    label: "הרשאת ניהול חשבון *",
    value: null,
    onChange: () => {},
    error: "שדה חובה",
  },
};

const mockFile = () =>
  new File(
    [new Blob(["x".repeat(9200000)])],
    "Migdal-document.pdf",
    { type: "application/pdf" }
  );

/** מצב הצלחה – העלאה הסתיימה */
export const WithFileSuccess: Story = {
  render: () => (
    <div dir="rtl" className="w-full max-w-[400px]">
      <FileUploadSlot
        label="דוח נתוני אשראי מבנק ישראל"
        value={mockFile()}
        onChange={() => {}}
        maxSizeMb={8}
        storybookOverride={{ status: "success" }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "מצב הצלחה – שם קובץ, 'העלאה הסתיימה' בירוק, כפתור מחיקה.",
      },
    },
  },
};

/** מצב העלאה – progress ו-loader מעגלי */
export const WithFileUploading: Story = {
  render: () => (
    <div dir="rtl" className="w-full max-w-[400px]">
      <FileUploadSlot
        label="דוח נתוני אשראי מבנק ישראל"
        value={mockFile()}
        onChange={() => {}}
        maxSizeMb={8}
        storybookOverride={{ status: "uploading", progress: 40 }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "מצב העלאה – loader מעגלי, '40% מהקובץ עלה · X MB' בכחול.",
      },
    },
  },
};

/** מצב שגיאה – העלאה נכשלה */
export const WithFileError: Story = {
  render: () => (
    <div dir="rtl" className="w-full max-w-[400px]">
      <FileUploadSlot
        label="דוח נתוני אשראי מבנק ישראל"
        value={mockFile()}
        onChange={() => {}}
        maxSizeMb={8}
        storybookOverride={{ status: "error" }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "מצב שגיאה – 'העלאה נכשלה' באדום (#af0057), כפתור מחיקה.",
      },
    },
  },
};

/** כל מצבי WithFile בעמוד אחד (לפי Figma 1126-28557) */
export const WithFileAllStates: Story = {
  render: () => (
    <div dir="rtl" className="flex flex-col gap-6">
      <FileUploadSlot
        label="העלאה הסתיימה"
        value={mockFile()}
        onChange={() => {}}
        maxSizeMb={8}
        storybookOverride={{ status: "success" }}
      />
      <FileUploadSlot
        label="העלאה נכשלה"
        value={mockFile()}
        onChange={() => {}}
        maxSizeMb={8}
        storybookOverride={{ status: "error" }}
      />
      <FileUploadSlot
        label="בהעלאה"
        value={mockFile()}
        onChange={() => {}}
        maxSizeMb={8}
        storybookOverride={{ status: "uploading", progress: 40 }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "שלושת המצבים – Success, Error, Upload – לפי עיצוב Figma.",
      },
    },
  },
};

/** סקציית העלאת מסמכים כמו בעמוד מסמכים והצהרות */
export const DocumentsSection: Story = {
  render: () => {
    const [file1, setFile1] = useState<File | null>(null);
    const [file2, setFile2] = useState<File | null>(null);
    return (
      <div dir="rtl" className="flex max-w-[700px] flex-col gap-6">
        <h3 className="text-right text-[18px] font-bold text-[var(--color-primary)]">
          העלאת מסמכים
        </h3>
        <div className="flex flex-col gap-4 md:flex-row">
          <FileUploadSlot
            label="דוח נתוני אשראי מבנק ישראל"
            value={file1}
            onChange={setFile1}
            maxSizeMb={8}
          />
          <FileUploadSlot
            label="הרשאת ניהול חשבון *"
            value={file2}
            onChange={setFile2}
            maxSizeMb={8}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "מקטע העלאת מסמכים – שני שטחי העלאה, תומך בגרירה והשמה.",
      },
    },
  },
};

/** אינטראקטיבי – העלאת קובץ וניהול המצבים */
export const Interactive: Story = {
  render: () => {
    const [file, setFile] = useState<File | null>(null);
    return (
      <div dir="rtl" className="w-full max-w-[400px]">
        <FileUploadSlot
          label="דוח נתוני אשראי מבנק ישראל"
          value={file}
          onChange={setFile}
          maxSizeMb={8}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "ניתן להעלות קובץ (לחיצה או גרירה), לראות התקדמות ולהסיר.",
      },
    },
  },
};
