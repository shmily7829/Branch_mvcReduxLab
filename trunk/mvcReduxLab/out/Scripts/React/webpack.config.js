var path = require('path');
module.exports = [
    {
        context: __dirname,
        entry: {
            reduxlabaccountapp: './ReduxLab/AccountApp/app.js'
        },
        output: {
            path: path.resolve(__dirname, '../bundle/'),
            filename: function (chunkData) { return (chunkData.chunk.name.split('~')[0]).concat('.js'); },
            chunkFilename: '[name].[id].js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['babel-preset-env', 'babel-preset-react', 'babel-preset-flow'],
                            plugins: ['transform-object-rest-spread']
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: false,
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            alias: {
                Common: path.resolve(__dirname, 'Common/'),
                CommonFF: path.resolve(__dirname, 'CommonFF/'),
                CommonMA: path.resolve(__dirname, 'CommonMA/')
            }
        },
        node: {
            fs: 'empty' // 解決「Can't resolve 'fs' when bundle with webpack」問題。(囧)
        }
    },
];
