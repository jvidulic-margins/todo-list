import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "shared/elements/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: {
    children: "Button",
  },
};

export const Outlined: Story = {
  args: {
    children: "Button",
    variant: "outlined",
  },
};

export const Text: Story = {
  args: {
    children: "Button",
    variant: "text",
  },
};

export const Link: Story = {
  args: {
    children: "Button",
    variant: "link",
  },
};

export const Loading: Story = {
  args: {
    children: "Button",
    isLoading: true,
  },
};
