import styles from "./button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button className={styles.button} onClick={() => props.onClick()}>{props.children}</button>;
}

export default Button;
