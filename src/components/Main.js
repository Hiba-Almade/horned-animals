import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import d from './data.json'
import { Row } from 'react-bootstrap'

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: d
        }
        console.log(this.state.data);
    }

    render() {
        return (
            <div>
                <Row xs={3} md = {4} lg = {3}>
                    {
                        this.state.data.map(element => {
                            return (

                                <HornedBeasts imgurl={element.image_url}
                                    title={element.title}
                                    desc={element.description}
                                    showModal ={this.props.showModal}
                                />

                            )
                        })}
                </Row>
            </div>
        )
    }
}

export default Main
