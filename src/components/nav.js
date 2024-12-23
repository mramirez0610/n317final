import styles from "../styles/nav.module.scss";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h3>RouteTracker</h3>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>

        <SignedIn>
          <li>
            <a href="/newRoute">Log a Route</a>
          </li>
        </SignedIn>
        <li>
          <a href="/allRoutes">Your Routes</a>
        </li>
        <li>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </li>
      </ul>
    </div>
  );
}
