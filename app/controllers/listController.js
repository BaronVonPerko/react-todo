var List = require('./../models/list');

const listController = {};

listController.post = (req, res) => {
    var list = new List({
        name: req.body.name
    });

    list.save().then((newList) => {
        return res.status(200).json({
            success: true,
            data: newList
        })
    }).catch((err) => {
        return res.status(500).json({
            message: err
        });
    });
};

module.exports = listController;