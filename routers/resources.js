const express = require('express')
const Resource = require('../models/resources')

const router = express.Router()

router.get('/resources', async (req, res, next) => { 
  try{
const resources = await Resource.getResources()
res.json(resources)
} catch(err) {
  next(err)
}

})

router.get('/resources/:id', async (req, res, next) => {
  try {
    const resource = await Resource.getResourceById(req.params.id)
    res.json(resource)

  } catch (err) {
    next(err)
  }
})

router.post('/resources', async (req, res, next) => {
  try {
const resource = await Resource.addResource(req.body)
res.status(201).json(resource)
  } catch(err) {
    next(err)
  }
})

module.exports = router