import { useState } from 'react'
import './Counter.css'
import {PropTypes} from 'prop-types'

export default function CounterButton({by, someMethodParent, incrementCounterParentFunction, decrementCounterParentFunction}) {

    // [0, f]
    const state =useState(0);
    // array destructuring
    // remove from child state
    // const [count, setCount] = useState(0);

    // console.log(by)

    const buttonStyle ={
        fontSize:"30px",
        backgroundColor:"#00a5ab",
        width:"100px",
        margin: "10px",
        color: "white",
        padding:"16px",
        borderRadius:"30px",

    }
    // create method here to mapping onClick
    function incrementCounterFunction() {
        // update state
        state[1]( state[0] +1)
        console.log(state[0])
        console.log(state[1])
        console.log('increament cliked',state)
        // setCount(count + by)
        // someMethodParent()
        incrementCounterParentFunction(by)
    }
    function decrementCounterFunction() {
        // update state
        // setCount(count -by)
        // call parent method here
        // someMethodParent()
        decrementCounterParentFunction(by)
    }

    return (
        <div className="Counter">
            {/* <span className="count">{count}</span> */}
            <div>
            <button className="counterButton" 
                onClick={incrementCounterFunction}
                // style={{fontSize:"100px"}}
                // style = {buttonStyle}
            >
            +{by}
            </button>
            {/* <button className="counterButton" 
                onClick={decrementCounterFunction}
            >
            -{by}
            </button> */}
            {/* passin argument we need to arraw function */}
             <button className="counterButton" 
                onClick={() =>decrementCounterParentFunction(by)}
            >
            -{by}
            </button>
            </div>
        </div>
    )

}
CounterButton.propTypes ={
    by: PropTypes.number
}
CounterButton.defaulyProps ={
    by: 1
}
