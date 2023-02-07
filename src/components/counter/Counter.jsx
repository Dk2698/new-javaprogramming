import { useState } from 'react'
import './Counter.css'
import {PropTypes} from 'prop-types'
import CounterButton from './CounterButton'

export default function Counter(){
    const [count, setCount] = useState(0);

    // calling parent componenet -> moving state up
    function  incrementCounterParentFunction(by){
        setCount( count + by)
    }
    function  decrementCounterParentFunction(by){
        setCount( count - by)
    }
    function someMethodParent(){
        console.log('parent method called')
    }

    function resetCounter(){
        setCount(0)
    }
    return(
        <>
            <span className="totalCount">{count}</span>
            {/* some method to pass reference */}
            <CounterButton by={1} someMethodParent={someMethodParent}
                incrementCounterParentFunction={incrementCounterParentFunction}
                decrementCounterParentFunction ={decrementCounterParentFunction}
                />
            <CounterButton by={2}
            incrementCounterParentFunction={incrementCounterParentFunction}
            decrementCounterParentFunction ={decrementCounterParentFunction}
            />
            <CounterButton by={5}
            incrementCounterParentFunction={incrementCounterParentFunction}
            decrementCounterParentFunction ={decrementCounterParentFunction}
            />
            <button className="resetButton" onClick={resetCounter}>
                Reset
            </button>
        </>
    )
}
