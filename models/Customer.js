module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      test: DataTypes.STRING
    });
  
    Customer.associate = function(models) {
      // Associating Person with Package
      Customer.belongsTo(models.Package, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Customer;
  };