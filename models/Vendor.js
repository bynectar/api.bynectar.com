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
		{ value: 'planner', label: 'Planner' },
		{ value: 'videographer', label: 'Videography' },
		{ value: 'caterer', label: 'Caterer' },
		{ value: 'liveMusic', label: 'Live Music' },
		{ value: 'dj', label: 'DJ' },
		{ value: 'cake', label: 'Cake' },
		{ value: 'invitations', label: 'Invitations' },
		{ value: 'calligraphy', label: 'Calligraphy' },
		{ value: 'linens', label: 'Linens' },
		{ value: 'rentals', label: 'Rentals' },
		{ value: 'brideDress', label: 'Bride\'s Dress' },
		{ value: 'brideShoes', label: 'Bride\'s Shoes' },
		{ value: 'bridemaidDress', label: 'Bridesmaids\' Dress' },
		{ value: 'groomAttire', label: 'Groom\'s Attire' },
		{ value: 'other', label: 'Other' }
	]},
	other: { type: Types.Text, dependsOn: { type: 'other' } },
	website: { type: Types.Url },
});

Vendor.defaultColumns = 'name, type|20%, website|20%';

Vendor.register();
