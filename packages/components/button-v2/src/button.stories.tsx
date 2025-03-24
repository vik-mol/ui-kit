/** @format */

import type { Meta, StoryObj } from "@storybook/react";

import Button from "./button";

const meta = {
  title: "Components/Button-v2",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};
