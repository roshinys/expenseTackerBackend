const Sequalize = require("sequelize");

const sequelize = require("../util/database");

const Todo = sequelize.define("todo", {
  id: {
    type: Sequalize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  expense: {
    type: Sequalize.DOUBLE,
    allowNull: false,
  },
  description: {
    type: Sequalize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequalize.STRING,
    allowNull: false,
  },
});

module.exports = Todo;
