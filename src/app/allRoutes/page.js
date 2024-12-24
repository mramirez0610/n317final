"use client";
import { useForm } from "@/context/FormContext";
import styles from "@/styles/allRoutes.module.scss";
import Link from "next/link";
import Hero from "@/components/hero";

export default function AllRoutes() {
  const { formData } = useForm();

  if (!formData || formData.length === 0) {
    return (
      <main className={styles.allRoutes}>
        <Hero imageSrc="/img/img3.jpeg" alt="No routes found hero image" />
        <p className={styles.errorMessage}>
          No routes found. Please add some routes.
        </p>
      </main>
    );
  }

  return (
    <main className={styles.allRoutes}>
      <Hero imageSrc="/img/img3.jpeg" alt="All routes hero image" />
      <section className={styles.routesContainer}>
        <h3>Your Routes:</h3>
        <div className={styles.routes}>
          {formData.map((route, index) => (
            <article key={index} className={styles.route}>
              <div className={styles.dataItem}>
                <h3>Climb Name:</h3>
                <p>{route.climbName}</p>
              </div>
              <div className={styles.dataItem}>
                <h3>Climb Type:</h3>
                <p>{route.climbType}</p>
              </div>
              <div className={styles.dataItem}>
                <h3>Sub Type:</h3>
                <p>{route.subType}</p>
              </div>
              <div className={styles.dataItem}>
                <Link href={`/routes/${route.slug}`}>View for notes</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
