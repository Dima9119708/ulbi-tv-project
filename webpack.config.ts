import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

interface IBuildEnv {
    mode: 'development' | 'production'
    port: number,
}

export default (env: IBuildEnv) => {
    const port = env.port || 3000;
    const mode = env?.mode || 'development';
    const isDev = mode === 'development';

    const devServer: DevServerConfiguration = {
        open: true,
        port,
        historyApiFallback: true,
        hot: true,
    };

    const config: webpack.Configuration = {
        mode,
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'build'),
            clean: true,
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            preferAbsolute: true,
            mainFiles: ['index'],
            modules: [
                path.resolve(__dirname, 'src'),
                'node_modules',
            ],
            alias: {},
        },
        optimization: {
            minimizer: [
                new CssMinimizerPlugin({
                    minimizerOptions: {
                        preset: [
                            "default",
                            {
                                discardComments: { removeAll: true },
                            },
                        ],
                    },
                }),
            ],
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
            new webpack.DefinePlugin({
                __IS_DEV__: JSON.stringify(isDev),
            }),
            isDev && new webpack.HotModuleReplacementPlugin(),
            isDev && new ReactRefreshWebpackPlugin(),
            isDev && new BundleAnalyzerPlugin({
                openAnalyzer: false
            })
        ],
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? devServer : undefined,
        module: {
            rules: [
                {
                    test: /\.(js|jsx|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env'],
                            ],
                        },
                    },
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.svg$/i,
                    issuer: /\.[jt]sx?$/,
                    resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
                    use: ['@svgr/webpack'],
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.css$/i,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    auto: (pathFile: string) => Boolean(pathFile.includes('.module.')),
                                    localIdentName: isDev
                                        ? '[local]--[hash:base64:5]'
                                        : '[hash:base64:5]',
                                },
                            },
                        },
                        'postcss-loader',
                    ],
                },
            ],
        },
    };

    return config;
};
