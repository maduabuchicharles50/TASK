const express = require('express')
const router = express.Router()
const {createUser,getUsers,getUser,updateUser,deleteUser,loginUser} = require('../controllers/user')

router.route('/').post(createUser).get(getUsers)
router.route('/login').post(loginUser)

router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)



module.exports = router