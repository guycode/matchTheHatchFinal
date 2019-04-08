// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Match The Hatch crafted with love!',
    });
});
// Import libraryList controller
var flylibraryController = require('./flylibraryController');
// Library routes
router.route('/libraryLists')
    .get(flylibraryController.index)
    .post(flylibraryController.new);
router.route('/libraryLists/:libraryList_id')
    .get(flylibraryController.view)
    .patch(flylibraryController.update)
    .put(flylibraryController.update)
    .delete(flylibraryController.delete);
// Export API routes
module.exports = router;