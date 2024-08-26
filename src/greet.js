import React, { useState } from "react";

const Greet = (props) => {
    const { firstname, lastname } = props;
    const [increment, setIncrement] = useState(0);
    // const handleIncrement = () => {
    //     setIncrement(increment + 1);
    // }
    function handleIncrement(data) {
        console.log(data);
        setIncrement(increment + 1);
    }

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setIncrement(prevState => prevState + 1)
            console.log(increment, i)
        }
    }

    return (
        <div>
            <h1>Hello {firstname} {lastname}</h1>
            <button onClick={() => {
                handleIncrement('Hello')
            }}>increment</button>
            {increment}<br></br>

            <button onClick={incrementFive}>Increment by 5</button>
            {increment}
        </div>
    )
}

export default Greet;