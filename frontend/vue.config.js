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
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/static/_global.scss";`
            }
        }
    }
};