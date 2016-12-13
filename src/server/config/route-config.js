(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const furbyRoutes = require('../routes/furbies');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/furbies', furbyRoutes);

  };

})(module.exports);
