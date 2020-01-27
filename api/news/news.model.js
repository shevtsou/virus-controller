var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var News = new Schema({
    title :{
        type: String,
        required : true
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    // image
}, {
    timestamps: true
});

const NewsModel = mongoose.model('News', News)
module.exports = {News: NewsModel};