export default function Counter(){
    // create method here

    function incrementCounterFunction(){
        console.log('increament cliked')
    }

    return(
        <div className="Counter">
            <span className="count">0</span>
            <button className="counterButton" onClick={incrementCounterFunction}>increment</button>
        </div>
    )
}