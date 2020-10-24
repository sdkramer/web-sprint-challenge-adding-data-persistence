const db = require('../config')

function getResources() {
  return db('resources')
}

module.exports = {
  getResources,
}

