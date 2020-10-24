const express = require('express')
// const { getProjects } = require('../models/projects')
const Project = require('../models/projects')

const router = express.Router()

router.get('/projects', async (req, res, next) => {
  try {
const projects = await Project.getProjects()
res.json(projects)
  } catch(err) {
    next(err)
  }
})


router.get('/projects/:id', async (req, res, next) => {
  try {
    const project = await Project.getProjectById(req.params.id)
    res.json(project)

  } catch (err) {
    next(err)
  }
})


module.exports = router