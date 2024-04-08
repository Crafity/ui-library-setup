/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'
import { Container } from 'components/container/Container'

export default {
  component: Card,
} satisfies Meta<typeof Card>

type Story = StoryObj<typeof Card>

export const Overview: Story = {
  render: () => (
    <Container inline flex="column" gap={10}>
      <Card>Primary</Card>
    </Container>
  ),
}

export const Details: Story = {
  render: ({ children }) => <Card>{children}</Card>,
  args: {
    children: 'Card',
  },
}
