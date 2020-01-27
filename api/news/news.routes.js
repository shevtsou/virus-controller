var News = require('./news.controller');
const multer = require('multer')

module.exports = function(router) {
    router.post('/news', multer().single('map'), News.createNews)
    router.get('/news', News.getNews)
    router.get('/news/:id', News.getOneNews)
    router.put('/news/:id', News.updateNews)
    router.delete('/news/:id', News.deleteNews)

}