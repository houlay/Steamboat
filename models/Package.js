module.exports = function(sequelize, DataTypes) {
    var Package = sequelize.define("Package", {
      name: DataTypes.STRING,
      occupants: DataTypes.INTEGER,
      costPerOccupant: DataTypes.DECIMAL(10, 2),
      totalPackageCost: DataTypes.DECIMAL(10, 2),
      paidInFull: { type: DataTypes.BOOLEAN, 
                          allowNull: false, 
                          defaultValue: false}

      });
  
    Package.associate = function(models) {
      // Associating Package with Person
      // When an Package is deleted, also delete any associated Persons
      Package.hasMany(models.Customer, {
        onDelete: "cascade"
      });
    };
  
    return Package;
  };