var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row">
          <h1>Chirper</h1>
        </div>

        <div className="row">
          <div className="three columns">
            Navigation
          </div>
          <div className="nine columns">
            Nested Content Coming
          </div>

        </div>
      </div>
    )


  }
})

module.exports = App;
