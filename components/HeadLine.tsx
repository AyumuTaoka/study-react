import styles from "../styles/Home.module.css";

interface HeadLineProps {
  title: string;
}

export function HeadLine(props: HeadLineProps) {
  return (
    <div>
      <h1 className={styles.title}>{props.title} Pages</h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/index.tsx</code>
      </p>
    </div>
  );
}
