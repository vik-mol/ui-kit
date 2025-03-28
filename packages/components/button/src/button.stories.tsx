/** @format */

import type { Meta, StoryObj } from '@storybook/react';

import Button from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: {
    children: 'click me',
  },
};
