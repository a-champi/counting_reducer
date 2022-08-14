import React from "react";
import { createContext, useReducer } from "react";

export const CountContext = createContext();

const initialState = {
    count: 0,
};

const reducer =(state, action) =>{
    const _state = {...state};

    switch(action.type){
        case "increment":            
            _state.count++;
            break;    
        case "decrement":
            if(_state.count > 0)
            _state.count--;            
            break;
        case "reset":
           _state.count = 0;
            break;
            
            
        default:
            
    }
    return _state;
}


export const CountProvider =({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <CountContext.Provider value ={{state, dispatch}}>
            {children}
        </CountContext.Provider>
    );

}