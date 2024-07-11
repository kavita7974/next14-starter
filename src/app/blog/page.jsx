// "use client"
import React, { cache } from 'react';
import PostCard from '@/components/postCard/postCard';
import styles from "./blog.module.css"
// import { getPosts } from '@/lib/data';


// FETCH DATA WITH AN API
const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 3600 } });
    return res.json();
  } catch (error) {
    console.log("test", error)

  }

};


const BlogPage = async () => {

  // Fetch data with an API
  const postsAllData = await getData();
  console.log("post all data are", postsAllData)

  // Fetch data without an API
  // const postsAllData = await getPosts();

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
