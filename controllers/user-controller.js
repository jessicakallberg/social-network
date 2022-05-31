const { createSecureServer } = require("http2");
const { User } = require("../models");

//get all users

const userController = {
  getAllUsers(req, res) {
    User.find()
      .select()
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        res.sendStatus(500).json(err);
      });
  },

  createUser(req,res){
      User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err)=> {
          res.sendStatus(500).json(err);
    });
  },
  getUserById(req,res){
      User.findOne()
      .select()
      .then((dbUserData) => res.json(dbUserData))
      .catch((err)=> {
          res.sendStatus(500).json(err);
    });
  },
  updateUser(req, res){
      User.findOneAndUpdate(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err)=>{
          res.sendStatus(500).json(err);
      });
  },

