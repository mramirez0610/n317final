import styles from "@/styles/page.module.scss";
import Landing from "@/components/landing";

export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
    </main>
  );
}
