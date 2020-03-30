'use strict';

const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.js'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password,
  config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.WantTodo = require('./wanttodo')(sequelize, Sequelize);
db.Auth = require('./auth')(sequelize, Sequelize);
db.CalenderTodo = require('./calendertodo')(sequelize, Sequelize);
db.PatternTodo = require('./patterntodo')(sequelize, Sequelize);
db.Pattern = require('./pattern')(sequelize, Sequelize);
db.Calender = require('./calender')(sequelize, Sequelize);

db.Calender.hasMany(db.CalenderTodo);
db.CalenderTodo.belongsTo(db.Calender);
db.Pattern.hasMany(db.PatternTodo);
db.PatternTodo.belongsTo(db.Pattern);

module.exports = db;
