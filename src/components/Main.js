import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import d from './data.json'
import { Col } from 'react-bootstrap'

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
                <Col sm={2}>
                    {
                        this.state.data.map(element => {
                            return (

                                <HornedBeasts imgurl={element.image_url}
                                    title={element.title}
                                    desc={element.description}
                                />

                            )
                        })}
                </Col>
            </div>
        )
    }
}

export default Main
