import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>İlayda aptal</h1>
      <Link href="/about">About Us</Link>
    </div>
  );
}
