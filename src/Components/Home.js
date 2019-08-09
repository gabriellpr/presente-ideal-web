import React, {Component} from 'react';
import '../assets/css/Home.css';
import Navbar from './NavBar';
import Button from 'react-bootstrap/Button';

export default class Home extends Component {
  handleClick = e => {
    this.props.history.push('/questions');
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="content">
          <Button id="formBtn" onClick={this.handleClick} variant="outline-info" size="lg">
            Iniciar
          </Button>
        </div>
      </div>
    );
  }
}
