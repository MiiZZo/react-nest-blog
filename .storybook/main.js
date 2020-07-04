const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin  = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
    stories: ['../src/client/components/**/*.stor(ies|y).tsx'],
    addons: [
        "@storybook/addon-actions",
        "@storybook/addon-links",
        "@storybook/addon-knobs/register",
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null,
            },
        },
    ],
    webpackFinal: async config => {
        config.module.rules.push(
            {
                test: /\.(ts(x?))$/,
                use: [
                    {
                        loader: require.resolve('ts-loader'),
                        
                    },
                    // {
                    //     loader: require.resolve("react-docgen-typescript-loader"),
                    //     options: {
                    //         tsconfigPath: path.resolve(__dirname, "../tsconfig.storybook.json"),
                    //     }
                    // }
                ],
                include: [/components/, /common/]
            },
            {
                test: /\.scss$/,
                use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, '../'),
            }
        );
        config.devServer = {
            port: 3000
        }
        config.resolve.extensions.push('.ts', '.tsx');
        config.resolve.alias = {
            '@common': path.join(__dirname, 'src', 'common'),
            '@shared': path.join(__dirname, 'src', 'client', 'shared'),
            '@components': path.join(__dirname, 'src', 'client', 'components'),
            '@containers': path.join(__dirname, 'src', 'client', 'containers')
        }
        config.resolve.plugins = [new TsconfigPathsPlugin({ configFile: path.join(__dirname, '..', 'tsconfig.storybook.json') })];
        config.plugins.push(new MiniCSSExtractPlugin());
        return config;
    },
};
