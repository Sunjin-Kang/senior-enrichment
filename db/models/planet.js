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
    defaultValue: function () {
      return 'https://4.bp.blogspot.com/-6DvEIk9TUGc/V4dzeqcHAdI/AAAAAAAAIjI/Q2zL--z-HZYZU5LWuiNK1CZbqWWiY7jFgCLcB/s1600/Post%2B-%2BJuly%2B2016%2B%252820%2529.jpg';
    },
    // get: function() {
    //   return `/api/planets/${this.id}/image`
    // }
  }

});
module.exports = Planet
