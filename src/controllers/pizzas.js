const Pizza = require('../models/pizza');

exports.create = async (req, res) => {
  try {
    const { name, slug, priceInCents, description, ingredients, nutrition } = req.body;
    
    // Validate required fields
    if (!name || !slug || !priceInCents || !ingredients || !nutrition) {
      return res.status(400).render('pizzas/new', {
        error: 'Please fill in all required fields',
        formData: req.body
      });
    }

    // Create new pizza
    const pizza = new Pizza({
      name,
      slug,
      priceInCents: parseInt(priceInCents),
      description,
      ingredients: Array.isArray(ingredients) ? ingredients : [ingredients],
      nutrition: {
        calories: parseInt(nutrition.calories),
        protein: nutrition.protein,
        carbs: nutrition.carbs,
        fat: nutrition.fat
      }
    });

    await pizza.save();
    res.redirect(`/pizzas/${pizza.slug}`);
  } catch (error) {
    console.error('Error creating pizza:', error);
    res.status(500).render('pizzas/new', {
      error: 'An error occurred while creating the pizza',
      formData: req.body
    });
  }
}; 