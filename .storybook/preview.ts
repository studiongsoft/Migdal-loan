import type { Preview } from "@storybook/nextjs-vite";
import React from "react";
import "../src/app/globals.css";

const preview: Preview = {
  decorators: [
    (Story) =>
      React.createElement(
        "div",
        { className: "font-migdal", dir: "rtl", lang: "he" },
        React.createElement(Story)
      ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
