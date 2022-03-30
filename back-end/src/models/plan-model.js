module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define(
    "plans",
    {
      value: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );

  return Plan;
};
