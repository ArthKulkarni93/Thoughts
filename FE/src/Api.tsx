const main = "https://thoughts-wi2c.onrender.com/api/v1"

//User auth
export const userSignup = `${main}/auth/user/signup`
export const userSignin = `${main}/auth/user/signin`

//User action
export const getPosts = `${main}/get/bulkposts` 
export const getPost = `${main}/get/post`
export const getUser = `${main}/get/account/:userId`
export const like = `${main}/post/like`
export const createPost = `${main}/post/createPost`

//Feedback msg
export const feedbackMsg = `${main}/post/msg/`
