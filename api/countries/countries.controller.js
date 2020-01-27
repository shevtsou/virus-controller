//@ts-check
const { Country } = require('./country.model.js');

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
