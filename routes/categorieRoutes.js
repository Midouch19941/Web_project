<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const verifyToken = require('../middlewares/authMiddleware');
const CategorieController = require('../controllers/CategorieController');

// Validation rules for the createCategorie route
const createCategorieValidationRules = [
    body('name').notEmpty().withMessage('Category name is required'),
    // Add more validation rules as needed
];

// Route for creating a new category with validation middleware and token verification
router.post('/', verifyToken, createCategorieValidationRules, CategorieController.createCategorie);

// Routes for fetching, updating, and deleting categories with token verification
router.get('/', verifyToken, CategorieController.getAllCategories);
router.get('/:id', verifyToken, CategorieController.getCategorieById);
router.put('/:id', verifyToken, CategorieController.updateCategorie);
router.delete('/:id', verifyToken, CategorieController.deleteCategorie);
=======
// categorieRoutes.js

const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const verifyToken = require('../middlewares/authMiddleware');
const {
  createCategorie,
  getAllCategories,
  getCategorieById,
  updateCategorie,
  deleteCategorie
} = require('../controllers/CategoryController');

// Validation rules for the createCategorie route
const createCategorieValidationRules = [
  body('name').notEmpty().withMessage('Category name is required'),
  // Add more validation rules as needed
];

// Route for creating a new category with validation middleware and token verification
router.post('/', verifyToken, createCategorieValidationRules, createCategorie);

// Route for fetching all categories with token verification
router.get('/', verifyToken, getAllCategories);

// Route for fetching a category by ID with token verification
router.get('/:id', verifyToken, getCategorieById);

// Route for updating a category by ID with token verification
router.put('/:id', verifyToken, updateCategorie);

// Route for deleting a category by ID with token verification
router.delete('/:id', verifyToken, deleteCategorie);
>>>>>>> mehdi

module.exports = router;
