import styles from './card.module.scss'

interface CardProps {
  children: React.ReactNode
}
export function Card({ children }: CardProps) {
  return <div className={styles.card}>{children}</div>
}
