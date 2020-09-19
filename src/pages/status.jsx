import React from 'react';
import styles from './status.module.css'

export default function StatusPage() {
  return (
    <div className={styles.app}>
        <div className={styles.logo}>
            <img src="/isolated.svg"></img>
        </div>
        <p className={styles.title}>TweetShift Status</p>
        <p className={styles.subtitle}>Here you can check the status of our services.</p>
        <br></br>
        <p>Welcome</p>
    </div>
  );
}