module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the User model a name and email of type STRING
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isSuperUser: { type:  DataTypes.BOOLEAN, 
                            allowNull: false, 
                            defaultValue: false},
      isActive: { type:  DataTypes.BOOLEAN, 
        allowNull: false, 
        defaultValue: true}
    });
  
    return User;
  };
  