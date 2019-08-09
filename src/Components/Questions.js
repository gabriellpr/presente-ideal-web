import React, {Component} from 'react';
import Navbar from './NavBar';
import '../assets/css/Questions.css';
import Button from 'react-bootstrap/Button';
//import {Form} from 'react-bootstrap';
const quests = [
  'Qual seu nome?',
  'O que a pessoa que você quer presentear significa pra você?',
  'Qual a idade da pessoa?',
];

function MyForm(props) {
  return (
    <div>
      <form>
        <p>{quests[props.q]}</p>
        <input />
      </form>
    </div>
  );
}

export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      meaning: '',
      age: '',
      i: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.i === 2) {
      this.props.history.push('/produto');
    }
    this.setState((state, props) => ({i: state.i + 1}));
    console.log(this.state.i);
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="form-content">
          <MyForm q={this.state.i} />
          <Button id="formBtn" onClick={this.handleClick} variant="info">
            Enviar
          </Button>
        </div>
      </div>
    );
  }
}
