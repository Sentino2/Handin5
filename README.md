# Pizza Palace - Berlin's Authentic Italian Restaurant

A full-stack web application for a Berlin-based Italian restaurant, showcasing their menu and allowing customers to view pizza details, ingredients, and nutritional information.

##  Features

- **Interactive Pizza Menu**: View all pizzas with their details, ingredients, and nutritional information
- **Responsive Design**: Beautiful, mobile-friendly interface with an authentic Italian restaurant theme
- **Dynamic Content**: Real-time updates and interactive elements
- **User-Friendly Interface**: Easy navigation and intuitive layout

## 🛠️ Technical Implementation

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
- **MongoDB**: Database for storing pizza information
- **Mongoose**: ODM for MongoDB
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

##  Learning Outcomes

### Technical Skills
1. **Full-Stack Development**:
   - Understanding of frontend and backend integration
   - Implementation of MVC architecture
   - Database integration and management

2. **Frontend Development**:
   - EJS template engine usage
   - CSS Grid and Flexbox implementation
   - Responsive design principles
   - Interactive UI elements

3. **Backend Development**:
   - Express.js routing and middleware
   - MongoDB and Mongoose integration
   - Form validation and data handling
   - Static file serving configuration

4. **Database Management**:
   - Schema design and implementation
   - CRUD operations
   - Data validation and sanitization

### Project Management
- Version control with Git
- Project documentation
- Code organization and structure
- Problem-solving and debugging

##  Getting Started

### Prerequisites
- Node.js
- MongoDB
- npm or yarn

### Installation
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
MONGODB_URI=mongodb://localhost:27017/pizzashop
```

4. Start the server
```bash
npm start
```

## 📝 Project Structure
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



