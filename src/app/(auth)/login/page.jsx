import { auth, signIn } from "@/auth";
import React from "react";

const LoginPage = async () => {
  const session = await auth();
  console.log("session", session);

  const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
  };

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login With Github</button>
      </form>
    </div>
  );
};

export default LoginPage;
