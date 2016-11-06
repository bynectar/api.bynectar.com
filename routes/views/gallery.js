var keystone = require('keystone');
var _ = require('lodash');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'gallery';
	// Set appropriate heading type to use appropriate styles
	locals.headingType = 'light';
	locals.filters = {
		gallery: req.params.gallery,
	};
	locals.data = {
		gallery: [],
		currentUrl: req.originalUrl,
	};

	// Load the current gallery
	view.on('init', function (next) {

		var galleryQuery = keystone.list('Gallery').model.findOne({
			key: locals.filters.gallery,
		}).populate('thumbnail gridImages vendors quoteImage');

		galleryQuery.exec(function (err, result) {
			locals.data.gallery = result;
			locals.data.title = result.title + " | Nectar Floral Design";
			locals.data.pageDescription = result.blurb.body;
			locals.data.gallery.venue = _.filter( locals.data.gallery.vendors, { 'type': 'venue' } )[0];
		})
		.then(function(gallery){
			keystone.list( 'Photo' ).model.find().where( { gallery: gallery.id } ).populate( 'photoCredit' ).exec( function ( err, result ) {
				locals.data.thumbnailPhoto = _.filter( result, { 'photoType': 'thumbnail' } )[0];
				locals.data.gridPhotos = _.filter( result, { 'photoType': 'grid' } );
				locals.data.quotePhoto = _.filter( result, { 'photoType': 'quote' } )[0];
				locals.data.image = locals.data.thumbnailPhoto.image.secure_url;
				locals.data.response = JSON.stringify( locals.data.thumbnailPhoto );
				next(err);
			});
		});

	});

//	view.query('photos', keystone.list('Photo').model.find().where('gallery','581AA7437CF6E7840D09D16D'));

	// Render the view
	view.render('gallery');
};
