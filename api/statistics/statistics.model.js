var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Stats = new Schema({
    infected :{
        type: Number,
        required : true
    },
    died : {
        type: Number,
        required : true
    }
}, {
    timestamps: true
});

const StatsModel = mongoose.model('Stats', Stats)
module.exports = {Stats: StatsModel};