const db = require('../config')

function getResources() {
  return db('resources')
}

function getResourceById(id) {
  return db('resources').where('id', id).first()
  
}

function addResource(data) {
  return db('resources').insert(data, 'id').then(([id])=> getResourceById(id))
}

module.exports = {
  getResources,
  getResourceById,
  addResource
}

