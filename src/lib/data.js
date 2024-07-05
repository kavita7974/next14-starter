const users = [
    {id:1,name:"John"},
    {id:2,name:"Jane"}
]

const posts = [
    {id:1,title:"Post1",body:"test1",userId:1},
    {id:2,title:"Post2",body:"test2",userId:1},
    {id:3,title:"Post3",body:"test3",userId:2},
    {id:4,title:"Post4",body:"test4",userId:2}
]

export const getPosts = async() =>{
    return posts;

}

export const getPost = async(id) =>{
    const convertedId = parseInt(id, 10);
    return posts.find((post) => post.id===convertedId)
}

export const getUser = async(id) =>{
    const convertedId = parseInt(id, 10);
    return users.find((user) => user.id===convertedId)
}