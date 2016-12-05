export default {
  output: {
    // 生成したいバンドルのファイル名
    filename: 'client-bundle.js',
  },
  // ソースマップを有効化
  devtool: 'source-map',
  module: {
    loaders: [
      {
        // .js,.jsxファイルの両方を扱う
        test: /\.jsx?$/,
        // Webpackでは、古い素のJavaScriptではないものを扱う場合
        loader: 'babel-loader',
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    // 拡張子なしでimportした場合、どのような種類のファイルをimportするべきかをWebpackに指定
    extensions: ['', '.js', '.jsx'],
  },
};
