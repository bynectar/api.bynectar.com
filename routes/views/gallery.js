var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'gallery';
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
		}).populate({path: 'thumbnail gridImages', populate: ['photographer']});

		q.exec(function (err, result) {
			locals.data.gallery = result;
			next(err);
		});

	});

	// Load other galleries
	view.on('init', function (next) {

		var q = keystone.list('Gallery').model.find().populate('gridImages').limit('4');

		q.exec(function (err, results) {
			locals.data.galleries = results;
			next(err);
		});

	});

	// Render the view
	view.render('gallery');
};
