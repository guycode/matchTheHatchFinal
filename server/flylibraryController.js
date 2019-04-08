
// Import Library model
Library = require('./flylibraryModel');
// Handle index actions
exports.index = function (req, res) {
    Library.get(function (err, libraryLists) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Library retrieved successfully",
            data: libraryLists
        });
    });
};
// Handle create libraryList actions
exports.new = function (req, res) {
    var libraryList = new Library();
    libraryList.Name = req.body.Name;
    libraryList.Type = req.body.Type;
    libraryList.Region = req.body.Region;
    

// save the libraryList and check for errors
    libraryList.save(function (err) {
        if (err)
            res.json(err);
res.json({
            message: `New libraryList created!`,
            data: libraryList
        });
    });
};
// Handle view libraryList info
exports.view = function (req, res) {

    Library.get (function (err, libraryList) {
        if (err)
            res.send(err);
        res.json({
            message: 'Library details loading..',
            data: libraryList
        });
    });
};
// Handle update libraryList info
exports.update = function (req, res) {
Library.findById(req.params.libraryList_id, function (err, libraryList) {
        if (err)
            res.send(err);
libraryList.name = req.body.name ? req.body.name : libraryList.name;
        libraryList.gender = req.body.gender;
        libraryList.email = req.body.email;
        libraryList.phone = req.body.phone;
// save the libraryList and check for errors
        libraryList.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Library Info updated',
                data: libraryList
            });
        });
    });
};
// Handle delete libraryList
exports.delete = function (req, res) {
    Library.remove({
        _id: req.params.libraryList_id
    }, function (err, libraryList) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Library deleted'
        });
    });
};