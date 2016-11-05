var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Photo Model
 * =============
 */

var Photo = new keystone.List('Photo', {
	map: { name: 'title' },
	autokey: { from: 'title', path: 'key', unique: true },
});

Photo.add({
	title: { type: String, required: true },
	publishedDate: { type: Types.Datetime, default: Date.now },
	image: { type: Types.CloudinaryImage },
	caption: { type: Types.Text, initial: true },
	photographer: {
		name: { type: Types.Text },
		website: { type: Types.Url },
	},
	photoCredit: { type: Types.Relationship, ref: 'Vendor', filters: { type: 'photographer' } },
	gallery: { type: Types.Relationship, ref: 'Gallery' },
	photoType: {
		type: Types.Select,
		options: [
			{ value: 'thumbnail', label: 'Thumbnail' },
			{ value: 'grid', label: 'Photo Grid' },
			{ value: 'quote', label: 'Quote Image'}
		]
	}
});

Photo.defaultColumns = 'title, photoType|20%, publishedDate|20%, gallery';

Photo.register();
