import { createElement } from 'react'
import styles from './heading.module.scss'
import classnames from 'classnames'

export const sizes = ['xxl', 'xl', 'l', 'm', 's'] as const
type Size = (typeof sizes)[number]
export const tags = ['h1', 'h2', 'h3', 'h4', 'h5'] as const
type Tag = (typeof tags)[number]

export const sizeToTag = {
  xxl: 'h1',
  xl: 'h2',
  l: 'h3',
  m: 'h4',
  s: 'h5',
} as const satisfies Record<Size, Tag>

interface HeadingProps {
  size: Size
  tag?: Tag
  uppercase?: boolean
  children: React.ReactNode
}
// text-transform: uppercase;

export function Heading({
  size = 'xxl',
  tag,
  uppercase,
  children,
}: HeadingProps) {
  return createElement(tag || sizeToTag[size], {
    className: classnames(styles.heading, styles[size]),
    style: { textTransform: uppercase && 'uppercase' },
    children,
  })
}
