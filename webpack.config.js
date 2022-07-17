const path = require('path');
const mode = process.env['NODE_ENV'] || 'development';
// todo: checking Environment
const isDevelopment = mode === 'development';
const target = isDevelopment ? 'web' : 'browserslist';
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// todo: React refreh plugin
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// todo: plugins array 
const plugins = [
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin(),
    new htmlWebpackPlugin({
        template: './src/index-1.html',
        // inject:false // todo if this is there then no script is getting injected.
    })].filter(Boolean);
/**
 * Only including react refresh when the build envrionment is Dev
 */
if (process.env.SERVE) {
    plugins.push(new ReactRefreshWebpackPlugin())
}
module.exports = {
    mode,
    target,
    entry: './src/index.js', // todo this is being enabled for the "REACT FAST REFRESH" because it was triggering LIVE reloading
    output: {
        assetModuleFilename: 'images/[hash][ext][query]', // this is for getting all images in dist/images folder
        //     filename: 'bundle.js', // todo for changing the name of the bundle 
        // todo this has been declared to support the clean-webpack plugin.
        // todo this is being used only when you want to change the output path.
        path: path.resolve(__dirname, 'dist') // todo : this is being done so that on different OS this works properly by being differnt.
    },
    module: {
        rules: [
            {
                test: /\.(png|gif)$/i,
                type: 'asset', // this will put images in source code or in folder depending upon the size.
                // parser: { // for increasing the threshold size of the images that can be put inside the code which is 8KB by default
                //     dataUrlCondition: {
                //         maxSize: 30 * 1024
                //     }
                // }
            },
            {
                test: /\.(jpe?g)$/i, //since this is used as background and it's large image
                type: 'asset/resource' // this will be creating separate folder dist/images 

            },
            {
                test: /\.(svg)$/i, // since SVG are smaller images 
                type: 'asset/inline' // this will put all the images inline in the source code

            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCSSExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    // without any additional setting this would be referring to .babelrc file
                    loader: 'babel-loader',

                    // loader: require.resolve('babel-loader'),
                    // options: {
                    //     // ... other options
                    //     // DO NOT apply the Babel plugin in production mode!
                    //     plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
                    // },
                }
            }
        ]
    },
    plugins,
    // todo : eval devtool is being used for generating the main JS. The devtool is neither made for production nor 
    // todo : for the readable output files. for readable output files please make devtool as false.
    // devtool: false, //'source-map', // todo : this will be adding main.js.map files in the code
    devtool: 'source-map', // todo : this will be adding main.js.map files in the code
    devServer: {
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist') // todo now the content will be served from public directory
        }
    },
    // todo for resolving the JSX files that are incorportated and while building.
    resolve: {
        extensions: ['.js', '.jsx']
    }
}