import express  from 'express';

import organizerAuthRouter from './organizerAuthRouter.js'
import adminAuthRouter from './adminAuthRoutes.js'

const router = express.Router();

router.use('/organizer',organizerAuthRouter);
router.use('/admin',adminAuthRouter);
export default router;