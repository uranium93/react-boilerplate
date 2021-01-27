const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const jsRegex = /\.(js|jsx|ts|tsx)$/;
const fileLoadOptions = {
  regExp: /\.(jpe?g|png|gif|svg|ttf)$/i,
  limit: 100,
};
const isProdEnv = process.env.NODE_ENV === 'production';

const config = {
  mode: isProdEnv ? 'production' : 'development',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[fullhash].js',
  },
  resolve: {
    alias: {
      src: './src',
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: jsRegex,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: fileLoadOptions.regExp,
        loader: 'url-loader',
        options: {
          limit: fileLoadOptions.limit,
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /\.module\.css$/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Platogo Challenge',
      template: 'src/index.html',
    }),
  ],
};

if (isProdEnv) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()],
  };
} else {
  config.devServer = {
    port: 8080,
    disableHostCheck: true,
    open: true,
    hot: true,
    compress: true,
    stats: 'errors-only',
    overlay: true,
    historyApiFallback: true,
  };
}

module.exports = config;
