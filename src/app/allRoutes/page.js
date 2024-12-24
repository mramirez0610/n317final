"use client";
import { useForm } from "@/context/FormContext";
import styles from "@/styles/allRoutes.module.scss";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/hero";

export default function AllRoutes() {
  const { formData } = useForm();

  console.log("form data: ", formData);

  if (!formData || formData.length === 0) {
    return (
      <main className={styles.allRoutes}>
        <Hero imageSrc="/img/img3.jpeg" />
        <p className={styles.errorMessage}>
          No routes found. Please add some routes.
        </p>
      </main>
    );
  }

  return (
    <main className={styles.allRoutes}>
      <Hero imageSrc="/img/img3.jpeg" />

      <div className={styles.routesContainer}>
        <h3>Your Routes:</h3>
        <div className={styles.routes}>
          {formData.map((route, index) => (
            <div key={index} className={styles.route}>
              <div className={styles.dataItem}>
                <h3>Climb Name:</h3>
                <p>{route.climbName}</p>
                <Link href={`/routes/${route.slug}`}>View Details</Link>
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
                <h3>Notes:</h3>
                <p>{route.notes}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
