import React, { useState } from 'react'

function UseStateArray() {
    let arr = [{ name: "John", age: 25 }];
    const [employees, setEmployees] = useState(arr);
    const handleArr = () => {
        setEmployees([...arr, { name: "Steve", age: 32 }]);
    }
    return (
        <div><h2>Push an Object into an array using UseState</h2>
            <button onClick={handleArr}>Add employee</button><br></br>
            {employees.map((item) => <li key={item.name}> {item.name} </li>
            )}
        </div>
    )
}

export default UseStateArray