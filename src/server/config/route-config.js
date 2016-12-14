(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const furbyRoutes = require('../routes/furbies');
    const userRoutes = require('../routes/users');
    // *** register routes *** //
    app.use('/', routes);
    app.use('/furbies', furbyRoutes);
    app.use('/users', userRoutes)
  };

})(module.exports);
