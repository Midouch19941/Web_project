const { DataTypes } = require('sequelize');
const sequelize = require('../config/connexion');
const Item = require('./Item');

const Category = sequelize.define(
  'Category',
  {
    name: DataTypes.STRING
  },
  {
    timestamps: false // Désactiver  horodatages automatiques
  }
);

Category.hasMany(Item);
Item.belongsTo(Category);

module.exports = Category;
