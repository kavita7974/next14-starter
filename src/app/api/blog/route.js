import { Post } from "@/lib/models";
import { connectTODb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try {
      await connectTODb();
      const posts = await Post.find();
      return NextResponse.json(posts, { status: 200 });
    } catch (error) {
      console.error('Failed to fetch posts:', error);
      return NextResponse.json({ message: 'Failed to fetch posts' }, { status: 500 });
    }
  };