import React, {Component} from 'react';
import firebase from 'firebase';
import 'firebase/database';
import config from './firebase-config.js';

import Button from 'react-bootstrap/Button';
import Navbar from './NavBar';
import Footer from './Footer';
import '../assets/css/Produto.css';

firebase.initializeApp(config);

export default class Produto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imgUrl: '',
      productUrl: '',
    };
  }

  componentDidMount() {
    console.log(this.getData());
  }

  getData = async () => {
    let i;
    let n;
    let l;
    await firebase
      .database()
      .ref('item1')
      .once('value')
      .then(function(snapshot) {
        i = snapshot.val().imageUrl;
        n = snapshot.val().nome;
        l = snapshot.val().link;
      });
    this.setState({name: n});
    this.setState({imgUrl: i});
    this.setState({productUrl: l});
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className="form-content">
        <h1>Produto</h1>
        {this.state.imgUrl !== '' ? (
          <div>
            <h2>{this.state.name}</h2>
            <div className="produto">
            <img
              src={this.state.imgUrl}
              alt="product"
              className="image"
          />
            <a href={this.state.productUrl}>
              <Button id="formBtn">Comprar</Button>
            </a>
            </div>
          </div>
        ) : null}
        </div>
        <Footer />
      </div>
    );
  }
}
