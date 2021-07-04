const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HappyPack = require('happypack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'happypack/loader?id=styles'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new HappyPack({
            id: 'styles',
            threads: 4,
            loaders: ['style-loader', 'css-loader']
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        },
        minimize: true,
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8000
    }
};