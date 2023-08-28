import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const AboutList = [
  {
    title: 'Our Mission',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        With this software, they can store it and mark it online, and even provide feedback on the paper. From now on, marking papers won't take 2 weeks for everything to be marked and lecturers can now focus on other things to improve their education rather than marking papers. The process is, instead of lecturers, reading the hard handwriting, they just need to take photo of the paper, or scan the paper, and automatically, the paper will be converted to csv files of clear texts, no more straining eyes to read the handwriting
      </>
    ),
  },
  {
    title: 'Transforming Education',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Our journey is rooted in transforming the landscape of education through innovative technology. We envision a future where educators can focus on nurturing students' growth and enhancing learning experiences without the burden of tedious paper grading.
      </>
    ),
  },
  {
    title: 'Empowering Educators',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Our commitment extends beyond automation. We empower educators to inspire and engage students, promoting meaningful interactions and driving educational excellence. By harnessing the power of automation, we free up valuable time for teachers to focus on what truly matters—educating the next generation.
      </>
    ),
  },
];

function AboutFeature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function AboutFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {AboutList.map((props, idx) => (
            <AboutFeature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
