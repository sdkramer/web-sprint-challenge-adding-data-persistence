const express = require('express')
const helmet = require('helmet')
const logger = require('./middleware/logger')
const projectsRouter = require('./routers/projects')
const resourcesRouter = require('./routers/resources')
const tasksRouter = require('./routers/tasks')

const server = express()
const port = process.env.PORT || 5000

server.use(helmet())
server.use(express.json())
server.use(logger)

server.get('/welcome', (req, res) => {
  res.send("Welcome to Projects API!")
})

server.use(projectsRouter)
server.use(resourcesRouter)
server.use(tasksRouter)


server.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`)
})