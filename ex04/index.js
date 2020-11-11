const Sequelize = require('sequelize');
module.exports.initModel = async sequelize => {
  const User = sequelize.define('user', { name: Sequelize.STRING });
  const Product = sequelize.define('product', { title: Sequelize.STRING });
  User.hasMany(Product);
  await sequelize.sync({ force: true })
  return { User, Product }
} 
