var LISTEN_PORT = 4000;

    var express = require('express');
    var body_parser = require('body-parser');

    var app = express();
    var prodotti_controller = require('./controller/products');
    /*app.use(body_parser.urlencoded({extended: true}));*/
    app.use(body_parser.json({extended: true, limit: '50mb'}));

    /* Public client */
    app.use('/', express.static(__dirname));

    app.use(body_parser.json({extended: true, limit: '50mb'}));

    /* API */
    var router = express.Router();
    router.route('/products/:action?/:id?')
          .get(prodotti_controller.execute)
          .post(prodotti_controller.execute)
          .put(prodotti_controller.execute);


      app.use('/api', router);

    /* Utente */
  /*  router.route('/utente/:action?/:id?')
          .get(client_bearer.auth, utente_controller.execute)
          .put(client_bearer.auth, utente_controller.execute);*/



var server = app.listen(LISTEN_PORT);
console.log('Magic happens on port ' + LISTEN_PORT);

//}
