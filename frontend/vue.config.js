module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@': __dirname + '/src/main'
            }
        },
        entry: {
            app: './src/main/main.js'
        }
    }
};