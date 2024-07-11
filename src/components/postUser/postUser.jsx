
import React from 'react'
import styles from "./postUser.module.css"
import { getUser } from '@/lib/data'
import Image from 'next/image'

// const getUserName = async (userId) => {

//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache:"no-store"});
//     if (!res.ok) {
//       throw new Error("Something Went wrong");
//     }
//     return res.json();

//   }

const PostUser = async ({ userId }) => {

    // Fetch data with an API
    // const userDetails = await getUserName(userId);

    // Fetch data without an API
    const userDetails = await getUser(userId)

    return (
        <div>
            <div className={styles.container}>
                <Image className={styles.avatar}
                    src={userDetails?.img ? userDetails?.img : "/noavatar.png"} alt=""
                    width={50} height={50} />
                <div className={styles.texts}>
                    <span className={styles.title}>Author</span>
                    <span className={styles.username}>{userDetails.username}</span>
                </div>
            </div>
        </div>
    )
}

export default PostUser