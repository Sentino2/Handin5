import express from 'express';
import { createCookie, getAllCookies, getCookieBySlug, updateCookie, deleteCookie } from '../controllers/cookieController.js';

const router = express.Router();

// Create a new cookie
router.post('/', createCookie);

// Get all cookies
router.get('/', getAllCookies);

// Get a specific cookie by slug
router.get('/:slug', getCookieBySlug);

// Update a cookie
router.put('/:slug', updateCookie);

// Delete a cookie
router.delete('/:slug', deleteCookie);

export default router; 