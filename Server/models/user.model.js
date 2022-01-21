module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    email: {
      type: Sequelize.STRING,
    },
    nama_dpn: {
      type: Sequelize.STRING,
    },
    nama_blkg: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    pin: {
      type: Sequelize.INTEGER,
    },
  });

  return User;
};
