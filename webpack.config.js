// =============================================================================
// Webpack Config
// =============================================================================

const path = require('path');
const distPath = path.resolve(__dirname, 'public');

module.exports = {
    entry: ['./src/main.js'],
    output: {
        filename: 'bundle.js',
        path: distPath
    },
    module: {
        rules: [
            // Transpile JavaScript files
            {
                test: /\.js$/,
                include: [
                  distPath
                ],
                exclude: [
                  path.resolve(__dirname, 'node_modules')
                ],
                loader: 'babel-loader'
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: distPath,
      compress: true,
      port: 8080
    }
}
