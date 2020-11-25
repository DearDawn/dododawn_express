'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Weibo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Weibo.init({
    account: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    update_date: DataTypes.STRING,
    comment_count: DataTypes.INTEGER,
    like_count: DataTypes.INTEGER,
    picture_list: DataTypes.STRING,
    video_list: DataTypes.STRING,
    music_list: DataTypes.STRING,
    history_id_list: DataTypes.STRING,
    authority_level: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    extra: DataTypes.STRING,
    position: DataTypes.STRING,
    province: DataTypes.STRING,
    city: DataTypes.STRING,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Weibo',
  });
  return Weibo;
};