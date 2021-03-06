'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    return queryInterface.createTable('User',{

      id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },

      name:{
        type:Sequelize.STRING,
        unique:true,
      },
        email:{
          type:Sequelize.STRING,
          unique:true,
        },
      password:{
        type:Sequelize.STRING,
        unique:true,

      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
