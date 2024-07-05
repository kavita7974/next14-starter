// "use client"
import React from 'react';
import PostCard from '@/components/postCard/postCard';
import styles from "./blog.module.css"

const getData = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // console.log("res is..",res)

  if (!res.ok) {
    throw new Error("Something Went wrong");
  }
  return res.json();

}

const BlogPage = async () => {
  const postsAllData = await getData();
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
