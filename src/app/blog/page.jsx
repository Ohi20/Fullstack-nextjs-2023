import React from 'react';
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
    <div className="flex flex-col justify-center items-center my-8">
      <div className="flex justify-center items-center my-8">
        <Button url="/dashboard" text="Share Your Post" />
      </div>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className="flex flex-col justify-center items-center border border-[#bbb] rounded-lg p-8 my-8"
          key={item.id}
        >
          <div className="h-auto w-auto">
            <Image
              src={item.img}
              alt=""
              width={600}
              height={400}
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="">
              <h1 className="mb-8 text-2xl text-[#53c28b]">{item.title}</h1>
              <p className="text-2xl text-[#999] font-medium">{item.desc}</p>
            </div>
            <h1 className="text-xl font-semibold">Author: {item.username}</h1>
            <p className="font-semibold">Created: {item.createdAt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
