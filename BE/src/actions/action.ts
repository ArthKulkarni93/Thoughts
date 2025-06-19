import express from 'express';
export const router = express.Router();
import actionRoute from './route';
import readRoute from './read';

router.use("/get", readRoute);
router.use("/post", actionRoute);

export default router;