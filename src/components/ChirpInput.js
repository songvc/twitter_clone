var React = require('React');

var ChirpInput = React.createClass({
  getInitialState: function () {
    return {
      value:''
    }
  },
  render: function () {
    return (<div className="row">

      <div className="nine columns">
        <input type="text" className="u-full-width" placeholder='Say Something!' value={this.state.value} onChange={this.handleChange}/>
      </div>
    </div>
      <div className='three columns'>
        <button className="u-full-width button-primary" onClick={this.handleClick}>Chirp</button>
      </div>
    )
  },
  handleChange: function (evt) {
    this.setState({
      value: evt.target.value
    })
  },
  handleClick: function (evt) {
    this.props.onSave(this.state.value);
    this.setState({
      value:''
    })
  }
})


module.exports = ChirpInput;
