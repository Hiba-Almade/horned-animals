import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';


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
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img
                        variant="top"
                        class="img-fluid"
                        src={this.props.imgurl}
                        alt={this.props.title}
                        onClick={this.updateClick}
                    />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.desc}
                        </Card.Text>
                        <i class="fa fa-heart" aria-hidden="true"></i>
                        <p>💙{this.state.count} </p>
                        <Button variant="primary" onClick={() => this.props.showModal(
                                                                    {
                                                                        img: this.props.imgurl,
                                                                        title: this.props.title,
                                                                        descr: this.props.desc
                                                                    }
                        )}>
                            View More
                        </Button>
                    </Card.Body>
                </Card>


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
