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
    </header>
  );
}
