module.exports = (sequelize, DataTypes) => {
  const SubCategory = sequelize.define(
    "subcategories",
    {
      name: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );

  return SubCategory;
};
