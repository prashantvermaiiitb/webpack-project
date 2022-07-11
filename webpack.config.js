const path = require('path');
const mode = process.env['NODE_ENV'] || 'development';
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode,
    // entry: './src/index.js',
    // output: {
    //     filename: 'bundle.js',
    //     path: path.resolve(__dirname, 'dist') // todo : this is being done so that on different OS this works properly by being differnt.
    // },
    module: {
        rules: [
            {
                test: /\.css/i,
                use: [MiniCSSExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    // without any additional setting this would be referring to .babelrc file
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins:[new MiniCSSExtractPlugin()],
    // todo : eval devtool is being used for generating the main JS. The devtool is neither made for production nor 
    // todo : for the readable output files. for readable output files please make devtool as false.
    // devtool: false, //'source-map', // todo : this will be adding main.js.map files in the code
    devtool: 'source-map', // todo : this will be adding main.js.map files in the code
    devServer: {
        hot:true,
        static: {
            directory: path.join(__dirname, 'dist') // todo now the content will be served from public directory
        }
    }
}