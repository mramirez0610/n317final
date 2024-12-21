"use client";
import { useForm } from "@/context/FormContext";
import styles from "@/styles/submission.module.scss";
import Link from "next/link";

export default function Submission() {
  const { formData } = useForm();

  console.log("form data: ", formData);

  if (!formData || formData.length === 0) {
    return <p>No routes found. Please add some routes.</p>;
  }

  return (
    <main className={styles.submission}>
      <h2>here's your routes!</h2>
      {formData.map((route, index) => (
        <div key={index} className={styles.route}>
          <div className={styles.dataItem}>
            <h3>Climb Name:</h3>
            <p>{route.climbName}</p>
            <Link href={`/routes/${route.slug}`}>View Details</Link>
            <div className={styles.dataItem}>
              <h3>Climb Type:</h3>
              <p>{route.climbType}</p>
            </div>
            <div className={styles.dataItem}>
              <h3>Sub Type:</h3>
              <p>{route.subType}</p>
            </div>
          </div>
          <div className={styles.dataItem}>
            <h3>Notes:</h3>
            <p>{route.notes}</p>
          </div>
        </div>
      ))}
    </main>
  );
}
