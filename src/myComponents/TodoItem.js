import React from 'react'

export const TodoItem = (props) => {
    if (props.todos.length === 0) {
        return (
            <h5 className="my-3">No Todos Found</h5>
        )
    } else {
        return (
            <div>
                <h3 className="my-3">TodosList</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">sno</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Updation</th>
                        </tr>
                    </thead>
                    {props.todos.map((e,index) => (
                        <tbody key={e.sno}>
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{e.title}</td>
                                <td>{e.desc}</td>
                                <td>
                                    <button type="button" onClick={() => props.onUpdate(e)} className="btn btn-sm mx-1 my-1 btn-dark">Update</button>
                                    <button type="button" onClick={() => props.onDelete(e)} className="btn btn-sm mx-1 my-1 btn-dark">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        )
    }
}
