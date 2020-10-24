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

router.get('/tasks/:id', async (req, res, next) => {
  try {
    const task = await Task.getTaskById(req.params.id)
    res.json(task)

  } catch (err) {
    next(err)
  }
})

router.post('/tasks', async (req, res, next) => {
  try {
const task = await task.addTask(req.body)
res.status(201).json(task)
  } catch(err) {
    next(err)
  }
})


module.exports = router