var controller_common = require('./common');


var controller = {
    _name: "products",
    // Ottiene i dati della domanda
    index: function(req, res){
      res.json('ci sono!');
      return;
    },
    all: function(req, res){
      res.json('ci sono! all');
      return;
    }

    };

exports.execute = function (req, res) {
  
  controller_common.dispatch(req, res, controller);
};
