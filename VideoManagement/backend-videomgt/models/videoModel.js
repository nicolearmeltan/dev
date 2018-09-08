'use strict'

const files = (sequelize, Sequelize) => {
  return sequelize.define('videos', {
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    filename: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING(800),
      allowNull: true
    },
    path: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}

module.exports = files;