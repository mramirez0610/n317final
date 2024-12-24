"use client";
import Image from "next/image";
import styles from "@/styles/landing.module.scss";

export default function Landing() {
  const clearLocalStorage = () => {
    localStorage.clear();
    alert("Local storage cleared!");
  };

  return (
    <main className={styles.landing}>
      <div className={styles.heroImgContainer}>
        <div className={styles.tint}></div> {/* Add this line for tint */}
        <Image
          src={"/img/img1.jpeg"}
          width={2000}
          height={2000}
          className={styles.heroImg}
        />
      </div>
      <div className={styles.info}>
        <h2>Welcome to RouteTracker!</h2>
        <p>
          This is a simple app to help you keep track of your climbing routes.
          You can log a new route by clicking the "Log a Route" link in the
          navigation bar.
        </p>
        <button onClick={clearLocalStorage}>Clear Local Storage</button>
      </div>
    </main>
  );
}
