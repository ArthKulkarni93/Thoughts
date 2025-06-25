const main = "https://thoughts-wi2c.onrender.com/api/v1"

//User auth
export const userSignup = `${main}/auth/user/signup`
export const userSignin = `${main}/auth/user/signin`

//User action
export const getPosts = `${main}/get/bulkposts` 
export const getPost = `${main}/get/post`
export const getUser = `${main}/get/account` 
export const like = `${main}/post/like`
export const createPost = `${main}/post/createPost`
export const comment = `${main}/post/comment` //create comment
// export const getComments = `${main}/get/`

//Feedback msg
export const feedbackMsg = `${main}/post/msg/` //remaining
