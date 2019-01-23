module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      isCheckedin: {  type: DataTypes.BOOLEAN, 
                      allowNull: false, 
                      defaultValue: false}
    });
  
    Customer.associate = function(models) {
      // Associating Customer with Package
      Customer.belongsTo(models.Package, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Customer;
  };