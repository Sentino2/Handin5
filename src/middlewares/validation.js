import { body, validationResult } from 'express-validator'

// Validation middleware for creating a new pizza
export const validateCreatePizza = [
  body('name')
    .trim()
    .isString()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .escape(),
  
  body('slug')
    .trim()
    .isString()
    .isLength({ min: 2, max: 100 })
    .withMessage('Slug must be between 2 and 100 characters')
    .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    .withMessage('Slug must be lowercase with hyphens between words')
    .escape(),
  
  body('priceInCents')
    .isInt({ min: 0 })
    .withMessage('Price must be a positive number'),
  
  body('description')
    .optional()
    .trim()
    .isString()
    .isLength({ max: 500 })
    .withMessage('Description must be less than 500 characters')
    .escape(),

  body('ingredients')
    .isArray({ min: 1 })
    .withMessage('At least one ingredient is required'),
  
  body('ingredients.*')
    .isString()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Each ingredient must be between 2 and 50 characters'),
  
  body('nutrition.calories')
    .isInt({ min: 0 })
    .withMessage('Calories must be a positive number'),
  
  body('nutrition.protein')
    .isInt({ min: 0 })
    .withMessage('Protein must be a positive number'),
  
  body('nutrition.carbs')
    .isInt({ min: 0 })
    .withMessage('Carbs must be a positive number'),
  
  body('nutrition.fat')
    .isInt({ min: 0 })
    .withMessage('Fat must be a positive number'),
  
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.render('pizzas/new', { 
        error: errors.array()[0].msg,
        formData: req.body
      })
    }
    next()
  }
]

// Validation middleware for updating a pizza
export const validateUpdatePizza = [
  body('name')
    .optional()
    .trim()
    .isString()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .escape(),
  
  body('slug')
    .optional()
    .trim()
    .isString()
    .isLength({ min: 2, max: 100 })
    .withMessage('Slug must be between 2 and 100 characters')
    .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    .withMessage('Slug must be lowercase with hyphens between words')
    .escape(),
  
  body('priceInCents')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Price must be a positive number'),
  
  body('description')
    .optional()
    .trim()
    .isString()
    .isLength({ max: 500 })
    .withMessage('Description must be less than 500 characters')
    .escape(),

  body('nutrition.calories')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Calories must be a positive number'),
  
  body('nutrition.protein')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Protein must be a positive number'),
  
  body('nutrition.carbs')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Carbs must be a positive number'),
  
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    next()
  }
] 