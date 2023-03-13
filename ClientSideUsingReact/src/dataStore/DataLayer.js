import React, {createContext , useContext , useReducer} from 'react'

export const DataLayerContext = createContext();

export const DataLayer = ({initialState , reducer, children})=>(
    <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </DataLayerContext.Provider>
);
//Basically the children is the component that we have wrapped inside the DataLayer in index.js. 

export const useDataLayerValue = ()=> useContext(DataLayerContext);