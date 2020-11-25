'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Weibos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      account: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      update_date: {
        type: Sequelize.STRING
      },
      comment_count: {
        type: Sequelize.INTEGER
      },
      like_count: {
        type: Sequelize.INTEGER
      },
      picture_list: {
        type: Sequelize.STRING
      },
      video_list: {
        type: Sequelize.STRING
      },
      music_list: {
        type: Sequelize.STRING
      },
      history_id_list: {
        type: Sequelize.STRING
      },
      authority_level: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.INTEGER
      },
      extra: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      longitude: {
        type: Sequelize.FLOAT
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Weibos');
  }
};