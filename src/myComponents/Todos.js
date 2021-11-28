import React from 'react'
import { TodoItem } from './TodoItem'
import { useState, useEffect } from 'react'

export const Todos = () => {
    let initialTodo =[] ;
    if(localStorage.getItem('todos') == null){
        initialTodo = [];
    }
    else {
        initialTodo = JSON.parse(localStorage.getItem('todos'));
    }
    const [todos, setTodos] = useState(initialTodo);
    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])
    const [sno, setSno] = useState(0);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [submitText, setsubmitText] = useState("Add Todo")
    function onDelete(todo){
        setTodos(todos.filter(e =>{
            return e!== todo;
        }))
    }
    const updateTodo = ()=>{
        const new_todo = todos;
        new_todo[sno-1]['sno']=sno;
        new_todo[sno-1]['title']=title;
        new_todo[sno-1]['desc']=desc;
        setTodos(new_todo);
        localStorage.setItem('todos',JSON.stringify(todos));
    }
    const addTodo=(title,desc) =>{
        if(todos.length === 0){
            const myTodo ={
                sno:1,
                title:title,
                desc:desc
            }
            setTodos([...todos,myTodo]);
        }
        else {
            let mySno=todos[todos.length-1].sno + 1;
            const myTodo ={
                sno:mySno,
                title:title,
                desc:desc
            }
            setTodos([...todos,myTodo]);
        }
        setTitle("");
        setDesc("");
    }
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title and description both are required");
        }
        else if(submitText === "Add Todo"){
            addTodo(title,desc);
        }
        else if(submitText === "Update Todo"){
            updateTodo();
            setsubmitText("Add Todo");
            setTitle('');
            setDesc('');
            setSno(0);
        }
    }
    function onUpdate(e){
        setSno(e.sno);
        setTitle(e.title);
        setDesc(e.desc);
        setsubmitText("Update Todo");
    }
    return (
            <div className="container">
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Todos Title</label>
                        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" name="title" id="title" aria-describedby="TitleHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Todos Description</label>
                        <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} name="desc" className="form-control" id="desc" />
                    </div>
                    <button type="submit" id="submitBtn" className="btn btn-primary">{submitText}</button>
                </form>
                <TodoItem todos={todos} onDelete={onDelete} onUpdate={onUpdate} />
            </div>
    )
}
