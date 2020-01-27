var Countries = require('./countries.controller');

module.exports = function(router) {

    router.post('/countries', Countries.createCountry)
    router.get('/countries', Countries.getCountries)
    router.get('/countries/:id', Countries.getCountry)
    router.put('/countries/:id', Countries.updateCountry)
    router.delete('/countries/:id', Countries.deleteCountry)
}