//////mainjs
requirejs.config({
                 baseUrl: 'js/lib',
                 paths: {
                     collections : '../collections',
                     models : '../models',
                     views : '../views'
                 },
                 shim: {
                    'backbone': {
                    deps: ['underscore', 'jquery'],
                    exports: 'Backbone'
                },

                 
                 'underscore': {
                 exports: '_'
                 }
                 }
});


require(['jquery', 'backbone','../router/router'], function ($, Backbone,appRouter1 ) {
    
        
                                    var router = new appRouter1();
                                    Backbone.history.start();
             });

