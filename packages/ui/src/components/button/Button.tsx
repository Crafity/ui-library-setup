import classnames from 'classnames'
import { Button as AriaButton } from 'react-aria-components'
import styles from './button.module.scss'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  border?: boolean
  disabled?: boolean
  children: React.ReactNode
  active?: boolean
  focus?: boolean
  centered?: boolean
  icon?: React.ReactNode
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
}

export function Button({
  variant = 'primary',
  border = false,
  disabled = false,
  active = false,
  focus = false,
  icon,
  iconLeft,
  iconRight,
  onClick,
  centered,
  children,
}: ButtonProps) {
  console.log('styles', styles)
  return (
    <AriaButton
      className={classnames(styles.button, styles[variant], {
        [styles.border]: border,
        [styles.active]: active,
        [styles.focus]: focus,
        [styles.centered]: centered,
        [styles.circular]: icon,
      })}
      isDisabled={disabled}
      onPress={onClick}>
      {icon ? (
        icon
      ) : (
        <>
          {iconLeft}
          <span className={styles.children}>{children}</span>
          {iconRight}
        </>
      )}
    </AriaButton>
  )
}

export default Button
