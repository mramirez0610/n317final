import styles from "@/styles/submissionLayout.module.scss";

export default function SubmissionLayout({ children }) {
  return (
    <div className={styles.layout}>
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}
