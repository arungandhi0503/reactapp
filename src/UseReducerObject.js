import React, { useReducer } from 'react'
const initialState = {
    firstCounter: 0
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { firstCounter: state.firstCounter + 1 }
        case 'decrement':
            return { firstCounter: state.firstCounter - 1 }
        case 'reset':
            return initialState
        default:
            return state.firstCounter
    }
};
function UseReducerObject() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>{count.firstCounter}
            <div>
                <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
        </div>
    )
}

export default UseReducerObject