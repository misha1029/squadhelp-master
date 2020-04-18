'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Transactions', [
      {
        userId:'1',
        typeOperation: 'Income',
        sum: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId:'1',
        typeOperation: 'Expense',
        sum: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Transactions', null, {});
  },
};
