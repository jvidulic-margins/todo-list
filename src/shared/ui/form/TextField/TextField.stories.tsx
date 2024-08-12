import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "./TextField";

const meta = {
  title: "shared/form/TextField",
  component: TextField,
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

export const Contained: Story = {
  args: {
    label: "Label",
    placeholder: "Type here",
    helperText: "Helper text",
  },
};
