import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { SyntheticEvent } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  const { data: session } = useSession();

  function handleLogin(e: SyntheticEvent) {
    e.preventDefault();
    signIn();
  }

  function handleLogout(e: SyntheticEvent) {
    e.preventDefault();
    signOut();
  }

  return (
    <header>
      <div
        className={`${styles.currentStatusContainer} ${
          session && styles.loggedInStatusContainer
        }`}
      >
        {!session && (
          <>
            <p className={styles.currentStatusMessage}>
              You are currently not logged in
            </p>
            <a onClick={handleLogin} className={styles.loginButton}>
              Log In
            </a>
          </>
        )}
        {session?.user && (
          <>
            <p className={styles.currentStatusMessage}>
              Logged in as {`${session.user.name}`}
            </p>
            <a onClick={handleLogout} className={styles.loginButton}>
              Log Out
            </a>
          </>
        )}
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
