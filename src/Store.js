import React, { createContext, useContext, useReducer } from 'react'

const initialState = {
    count: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                count: state.count + 1
            }
        case "DEL": return {
            count: state.count - 1
        }
        case 'ADD_BY_AMOUNT': return {
            count: state.count + action.payload
        }
        case 'DEL_BY_AMOUNT': return {
            count: state.count - action.payload
        }
        default: return state
    }

}





const countContext = createContext()

function Store({ children }) {
    return (
        <countContext.Provider value={useReducer(reducer, initialState)}>{children}</countContext.Provider>
    )
}

export const useCount = () => useContext(countContext)
export default Store
