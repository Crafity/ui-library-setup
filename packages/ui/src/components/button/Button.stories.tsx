/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import { Container } from 'components/container/Container'

export default {
  component: Button,
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Overview: Story = {
  render: () => (
    <>
      <h1>Primary Buttons</h1>
      <Container gap={10}>
        <Button>Primary</Button>
        <Button border>Border</Button>
        <Button disabled>Disabled</Button>
        <Button border disabled>
          Disabled
        </Button>
      </Container>
      <h1>Secondary Buttons</h1>
      <Container gap={10}>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" border>
          Border
        </Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
        <Button border variant="secondary" disabled>
          Disabled
        </Button>
      </Container>
    </>
  ),
  args: {},
  argTypes: {},
}

export const Primary: Story = {
  render: ({ variant, children, border, disabled, active, focus }) => (
    <Button
      active={active}
      focus={focus}
      border={border}
      disabled={disabled}
      variant={variant}
      onClick={console.log}>
      {children}
    </Button>
  ),
  args: {
    children: 'Button',
    variant: 'primary',
    disabled: false,
    active: false,
    focus: false,
    border: false,
  },
  argTypes: {
    border: { type: 'boolean' },
    disabled: { type: 'boolean' },
    active: { type: 'boolean' },
    focus: { type: 'boolean' },
    variant: {
      name: 'Variant',
      description: 'Button variant',
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
}
