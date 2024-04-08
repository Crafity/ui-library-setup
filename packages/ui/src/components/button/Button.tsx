import styles from './button.module.scss';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick: () => void;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      className={`${styles[variant]} ${styles.button}`}
      onClick={() => onClick()}>
      {children}
    </button>
  );
}

export default Button;
