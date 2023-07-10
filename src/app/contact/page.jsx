'use client';

import React, { useRef, useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '../../components/Button/Button';
import emailjs from '@emailjs/browser';

export const metadata = {
  title: 'Contact',
  description: 'This is contact page',
};

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [err, setErr] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_id', 'template_id', ref.current, 'public_key')
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setErr(true);
        }
      );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            fill={true}
            sizes=""
            alt="contact"
            className={styles.img}
          />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            className={styles.input}
          ></input>
          <input
            type="email"
            name="email"
            placeholder="email"
            className={styles.input}
          ></input>
          <textarea
            className={styles.textArea}
            placeholder="message"
            name="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" type="submit" text="Send" />
          {success &&
            "Your message has been sent. We'll get back to you soon :)"}
          {err && 'Failed'}
        </form>
      </div>
    </div>
  );
};

export default Contact;
