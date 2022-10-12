import React, { useState } from 'react';
import Form from '../Form';
import Output from '../Output';

const Home = () => {
    const [name, setName] = useState('')
    const [about, setAbout] = useState('')
    const [todos, setTodos] = useState([])

    const addTodo = (e) => {
        e.preventDefault()
        const todo = {
            name,
            about,
            id: todos.length + 1,
            status: false,
            createDate: new Date()
        }
        setTodos([...todos, todo])
        setName('')
        setAbout('')
        //console.log(todos);




    }
    return (
        <div>
            <Form
                name={name}
                about={about}
                setAbout={setAbout}
                setName={setName}
                addTodo={addTodo}
            />
            <Output todos={todos} />

        </div>
    );
};

export default Home;