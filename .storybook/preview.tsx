import React from "react";
import type { Preview } from "@storybook/react";
import "../src/app/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="bg-slate-950 min-h-screen grid place-items-center text-white">
        <Story />
      </div>
    ),
  ],
};

export default preview;
