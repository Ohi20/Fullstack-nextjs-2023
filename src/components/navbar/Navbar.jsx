'use client';
import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import logo from 'public/logo.png';

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
];

const Navbar = () => {
  const session = useSession();

  return (
    <div className="h-[100px] flex justify-between items-center">
      <Image
        src={logo}
        alt="hero"
        className="h-[120px] w-[120px] object-contain"
      />
      <div className="flex items-center gap-8 text-[#53c28b] font-medium">
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === 'authenticated' && (
          <button
            className="p-1 outline-none bg-[#53c28b] text-white pointer rounded hover:text-black"
            onClick={signOut}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
