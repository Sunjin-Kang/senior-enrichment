'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

let Planet = db.define('Planet', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    set: function (val) {
      this.setDataValue('name', val.trim());
    }
  },
  image: {
    type: Sequelize.STRING,
    // defaultValue: function () {
    //   return getRandomImage();
    // },
    // get: function() {
    //   return `/api/planets/${this.id}/image`
    // }
  }

});
module.exports = Planet
