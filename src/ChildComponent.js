import React from 'react'

function ChildComponent(props) {
    return (
        <div>ChildComponent
            <button onClick={() => props.greetHandler('Hello John')}>Say Hello</button>
        </div>
    )
}

export default ChildComponent