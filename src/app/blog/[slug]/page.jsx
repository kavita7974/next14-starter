import React from 'react'
import styles from "./singlePost.module.css";
import Image from 'next/image';

const SinglePostPage = ({params}) => {
  console.log("params",params)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img}
          src="https://images.pexels.com/photos/26272167/pexels-photo-26272167/free-photo-of-a-cake-with-cherries-on-top-and-a-slice-of-cake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar}
            src="https://images.pexels.com/photos/26272167/pexels-photo-26272167/free-photo-of-a-cake-with-cherries-on-top-and-a-slice-of-cake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
            width={50} height={50} />

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry jerrifon</span>
          </div>

          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01-01-2024</span>

          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem ratione beatae nulla impedit unde reprehenderit, in blanditiis consequuntur perferendis, veniam, sequi officiis facilis dolor at esse adipisci aliquid molestiae voluptatum.

        </div>
      </div>
    </div>
  )
}

export default SinglePostPage;
