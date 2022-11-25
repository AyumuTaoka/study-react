import styles from "./HeadLine.module.css";
import Link from "next/link";

interface HeadLineProps {
  title: string;
  onClick?: any;
  children?: any;
}

export function HeadLine(props: HeadLineProps) {
  return (
    <div>
      <h1 className={styles.title}>{props.title} Page</h1>

      <p className={styles.description}>
        Get started by editing {props.children}
      </p>
      <Link href="/">index</Link>
      <Link href="/about">about</Link>
      <button onClick={props.onClick}>button</button>
    </div>
  );
}
