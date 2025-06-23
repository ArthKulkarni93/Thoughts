const main = "https://thoughts-wi2c.onrender.com/api/v1"

//User auth
export const userSignup = `${main}/auth/user/signup`
export const userSignin = `${main}/auth/user/signin`

//User action
export const getPosts = `${main}/get/bulkposts/trending` //not pushed
export const getPosts2 = `${main}get/bulkposts/new`//not pushed
export const post = `${main}/get/post/:postId`
export const user = `${main}/get/account/:userId`

//Feedback msg
export const feedbackMsg = `${main}/post/msg/`
