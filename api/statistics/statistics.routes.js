var Statistics = require('./statistics.controller');

module.exports = function(router) {
    router.get('/stats/init', Statistics.initStats)
    router.get('/stats', Statistics.getStats)
    router.put('/stats', Statistics.updateStats);
}