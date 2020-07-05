const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.WEBPACK_MODE === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config;
}

module.exports = {
    entry: './src/client/index.tsx',
    output: {
        filename: 'script.js',
        path: join(__dirname, 'dist', 'client'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/index.html',
            minify: isProd
        }),
        new MiniCssExtractPlugin({
            minify: true
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            '@common': join(__dirname, 'src', 'common'),
            '@shared': join(__dirname, 'src', 'client', 'shared'),
            '@components': join(__dirname, 'src', 'client', 'components'),
            '@containers': join(__dirname, 'src', 'client', 'containers')
        },
    },
    devServer: {
        port: 3000,
        hot: isDev,
        historyApiFallback: true
    },
    optimization: optimization(),
    module: {
        rules: [
            {
                test: /\.tsx?/,
                exclude: [/node_modules/, /server/],
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.client.json'
                    }
                }
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
