import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import d from './data.json'
import { Row } from 'react-bootstrap'


export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: d,
            numOfHorn: 0,
            // numOfHorn: '0'
        }
    }
    updateHorn = (e) => {
        this.setState({
            numOfHorn: e.target.value
        })
        console.log(this.state.numOfHorn);
        //this.filterHorn(this.state.horn)

    }
    render() {
        return (
            <div>
                <form>
                    
                    <select name='horn' onChange={(e) => this.updateHorn(e)}>
                        <option value='1'>one </option>
                        <option value='2'>tow </option>
                        <option value='3'>three </option>
                        <option value='100'>100 </option>
                    </select>
                    <p>{this.state.numOfHornd}</p>
                </form>
                <Row xs={3} md={4} lg={3}>
                    {
                        this.state.data.map(element => {
                            return (
                                (Number(this.state.numOfHorn) === 0 &&
                                    <HornedBeasts imgurl={element.image_url}
                                        title={element.title}
                                        desc={element.description}
                                        showModal={this.props.showModal}
                                    />
                                ) || (Number(this.state.numOfHorn) === element.horns &&
                                    <HornedBeasts imgurl={element.image_url}
                                        title={element.title}
                                        desc={element.description}
                                        showModal={this.props.showModal}
                                    />
                                )

                            )
                        })}
                </Row>
            </div>
        )
    }
}

export default Main
