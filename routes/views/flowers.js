var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'galleries';
	// Set appropriate heading type to use appropriate styles
	locals.headingType = 'light';

	// Load the galleries by sortOrder
	view.query('galleries', keystone.list('Gallery').model.find().sort('sortOrder').populate('thumbnail'));

	// Render the view
	view.render('galleries');

};
