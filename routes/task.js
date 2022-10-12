const express = require('express')

const router = express.Router()
const {
  getallItem,
  createTask,
  getask,
  updateTask,
  deleteTask,
} = require('../controller/task')
router.route('/').get(getallItem).post(createTask)
router.route('/:id').get(getask).patch(updateTask).delete(deleteTask)
module.exports = router
