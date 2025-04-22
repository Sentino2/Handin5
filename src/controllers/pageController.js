import { Router } from 'express'

const router = Router()

// Home page
router.get('/', (req, res) => {
  res.render('index')
})

// About page
router.get('/about', (req, res) => {
  res.render('about')
})

// Contact page
router.get('/contact', (req, res) => {
  res.render('contact')
})

// Contact form submission
router.post('/contact', (req, res) => {
  // Handle contact form submission
  res.redirect('/contact')
})

export default router 