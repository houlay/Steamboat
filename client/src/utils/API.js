import axios from "axios";

export default {
  // User API's 
  getUsersByEmailPassword: function(userData) {
    return axios.post("/api/getuserbyemailpassword", userData);
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
    return axios.post("/api/getPackagebyName", packageData);
  },

  addPackage: function(packageData) {
    return axios.post("/api/addPackage", packageData);
  },

  // Customer API's
  getCustomerbyFullName: function(CustomerData) {
    return axios.post("/api/getCustomerbyFullName", CustomerData);
  },

  getCustomerById: function(CustomerData) {
    return axios.post("/api/getCustomerbyId", CustomerData);
  },
  
  // takes customer (id) and sets (isCheckedin = true)
  checkinCustomer: function(CustomerData) {
    return axios.post("/api/checkinCustomer", CustomerData);
  },

  addCustomer: function(packageData) {
    return axios.post("/api/addCustomer", packageData);
  },

  getCustomers: function() {
    return axios.post("/api/getCustomers");
  },

  deleteCustomer: function(packageData) {
    return axios.post("/api/deleteCustomerbyId", packageData);
  }
  
};

