import React from 'react';
import Image from 'next/image';
import { items } from './data.js';
import { notFound } from 'next/navigation';
import Button from '../../../components/Button/Button';

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6">
        <div>
          <h1 className="text-[#53c28b] text-3xl">{params.category}</h1>
        </div>
        <div className="flex justify-center">
          <Button
            className="my-8 font-semibold"
            text="←"
            url="/portfolio"
          ></Button>
        </div>
      </div>
      {data.map((item) => (
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8"
          key={item.id}
        >
          <div className="flex-1 flex flex-col gap-6 justify-center">
            <h1 className="text-3xl">{item.title}</h1>
            <p className="text-xl text-justify">{item.desc}</p>

            <Button text="See" url="#" />
          </div>
          <div className="flex-1 h-[500px] relative">
            <Image
              className="object-contain h-[400px] w-[400px]"
              fill={true}
              src={item.image}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
