var mongoose = require('mongoose');
var Stats = require('./api/statistics/statistics.model');

/*
    router.get('/stats/get', Statistics.getStats)
    router.put('/stats/upate', Statistics.updateStats);

    router.create('/countries/create', Statistics.createCountry)
    router.get('/countries/get', Statistics.getCountires)
    router.put('/countries/update', Statistics.updateCountry)
    router.delete('/countries/delete', Statistics.deleteCountry)

    router.get('/countries/map/get', Statistics.getCountriesMap)

    router.create('/news/create', Statistics.createNews)
    router.get('/news/get', Statistics.getNews)
    router.put('/news/update', Statistics.updateNews)
    router.delete('/news/delete', Statistics.deleteNews)
*/
Stats.statics = {
    create : function(data, cb) {
        var hero = new this(data);
        hero.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}

var herosModel = mongoose.model('Heros', Stats);
module.exports = herosModel;