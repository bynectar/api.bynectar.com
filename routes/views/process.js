var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'process';
	// Set appropriate heading type to use appropriate styles
	locals.headingType = 'light';

	// Render the view
	view.render('process');
};
