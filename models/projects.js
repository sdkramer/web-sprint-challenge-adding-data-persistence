const db = require('../config')

function getProjects() {
  return db('projects')
}

function getProjectById(id) {
  return db('projects').where('id', id).first()
  
}

function addProject(data) {
  return db('projects').insert(data, 'id').then(([id])=> getProjectById(id))
}

module.exports = {
  getProjects,
  getProjectById,
  addProject,
}