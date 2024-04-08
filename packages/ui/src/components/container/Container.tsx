import styles from './container.module.scss'

interface ContainerProps {
  flex?: 'row' | 'column'
  inline?: boolean
  gap?: number
  children: React.ReactNode
}

export function Container({ children, flex, gap, inline }: ContainerProps) {
  return (
    <div
      style={{
        display:
          flex || gap
            ? inline
              ? 'inline-flex'
              : 'flex'
            : inline
              ? 'inline-block'
              : 'block',
        flexDirection: flex,
        gap: gap ? `${gap}px` : undefined,
      }}
      className={styles.container}>
      {children}
    </div>
  )
}
