'use strict'

const user = (sequelize, Sequelize) => {
  return sequelize.define('videos', {
    firstname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}

module.exports = user;