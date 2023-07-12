'use client';

import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '../../components/Button/Button';

export const metadata = {
  title: 'Contact',
  description: 'This is contact page',
};

const Contact = () => {
  return (
    <div className="my-8">
      <h1 className="text-4xl text-center mb-8">Lets Keep in Touch</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex-1 relative h-[500px] ">
          <Image
            src="/contact.png"
            fill={true}
            sizes=""
            alt="contact"
            className="object-contain w-[300px] h-[300px]"
          />
        </div>
        <form className="flex-1 flex flex-col gap-8">
          <input
            type="text"
            name="name"
            placeholder="name"
            className="p-4 bg-transparent text-[#bbb] border border-[#bbb] text-sm font-semibold"
          ></input>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="p-4 bg-transparent text-[#bbb] border border-[#bbb] text-sm font-semibold"
          ></input>
          <textarea
            className="p-4 bg-transparent text-[#bbb] border border-[#bbb] text-sm font-semibold"
            placeholder="message"
            name="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button className="mx-auto" url="#" type="submit" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
