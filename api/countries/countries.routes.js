var Countries = require('./countries.controller');
const multer = require('multer')
module.exports = function(router) {
    router.get('/countries/map', Countries.getMap)
    router.post('/countries/map', multer().single('map'), Countries.setMap)

    router.post('/countries', Countries.createCountry)
    router.get('/countries', Countries.getCountries)
    router.get('/countries/:id', Countries.getCountry)
    router.put('/countries/:id', Countries.updateCountry)
    router.delete('/countries/:id', Countries.deleteCountry)
}