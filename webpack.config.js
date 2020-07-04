const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.WEBPACK_MODE === 'development';
const isProd = !isDev;

module.exports = {
    entry: './src/client/index.tsx',
    output: {
        filename: 'script.js',
        path: join(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/index.html',
            minify: isProd
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            '@common': path.join(__dirname, 'src', 'common'),
            '@shared': join(__dirname, 'src', 'client', 'shared'),
            '@components': join(__dirname, 'src', 'client', 'components'),
            '@containers': join(__dirname, 'src', 'client', 'containers')
        }
    },
    devServer: {
        port: 3000,
        hot: isDev,
        historyApiFallback: true
    },
    optimization: {
        usedExports: true,
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)/,
                exclude: [/node_modules/, /server/],
                use: 'ts-loader'
            },
            {
                test: /\.scss/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}
