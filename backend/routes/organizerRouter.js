import express from 'express';

import protectRoute from '../middleware/protectRoute.js';
import updateRouter from './updateRouter.js';
import {createEvent,eventList,getMe, updateOrganizer,getNotifications} from '../controller/organizerController.js'

const router = express.Router();

router.use('/update',protectRoute,updateRouter);
router.post('/create',protectRoute,createEvent);
router.get('/events',protectRoute,eventList);
router.get('/profile',protectRoute,getMe);
router.post('/profile',protectRoute,updateOrganizer);
router.get('/notifications',protectRoute,getNotifications);
export default router;