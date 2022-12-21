import Link from 'next/link';
import { SyntheticEvent } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  function handleLogin(e: SyntheticEvent) {
    e.preventDefault();
    // TODO: add login function here
  }

  return (
    <header>
      <div className={styles.loggedInStatusContainer}>
        <p className={styles.loggedInStatusMessage}>
          You are currently not logged in
        </p>
        <a onClick={handleLogin} className={styles.loginButton}>
          Log In
        </a>
      </div>
      <nav>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/csr">CSR</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/ssr">SSR</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/protected-page">Protected Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
