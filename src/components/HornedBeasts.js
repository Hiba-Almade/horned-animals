import React, { Component } from 'react';
import{Card, Button} from 'react-bootstrap/Card';
import SelectedBeast from './SelectedBeast';

export class HornedBeasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    updateClick = () => {

        this.setState(
            {
                count: this.state.count + 1
            }
        )
        // console.log(this.state.count);
    }
    viewModal(){
        <SelectedBeast titleToShow ={this.props.title}/>
    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img
                        variant="top"
                        src={this.props.imgurl}
                        alt={this.props.title}
                        onClick={() => {
                            this.updateClick();
                            this.viewModal();
                        }}
                    />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.desc}
                        </Card.Text>
                        <i class="fa fa-heart" aria-hidden="true"></i>
                        <p>💙{this.state.count} </p>
                    </Card.Body>
                </Card>

                <Button variant="primary" onClick={() => setModalShow(true)}>
                      Launch vertically centered modal
                    </Button>
                {/* 
                <h2>{this.props.title}</h2>
                <img src={this.props.imgurl} alt={this.props.title} />
                <p>{this.props.desc}</p>
                <p><i class="fas fa-heart"></i> </p> */}
            </div>

        )
    }
}

export default HornedBeasts
