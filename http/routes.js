import UrlController from './controllers/UrlController'

module.exports = (router) => {
  router.post('/add', UrlController.create)
  router.post('/query', UrlController.query)
}
