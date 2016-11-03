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
	gallery: { type: Types.Relationship, ref: 'Gallery' }
});

Photo.register();
