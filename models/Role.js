const { DataTypes } = require('sequelize');
const sequelize = require('../config/connexion.js');
const User = require('./User.js'); // Import the User model

const Role = sequelize.define('Role', {
  nom: {
    type: DataTypes.STRING,
    unique: true
  }
}, {
  timestamps: false // Move this option outside the property definition
});

// Establish association after User model is defined
Role.hasMany(User, { foreignKey: 'roleId' });

module.exports = Role;
