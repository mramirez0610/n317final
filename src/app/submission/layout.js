import styles from "@/styles/submissionLayout.module.scss";

export default function SubmissionLayout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1>submission page</h1>
      </header>
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}
