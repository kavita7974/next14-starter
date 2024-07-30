import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin, login } from "@/lib/actions";
import React from "react";
import styles from "./page.module.css"

const LoginPage =  () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <form action={handleGithubLogin}>
        <button>Login With Github</button>
      </form>
      <LoginForm/>
      </div>
    </div>
  );
};

export default LoginPage;
