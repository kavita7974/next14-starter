// "use client";
import Image from "next/image";
import styles from "./contact.module.css";
import React from "react";
import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

// export const metadata = {
//   title: "Contact Page",
//   description: "Contact description",
// };

const ContactPage = () => {

  // const a = Math.random();

  // console.log(a);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {/* <p>{isClient && a}</p> */}
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {/* // This will show value from client side bez we have already set ssr to false */}
        <HydrationTestNoSSR/> 
        {/* <div suppressHydrationWarning>{a}</div> // when we do this it will show server side value */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
