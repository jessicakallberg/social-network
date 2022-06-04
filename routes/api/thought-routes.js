const router = require('express').Router();
const { getThoughts, getSingleThought} = require('../../controllers/thought-controller')

// post one thought
router.route('/:userId').post(getThoughts)


module.exports = router 