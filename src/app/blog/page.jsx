import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Button from 'src/components/Button/Button.jsx';

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.blogButton}>
        <Button url="/dashboard" text="Share Your Post" />
      </div>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imgContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.img}
            />
          </div>
          <div className={styles.contentBox}>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
            </div>
            <h1 className={styles.username}>Author: {item.username}</h1>
            <p className={styles.createdAt}>Created: {item.createdAt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
