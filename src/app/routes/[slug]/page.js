"use client";

import { useForm } from "@/context/FormContext";
import styles from "@/styles/route.module.scss";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function RouteDetails() {
  const { formData } = useForm();
  const { slug } = useParams();
  const [route, setRoute] = useState(null);

  //this was very difficult to get working...
  useEffect(() => {
    if (formData && slug) {
      const foundRoute = formData.find((route) => route.slug === slug);
      setRoute(foundRoute);
    }
  }, [formData, slug]);

  if (!slug) {
    return <p>Loading...</p>;
  }

  if (!route) {
    return <p>Route not found.</p>;
  }

  return (
    <main className={styles.routeDetails}>
      <h2>{route.climbName}</h2>
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
    </main>
  );
}
