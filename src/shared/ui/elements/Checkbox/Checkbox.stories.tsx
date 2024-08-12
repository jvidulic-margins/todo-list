import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { useCallback } from "react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "shared/elements/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],

  argTypes: {
    crossedWhenChecked: {
      control: "boolean",
    },
    color: {
      options: ["primary", "error"],
      control: { type: "radio" },
    },
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    id: "checkbox-default",
    checked: false,
    onChange: () => {},
    label: "",
    color: "primary",
    disabled: false,
  },
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    const onChange = useCallback(() => {
      updateArgs({ checked: !checked });
    }, [checked, updateArgs]);

    return <Checkbox {...args} onChange={onChange} checked={checked} />;
  },
};

export const Checked: Story = {
  args: {
    id: "checkbox-checked",
    checked: true,
    onChange: () => {},
    disabled: false,
    color: "primary",
  },
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    const onChange = useCallback(() => {
      updateArgs({ checked: !checked });
    }, [checked, updateArgs]);

    return <Checkbox {...args} onChange={onChange} checked={checked} />;
  },
};

export const CheckboxWithLabel: Story = {
  args: {
    id: "checkbox-with-label",
    checked: true,
    onChange: () => {},
    label: "With Label",
    disabled: false,
    color: "primary",
  },
  render: function Render(args) {
    const [{ checked }, updateArgs] = useArgs();

    const onChange = useCallback(() => {
      updateArgs({ checked: !checked });
    }, [checked, updateArgs]);

    return <Checkbox {...args} onChange={onChange} checked={checked} />;
  },
};
