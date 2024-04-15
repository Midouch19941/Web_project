const { DataTypes } = require('sequelize');
const sequelize = require('../config/connexion');
const Item = require('./Item');

<<<<<<< HEAD
const Category = sequelize.define(
  'Category',
  {
    name: DataTypes.STRING
  },
  {
    timestamps: false // Désactiver  horodatages automatiques
  }
);
=======
const Category = sequelize.define('Category', {
  name: DataTypes.STRING
}, {
  timestamps: false // Désactiver les horodatages automatiques
});

>>>>>>> mehdi

Category.hasMany(Item);
Item.belongsTo(Category);

module.exports = Category;
