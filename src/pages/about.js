import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const AboutList = [
  {
    title: 'Our Mission',
    Svg: require('@site/static/img/undraw_mission.svg').default,
    description: (
      <>
        We are dedicated to providing cutting-edge solutions for automated marking in the education industry.
      </>
    ),
  },
  {
    title: 'Our Team',
    Svg: require('@site/static/img/undraw_team.svg').default,
    description: (
      <>
        Our team consists of experienced professionals who are passionate about revolutionizing education technology.
      </>
    ),
  },
  // Add more sections as needed
];

function AboutSection({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className="row">
          {AboutList.map((props, idx) => (
            <AboutSection key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
