"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectTODb } from "./utils"
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (prevState, formData) => {
    const { title, desc, slug, userId } = Object.fromEntries(formData)
    try {
        connectTODb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        })
        await newPost.save();
        console.log("Saved to db");
        revalidatePath("/blog")
        revalidatePath("/admin")
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData)
    try {
        connectTODb();

        await Post.findByIdAndDelete(id)
        console.log("Deleted from db");
        revalidatePath("/blog")
        revalidatePath("admin")
    } catch (error) {
        console.log(error)
        return { error: "Something went wrong" };
    }
}

export const addUser = async (prevState,formData) => {
    const { username, email, password, img } = Object.fromEntries(formData)
    try {
        connectTODb();
        const newUser = new User({
            username,
            email,
            password,
            img
        })
        await newUser.save();
        console.log("Saved to db");
        revalidatePath("/admin")
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData)
    try {
        connectTODb();
        await Post.deleteMany({userId:id})
        await User.findByIdAndDelete(id)
        console.log("Deleted from db");
        revalidatePath("/admin")
    } catch (error) {
        console.log(error)
        return { error: "Something went wrong" };
    }
}

export const handleGithubLogin = async () => {
    "use server";
    await signIn("github");
};

export const handleLogout = async () => {
    "use server";
    await signOut();
};

export const register = async (previousState, formData) => {
    const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData);
    if (password !== passwordRepeat) {
        return { error: "Password do not match" }
    }
    try {
        connectTODb();
        const user = await User.findOne({ username });
        if (user) {
            return { error: "User already exists" }
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashPassword,
            img
        })
        await newUser.save();
        console.log("New User saved to db");
        return { success: true }
    } catch (err) {
        return { error: "Something went wrong" }
    }
}

export const login = async (previousState, formData) => {
    const { username, password } = Object.fromEntries(formData);
    try {
        await signIn("credentials", { username, password })

    } catch (err) {
        console.log(err)
        if (err.message.includes("Wrong credentials")) {
            return { error: "Invalid username or password" };
        }
        throw err;
    }
}