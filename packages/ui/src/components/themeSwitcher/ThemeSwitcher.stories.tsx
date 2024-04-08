/* eslint-disable no-console */
import type { Meta, StoryObj } from '@storybook/react'

import { ThemeSwitcher } from './ThemeSwitcher'
import { Container } from 'components/container/Container'

export default {
  component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>

type Story = StoryObj<typeof ThemeSwitcher>

export const Details: Story = {
  render: () => (
    <Container inline flex="column" gap={10}>
      <ThemeSwitcher />
    </Container>
  ),
}
