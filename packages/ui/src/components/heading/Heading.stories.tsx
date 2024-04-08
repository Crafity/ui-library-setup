import type { Meta, StoryObj } from '@storybook/react'

import { Heading, tags, sizes } from './Heading'

export default {
  component: Heading,
} satisfies Meta<typeof Heading>

type Story = StoryObj<typeof Heading>

export const Overview: Story = {
  render: () => (
    <>
      {sizes.map(size => (
        <Heading key={size} size={size}>
          Heading of size {size}
        </Heading>
      ))}
    </>
  ),
}

export const Details: Story = {
  args: {
    children: 'Heading',
    size: 'xxl',
    tag: 'h1',
  },
  argTypes: {
    tag: {
      name: 'Tag',
      description: 'HTML tag to use',
      options: tags,
      control: { type: 'radio' },
    },
  },
}
