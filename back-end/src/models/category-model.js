module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "categories",
    {
      name: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );

  return Category;
};
