const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const userRoutes = require('./userRoutes'); // Importer les routes utilisateur
const roleRoutes = require('./roleRoutes'); // Importer les routes des rôles
const authRoutes = require('./authRoutes'); // Importer les routes d'authentification
const menuRoutes = require('./menuRoutes'); // Importer les routes de menus
const orderRoutes = require('./orderRoutes'); // Importer les routes de commandes
const reservationRoutes = require('./reservationRoutes'); // Importer les routes de réservations
const reviewRoutes = require('./reviewRoutes'); // Importer les routes d'avis

// Utiliser les routes utilisateur
router.use('/users', userRoutes);

// Utiliser les routes des rôles
router.use('/roles', roleRoutes);

// Utiliser les routes d'authentification
router.use('/auth', authRoutes);

// Utiliser les routes de menus
router.use('/menus', menuRoutes);

// Utiliser les routes de commandes
router.use('/orders', orderRoutes);

// Utiliser les routes de réservations
router.use('/reservations', reservationRoutes);

// Utiliser les routes d'avis
router.use('/reviews', reviewRoutes);

=======
const userRoutes = require('./userRoutes'); // Import user routes
const roleRoutes = require('./roleRoutes'); // Import role routes
const authRoutes = require('./authRoutes'); // Import auth routes
const menuRoutes = require('./menuRoutes'); // Import menu routes
const orderRoutes = require('./orderRoutes'); // Import order routes
const reservationRoutes = require('./reservationRoutes'); // Import reservation routes
const reviewRoutes = require('./reviewRoutes'); // Import review routes
const itemRoutes = require('./itemRoutes'); // Import item routes
const categoryRoutes = require('./categorieRoutes'); // Import category routes

// Use user routes
router.use('/users', userRoutes);

// Use role routes
router.use('/roles', roleRoutes);

// Use auth routes
router.use('/auth', authRoutes);

// Use menu routes
router.use('/menus', menuRoutes);

// Use order routes
router.use('/orders', orderRoutes);

// Use reservation routes
router.use('/reservations', reservationRoutes);

// Use review routes
router.use('/reviews', reviewRoutes);

// Use item routes
router.use('/items', itemRoutes);

// Use category routes
router.use('/categories', categoryRoutes);

>>>>>>> mehdi
module.exports = router;
