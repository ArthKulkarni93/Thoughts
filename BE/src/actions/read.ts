import express, {Request, Response, NextFunction} from 'express';
import { verifyAdmin, verifyJWT } from '../auth/middlewares/authMiddleware';
import { PrismaClient } from '../../generated/prisma';


const router = express.Router();
const prisma = new PrismaClient();

interface userRequest extends Request {
    userId?: number,
    email?: string
}

router.get("/bulkposts", verifyJWT, async(req: userRequest, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;
    const skip = (page - 1) * pageSize;

    if (page < 1 || pageSize < 1 || pageSize > 100) { // Limit max page size
        res.status(400).json({
            msg: "Bad Request: Invalid page or pageSize parameters.",
            success: false,
        });
        return;
    }

    try {
        const posts = await prisma.post.findMany({
            skip: skip,
            take: pageSize,
            
            include: {
                author: {
                    select: {id: true, username: true}
                },
                _count: {
                    select: {like: true, comments: true}
                }
            }
        })
        const totalPosts = await prisma.post.count();
        const totalPages = Math.ceil(totalPosts / pageSize);

        res.json({
            msg: "Successfully got all posts",
            success: true,
            posts: posts,
            pagination: {
                totalPosts: totalPosts,
                currentPage: page,
                pageSize: pageSize,
                totalPages: totalPages,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1,
            }
        })
    } catch (error) {
        console.log("error in getting posts", error);
        res.status(500).json({
            msg: "internal error in fetching posts",
            success: false
        })
    }
})

router.get("/post/:postId", verifyJWT, async(req: userRequest, res: Response) => {
    const postId = parseInt(req.params.postId);

    if(isNaN(postId)) {
        console.error("Error: Invalid postId provided in URL params:", req.params.postId);
        res.status(400).json({
            msg: "Invalid postId provided in URL params",
            success: false
        })
        return;
    }

    try {
        const post = await prisma.post.findUnique({
            where: {
                id: postId
            }, 
            include: {
                author: {
                    select: {id: true, username: true}
                },
                _count: {
                    select: {like: true, comments: true}
                },
                comments: {
                    include: {
                        commentor: {
                            select: {id: true, username: true,}
                        }
                    }
                }
            }
        })

        if(!post) {
            res.status(400).json({
                msg: "This post does not exist",
                success: false
            })
            return;
        }

        res.json({
            msg: "Successfully got the post",
            success: true,
            post
        })

    } catch (error) {
        console.log("Error in fetching the post", error);
        res.status(500).json({
            msg: "Internal error in fetching the post",
            success: false
        })
    }
})

router.get("/account/:userId", verifyJWT, async(req: userRequest, res: Response) => {
    const userId = parseInt(req.params.userId);

    if(isNaN(userId)) {
        res.json({
            msg: "Invalid userId provided in URL ",
            success: false
        })
        return;
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            },
            include: {
                posts: {
                    select: {id: true, title: true, description: true, createdAt: true, 
                        _count: {
                            select: {like: true, comments: true}
                        }
                    }
                },
                commented: {
                    select: {id: true, postId: true, content: true,
                        post: {
                            select: {id: true, title: true, description: true, createdAt: true}
                        }
                     }
                }
            }
        })

        if (!user) {
            res.status(404).json({
                msg: "Not Found: The user profile with the given ID does not exist.",
                success: false,
            });
            return;
        }

        const { password, ...safeUserProfile } = user;

        res.status(200).json({
            msg: "User profile retrieved successfully.",
            success: true,
            user: safeUserProfile,
        });

    } catch (error) {
        console.error("Database error retrieving user profile:", error);
        res.status(500).json({
            msg: "Failed to retrieve user profile due to an internal server error.",
            success: false,
        });
        return;
    }
})

router.get("/msg", verifyJWT, verifyAdmin, async(req: userRequest, res: Response) => {
    
    try {

        const post = await prisma.msg.findMany({
            orderBy: {
                createdAt: 'desc' 
            }
        })


        res.json({
            msg: "Successfully got the post",
            success: true,
            post
        })

    } catch (error) {
        console.error("Database error retrieving msgs:", error);
        res.status(500).json({
            msg: "Failed to retrieve msgs due to an internal server error.",
            success: false,
        });
        return;
    }
})

export default router;