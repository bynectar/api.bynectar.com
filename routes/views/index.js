var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	// Set appropriate heading type to use appropriate styles
	locals.headingType = 'light';

	locals.data = {
		gallery: [],
		currentUrl: req.originalUrl,
		title: "Nectar Floral Design | Boston Wedding Florist",
		pageDescription: "Nectar floral design is owned and operated by Misty Florez, serving the Boston area and beyond.",
		image: "/images/home/summerstreetphotography-81.jpg"
	};

	// Load the current gallery
	view.on('init', function (next) {

		var q = keystone.list('Gallery').model.find().limit(1).populate('thumbnail gridImages vendors quoteImage');

		q.exec(function (err, result) {
			locals.data.gallery = result;
			next(err);
		});

	});

	// Render the view
	view.render('index');
};
