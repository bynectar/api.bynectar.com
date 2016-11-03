var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', {
	map: { name: 'title' },
	autokey: { from: 'title', path: 'key', unique: true },
});

Gallery.add({
	title: {
		type: Types.Text,
		required: true,
		value: ''
	},
	publishedDate: { type: Types.Datetime, default: Date.now },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	subtitle: { type: Types.Text, required: true, default: 'Subtitle' },
	thumbnail: { type: Types.Relationship, ref: 'Photo' },
	blurb: {
		title: { type: Types.Text },
		subtitle: { type: Types.Text },
		body: { type: Types.Html, wysiwyg: true }
	},
	gridImages: { type: Types.Relationship, ref: 'Photo', many: true },
	quoteBody: { type: Types.Text },
	quoteByline: { type: Types.Text },
	quoteImage: { type: Types.Relationship, ref: 'Photo' },
	vendors: { type: Types.Relationship, ref: 'Vendor', many: true }
});

Gallery.relationship({ path: 'photos', ref: 'Photo', refPath: 'gallery' });

Gallery.register();
