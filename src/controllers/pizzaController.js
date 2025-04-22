import { Router } from 'express'
import Pizza from '../models/pizza.js'
import { readablePrice } from '../helpers/priceHelper.js'
import { validateCreatePizza, validateUpdatePizza } from '../middlewares/validation.js'

const router = Router()

// Index - List all pizzas
router.get('/', async (req, res) => {
  try {
    const pizzas = await Pizza.find({}).exec()
    res.render('pizzas/index', { 
      pizzas: pizzas,
      readablePrice: readablePrice
    })
  } catch (error) {
    console.error(error)
    res.render('pizzas/index', { 
      pizzas: [],
      readablePrice: readablePrice
    })
  }
})

// New - Show form to create new pizza
router.get('/new', (req, res) => {
  res.render('pizzas/new')
})

// Create - Create new pizza
router.post('/', validateCreatePizza, async (req, res) => {
  try {
    // Process ingredients to ensure it's an array
    const ingredients = Array.isArray(req.body.ingredients) 
      ? req.body.ingredients 
      : [req.body.ingredients];

    // Create pizza data object
    const pizzaData = {
      ...req.body,
      ingredients: ingredients,
      nutrition: {
        calories: parseInt(req.body.nutrition.calories),
        protein: parseInt(req.body.nutrition.protein),
        carbs: parseInt(req.body.nutrition.carbs),
        fat: parseInt(req.body.nutrition.fat)
      }
    };

    const pizza = new Pizza(pizzaData);
    await pizza.save();
    res.redirect('/pizzas');
  } catch (error) {
    console.error('Error creating pizza:', error);
    res.render('pizzas/new', { 
      error: 'Could not create pizza. Please try again.',
      formData: req.body
    });
  }
});

// Show - Show details of one pizza
router.get('/:slug', async (req, res) => {
  try {
    const slug = req.params.slug
    const pizza = await Pizza.findOne({ slug: slug }).exec()
    if (!pizza) throw new Error('Pizza not found')

    res.render('pizzas/show', { 
      pizza: pizza,
      readablePrice: readablePrice
    })
  } catch (error) {
    console.error(error)
    res.status(404).send('Could not find the pizza you\'re looking for.')
  }
})

// Edit - Show form to edit pizza
router.get('/:slug/edit', async (req, res) => {
  try {
    const slug = req.params.slug
    const pizza = await Pizza.findOne({ slug: slug }).exec()
    if (!pizza) throw new Error('Pizza not found')

    res.render('pizzas/edit', { pizza: pizza })
  } catch (error) {
    console.error(error)
    res.redirect('/pizzas')
  }
})

// Update - Update pizza
router.put('/:slug', validateUpdatePizza, async (req, res) => {
  try {
    const slug = req.params.slug;
    
    // Process ingredients to ensure it's an array
    const ingredients = Array.isArray(req.body.ingredients) 
      ? req.body.ingredients 
      : [req.body.ingredients];

    // Create update data object
    const updateData = {
      ...req.body,
      ingredients: ingredients,
      nutrition: {
        calories: parseInt(req.body.nutrition.calories),
        protein: parseInt(req.body.nutrition.protein),
        carbs: parseInt(req.body.nutrition.carbs),
        fat: parseInt(req.body.nutrition.fat)
      }
    };

    await Pizza.findOneAndUpdate({ slug: slug }, updateData);
    res.redirect(`/pizzas/${slug}`);
  } catch (error) {
    console.error('Error updating pizza:', error);
    res.render('pizzas/edit', { 
      error: 'Could not update pizza. Please try again.',
      pizza: req.body
    });
  }
});

// Delete - Delete pizza
router.delete('/:slug', async (req, res) => {
  try {
    const slug = req.params.slug
    await Pizza.findOneAndDelete({ slug: slug })
    res.redirect('/pizzas')
  } catch (error) {
    console.error(error)
    res.redirect('/pizzas')
  }
})

export default router 