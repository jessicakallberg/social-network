//const { createSecureServer } = require("http2");
const { User } = require("../models");

//get all users

const userController = {
  getAllUsers(req, res) {
    User.find({})
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
  getUserById({params}, res){
      User.findOne({id: params.id})
      .select()
      .then((dbUserData) => res.json(dbUserData))
      .catch((err)=> {
          res.sendStatus(500).json(err);
    });
  },
  updateUser(req, res){
      User.findAndUpdate({_id: params.id}, body, {new: true})
      .then((dbUserData) => res.json(dbUserData))
      .catch((err)=>{
          res.sendStatus(500).json(err);
      });
  },
  deleteUser({ params}, res){
    User.findAndDelete({_id: params.id})
    .then(dbUserData => re.json(dbUserData))
    .catch((err)=>{
      res.sendStatus(500).json(err);
  });
  }
}


module.exports = userController