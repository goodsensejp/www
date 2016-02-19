var path = require('path');
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [ 
    'webpack-hot-middleware/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server', 
    './src/app/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('development')
    })
  ],
	resolve: {
    root: path.resolve('./'),
		extensions: ['', '.ts', '.js', '.tsx', '.html', '.css', '.scss']
	},
	module: {
		loaders: [
			{test: /\.tsx?$/, loaders: ['react-hot', 'ts-loader']},
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
		]
	}
}