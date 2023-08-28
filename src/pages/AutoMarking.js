import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function AutoMarking() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`AutoMarking Demo - ${siteConfig.title}`}
      description={`Schedule a demo for AutoMarking by ${siteConfig.title}`}>
      <main className={clsx(styles.main, styles.centered)}>
        <div className={styles.demoButtonContainer}>
          <h1>Schedule a Demo for AutoMarking</h1>
          <p>Fill in the details below to schedule a demo of our AutoMarking software:</p>

          {/* Add your form elements here */}
          {/* For example, input fields for name, email, etc. */}
          
          <button className={styles.demoButton}>Get a Demo</button>
        </div>
      </main>
    </Layout>
  );
}

export default AutoMarking;
