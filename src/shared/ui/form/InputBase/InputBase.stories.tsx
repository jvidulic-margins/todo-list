import type { Meta, StoryObj } from "@storybook/react";

import { InputBase } from "./InputBase";

const meta = {
  title: "shared/form/InputBase",
  component: InputBase,
} satisfies Meta<typeof InputBase>;

export default meta;
type Story = StoryObj<typeof InputBase>;

export const Contained: Story = {
  args: {
    placeholder: "Type something...",
  },
};
