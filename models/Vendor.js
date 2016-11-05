var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Vendor Model
 * =============
 */

var Vendor = new keystone.List('Vendor', {
	map: { name: 'name' },
	autokey: { from: 'name', path: 'key', unique: true },
});

Vendor.add({
	name: {
		type: Types.Text,
		required: true,
		value: '',
		initial: true
	},
	type: { type: Types.Select, options: [
		{ value: 'photographer', label: 'Photographer' },
		{ value: 'venue', label: 'Venue' },
		{ value: 'caterer', label: 'Caterer' },
		{ value: 'planner', label: 'Planner' },
		{ value: 'other', label: 'Other' }
	]},
	other: { type: Types.Text, dependsOn: { type: 'other' } },
	website: { type: Types.Url },
});

Vendor.defaultColumns = 'name, type|20%, website|20%';

Vendor.register();
