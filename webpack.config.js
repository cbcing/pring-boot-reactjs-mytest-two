var path = require ('path');
var ExtractTextPlugin = require ('extract-text-webpack-plugin');

var clientSrcPath = path.resolve (__dirname, 'frontend');
var serverSrcPath = path.resolve (__dirname, 'src/main/resources/static');


module.exports = {

    entry: clientSrcPath + '/main.js',

    output: {
        path: serverSrcPath,
        filename: 'app.bundle.js'
    },

    plugins: [
        new ExtractTextPlugin('styles.css'),
    ],

    module: {
        rules: [
            {test: /.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /.css/, exclude: /node_modules/, use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    { loader: 'css-loader', options: { modules: true } }
                ]
            })}
        ]
    }
};