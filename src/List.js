import './List.css'
function List({ id, name, branch }) {
    return (
        <div className="list">
            <p>{id} {name}</p>
            <p>{branch}</p>
        </div>
    )
}

export default List