import { NextResponse } from 'next/server';
import Post from 'src/models/Post';
import connect from 'src/utils/db';

export const GET = async (request) => {
  // fetch

  try {
    await connect();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
