var Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
/* const plugins = [
    './assets/front/js/plugins/jquery.chart.js',
    './assets/front/js/plugins/jquery.color.js',
    './assets/front/js/plugins/jquery.cookie.js',
    './assets/front/js/plugins/jquery.countdown.js',
    './assets/front/js/plugins/jquery.countto.js',
    './assets/front/js/plugins/jquery.dribbble.js',
    './assets/front/js/plugins/jquery.fitvids.js',
    './assets/front/js/plugins/jquery.flexslider.js',
    './assets/front/js/plugins/jquery.flickrfeed.js',
    './assets/front/js/plugins/jquery.form.js',
    './assets/front/js/plugins/jquery.important.js',
    './assets/front/js/plugins/jquery.infinitescroll.js',
    './assets/front/js/plugins/jquery.instagram.js',
    './assets/front/js/plugins/jquery.isotope.js',
    './assets/front/js/plugins/jquery.magnific.js',
    './assets/front/js/plugins/jquery.owlcarousel.js',
    './assets/front/js/plugins/jquery.pagetransition.js',
    './assets/front/js/plugins/jquery.paginate.js',
    './assets/front/js/plugins/jquery.parallax.js',
    './assets/front/js/plugins/jquery.piechart.js',
    './assets/front/js/plugins/jquery.superfish.js',
    './assets/front/js/plugins/jquery.swiper.js',
    './assets/front/js/plugins/jquery.tabs.js',
    './assets/front/js/plugins/jquery.textrotator.js',
    './assets/front/js/plugins/jquery.toastr.js',
    './assets/front/js/plugins/jquery.twitterfeed.js',
    './assets/front/js/plugins/jquery.validation.js',
    './assets/front/js/plugins/jquery.youtube.js',
    './assets/front/js/components/bs-filestyle.js',
    './assets/front/js/components/bs-select.js',
    './assets/front/js/components/bs-switches.js',
    './assets/front/js/components/rangeslider.min.js',
    './assets/front/js/components/responsive-tabs.js',
    './assets/front/js/components/select-boxes.js',
    './assets/front/js/components/selectsplitter.js',
    './assets/front/js/components/star-rating.js',
    './assets/front/js/components/timepicker.js',
    './assets/front/js/components/typehead.js',
    './assets/front/js/jquery.mousewheel.min.js',
    './assets/front/js/jquery.gmap.js',
    './assets/front/js/jquery.calendario.js',
    './assets/front/js/holder.js',
    './assets/front/js/events-data.js',
    './assets/front/js/chart-utils.js',
    './assets/front/js/functions.js'
]; */

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

/* const firstConfig = Encore.getWebpackConfig();
firstConfig.name = 'firstConfig';

Encore.reset(); */

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

//module.exports = [firstConfig];
module.exports = Encore.getWebpackConfig();