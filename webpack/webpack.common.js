/* eslint-disable no-undef */
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const distPath = path.resolve(__dirname, "..", "./dist");
module.exports = {
    entry: {
        "index": path.resolve(__dirname, "..", "./src/main.ts"),
        "index.css": path.resolve(__dirname, "..", "./src/assets/style/main.scss")
    },

    resolve: {
        alias: {

        },
        extensions: [".*", ".vue", ".json", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        "@babel/preset-env"
                    ]
                }
            },
            {
                test: /\.vue\.(s?[ac]ss)$/,
                use: [
                    'vue-style-loader', 
                    'css-loader', 
                    'sass-loader'
                ]
            },
            {
                test: /(?<!\.vue)\.(s?[ac]ss)$/,
                use: [

                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
                type: "asset/inline"
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            }
        ]
    },
    plugins: [
        // for reading Vue
        new VueLoaderPlugin(),
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "..", "./public/index.html"),
            title: "webpack_vue",
            publicPath: "./"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name]"
        })
    ],
    output: {
        path: distPath,
        filename: "js/[name].bundle.js",
    }
    // watchOptions: {
    //     ignored: /node_modules/
    // }
};
