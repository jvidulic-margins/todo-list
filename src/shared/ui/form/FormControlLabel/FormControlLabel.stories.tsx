import type { Meta, StoryObj } from "@storybook/react";

import { FormControlLabel } from "./FormControlLabel";

const meta = {
  title: "shared/form/FormControlLabel",
  component: FormControlLabel,
} satisfies Meta<typeof FormControlLabel>;

export default meta;
type Story = StoryObj<typeof FormControlLabel>;

export const Contained: Story = {
  args: {
    children: "Label",
  },
};
