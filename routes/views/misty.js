var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'misty';
	// Set appropriate heading type to use appropriate styles
	locals.headingType = 'light';

	locals.data = {
		currentUrl: req.originalUrl,
		title: "Meet Misty | Nectar Floral Design",
		pageDescription: "Nectar floral design is owned and operated by Misty Florez, serving the Boston area and beyond.",
		image: "/images/about/2016-10-21_Bouquet-Setup-1.jpg"
	};

	// Render the view
	view.render('misty');
};
