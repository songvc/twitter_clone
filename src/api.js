var actions = require('./actions');

var API = module.exports = {
  fetchChirps: function() {
    get('/api/chirps').then(actions.gotChirps(json).bind(actions))
  }
}

function get(url) {
  return fetch(url, {
    credentials:'same-origin'
  }).then(function (res){
    return res.json();
  });
}
