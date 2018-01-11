import React, { Component } from 'react';

class Campo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
  }

  componentWillMount() {
    console.log(this.props.value);
    switch (this.props.id) {
      case 'sexo':
        if (this.state.value === 'M') {
          this.setState({ value: 'MASCULINO' })
        } else {
          this.setState({ value: 'FEMENINO' })
        }
        break;
      default:
        fetch(`http://192.168.0.244/${this.props.id}`)
          .then(response => response.json())
          .then(response => {
            this.setState({
              options: response,
              value: response[0].nombre
            });
          })
          .catch(function (error) {
            console.log('Request failed', error)
          });
        break;
    }
  }


render() {
  return (
    <div className={`column ${this.props.is}`}>
      <div className="field">
        <label className="label">{this.props.label}</label>
        <div className="control">
          <input className="input is-info" value={this.state.value} ></input>
        </div>
      </div>
    </div>
  );
}
}

export default Campo;
