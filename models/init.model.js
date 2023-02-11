const Repair = require('./repair.model');
const User = require('./user.model');

const initModel = () => {
  User.hasMany(Repair, { sourcekey: 'id', foreignKey: 'userId' });
  Repair.belongsTo(User, { sourcekey: 'id', foreignKey: 'userId' });
};

module.exports = initModel;
