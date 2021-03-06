const User = require('./user')
const Product = require('./product')
const Category = require('./category')
const Inventory = require('./inventory')
const Order = require('./order')
const OrderData = require('./orderData')
const Review = require('./review')
const Address = require('./address')
const Cart = require('./cart')
const CartData = require('./cartData')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Product.belongsToMany(Category, {through: 'product_categories'})
Category.belongsToMany(Product, {through: 'product_categories'})

Product.hasMany(Review)

OrderData.belongsTo(Order)
OrderData.belongsTo(Product)

Order.belongsTo(User)
Order.hasMany(OrderData)
Order.hasOne(Address)

Inventory.belongsTo(Product)

Review.belongsTo(Product)
Review.belongsTo(User)

Address.belongsTo(Order)
Address.belongsTo(User)

Cart.belongsTo(User)
Cart.hasMany(CartData)
CartData.belongsTo(Cart)
CartData.belongsTo(Product)

User.hasMany(Order)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  Category,
  Inventory,
  Order,
  OrderData,
  Review,
  Address,
  Cart,
  CartData
}
