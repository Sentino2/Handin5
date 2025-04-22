import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import pageController from './controllers/pageController.js'
import pizzaController from './controllers/pizzaController.js'
import connectDB from './config/database.js'
import cookieRoutes from './routes/cookieRoutes.js'
import { readablePrice } from './helpers/priceHelper.js'
import Cookie from './models/cookie.js'
import methodOverride from 'method-override'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())

// View engine setup
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Database connection middleware with timeout
app.use(async (req, res, next) => {
  try {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Database connection timeout')), 5000)
    })

    await Promise.race([connectDB(), timeoutPromise])
    next()
  } catch (error) {
    console.error('Database connection error:', error)
    res.status(500).json({ error: 'Database connection failed' })
  }
})

// Routes
app.use('/', pageController)
app.use('/pizzas', pizzaController)
app.get('/cookies/new', (req, res) => {
  res.render('cookies/new')
})
app.use('/cookies', cookieRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

// Export the Express API
export default app 