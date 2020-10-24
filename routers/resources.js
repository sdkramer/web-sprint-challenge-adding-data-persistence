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

module.exports = router