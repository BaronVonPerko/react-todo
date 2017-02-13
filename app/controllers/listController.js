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

listController.getAll = (req, res) => {
    List.find((err, list) => {
        if(err) {
            res.send(err);
        }

        res.json(list);
    });
}

module.exports = listController;