import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import d from './data.json'
import {Col} from 'react-bootstrap'

export class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            data:d
        }
        console.log(this.state.data);
    }
    
    render() {
        return (
            <div>
                {
                this.state.data.map(element => {
                     return (
                     <Col xs={3} md={4}>
                     <HornedBeasts imgurl ={element.image_url}
                     title = {element.title}
                     desc = {element.description}
                     /> 
                     </Col>
                     )
                })}
               
            </div>
        )
    }
}

export default Main
