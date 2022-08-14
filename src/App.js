import { useContext } from "react";
import "./App.css";
import { CountContext } from "./context/CountContext";

const App = () => {
  const { state, dispatch } = useContext(CountContext);

  return (
    <div className="App">
      <h1>Counting </h1>
      <h2>useReducer/ useContext</h2>
      
      <div className="display_counter">
         <p>{state.count}</p>
         <div className="display_add_minus">
            <button className="button_decrement"
               onClick={() => dispatch({ type: "decrement" })}>
               <span className="format_simbol">-</span> 
            </button>
            <button className="button_increment"
               onClick={() => dispatch({ type: "increment" })}>
               <span className="format_simbol">+</span> 
            </button>
         </div>
         <div className="display_reset">
            <button className="button_reset"
               onClick={() => dispatch({ type: "reset" })}>
               <span className="format_simbol">reset</span>
            </button>
         </div>
      </div>
    </div>
  );
};

export default App;
// return (
//   <div className="counter">
//     <h2>Counting Maschine</h2>
//     <div className="display_counter">
//       <h3>{count}</h3>
//     </div>
//     <div className="display_add_minus">
//       <button className="add" onClick={increase}>
//         +
//       </button>
//       <button className="minus" onClick={decrease}>
//         -
//       </button>
//     </div>
//     <div className="display_reset">
//       <button className="reset" onClick={reset}>
//         reset
//       </button>
//     </div>
//   </div>
// );
