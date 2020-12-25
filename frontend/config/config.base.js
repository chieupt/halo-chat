const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'src/lib/core.js',
                        to: 'bundle'
                    }
                ]
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'src/lib/script.js',
                        to: 'bundle'
                    }
                ]
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'node_modules/jquery/dist/jquery.min.js',
                        to: 'lib/jQuery'
                    }
                ]
            })
        ],
    }
}
