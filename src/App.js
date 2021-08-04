import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      animal: {}
    }
  }

  handleShow =(data) =>{
    this.setState({
      show:true,
      animal:data
    });
  }

  handleClose = () =>{
    this.setState({
      show:false
    });
  }

  render() {


    return (
      <div>
        <Header />
        <Main showModal = {this.handleShow}/>
        <SelectedBeast showingModal= {this.state.show} closeModal = {this.handleClose} animal ={this.state.animal} />
        <Footer />
      </div>
    )
  }
}

export default App
