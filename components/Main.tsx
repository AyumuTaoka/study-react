import { HeadLine } from "../components/HeadLine";
import { Links } from "../components/Links";
import styles from "../styles/Home.module.css";

interface MainProps {
  title: string;
}

export function Main(props: MainProps) {
  return (
    <main className={styles.main}>
      <HeadLine title={props.title} onClick={() => alert("clicked!!")}>
        <code className={styles.code}>pages/{props.title}.tsx</code>
      </HeadLine>
      <Links />
    </main>
  );
}
