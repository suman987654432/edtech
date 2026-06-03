import express from 'express';
import { submitApplication } from '../controllers/applicationController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Apply the `protect` middleware to ensure only logged in users can submit
router.post('/', protect, submitApplication);

export default router;
