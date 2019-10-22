module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/static/_global.scss";`
            }
        }
    }
};