import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
export default class SelectedBeast extends Component {

  render() {

    return (
      <div>

        <Modal show={this.props.showingModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.animal.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <img src = {this.props.animal.img} alt = {this.props.animal.title} width = "400px" height= "300px"/>
           <p>{this.props.animal.descr}</p>
           
           </Modal.Body>
          <Modal.Footer>
         
            
          </Modal.Footer>
        </Modal>

      </div>
    );


  }
}
