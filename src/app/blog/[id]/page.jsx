import Image from 'next/image';
import React from 'react';
// import styles from './page.module.css';
import { notFound } from 'next/navigation';

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return notFound;
  }

  return res.json();
}

//dynamic metadata
export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className="border border-1 border-[#bbb] p-6 my-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Info */}
        <div className="flex flex-col justify-between gap-4">
          <h1 className="text-3xl text-[#53c28b]">{data.title}</h1>
          <span className="font-semibold my-4">Description</span>
          <p className="text-xl font-light text-justify">{data.desc}</p>
          <div className="flex gap-6 items-center my-2">
            <Image
              src="https://e7.pngegg.com/pngimages/99/489/png-clipart-computer-icons-user-profile-user-cdr-face.png"
              alt=""
              width={40}
              height={40}
              className="object-cover rounded-3xl"
            />
            <span className="font-medium">{data.username}</span>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-full">
          <Image
            src={data.img}
            alt=""
            fill={true}
            className="obejct-cover w-[100px] h-[100px]"
          />
        </div>
      </div>
      <div className="my-6 text-[#999]">
        <span className="my-4 font-bold">Content</span>
        <p className="text-justify font-medium text-xl">{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
