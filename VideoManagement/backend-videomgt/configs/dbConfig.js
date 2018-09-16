'use strict'

const CONFIG = require('../configs/config.json'); 
const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONFIG.configs.DB_CON, CONFIG.configs.DB_USER, CONFIG.configs.DB_PASS, {
  host: CONFIG.configs.DB_HOST,
  port: CONFIG.configs.DB_PORT,
  dialect: CONFIG.configs.DB_DIALECT,
  operatorsAliases: false
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.video = require('../models/videoModel')(sequelize, Sequelize);
db.user = require('../models/userModel')(sequelize, Sequelize);

db.sequelize.sync().then(() => {
  console.log('Database synched')
})

module.exports = db;