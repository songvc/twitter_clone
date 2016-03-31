var constants = require('../constants');
var ChirpStore = module.exports = require('./store').extend({
  // overwite original init functions
  init: function(){
    this.bind(constants.GOT_CHIRPS, this.set);
    this.bind(constants.CHIRPED, this.add);
  }

});
