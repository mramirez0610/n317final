"use client";
import Hero from "@/components/hero";
import styles from "@/styles/landing.module.scss";

export default function Landing() {
  const clearLocalStorage = () => {
    localStorage.clear();
    alert("Local storage cleared!");
  };

  return (
    <main className={styles.landing}>
      <Hero imageSrc="/img/img1.jpeg" />
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
