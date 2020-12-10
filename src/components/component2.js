import React, { Component } from 'react'
import {Spring} from 'react-spring/renderprops'

export class component2 extends Component {
    render() {
        return (
        <Spring
            from={{ opacity: 0 }}
            to={{opacity: 1 }}
            config={{ delay: 1000, duration: 1000}}
        >
            { props => (
                <div style={props}>
                    <div style={c2Style}>
                        <h1>Component 1</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            )}
        </Spring>
        )
    }
}

const c2Style = {
    background: 'slateblue',
    color: 'white',
    padding: '1.5rem'
}

export default component2
