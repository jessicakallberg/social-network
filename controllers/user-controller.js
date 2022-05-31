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
  getUserById(req, res){
      User.findOne(req.body)
      .select()
      .then((dbUserData) => res.json(dbUserData))
      .catch((err)=> {
          res.sendStatus(500).json(err);
    });
  },
  updateUser(req, res){
      User.findAndUpdate(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err)=>{
          res.sendStatus(500).json(err);
      });
  },
  deleteUser(req, res){
    User.findAndDelete(req.body)
    .then(dbUserData => re.json(dbUserData))
        .catch(err => res.json(err))
  }
}


module.exports = userController