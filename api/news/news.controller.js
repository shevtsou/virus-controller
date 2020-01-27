//@ts-check
const { News } = require('./news.model.js');

exports.createNews = async (req, res, name) => {
    News.create({
    title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        date: req.body.date,
        image: {
            data: req.file.buffer,
            contentType: req.file.mimetype
        }
    }, (err, news) => {
        if(err) {
            res.json({
                error : err
            })
        } else {
            res.json({
                message : "Country created successfully",
                news: news
            })
        }
    })
}

exports.getNews = async (req, res, name) => {
    const news = await News.find().exec()
    res.json(news)
}

exports.getOneNews = async (req, res) => {
    res.json(await News.findById(req.params.id).exec())
}

exports.updateNews = async (req, res, name) => {
    await News.findByIdAndUpdate({_id: req.params.id}, {...req.body}, (err, country) => {
        if (err) {
            res.json({
                message: err
            })
        } else {
            res.json({
                message: 'Updated',
                updatedCountry: News
            })
        }
    })
}

exports.deleteNews = function(req, res, next) {
    News.deleteOne({_id: req.params.id}, function(err, news) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "News deleted successfully"
        })
    })
}
