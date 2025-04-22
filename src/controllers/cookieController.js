import Cookie from '../models/cookie.js';

export const createCookie = async (req, res) => {
  try {
    // Convert isInStock to boolean
    const cookieData = {
      ...req.body,
      isInStock: req.body.isInStock === 'on'
    };
    
    const cookie = new Cookie(cookieData);
    await cookie.save();
    res.redirect('/cookies');
  } catch (error) {
    console.error(error);
    res.render('cookies/new', {
      error: 'Could not create cookie. Please try again.',
      formData: req.body
    });
  }
};

export const getAllCookies = async (req, res) => {
  try {
    const cookies = await Cookie.find({});
    res.render('cookies/index', { cookies });
  } catch (error) {
    console.error(error);
    res.render('cookies/index', { cookies: [] });
  }
};

export const getCookieBySlug = async (req, res) => {
  try {
    const cookie = await Cookie.findOne({ slug: req.params.slug });
    if (!cookie) {
      return res.status(404).render('error', { message: 'Cookie not found' });
    }
    res.render('cookies/show', { cookie });
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Server error' });
  }
};

export const updateCookie = async (req, res) => {
  try {
    // Convert isInStock to boolean
    const updateData = {
      ...req.body,
      isInStock: req.body.isInStock === 'on'
    };
    
    const cookie = await Cookie.findOneAndUpdate(
      { slug: req.params.slug },
      updateData,
      { new: true }
    );
    if (!cookie) {
      return res.status(404).render('error', { message: 'Cookie not found' });
    }
    res.redirect(`/cookies/${cookie.slug}`);
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Server error' });
  }
};

export const deleteCookie = async (req, res) => {
  try {
    const cookie = await Cookie.findOneAndDelete({ slug: req.params.slug });
    if (!cookie) {
      return res.status(404).render('error', { message: 'Cookie not found' });
    }
    res.redirect('/cookies');
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Server error' });
  }
}; 