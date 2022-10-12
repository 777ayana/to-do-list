import React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Form = ({ name, about, setName, setAbout, addTodo }) => {
    return (
        <form onSubmit={addTodo}>
            <Stack direction="row" spacing={2}>
                <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Nmae" variant="outlined" />
                <TextField value={about} onChange={(e) => setAbout(e.target.value)} id="outlined-basic" label="About" variant="outlined" />
                <Button type='submit' size='large' variant="text">Add To Do</Button>


            </Stack>



        </form>
    );
};

export default Form;