import React from 'react'

export default class MyModule extends React.Component {
    state = {
        foo: true,
        bar: false
    }
    
    render() {
        return (
            <div>
                <h1>I am a test component.</h1>
            </div>
        )
    }
}