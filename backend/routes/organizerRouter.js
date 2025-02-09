import express from 'express';

import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

import protectRoute from '../middleware/organizerProtectRoute.js';
import updateRouter from './updateRouter.js';
import {createEvent,eventList,getMe, updateOrganizer,getNotifications,getName, updateProfileImage,updateCoverImage,getEvent,updateEventBanner} from '../controller/organizerController.js'

const router = express.Router();

router.use('/update',protectRoute,updateRouter);
router.post('/create-event',protectRoute,createEvent);
router.get('/events',protectRoute,eventList);
router.get('/event/:eventId',protectRoute,getEvent);
router.get('/profile',protectRoute,getMe);
router.put('/profile',protectRoute,updateOrganizer);
router.put("/updateProfileImage", protectRoute,upload.single("profileImg"), updateProfileImage);
router.put("/updateCoverImage", protectRoute,upload.single("coverImage"), updateCoverImage);
router.get('/notifications',protectRoute,getNotifications);
router.get('/getName',protectRoute,getName);
router.put('/event/update-event-banner',protectRoute,upload.single("banner"),updateEventBanner);
export default router;