import React, { useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import { Stack } from '@mui/material';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const Output = ({ todos }) => {
    const [isEditName, setIsEditName] = useState(false)
    const [isEditAbout, setEditAbout] = useState(false)
    const [currentTodo, setCurrentTodo] = useState(null)
    return (
        <div>
            {
                todos.map(el => (
                    <div key={el.id}>
                        <div>
                            {
                                isEditName && currentTodo == el.id ?
                                    <>
                                        <input type='text' placeholder={el.name}></input>
                                        <button>Save</button>
                                        <button>Cancel</button>
                                    </>
                                    :
                                    <div style={{ display: 'flex' }}>
                                        <h2> Name: {el.name}</h2>
                                        <button onClick={() => {
                                            setIsEditName(true)
                                            setCurrentTodo(el.id)
                                        }}
                                        ><AutoFixHighIcon /></button>

                                    </div>

                            }

                        </div>
                        <div>
                            {
                                isEditAbout && currentTodo == el.id ?
                                    <>
                                        <input type='text' placeholder={el.about}></input>
                                        <button>Save</button>
                                        <button>Cancel</button>
                                    </>
                                    :
                                    <div style={{ display: 'flex' }}>
                                        <h2>About: {el.about}</h2>
                                        <button onClick={() => {
                                            setEditAbout(true)
                                            setCurrentTodo(el.id)
                                        }}
                                        ><AutoFixHighIcon /></button>

                                    </div>

                            }
                        </div>
                        <p>Date: {el.createDate.getMonth() + 1 + '-' + el.createDate.getDate() + '-' + el.createDate.getHours() + ':' + el.createDate.getMinutes()}</p>
                        <h3>Status: {el.status ? 'Done' : "выполняется"}</h3>
                        <Stack spacing={2} direction='row'>
                            <button><DoneIcon /></button>
                            <button><AutoDeleteIcon /></button>
                        </Stack>

                    </div>
                ))
            }
        </div>
    );
};

export default Output;