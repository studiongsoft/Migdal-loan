import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FormField } from "./FormField";

const meta = {
  title: "Design System/FormField",
  component: FormField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    required: { control: "boolean" },
    type: { control: "select", options: ["text", "dropdown"] },
  },
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof FormField>;

const BANK_OPTIONS = [
  { value: "leumi", label: "בנק לאומי" },
  { value: "hapoalim", label: "בנק הפועלים" },
  { value: "discount", label: "בנק דיסקונט" },
];

const TREATMENT_OPTIONS = [
  { value: "1", label: "ערך 1" },
  { value: "2", label: "ערך 2" },
  { value: "3", label: "ערך 3" },
  { value: "4", label: "ערך 4" },
];

export const Empty: Story = {
  args: {
    label: "שם מלא",
    value: "",
    onChange: () => {},
    className: "min-w-[349px] max-w-[389px]",
  },
};

export const Filled: Story = {
  args: {
    label: "שם מלא",
    value: "דניאל לבובסקי",
    onChange: () => {},
  },
};

export const Error: Story = {
  args: {
    label: "שם מלא",
    value: "דניאל לבובסקי",
    onChange: () => {},
    error: "הודעת שגיאה",
  },
};

export const WithNote: Story = {
  args: {
    label: "שם מלא",
    value: "דניאל לבובסקי",
    onChange: () => {},
    note: "השם כפי שמופיע בתעודת זהות",
  },
};

export const Required: Story = {
  args: {
    label: "שם מלא",
    value: "",
    onChange: () => {},
    required: true,
  },
};

export const EmptyDropdown: Story = {
  args: {
    label: "שם הבנק",
    value: "",
    onChange: () => {},
    type: "dropdown",
    options: BANK_OPTIONS,
    placeholder: "בחר בנק",
  },
};

/** עיצוב מ-Figma node 1101-28726 - שדה dropdown עם מצבי ריק, פוקוס ומלא */
export const DropdownTreatmentType: Story = {
  render: () => (
    <div dir="rtl" className="flex flex-col gap-6">
      <FormField
        label="סוג הטיפול"
        value=""
        onChange={() => {}}
        type="dropdown"
        options={TREATMENT_OPTIONS}
        required
      />
      <FormField
        label="סוג הטיפול"
        value="1"
        onChange={() => {}}
        type="dropdown"
        options={TREATMENT_OPTIONS}
        required
      />
    </div>
  ),
};

/** אינטראקטיבי - כמו עיצוב Figma 1101-28726 */
export const InteractiveTreatmentDropdown: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div dir="rtl" className="flex flex-col gap-6">
        <FormField
          label="סוג הטיפול"
          value={value}
          onChange={setValue}
          type="dropdown"
          options={TREATMENT_OPTIONS}
          required
        />
      </div>
    );
  },
};

export const DropdownWithValue: Story = {
  args: {
    label: "שם הבנק",
    value: "leumi",
    onChange: () => {},
    type: "dropdown",
    options: BANK_OPTIONS,
  },
};

export const DropdownError: Story = {
  args: {
    label: "שם הבנק",
    value: "",
    onChange: () => {},
    type: "dropdown",
    options: BANK_OPTIONS,
    placeholder: "בחר בנק",
    required: true,
    error: "הודעת שגיאה",
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const validate = () => {
      if (!value.trim()) {
        setError("שדה חובה");
        return;
      }
      setError("");
    };
    return (
      <div dir="rtl" className="flex flex-col gap-4">
        <FormField
          label="שם מלא"
          value={value}
          onChange={(v) => {
            setValue(v);
            setError("");
          }}
          error={error}
          required
          placeholder="הכנס שם מלא"
        />
        <button
          type="button"
          onClick={validate}
          className="rounded-[4px] bg-[var(--color-primary)] px-4 py-2 text-white"
        >
          בדוק
        </button>
      </div>
    );
  },
};

export const InteractiveDropdown: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div dir="rtl" className="flex flex-col gap-4">
        <FormField
          label="שם הבנק"
          value={value}
          onChange={setValue}
          type="dropdown"
          options={BANK_OPTIONS}
          placeholder="בחר בנק"
        />
      </div>
    );
  },
};
