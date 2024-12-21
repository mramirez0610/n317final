import styles from "../styles/nav.module.scss";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
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
          <a href="/submission">Submission</a>
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
    </nav>
  );
}
