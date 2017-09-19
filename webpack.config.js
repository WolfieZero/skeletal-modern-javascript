// =============================================================================
// Webpack Config
// =============================================================================

const path = require('path');
const sourcePath = path.resolve(__dirname, 'src');
const distributablePath = path.resolve(__dirname, 'public');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: distributablePath,
    },
    module: {
        rules: [
            // Transpile JavaScript files
            {
                test: /\.js$/,
                include: [
                    sourcePath,
                ],
                exclude: [
                    /node_modules/,
                ],
                loader: [
                    'babel-loader',
                ],
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: distributablePath,
        compress: true,
        port: 8080,
    },
};
