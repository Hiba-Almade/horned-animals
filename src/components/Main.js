import React, { Component } from 'react'
import HornedBeasts from './HornedBeasts'
import d from './data.json'


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
                {
                    this.state.data.map(element => {
                        return (

                            <HornedBeasts imgurl={element.image_url}
                                title={element.title}
                                desc={element.description}
                            />

                        )
                    })}

            </div>
        )
    }
}

export default Main
