function ListTodosComponent(){

    const today  = new Date();

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())
    const todos =[
        {id:1, description:"learn aws", done: false, targetDate: targetDate},
        {id:2, description:"learn spring", done: false, targetDate: targetDate},
        {id:3, description:"learn devops", done: false, targetDate: targetDate},
        {id:4, description:"learn python", done: false, targetDate: targetDate},
    ]

    return(
        <div className="container">
            <h1> things You want to do</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Is Done</td>
                            <td>Target Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* map to use in jsx */}
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                                )
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTodosComponent