var News = require('./news.controller');

module.exports = function(router) {

    // router.get('/countries/map/get', Statistics.getCountriesMap)

    router.post('/news', News.createNews)
    router.get('/news', News.getNews)
    router.get('/news/:id', News.getOneNews)
    router.put('/news/:id', News.updateNews)
    router.delete('/news/:id', News.deleteNews)

}