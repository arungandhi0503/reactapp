import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

function ParentComponent() {
    const [message, setMessage] = useState("");
    function greetMessage(greetings) {
        setMessage(greetings);
    }
    return (
        <div>
            <div>ParentComponent</div><br></br>
            {message}<br></br>
            <ChildComponent greetHandler={greetMessage} />
        </div>
    )
}

export default ParentComponent