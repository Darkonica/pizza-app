const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const postcssNormalize = require('postcss-normalize');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        // use: ['ts-loader', 'babel-loader', 'eslint-loader'],
        use: ['ts-loader', 'eslint-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader'],
      },
      { enforce: 'pre', test: /\.js$/, exclude: /node_modules/, loader: 'source-map-loader' },
    ],
  },
  // externals: {
  //   // what is it?
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  // },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      static: path.resolve(__dirname, 'src/static/'),
      styles: path.resolve(__dirname, 'src/styles/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/static/images/',
      },
    ]),
    new ImageminWebpackPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      disable: process.env.NODE_ENV !== 'production', // Disable during development
    }),
  ],
};
