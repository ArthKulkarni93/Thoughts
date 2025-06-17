import express, { NextFunction, Request, Response } from 'express';
import { ParseStatus, string, z } from 'zod';
const router = express.Router();

const SignupSchema = z.object({
    username: string().min(4, "Username must be at least 4 characters long"),
    email: string().email("Invalid email format"),
    password: string().min(6, "Password must be at least 6 characters")
})

export const SignupMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const parsed = SignupSchema.safeParse(req.body);
    if(!parsed.success) {
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
}



const SigninSchema = z.object({
    email: string().email("Invalid email format"),
    password: string().min(6, "Password must be at least 6 characters")
})

export const SigninMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const parsed = SigninSchema.safeParse(req.body);
    if(!parsed.success) {
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
}


