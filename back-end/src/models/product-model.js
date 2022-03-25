module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "products",
    {
      name: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.REAL,
      },
    },
    { timestamps: false }
  );

  return Product;
};
