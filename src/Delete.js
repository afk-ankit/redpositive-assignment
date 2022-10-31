import { useCount } from "./Store"


function Delete() {
    const [state, dispatch] = useCount()
    return (
        <button onClick={() => {
            dispatch({
                type: "DEL"
            })
        }}>-</button>
    )
}

export default Delete  