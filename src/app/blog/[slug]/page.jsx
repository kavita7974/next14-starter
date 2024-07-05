import React, { Suspense } from 'react'
import styles from "./singlePost.module.css";
import Image from 'next/image';
import PostUser from '@/components/postUser/postUser';
import { getPost } from '@/lib/data';

// const getData = async (slug) => {

//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error("Something Went wrong");
//   }
//   return res.json();

// }



const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  console.log("slug is",slug)

  // Fetch data with an API
  // const post = await getData(slug);

  // Fetch data without an API
  const post = await getPost(slug)

  console.log("ppppp data is",post)



  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img}
          src="https://images.pexels.com/photos/26272167/pexels-photo-26272167/free-photo-of-a-cake-with-cherries-on-top-and-a-slice-of-cake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar}
            src="https://images.pexels.com/photos/26272167/pexels-photo-26272167/free-photo-of-a-cake-with-cherries-on-top-and-a-slice-of-cake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
            width={50} height={50} />
          <Suspense fallback={<div>Loading....</div>}>
            <PostUser userId={post.userId} />
          </Suspense>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01-01-2024</span>

          </div>
        </div>
        <div className={styles.content}>
          {post.body}

        </div>
      </div>
    </div>
  )
}

export default SinglePostPage;
