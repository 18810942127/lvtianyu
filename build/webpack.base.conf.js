[{
    "test": /\.js$/,
    "loader": 'babel-loader',
    "include": [
        resolve('src'),
        resolve('test'),
        resolve('node_modules/resize-detector')
    ]
}]