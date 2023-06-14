const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/Container/ModuleFederationPlugin');
module.exports = {
    mode: 'development',
    devServer: {
        port: 3001
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'Products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductIndex': './src/index'
            }
        })
    ]
}