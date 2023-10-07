const express = require('express')
const router = express.Router()

const {createTask, getTask,getTasks,updateTask,deleteTask} = require('../controllers/task')

router.route('/').post(createTask).get(getTasks)

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router