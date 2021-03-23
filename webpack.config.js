import { optimize, HotModuleReplacementPlugin, config } from 'webpack';
export const devtool = 'inline-source-map';
export const entry = [
  'webpack-hot-middleware/client',
  './client/client.js'
];
export const output = {
  path: require("path").resolve("./dist"),
  filename: 'bundle.js',
  publicPath: '/'
};
export const plugins = [
  new optimize.OccurrenceOrderPlugin(),
  new HotModuleReplacementPlugin(),
  new config.optimization.noEmitOnErrors(),
];
export const module = {
  loaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015']
      }
    }
  ]
};