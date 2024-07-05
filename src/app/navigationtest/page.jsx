"use client";
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const NavigationTestPage = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParam = useSearchParams();
    const q = searchParam.get("q")


    console.log("patname is",pathname)
    console.log("query q is",q)


    // Client Side Navigation
    const handleClick = () =>{
        console.log("button clicked");
        router.push("/")
    }
  return (
    <div>
        <Link href="/" prefetch={false}>Click Here</Link>
        <button onClick={() => handleClick()}>Write and Redirect</button>
    </div>
  )
}

export default NavigationTestPage