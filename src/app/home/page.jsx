import React from 'react';
import Hero from 'public/hero.png';
import Button from 'src/components/Button/Button.jsx';
import Image from 'next/image';
import styles from './page.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Share Your Works</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together to the global tech
          industry.
        </p>

        <div className={styles.buttonItems}>
          <Button url="/blog" text="See Our Blogs" />
          <Button url="/portfolio" text="See Our Works" />
        </div>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="hero" className={styles.img} />
      </div>
    </div>
  );
};

export default HomePage;
