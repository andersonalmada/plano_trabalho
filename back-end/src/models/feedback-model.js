module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define(
    "feedbacks",
    {
      description: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );

  return Feedback;
};
