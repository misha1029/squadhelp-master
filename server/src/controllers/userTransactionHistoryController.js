const db = require('../models');


module.exports.getUserTransactions = async (req, res, next) => {
  try {
    const history = await db.Transactions.findAll(
      {
        where: {
          userId: req.tokenData.userId,
        },
      });
    res.send(history);
  } catch (e) {
    next(e);
  }
};

module.exports.getUserStatement = async (req, res, next) => {
  try {
    const total = await db.Transactions.findAll(
      {
        where: {
          userId: req.tokenData.userId,
        },
        group: ['typeOperation'],
        attributes: ['typeOperation', [db.Sequelize.fn('sum', db.Sequelize.col('sum')), 'total'],
        ],
      });
    const result = {};
    total.forEach(value => {
      result[value.get('typeOperation')] = value.get('total');
    });
    return res.send(result);
  } catch (e) {
    next(e);
  }
};
