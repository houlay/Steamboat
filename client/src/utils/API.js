import axios from "axios";

export default {
  // User API's 
  getUsersByEmailPassword: function(userData) {
    return axios.post("/api/getuserbyemailpassword");
  },

  getUsers: function() {
    return axios.post("/api/getusers");
  },

  addUser: function(userData) {
    return axios.post("/api/adduser", userData);
  },

  deleteUser: function(userData) {
    return axios.post("/api/deleteuser", userData);
  },
  // Package API's
  getPackages: function() {
    return axios.post("/api/getPackages");
  },

  getPackageByName: function(packageData) {
    return axios.post("/api/getPackagebyName");
  },

  addPackage: function(packageData) {
    return axios.post("/api/addPackage");
  },

  // Customer API's
  getCustomerById: function(CustomerData) {
    return axios.post("/api/getCustomerbyId");
  },

  addCustomer: function(packageData) {
    return axios.post("/api/addCustomer");
  },

  getCustomers: function() {
    return axios.post("/api/getCustomers");
  },

  deleteCustomer: function(packageData) {
    return axios.post("/api/deleteCustomerbyId");
  }
  
};

