module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Banks', [
      {
        cardNumber: '4564654564564564',
        name: 'SquadHelp',
        expiry: '11/20',
        cvc: '453',
        balance: 0,
      },
      {
        cardNumber: '4111111111111111',
        name: 'Misha',
        expiry: '09/21',
        cvc: '411',
        balance: 5000,
      },
    ], {});
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Banks', null, {});
  },

};