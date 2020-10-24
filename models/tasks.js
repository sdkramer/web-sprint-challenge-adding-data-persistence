const db = require('../config')

function getTasks() {
  return db('tasks')
}

module.exports = {
  getTasks,
}