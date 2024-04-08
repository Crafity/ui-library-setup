/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { Container } from 'components/container/Container';

export default {
  component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Overview: Story = {
  render: () => (
    <Container inline flex="column" gap={10}>
      <Button variant="secondary" onClick={console.log}>
        Primary
      </Button>
      <Button variant="primary" onClick={console.log}>
        Secondary
      </Button>
    </Container>
  ),
};

export const Primary: Story = {
  render: ({ variant, children }) => (
    <Button variant={variant} onClick={console.log}>
      {children}
    </Button>
  ),
  args: {
    children: 'Button',
    variant: 'primary',
  },
  argTypes: {
    variant: {
      name: 'Variant',
      description: 'Button variant',
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};
