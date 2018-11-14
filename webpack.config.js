let Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
    .setOutputPath('public/build/front')
    .setPublicPath('/build/front')
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    // css entry
    .addStyleEntry('css/app', [
        './assets/front/style.less',
        './assets/front/less/dark.less',
        './assets/front/less/responsive.less',
        './assets/front/css/swiper.css',
        './assets/front/css/animate.css',
        './assets/front/css/magnific-popup.css',
        './assets/front/css/font-icons.css'
    ])
    //.enableSassLoader()
    .enableLessLoader()
    // allows legacy applications to use $/jQuery as a global variable
    // .autoProvidejQuery()
    .enableSourceMaps(!Encore.isProduction())
    .enableSourceMaps(true)
    .enableVersioning(Encore.isProduction())
    .addPlugin(new CopyWebpackPlugin([
        { from: './assets/front/static', to: 'static' }
    ]))
;

const frontConfig = Encore.getWebpackConfig();
frontConfig.name = 'frontConfig';

Encore.reset();

Encore
    .setOutputPath('public/build/back')
    .setPublicPath('/build/back')
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .addStyleEntry('css/core', [
        './assets/back/vendor/bootstrap/css/bootstrap.min.css',
        './assets/back/vendor/font-awesome/css/font-awesome.min.css',
        './assets/back/vendor/themify-icons/css/themify-icons.css',
        './assets/back/vendor/animsition/css/animsition.min.css',
        './assets/back/vendor/perfect-scrollbar/css/perfect-scrollbar.min.css'
    ])
    .addStyleEntry('css/app', [
        './assets/back/css/scss/app.scss',
        './assets/back/css/style.scss'
    ])
    .addEntry('js/script/editor', './assets/back/js/editor.js')
    .addEntry('js/script/bundle', './assets/back/js/bundle.js')
    .enableSassLoader()
    .enableSourceMaps(!Encore.isProduction())
    .enableSourceMaps(true)
    .enableVersioning(Encore.isProduction())
    .addPlugin(new CopyWebpackPlugin([
        { from: './assets/back/static', to: 'static' }
    ]))
;
const backConfig = Encore.getWebpackConfig();
backConfig.name = 'backConfig';

Encore.reset();

Encore
    .setOutputPath('public/build/web')
    .setPublicPath('/build/web')
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    //.addEntry('js/script/editor', './assets/back/js/editor.js')
    .addStyleEntry('css/custom', './assets/web/sass/demos/index/custom.scss')
    .addStyleEntry('css/global', [
        './assets/web/assets/plugins/socicon/socicon.css',
        './assets/web/assets/plugins/bootstrap-social/bootstrap-social.css',
        './assets/web/assets/plugins/font-awesome/css/font-awesome.min.css',
        './assets/web/assets/plugins/simple-line-icons/simple-line-icons.min.css',
        './assets/web/assets/plugins/animate/animate.min.css',
        './assets/web/assets/plugins/bootstrap/css/bootstrap.min.css'
    ])
    .enableSassLoader()
    .enableSourceMaps(!Encore.isProduction())
    .enableSourceMaps(true)
    .enableVersioning(Encore.isProduction())
    .addPlugin(new CopyWebpackPlugin([
        { from: './assets/web/static', to: 'static' }
    ]))
;
const webConfig = Encore.getWebpackConfig();
webConfig.name = 'webConfig';

module.exports = [frontConfig, backConfig, webConfig];