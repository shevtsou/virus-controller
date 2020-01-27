//@ts-check
const { Country, WorldMap} = require('./country.model.js');


exports.getMap = async (req, res, name) => {
    const map = await WorldMap.findOne().exec()
    res.json(map)
}

exports.setMap = async (req, res, name) => {
    await WorldMap.deleteMany({}).exec()
    WorldMap.create({
        data: req.file.buffer,
        contentType: req.file.mimetype
    }, (err) => {
        if(err) {
            res.json({
                error : err
            })
        } else {
            res.json({
                message : "Map setted successfully"
            })
        }
    })
}

exports.createCountry = async (req, res, name) => {
    Country.create({
        name: req.body.name,
        infected: req.body.infected
    }, (err, country) => {
        if(err) {
            res.json({
                error : err
            })
        } else {
            res.json({
                message : "Country created successfully",
                country: country
            })
        }
    })
}

exports.getCountries = async (req, res, name) => {
    const countries = await Country.find().exec()
    res.json(countries)
}

exports.getCountry = async (req, res) => {
    res.json(await Country.findById(req.params.id).exec())
}

exports.updateCountry = async (req, res, name) => {
    await Country.findByIdAndUpdate({_id: req.params.id}, {...req.body}, (err, country) => {
        if (err) {
            res.json({
                message: err
            })
        } else {
            res.json({
                message: 'Updated',
                updatedCountry: country
            })
        }
    })
}

exports.deleteCountry = function(req, res, next) {
    Country.deleteOne({_id: req.params.id}, function(err, country) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Country deleted successfully"
        })
    })
}
