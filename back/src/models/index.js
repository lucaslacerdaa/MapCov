const Sequelize = require("sequelize");
require("dotenv/config");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: process.env.DB_DIALECT,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

sequelize.sync({
  alter: true,
});

const db = {};

db.pacientes = require("./paciente-model")(sequelize, Sequelize);
db.users = require("./user-model")(sequelize, Sequelize);

module.exports = db;
