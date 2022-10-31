import React, { useRef } from 'react'
import { useCount } from './Store'

function AddAmount() {
    const [state, dispatch] = useCount()
    const inputRef = useRef()
    return (
        <div>
            <input type="number" ref={inputRef} />
            <button onClick={() => {
                dispatch({
                    type: "ADD_BY_AMOUNT",
                    payload: Number(inputRef.current.value)
                })
            }}>ADD</button>
        </div>
    )
}

export default AddAmount    