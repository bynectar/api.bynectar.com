var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'about';
	// Set appropriate heading type to use appropriate styles
	locals.headingType = 'dark';

	locals.data = {
		currentUrl: req.originalUrl,
		title: "Nectar Floral Design | Boston Wedding Florist",
		pageDescription: "Nectar floral design is owned and operated by Misty Florez, serving the Boston area and beyond.",
		image: "/images/home/summerstreetphotography-81.jpg"
	};

	// Render the view
	view.render('about');
};
