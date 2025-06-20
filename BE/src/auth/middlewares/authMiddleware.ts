import express, { NextFunction, Request, Response } from 'express';
import { ParseStatus, string, z } from 'zod';
import * as jwt from 'jsonwebtoken';
import { deserializeJsonResponse } from '@prisma/client/runtime/library';
import { PrismaClient } from '../../../generated/prisma';
const env = require('dotenv').config();
const JWTSECRET = process.env.JWTSECRET;
const router = express.Router();
const prisma = new PrismaClient();

const SignupSchema = z.object({
    username: string().min(4, "Username must be at least 4 characters long"),
    email: string().email("Invalid email format"),
    password: string().min(6, "Password must be at least 6 characters")
})

export const SignupMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const parsed = SignupSchema.safeParse(req.body);
        if (!parsed.success) {
            res.json({
                msg: `Invalid credentials provided.`,
                errors: parsed.error.issues.map(issue => ({
                    path: issue.path.join('.'),
                    message: issue.message
                })),
                success: false
            });
            return;
        }
        next();
    } catch (error) {
        res.status(500).json({
            msg: "An unexpected server error occurred during data validation.",
            success: false,
        });
        return;
    }
};



const SigninSchema = z.object({
    email: string().email("Invalid email format"),
    password: string().min(6, "Password must be at least 6 characters")
})

export const SigninMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const parsed = SigninSchema.safeParse(req.body);
        if (!parsed.success) {
            res.json({
                msg: `Invalid credentials provided.`,
                errors: parsed.error.issues.map(issue => ({
                    path: issue.path.join('.'),
                    message: issue.message
                })),
                success: false
            });
            return;
        }
        next();
    } catch (error) {
        res.status(500).json({
            msg: "An unexpected server error occurred during data validation.",
            success: false,
        });
        return;
    }
};

interface userRequest extends Request {
    userId?: number,
    email?: string
}

export const verifyJWT = async(req: userRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers["Authorization"] || req.headers["authorization"] ;

    if(!authHeader || typeof authHeader !== 'string' || !authHeader.startsWith('Bearer ')) {
        res.json({
            msg: "Unauthorized, You do not have access to the page",
            success: false
        })
        return;
    }

    const token = authHeader.split(' ')[1];

    if(!JWTSECRET) {
        console.error("JWTSECRET environment variable is not set.");
        res.json({ 
            msg: "Server configuration error: JWT secret missing.",
            success: false,
        });
        return;
    }

    try {
        const verified = jwt.verify(token, JWTSECRET) as {email: string, userId: number, iat: number};

        req.userId = verified.userId;
        req.email = verified.email;
        next();

       
    } catch (error) {
        console.log(error, "in verifyJWT") ;
        res.status(500).json({
            msg: "An unexpected server error occurred during data validation.",
            success: false,
        });  
        return;
    }
}

export const verifyAdmin = async(req: userRequest, res: Response, next: NextFunction) => {
    if(!req.userId) {
        res.status(401).json({
            msg: "Unauthorized: User ID missing. JWT verification likely failed.",
            success: false
        });
    }

    try {
        const person = await prisma.user.findUnique({
            where: {
                id: req.userId,
                email: req.email
            }
        })
        
        if(person?.role != "Admin") {
            res.json({
                msg: "Users cant visit this page, permission denied",
                success: false
            })
            return;
        }
        next();
    } catch (error) {
        console.log(error, "in verifyAdmin") ;
        res.status(500).json({
            msg: "An unexpected server error occurred during verifying.",
            success: false,
        }); 
        return;
    }
}

const msgFeedback = z.object({
    email: string(),
    msg: string()
})
export const validateMsg = (req: Request, res: Response, next: NextFunction) => {
    try {
        const parsed = msgFeedback.safeParse(req.body);
        if(!parsed.success) {
            res.json({
                msg: "Internal problem",
                success: false
            })
            return;
        }
        next();
    } catch (error) {
        console.error("in validateMsg: ", error);
        res.status(500).json({
            msg: "An unexpected server error occurred during msg validation.",
            success: false,
        });
        return;
    }
}

const createPost = z.object({
    title: string().min(1, "Title is required and cannot be empty").max(255, "Title is too long"),
    description: string()
})


export const validateCreatePost = (req: Request, res: Response, next: NextFunction) => {
    try {
        const parsed = createPost.safeParse(req.body);
        if(!parsed.success) {
            res.json({
                msg: "Enter correct credentials",
                success: false
            })
            return;
        }
        next();
    } catch (error) {
        console.error("in createPost: ", error);
        res.status(500).json({
            msg: "An unexpected server error occurred during data validation.",
            success: false,
        });
        return;
    }
}