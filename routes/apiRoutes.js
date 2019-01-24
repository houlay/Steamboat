var db = require("../models");

module.exports = function(app) {

  app.post("/api/getuserbyemailpassword", function(req, res) {
    console.log(req.body);    
    db.User.findAll({
        where: {
        email: req.body.email,
        password: req.body.password
      }
      
    }).then(function(dbReturn) {
      res.json(dbReturn);
    });
  });

  // Get all users
  app.post("/api/getusers", function(req, res) {
    db.User.findAll({
    }).then(function(dbReturn) {
      // console.log(dbReturn);
      res.json(dbReturn);
    });
  });

  // Creates a new User record with email and name.
  app.post("/api/adduser", function(req, res) {
    db.User.create(
      {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        isSuperUser: req.body.isSuperUser,
        isActive: req.body.isActive
      })
      .then(function(dbExample) {
    res.json(dbExample);
  });
  });

  app.post("/api/updateUser", function(req, res) {
    db.User.update(
    {
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      isSuperUser: req.body.isSuperUser,
      isActive: req.body.isActive
    },
    {
      where: {name: req.body.name }
      
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete a single user by id
  app.delete("/api/deleteuser", function(req, res) {
    db.User.destroy({
        where: 
      { 
        id: req.body.id
      } }).then(function(dbExample) {
      res.json(dbExample);
    });
 });

app.post("/api/getPackages", function(req, res) {
  
  db.Package.findAll({
      
    include: [db.Customer]
  }).then(function(dbExamples) {
    res.json(dbExamples);
  });
});

app.post("/api/getPackagebyName", function(req, res) {
  db.Package.findAll({
    where: {
      name: req.body.name
    },
    include: [db.Customer]
  }).then(function(dbExamples) {
    res.json(dbExamples);
  });
});

  
app.post("/api/addPackage", function(req, res) {
    console.log(req.body);
    db.Package.create(
      {
        name: req.body.name,
        occupants: req.body.occupants,
        costPerOccupant: req.body.costPerOccupant
        
      })
      .then(function(dbExample) {
    res.json(dbExample);
  });
});

app.post("/api/updatePackageOccupants", function(req, res) {
  db.Package.update({
    occupants: req.body.occupants
  },
  {
    where: {id: req.body.id }
  }).then(function(dbExample) {
    res.json(dbExample);
  });
});

app.post("/api/getCustomerbyId", function(req, res) {
  db.Customer.findAll(
    {
      where: {
        id: req.body.id
      },
      include: [db.Package]
    })
    .then(function(dbExample) {
    res.json(dbExample);
  });
});

app.post("/api/getCustomerbyFullName", function(req, res) {
  db.Customer.findAll(
    {
      where: {
        name: req.body.name
      },
      include: [db.Package]
    })
    .then(function(dbExample) {
    res.json(dbExample);
  });
});




app.post("/api/addCustomer", function(req, res) {
    db.Customer.create(
      {
        name: req.body.name,
        email: req.body.email,
        PackageId: req.body.PackageId
      })
      .then(function(dbExample) {
    res.json(dbExample);
  });
});

app.post("/api/getCustomers", function(req, res) {
 db.Customer.findAll(
    {
      include: [db.Package]
    })
    .then(function(dbExample) {
    res.json(dbExample);
  });
});

app.post("/api/checkinCustomer", function(req, res) {
  console.log(req.body);
  db.Customer.update({
    isCheckedin: true
  },
  {
    where: {id: req.body.id }
  }).then(function(dbExample) {
    res.json(dbExample);
  });
});

  app.post("/api/deleteCustomerbyId", function(req, res) {
    db.Customer.destroy({
       where: { 
        id: req.body.id 
      } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

 
};
