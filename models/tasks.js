const db = require('../config')

function getTasks() {
  return db('tasks')
}

function getTaskById(id) {
  return db('tasks').where('id', id).first()
  
}

function addTask(data) {
  return db('tasks').insert(data, 'id').then(([id])=> getTaskById(id))
}

module.exports = {
  getTasks,
  getTaskById,
  addTask
}