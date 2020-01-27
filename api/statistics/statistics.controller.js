//@ts-check
const { Stats } = require('./statistics.model');


exports.initStats = async (req, res, name) => {
    const stats = {
        infected: 0,
        died: 0
    }
    const retrievedStats = await Stats.find().exec()
    if (retrievedStats.length > 0) {
        await Stats.deleteMany({}).exec()
    }
    Stats.create(stats, function(err, stats) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Stats initialized successfully"
        })
    })

}

exports.getStats = async (req, res, name) => {
    const stats = await Stats.find().exec()
    if (stats.length === 0) {
        res.json({
            message: 'Not initialized'
        })
    } else if (stats.length === 1) {
        res.json(stats[0])
    } else {
        res.json({...stats, error: "more then one stats"})
    }
}

exports.updateStats = async (req, res, name) => {
    await Stats.deleteMany({}).exec()
    Stats.create({
        infected: req.body.infected,
        died: req.body.died
    }, (err, created)=>{
        if (err) {
            res.json({
                message: err
            })
        } else {
            res.json({
                message: 'Updated',
                newStats: created
            })
        }
    });
}


// exports.createHero = function (req, res, next) {
//     var hero = {
//         name: req.body.name,
//         description: req.body.description
//     };

//     Heros.create(hero, function(err, hero) {
//         if(err) {
//             res.json({
//                 error : err
//             })
//         }
//         res.json({
//             message : "Hero created successfully"
//         })
//     })
// }

// exports.getHeros = function(req, res, next) {
//     Heros.get({}, function(err, heros) {
//         if(err) {
//             res.json({
//                 error: err
//             })
//         }
//         res.json({
//             heros: heros
//         })
//     })
// }

// exports.getHero = function(req, res, next) {
//     Heros.get({name: req.params.name}, function(err, heros) {
//         if(err) {
//             res.json({
//                 error: err
//             })
//         }
//         res.json({
//             heros: heros
//         })
//     })
// }

// exports.updateHero = function(req, res, next) {
//     var hero = {
//         name: req.body.name,
//         description: req.body.description
//     }
//     Heros.update({_id: req.params.id}, hero, function(err, hero) {
//         if(err) {
//             res.json({
//                 error : err
//             })
//         }
//         res.json({
//             message : "Hero updated successfully"
//         })
//     })
// }

// exports.removeHero = function(req, res, next) {
//     Heros.delete({_id: req.params.id}, function(err, hero) {
//         if(err) {
//             res.json({
//                 error : err
//             })
//         }
//         res.json({
//             message : "Hero deleted successfully"
//         })
//     })
// }