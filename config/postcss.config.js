const sortCSSmq = require('sort-css-media-queries');

module.exports = {
    plugins: {
        'autoprefixer': {},
        'css-mqpacker': {
            sort: sortCSSmq
        },
        'cssnano': {
            preset: [
                'default', {
                    discardComments: {
                        removeAll: true,
                    }
                }
			]
        },
    }
}
