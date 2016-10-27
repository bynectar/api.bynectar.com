var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'gallery';
	// Set appropriate heading type to use appropriate styles
	locals.headingType = 'text';
	locals.filters = {
		gallery: req.params.gallery,
	};
	locals.data = {
		galleries: [],
	};

	// Load the current gallery
	view.on('init', function (next) {

		var q = keystone.list('Gallery').model.findOne({
			key: locals.filters.gallery,
		}).populate('thumbnail gridImages vendors quoteImage');

		q.exec(function (err, result) {
			locals.data.gallery = result;
			next(err);
		});

	});

	// Render the view
	view.render('gallery');
};
