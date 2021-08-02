import React, { Component } from 'react'

export class HornedBeasts extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.imgurl} alt ={this.props.title} />
                <p>{this.props.desc}</p>
            </div>

        )
    }
}

export default HornedBeasts
