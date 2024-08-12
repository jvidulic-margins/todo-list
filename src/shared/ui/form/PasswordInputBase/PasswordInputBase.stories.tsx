import type { Meta, StoryObj } from "@storybook/react";

import { PasswordInputBase } from "./PasswordInputBase";

const meta = {
  title: "shared/form/PasswordInputBase",
  component: PasswordInputBase,
} satisfies Meta<typeof PasswordInputBase>;

export default meta;
type Story = StoryObj<typeof PasswordInputBase>;

export const Contained: Story = {
  args: {
    placeholder: "Password",
  },
};
