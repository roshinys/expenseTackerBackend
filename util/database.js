const Sequalize = require("sequelize");

const sequelize = new Sequalize("node-complete", "root", process.env.PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
