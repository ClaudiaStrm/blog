const router = require('express').Router()
const postRoutes = require('./post')

module.exports = models => {
  postRoutes(models.Post, router)
  return router
}