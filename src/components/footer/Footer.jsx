import React from 'react';
// import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="h-[50px] text-md flex flex-col lg:flex-row items-center justify-between">
      <div className="text-[#53c28b]">@2023 Casapia. All rights reserved</div>
      <div>
        <div className="flex items-center gap-4">
          <Image
            src="/2.png"
            width={15}
            height={15}
            className="opacity-50 cursor-pointer"
            alt="instagram"
          />
          <Image
            src="/1.png"
            width={15}
            height={15}
            className="opacity-50 cursor-pointer"
            alt="facebook"
          />
          <Image
            src="/3.png"
            width={15}
            height={15}
            className="opacity-50 cursor-pointer"
            alt="twitter"
          />
          <Image
            src="/4.png"
            width={15}
            height={15}
            className="opacity-50 cursor-pointer"
            alt="youtube"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
