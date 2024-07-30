import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import credentialsProvider from "next-auth/providers/credentials";
import { connectTODb } from "./utils";
import { User } from "./models";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

const login = async (credentials) =>{
  try {
    connectTODb();
    const user = await User.findOne({username:credentials.username})
    if(!user){
      throw new Error("Wrong credentials")
    }

    const isPasswordCorrect = await bcrypt.compare(credentials.password,user.password)
    if(!isPasswordCorrect){
      throw new Error("Wrong credentails");
    }
    return user;
    
  } catch (error) {
    console.log(error)
    throw new Error("Failed to login");
    
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    credentialsProvider({
      async authorize(credentials){
       try {
        const user = await login(credentials);
        return user;
        
       } catch (error) {
        console.log(error)
        return null;
        
       }
      }
    })
  ],
  callbacks: {
  async signIn({user,account,profile}){
    console.log("data is",profile)
    if(account?.provider == "github"){
      connectTODb();
      try {
        const user = await User.findOne({email:profile.email});
        if(!user){
          const newUser = new User({
            username:profile.login,
            email:profile.email,
            img:profile.avatar_url
          })
          await newUser.save();

        }
      } catch (error) {
        console.log(error)
        return false
        
      }
    }
    return true;
  },
   ...authConfig.callbacks,
  },
});
