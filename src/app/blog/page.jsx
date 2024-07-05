// "use client"
import React, { cache } from 'react';
import PostCard from '@/components/postCard/postCard';
import styles from "./blog.module.css"
import { getPosts } from '@/lib/data';

// const getData = async () => {

//   const res = await fetch("https://jsonplaceholder.typicode.com/posts",{next:{revalidate:3600}});
//   // console.log("res is..",res)

//   if (!res.ok) {
//     throw new Error("Something Went wrong");
//   }
//   return res.json();

// }




const BlogPage = async () => {

  // Fetch data with an API
  // const postsAllData = await getData();

  // Fetch data without an API
  const postsAllData = await getPosts();

  return (
    <div className={styles.container}>
      {postsAllData?.map((item) => (
        <div className={styles.post} key={item.id}>
          <PostCard post={item} />
        </div>

      ))}
    </div>
  )
}

export default BlogPage;
