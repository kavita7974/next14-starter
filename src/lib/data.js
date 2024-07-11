import { unstable_noStore as noStore } from "next/cache";
import { connectTODb } from "./utils";
import { Post, User } from "./models";

export const getPosts = async () => {
    try {
      connectTODb();
      const posts = await Post.find();
      return posts;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch posts!");
    }
  };
  
  export const getPost = async (slug) => {
    try {
      connectTODb();
      const post = await Post.findOne({ slug });
      return post;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch post!");
    }
  };
  
  export const getUser = async (id) => {
    noStore();
    try {
      connectTODb();
      const user = await User.findById(id);
      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch user!");
    }
  };
  
  export const getUsers = async () => {
    try {
      connectTODb();
      const users = await User.find();
      return users;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch users!");
    }
  };
  