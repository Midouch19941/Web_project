const express = require('express');
const router = express.Router();
const RoleController = require('../controllers/RoleController');
const verifyToken = require('../middlewares/authMiddleware'); 

// Route to fetch all roles with token verification
router.get('/', verifyToken, RoleController.getAllRoles);

// Route to create a new role with token verification
router.post('/', RoleController.createRole);

// Route to fetch a single role by ID with token verification
router.get('/:id', verifyToken, RoleController.getRoleById);

// Route to update a role by ID with token verification
router.put('/:id', verifyToken, RoleController.updateRole);

// Route to delete a role by ID with token verification
router.delete('/:id', verifyToken, RoleController.deleteRole);

module.exports = router;
