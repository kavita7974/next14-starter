
import React from 'react'
import styles from "./postUser.module.css"
import { getUser } from '@/lib/data'

// const getUserName = async (userId) => {

//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache:"no-store"});
//     if (!res.ok) {
//       throw new Error("Something Went wrong");
//     }
//     return res.json();
  
//   }

const PostUser = async({userId}) => {
    console.log("user id is",userId)
    
    // Fetch data with an API
    // const userDetails = await getUserName(userId);

    // Fetch data without an API
    const userDetails = await getUser(userId)
    console.log("user details",userDetails)

    return (
        <div>
            <div className={styles.container}>
                <span className={styles.title}>Author</span>
                <span className={styles.username}>{userDetails.name}</span>
            </div>
        </div>
    )
}

export default PostUser