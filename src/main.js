var React = require('react');
var ReactRouter = require('react-router');

var Route = ReactRouter.Route;

var API = require("./api");
var ChirpStore = require('./stores/chirps');

var routes = (<Route hander={require('./components/app.js')}> </Route>);

API.fetchChirps();

ReactRouter.run(routes, ReactRouter.HistoryLocation, function (Root){
  React.render(<Root />, document.getElementById('app'));
})
