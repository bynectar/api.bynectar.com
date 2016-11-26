var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Press Model
 * =============
 */

var Press = new keystone.List('Press', {
	map: { name: 'title' },
	autokey: { from: 'title', path: 'key', unique: true },
	singular: 'press',
	plural: 'press',
	label: 'press'
});

Press.add({
	title: {
		type: Types.Text,
		required: true,
		value: ''
	},
	publishedDate: { type: Types.Datetime, default: Date.now },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	publication: { type: Types.Text },
	url: { type: Types.Url },
	photo: { type: Types.CloudinaryImage }
});

Press.defaultColumns = 'title, publication, state, publishedDate';

Press.register();
