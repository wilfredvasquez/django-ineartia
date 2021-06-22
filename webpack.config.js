const path = require("path");
const BundleTracker = require('webpack-bundle-tracker');
// const VueLoaderPlugin = require('vue-loader/dist/plugin');
const { VueLoaderPlugin } = require('vue-loader')
const CleanWebpackPlugin = require('clean-webpack-plugin');

const glob = require("glob-all");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require("purgecss-webpack-plugin");


module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    "./static/src/index.js",
    "./static/css/app.postcss"
  ],
  output: {
    publicPath: "/static/dist/",
    filename: "index.js",
    chunkFilename: 'index.js',
    path: path.resolve('./static/dist/'),
  },

  plugins: [
    new VueLoaderPlugin(),
    new BundleTracker({ filename: './webpack-stats.json' }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "index.css"
    }),
    new PurgecssPlugin({
      paths: glob.sync([
        path.join(__dirname, "static/src/**/*.vue"),
        path.join(__dirname, "templates/base.html")
      ]),
      whitelist: ['a']
    })
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ],
            plugins: ["@babel/plugin-syntax-dynamic-import"]
          }
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.postcss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss'),
                require('autoprefixer')
              ]
            }
          }
        ]
      }
    ]
  },
}