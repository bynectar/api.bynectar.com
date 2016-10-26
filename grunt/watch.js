module.exports = {
	express: {
		files: [
			'keystone.js',
			'public/js/lib/**/*.{js,json}',
		],
		tasks: ['concurrent:dev'],
	},
	stylus: {
		files: ['public/styles/**/*.styl'],
		tasks: ['stylus'],
	},
	livereload: {
		files: [
			'public/styles/**/*.css',
		],
		options: {
			livereload: true,
		},
	},
};
