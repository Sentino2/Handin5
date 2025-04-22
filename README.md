# Pizza Palace 

A full-stack web application for a Berlin-based Italian restaurant, showcasing their menu and allowing customers to view pizza details, ingredients, and nutritional information.

## Features

- **Interactive Pizza Menu**: View all pizzas with their details, ingredients, and nutritional information
- **Responsive Design**: Beautiful, mobile-friendly interface with an authentic Italian restaurant theme
- **Dynamic Content**: Real-time updates and interactive elements
- **User-Friendly Interface**: Easy navigation and intuitive layout
- **Cloud Deployment**: Hosted on Vercel with MongoDB Atlas integration

## Technical Implementation

### Frontend
- **EJS Templates**: Dynamic HTML generation with embedded JavaScript
- **CSS Styling**: 
  - Custom CSS with modern design principles
  - Responsive layout using CSS Grid and Flexbox
  - Interactive card flip animations
  - Custom color scheme and typography
- **Google Fonts Integration**: Playfair Display for elegant typography

### Backend
- **Express.js**: Web application framework
- **MongoDB Atlas**: Cloud-hosted database for storing pizza information
- **Mongoose**: ODM for MongoDB with optimized connection handling
- **RESTful Routes**: Clean and organized API structure
- **Form Validation**: Server-side validation for pizza creation and updates
- **Static File Serving**: Proper configuration for serving CSS and other assets

### Key Features Implemented
- **Pizza Management**:
  - Create, read, update, and delete pizzas
  - Detailed pizza information display
  - Ingredient and nutrition tracking
- **User Interface**:
  - Interactive pizza cards with flip animation
  - Responsive navigation
  - Contact form
  - About page with restaurant information
- **Cloud Integration**:
  - MongoDB Atlas database
  - Vercel deployment
  - Environment variable management
  - IP whitelisting for database access

## Learning Outcomes

### Technical Skills
1. **Full-Stack Development**:
   - Understanding of frontend and backend integration
   - Implementation of MVC architecture
   - Database integration and management
   - Cloud deployment and configuration

2. **Frontend Development**:
   - EJS template engine usage
   - CSS Grid and Flexbox implementation
   - Responsive design principles
   - Interactive UI elements

3. **Backend Development**:
   - Express.js routing and middleware
   - MongoDB Atlas and Mongoose integration
   - Form validation and data handling
   - Static file serving configuration
   - Serverless function optimization

4. **Database Management**:
   - Schema design and implementation
   - CRUD operations
   - Data validation and sanitization
   - Cloud database configuration
   - Connection pooling and optimization

5. **DevOps**:
   - Vercel deployment
   - Environment variable management
   - IP whitelisting
   - Serverless function configuration

### Project Management
- Version control with Git
- Project documentation
- Code organization and structure
- Problem-solving and debugging
- Deployment pipeline management

## Getting Started

### Prerequisites
- Node.js
- MongoDB Atlas account
- Vercel account
- npm or yarn

### Local Installation
1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file with:
```
PORT=3737
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/pizzashop?retryWrites=true&w=majority
```

### MongoDB Atlas Setup
1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Create a database user with read/write permissions
4. Get your connection string from the "Connect" button
5. Update your `.env` file with the connection string
6. Configure IP whitelisting in MongoDB Atlas:
   - Go to "Network Access"
   - Add IP address: `0.0.0.0/0` (for development)
   - Or add specific IP ranges for production

### Vercel Deployment
1. Install Vercel CLI
```bash
npm install -g vercel
```

2. Login to Vercel
```bash
vercel login
```

3. Configure environment variables in Vercel:
   - Go to project settings
   - Add `MONGODB_URI` with your MongoDB Atlas connection string
   - Add `NODE_ENV=production`

4. Deploy to Vercel
```bash
vercel --prod
```

## Project Structure
```
src/
├── config/
│   ├── app.js
│   └── database.js
├── controllers/
│   ├── pageController.js
│   └── pizzaController.js
├── models/
│   └── pizza.js
├── views/
│   ├── partials/
│   └── pizzas/
└── app.js
public/
└── styles.css
```

## Configuration Files

### vercel.json
```json
{
  "version": 2,
  "builds": [
    {
      "src": "src/app.js",
      "use": "@vercel/node",
      "config": {
        "maxDuration": 10
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/app.js",
      "methods": ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"]
    }
  ],
  "env": {
    "NODE_ENV": "production"
  },
  "regions": ["fra1"]
}
```

## Deployment Notes
- Database connections are cached to improve performance
- Timeout settings are configured to prevent function timeouts
- IP whitelisting is required for MongoDB Atlas access
- Environment variables are managed through Vercel's dashboard
