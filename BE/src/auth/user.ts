import express, {Request, Response} from 'express';
import { PrismaClient } from '../../generated/prisma';
import * as jwt from 'jsonwebtoken';
const env = require('dotenv').config();
import { SigninMiddleware, SignupMiddleware } from './middlewares/authMiddleware'
const JWTSECRET = process.env.JWTSECRET;
const router = express.Router();
const prisma = new  PrismaClient()


router.post('/signup', SignupMiddleware, async(req: Request, res: Response) => {
    const {email, password, username} = req.body as {email: string, password: string, username: string};

    const user = await prisma.user.findUnique({
        where: {
            email
        },
    })

    if(user) {
        res.json({
            msg: `account with given email exists, try signin`,
            success: false,
        })
        return;
    }

    const newUser = await prisma.user.create({
        data: {
            email,
            password,
            role: 'User',
            username
        }
    })

    if (!JWTSECRET) { 
        console.error("JWTSECRET environment variable is not set.");
        res.json({ 
            msg: "Server configuration error: JWT secret missing.",
            success: false,
        });
        return;
    }

    const token = jwt.sign({email, userId: newUser.id}, JWTSECRET);
    res.json({
        msg: `successfully account created`,
        success: true,
        token: token,
        user: {
            id: newUser.id,
            email: newUser.email,
            username: newUser.username,
            role: newUser.role
        }
    })

})


router.post('/signin', SigninMiddleware, async(req: Request, res: Response) => {
    const {email, password} = req.body as {email: string, password: string};

    const user = await prisma.user.findUnique({
        where: {
            email
        },
    })

    if(!user || (user && user.password !== password)) {
        res.json({
            msg: `Incorrect password or account with given email does not exist`,
            success: false,
        })
        return;
    }

    if (!JWTSECRET) { 
        console.error("JWTSECRET environment variable is not set.");
        res.json({ 
            msg: "Server configuration error: JWT secret missing.",
            success: false,
        });
        return;
    }

    const token = jwt.sign({email, userId: user?.id}, JWTSECRET);
    res.json({
        msg: `successfully signed in`,
        success: true,
        token: token,
        user: {
            id: user?.id,
            email: user?.email,
            role: user?.role
        }
    })

})


module.exports = router;