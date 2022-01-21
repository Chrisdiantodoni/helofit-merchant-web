module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define(
    "admins",
    {
      username: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return Admin;
};
