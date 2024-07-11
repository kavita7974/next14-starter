import React, { Suspense } from 'react'
import styles from "./singlePost.module.css";
import Image from 'next/image';
import PostUser from '@/components/postUser/postUser';
import { getPost } from '@/lib/data';

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("Something Went wrong");
  }
  return res.json();

}

export const generateMetadata = async ({params}) =>{
  const { slug } = params;

  const post = await getPost(slug)

  return {
     title:post.title,
     description:post.desc
  }
}



const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // Fetch data with an API
  const post = await getData(slug);

  // Fetch data without an API
  // const post = await getPost(slug)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img}
          src="https://images.pexels.com/photos/26272167/pexels-photo-26272167/free-photo-of-a-cake-with-cherries-on-top-and-a-slice-of-cake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading....</div>}>
            <PostUser userId={post.userId} />
          </Suspense>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>

          </div>
        </div>
        <div className={styles.content}>
          {post.desc}

        </div>
      </div>
    </div>
  )
}

export default SinglePostPage;
