module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        library: 'helloWorld'
    }
};
