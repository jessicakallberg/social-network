const { Thought, User } = require("../models");

const thoughtController = {
  getThoughts(req, res) {
    Thought.find({})
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        res.sendStatus(500).json(err);
      });
  },

  getSingleThought({params}, res){
    Thought.findOne({id: params.id})
    .then((dbThoughtData) => res.json(dbThoughtData))
    .catch((err)=> {
        res.sendStatus(500).json(err);
  });
},

    createThought({params, body}, res){
        console.log(body)
        Thought.create(body)
        .then((dbThoughtData) => {
            return User.findOneAndUpdate(
            {
                //params or body .userId???
                _id: params.userId
            },
            {
                // push the thoughts id into User's array we want to update
                $push: {thoughts: dbThoughtData._id}
            },
            {
                new: true
            }
            )
            .then((dbUserData) => {
                if(!dbUserData){
                    res.status(404).json({message: "User found with this id"})
                }
                res.json(dbUserData)
            })
            .catch((err) => res.json(err))
        })
    },
};

module.exports = thoughtController;
