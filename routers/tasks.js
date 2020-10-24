const express = require('express')
// const { getTasks } = require('../models/tasks')
const Task = require('../models/tasks')

const router = express.Router()

router.get('/tasks', async (req, res, next) => {
try {
  const tasks = await Task.getTasks()
  res.json(tasks)

} catch(err) {
  next(err)
}
})


module.exports = router