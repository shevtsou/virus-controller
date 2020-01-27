var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Country = new Schema({
    name :{
        type: String,
        required : true
    },
    infected : {
        type: Number,
        required : true
    }
}, {
    timestamps: true
});
const WorldMap = new Schema({
    data:Buffer,
    contentType: String,
})

const CountryModel = mongoose.model('Country', Country)
const WorldMapModel = mongoose.model('WorldMap', WorldMap)
module.exports = {Country: CountryModel, WorldMap: WorldMapModel};