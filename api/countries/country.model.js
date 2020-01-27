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

const CountryModel = mongoose.model('Country', Country)
module.exports = {Country: CountryModel};