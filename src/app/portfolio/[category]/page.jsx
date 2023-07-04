import React from 'react';
import styles from './page.module.css';
import Button from '../../../components/Button/Button';
import Image from 'next/image';

const Category = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className={styles.img}
            alt="image"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className={styles.img}
            alt="image"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button url="#" text="See More" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className={styles.img}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
