import React, { useRef } from 'react'
import { useCount } from './Store'

function DelAmount() {
    const [state, dispatch] = useCount()
    const inputRef = useRef()
    return (
        <div>
            <input type="number" ref={inputRef} />
            <button onClick={() => {
                dispatch({
                    type: "DEL_BY_AMOUNT",
                    payload: Number(inputRef.current.value)
                })
            }}>SUBTRACT</button>
        </div>
    )
}

export default DelAmount    