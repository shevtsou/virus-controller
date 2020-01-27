var Statistics = require('./statistics.controller');

module.exports = function(router) {
    router.get('/stats/init', Statistics.initStats)
    router.get('/stats/get', Statistics.getStats)
    router.put('/stats/update', Statistics.updateStats);
}