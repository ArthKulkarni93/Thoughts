import express, { Request, Response } from 'express';
import { PrismaClient } from '../../generated/prisma';
import { validateMsg, verifyJWT } from '../auth/middlewares/authMiddleware';
import { request } from 'http';
const router = express.Router();
const prisma = new PrismaClient();

interface userRequest extends Request {
    userId?: number,
    email?: string
}

router.post('/createPost', verifyJWT, async(req: userRequest, res: Response) => {
    const {title, description} = req.body as {
        title: string, 
        description: string
    }

    const autherId = req.userId;
    if(autherId === undefined) {
        console.error("Error: userId is undefined after JWT verification. This indicates a middleware issue or an unauthenticated request slipped through.");
        res.status(401).json({ // Use 401 Unauthorized here as it relates to authentication
            msg: "Unauthorized: User ID not available after authentication.",
            success: false,
        });
        return;
    }

    try {
        const newPost = await prisma.post.create({

            data: {
                title: title,
                description: description,
                authorId: autherId,
            },
            include: {
                author: {
                    select: {id: true, username: true, email: true}
                }
            }
        })

        res.json({
            msg: "Successfully created a new post",
            success: true,
            post: newPost
        })
    } catch (error) {
        console.error("Database error creating post:", error);
        res.status(500).json({
            msg: "Failed to create post due to an internal server error.",
            success: false,
        });
    }
    
})

router.post('/comment/:postId', verifyJWT, async(req: userRequest, res: Response) => {
    const {content} = req.body as {
        content: string
    }

    const commentorId = req.userId;
    // console.log("Request Parameters:", req.params);
    const postId = parseInt(req.params.postId)

    if(commentorId === undefined) {
        console.error("Error: userId is undefined after JWT verification. This indicates a middleware issue or an unauthenticated request slipped through.");
        res.status(401).json({ // Use 401 Unauthorized here as it relates to authentication
            msg: "Unauthorized: User ID not available after authentication.",
            success: false,
        });
        return;
    }
    // console.log(content,commentorId, postId);
    try {
        const newComment = await prisma.comments.create({
            data: {
                content: content,
                commentorId: commentorId,
                postId: postId
            },
            include: {
                commentor: {
                    select: {id: true, username: true, email: true}
                }
            }
        })

        res.json({
            msg: "Successfully created a comment",
            success: true,
            comment: newComment
        })
    } catch (error) {
        console.error("Database error creating comment:", error);
        res.status(500).json({
            msg: "Failed to create comment due to an internal server error.",
            success: false,
        });
    }
    
})

router.post('/like/:postId', verifyJWT, async(req: userRequest, res: Response) => {

    const postId = parseInt(req.params.postId)
    const likedBy = req.userId;

    if(likedBy === undefined) {
        console.error("Error: userId is undefined after JWT verification. This indicates a middleware issue or an unauthenticated request slipped through.");
        res.status(401).json({ 
            msg: "Unauthorized: User ID not available after authentication.",
            success: false,
        });
        return;
    }
    if(isNaN(postId)) {
        console.error("Error: Invalid postId provided in URL params:", req.params.postId);
        res.status(400).json({
            msg: "Bad Request: Invalid post ID provided in the URL.",
            success: false,
        });
        return;
    }
    // console.log(content,commentorId, postId);
    try {
        const existingPost = await prisma.post.findUnique({
            where: {
                id: postId  
            }
        })
        if(!existingPost) {
            res.json({
                msg: "This post does not exists",
                success: false 
            })
            return;
        }

        const existingLike = await prisma.like.findUnique({
            where: {
                likeId_likedPostId: {
                    likeId: likedBy,
                    likedPostId: postId
                }
            }
        })

        if(existingLike) {
            //this means user is unliking it
            await prisma.like.delete({
                where: {
                    id: existingLike.id
                }
            })

            res.json({
                msg: "Post unliked successfully",
                success: true,
                action: "unliked"
            })
        }
        else {
            const newLike = await prisma.like.create({
                data: {
                    likedBy: {
                        connect: {
                            id: likedBy,
                        }
                    },
                    likedPost: {
                        connect: {
                            id: postId
                        }
                    }
                }, 
                include: {
                    likedBy: {
                        select: {id: true, email: true, username: true}
                    },
                    likedPost: {
                        select: {id: true, title: true}
                    }
                }
            })

            res.json({
                msg: "Successfully liked the post",
                success: true,
                newLike,
                action: "liked"
            })
        }
    } catch (error) {
        console.error("Database error liking post:", error);
        res.status(500).json({
            msg: "Failed to like post due to an internal server error.",
            success: false,
        });
    }
    
})


router.delete('/deletePost/:postId', verifyJWT, async(req: userRequest, res: Response) => {

    const deleter = req.userId;
    // console.log("Request Parameters:", req.params);
    const postId = parseInt(req.params.postId)

    if(deleter === undefined) {
        console.error("Error: userId is undefined after JWT verification. This indicates a middleware issue or an unauthenticated request slipped through.");
        res.status(401).json({ // Use 401 Unauthorized here as it relates to authentication
            msg: "Unauthorized: User ID not available after authentication.",
            success: false,
        });
        return;
    }
    if(isNaN(postId)) {
        console.error("Error: Invalid postId provided in URL params:", req.params.postId);
        res.status(400).json({
            msg: "Bad Request: Invalid post ID provided in the URL.",
            success: false,
        });
        return;
    }


    // console.log(content,commentorId, postId);
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: postId,
                authorId: deleter
            }
        })
        if(!post) {
            res.json({
                msg: "Post does not exists or you dont have such post",
                success: false
            })
        }
        
        await prisma.like.deleteMany({
            where: {
                likedPostId: postId
            }
        })
        await prisma.comments.deleteMany({
            where: {
                postId: postId
            }
        })
        await prisma.post.delete({
            where: {
                id: postId,
                authorId: deleter
            }
        })
        res.json({
            msg: "Successfully deleted the post",
            success: true,
        })
    } catch (error) {
        console.error("Database error deleting post:", error);
        res.status(500).json({
            msg: "Failed to delete the post due to an internal server error.",
            success: false,
        });
    }
    
})

router.post('/msg' , validateMsg, async(req: userRequest, res: Response) => {
    try {
        const { email, msg } = req.body as { email: string, msg: string }

        const done = await prisma.msg.create({
            data: {
                email,
                msg
            }
        })

        res.json({
            msg: "Successfully submited the msg",
            success: true
        })
    } catch (error) {
        console.error("Database error submitting msg:", error);
        res.status(500).json({
            msg: "Failed to submit the msg due to an internal server error.",
            success: false,
        });
    }
})

export default router;