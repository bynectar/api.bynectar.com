var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'galleries';
	// Set appropriate heading type to use appropriate styles
	locals.headingType = 'light';

	locals.data = {
		currentUrl: req.originalUrl,
		title: "Photo Galleries | Nectar Floral Design",
		pageDescription: "Nectar floral design is owned and operated by Misty Florez, serving the Boston area and beyond.",
		image: "/images/home/summerstreetphotography-81.jpg"
	};

	// Load the galleries by sortOrder
	view.query('galleries', keystone.list('Gallery').model.find().where('state', 'published').sort('-publishedDate').populate('thumbnail'));

	// Render the view
	view.render('galleries');

};
