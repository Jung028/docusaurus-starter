import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import AutoMarkingFeatures from '@site/src/components/AutoMarkingFeatures';

function AutoMarking() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`AutoMarking Demo - ${siteConfig.title}`}
      description={`Schedule a demo for AutoMarking by ${siteConfig.title}`}>
      <main className={clsx(styles.main, styles.centered)}>
        <div className={styles.demoButtonContainer}>
          <AutoMarkingFeatures />
        </div>
      </main>
    </Layout>
  );
}

export default AutoMarking;
