const Sequelize = require('sequelize');
const sequelize = new Sequelize("kaikeba", "root", "tiankong", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false
});
module.exports.initModel = async () => {
//   const Users = sequelize.define('user', { name: Sequelize.STRING });
//   const Product = sequelize.define('team', { name: Sequelize.STRING });

//   let User = await Users.sync({ force: false })
// User.hasMany(Product)
// Product.belongsTo(User)
    // Product.belongsTo(User, {
    //   constraints: true,
    //   onDelete: 'CASCADE'
    // });
    // User.hasMany(Product);
    // User.belongsTo(Product); // 1端建立关系
    // Product.hasMany(User); // N端建立关系
  // 哈希算法
  const Product = sequelize.define("product", { title: Sequelize.STRING })
  const Users = sequelize.define("user", { name: Sequelize.STRING })
  // // 哈希算法
  Product.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE'
  });
  Users.hasMany(Product);
  User = await Users.sync({ force: false })
  return { User, Product }
} 
