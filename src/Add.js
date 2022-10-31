import { useCount } from "./Store"


function Add() {
    const [state, dispatch] = useCount()
    return (
        <button onClick={() => {
            dispatch({
                type: "ADD"
            })
        }}>+</button>
    )
}

export default Add  