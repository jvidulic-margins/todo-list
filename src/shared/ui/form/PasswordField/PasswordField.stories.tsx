import type { Meta, StoryObj } from "@storybook/react";

import { PasswordField } from "./PasswordField";

const meta = {
  title: "shared/form/PasswordField",
  component: PasswordField,
} satisfies Meta<typeof PasswordField>;

export default meta;
type Story = StoryObj<typeof PasswordField>;

export const Contained: Story = {
  args: {
    label: "Label",
    placeholder: "Password",
    helperText: "Helper text",
  },
};
