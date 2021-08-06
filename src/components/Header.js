import React, { Component } from 'react'
import { HornedBeasts } from './HornedBeasts';

class Header extends Component {
    
    render() {
        
        return (
            <div>
                <h1 class="ml1">
                    <span className="text-wrapper">
                        <span className="line line1"></span>
                        <span className="letters">Horned Beasts</span>
                        <span className="line line2"></span>
                    </span>
                </h1>
            </div>
        )
    }
}

export default Header
