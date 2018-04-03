var Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

Encore
    .setOutputPath('public/build/front')
    .setPublicPath('/build/front')
    .cleanupOutputBeforeBuild()
    .addEntry('js/app',[
        "./assets/front/js/plugins.js",
        "./assets/front/js/functions.js"
    ])
    .addStyleEntry('css/bundle', [
        './assets/front/style.scss',
        './assets/front/css/swiper.css',
        './assets/front/css/dark.css',
        './assets/front/css/font-icons.css',
        './assets/front/css/animate.css',
        './assets/front/css/magnific-popup.css',
        './assets/front/css/responsive.css'
    ])
    .createSharedEntry('vendor', ["jquery", "./assets/front/css/bootstrap.css"])
    .enableSassLoader()
    .enableBuildNotifications()
    // .enableLessLoader()
    .enableSourceMaps(!Encore.isProduction())
    .enableSourceMaps(true)
    .enableVersioning(Encore.isProduction())
    .autoProvideVariables({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    })
    .addPlugin(new CopyWebpackPlugin([
        { from: './assets/front/images/static', to: 'static' }
    ]))
;

const firstConfig = Encore.getWebpackConfig();
firstConfig.name = 'firstConfig';

Encore.reset();

/* Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .addEntry('js/back/app', './assets/js/back/app.js')
    .addStyleEntry('css/back/app', './assets/css/back/app.scss')
    .enableSassLoader()
    .enableLessLoader()
    .autoProvideVariables({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
    });
*/
// const secondConfig = Encore.getWebpackConfig();
// secondConfig.name = 'secondConfig';

module.exports = [firstConfig];