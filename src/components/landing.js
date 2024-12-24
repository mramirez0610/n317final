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
      <Hero imageSrc="/img/img1.jpeg" alt="Climbing hero image" />
      <section className={styles.info}>
        <h2 className={styles.title}>Welcome to RouteTracker!</h2>
        <p className={styles.paragraph}>
          This is a simple app to help you keep track of your climbing routes.
          You can log a new route by clicking the "Log a Route" link in the
          navigation bar.
        </p>
        <p className={styles.paragraph}>
          Just as quick note, here's a rundown on climbing grades
        </p>
        <ul>
          <li>Bouldering (no ropes, short climbs): V0 - V17</li>
          <li>Sport (ropes, longer climbs): 5.5 - 5.15</li>
        </ul>
        <p className={styles.paragraph}>
          I left this button down here for development purposes. It clears the
          localStorage, which is where the routes are stored. If you want to
          start fresh, click the button below.
        </p>
        <button onClick={clearLocalStorage}>Clear Local Storage</button>
      </section>
    </main>
  );
}
