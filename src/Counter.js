import { useCount } from "./Store"


function Counter() {
    const [state, dispatch] = useCount()
    return (
        <h1>
            {state.count}
        </h1>
    )
}

export default Counter