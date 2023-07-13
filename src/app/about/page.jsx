import React from 'react';
import Image from 'next/image';
import Button from '../../components/Button/Button';
import illustration from 'public/illustration.jpg';

const About = () => {
  return (
    <div className="">
      <div className="w-full h-[300px] relative">
        <Image
          src={illustration}
          fill={true}
          alt="About Hero"
          className="object-cover sepia"
        />
        <div className="absolute bottom-4 left-4 p-4 bg-[#53c28b] text-white">
          <h1 className="">Digital Storytellers</h1>
          <h2 className="">Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10">
        <div className="flex-1 flex flex-col gap-5 mt-8">
          <h1 className="text-[#53c28b]">Who Are We?</h1>
          <p className="text-xl font-semibold text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-5 mt-8">
          <h1 className="text-[#53c28b]">What We Do?</h1>
          <p className="text-xl font-semibold text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
