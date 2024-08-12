import type { Meta, StoryObj } from "@storybook/react";

import { FormHelperText } from "./FormHelperText";

const meta = {
  title: "shared/form/FormHelperText",
  component: FormHelperText,
} satisfies Meta<typeof FormHelperText>;

export default meta;
type Story = StoryObj<typeof FormHelperText>;

export const Contained: Story = {
  args: {
    children: "Helper text",
  },
};
