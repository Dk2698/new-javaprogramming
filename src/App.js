import './App.css';
import Counter from './components/counter/Counter';
import CounterButton from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      <PlayWithProps property1="valu1" property2 ="value2"/>
      {/* <Counter by="1"/> */}
      {/* <CounterButton by={1}/>
      <CounterButton by={2}/>
      <CounterButton by={3}/> */}
      <Counter/>
    </div>
  );
}
// // {property1: 'valu1', property2: 'value2'} ->object
// function PlayWithProps(properties){
//   console.log(properties)
//   console.log(properties.property1)

//   return(
//     <div>props</div>
//   )
// }

// {property1: 'valu1', property2: 'value2'} ->object
// deconstruct
function PlayWithProps({property1, property2}){
  console.log(property1)
  console.log(property2)
  return(
    <div>props</div>
  )
}
export default App;
