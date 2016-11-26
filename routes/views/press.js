var keystone = require('keystone');
var _ = require('lodash');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'press';
	// Set appropriate heading type to use appropriate styles
	locals.headingType = 'light';

	locals.data = {
		currentUrl: req.originalUrl,
		title: "Press | Nectar Floral Design",
		pageDescription: "Nectar floral design is owned and operated by Misty Florez, serving the Boston area and beyond.",
		image: "/images/home/summerstreetphotography-81.jpg"
	};

	// Load the galleries by sortOrder
//	view.query('galleries', keystone.list('Gallery').model.find().sort('-publishedDate').where({status:'published'}).populate('thumbnail'));

	// Load the current gallery
	view.on('init', function (next) {

		var pressQuery = keystone.list('Press').model.find().where( { state: 'published' } ).sort('-publishedDate');

		pressQuery.exec(function (err, result) {
			locals.press = result;
			next(err);
		});

	});

	// Render the view
	view.render('press');

};
