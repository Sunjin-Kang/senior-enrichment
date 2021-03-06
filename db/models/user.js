'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

let User = db.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    set: function (val) {
      this.setDataValue('name', val.trim());
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },

});



module.exports = User
