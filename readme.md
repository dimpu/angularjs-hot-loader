# AngularJS Hot replacement for webpack

[![Join the chat at https://gitter.im/dimpu/angularjs-hot-loader](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/dimpu/angularjs-hot-loader?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A  Webpack loader for Hot Module Replacement in AngularJS applications.

This will only work in Ui Router at the moment with a specific app structure shown below. Will work on it a bit more over the week.

Throwing up a sample app up at https://github.com/dimpu/angularjs-hot-loader

## How to use

webpack.config.js

```js
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',

        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'index.bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: [
                    // 'angularjs-hot-loader',
                    '../index',
                    'babel-loader'
                ],
                exclude: /node_modules/
            }

        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    devServer: {
        host: 'localhost',
        port: 3000,

        historyApiFallback: true,
        // respond to 404s with index.html

        hot: true,
        // enable HMR on the server
    },
}
```



```
angular
  .module('app.components')
  .directive('sessionItem',function() {
    return {
        restrict : 'E',
        scope: {
            session: '='
        },
        bindToController: true,
        controllerAs: 'state',
        replace: true,
        controller: 'sessionItemCtrl',
        template: require('./template.html')
    };
  })
  .factory('TestFactory', function() {
    console.log('derp');
  })
  .controller('sessionItemCtrl', require('./sessionItemCtrl'));
```

and you save that the browser should refresh