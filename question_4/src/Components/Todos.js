import React, { useState } from 'react'
import Todo from './Todo';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Todos() {
    const [todos, setTodos] = useState(['Create Todo React App', 'Complete React Projects']);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const addHandler = (evt) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const formData = new FormData (form);
        const new_task = formData.get("task");
        setTodos((prevState) => [...prevState, new_task]);
        setOpen(false);
    }
    const deleteHandler = (i) =>{
        setTodos((prevState)=>{
            let new_todos = prevState.filter((el,index)=>index!==i)
            return new_todos
        })
    }
    const editHandler = (i,task) =>{
        setTodos(prevState =>{
            const new_todos = prevState.map((el,index)=>{
                if(index===i) return task;
                return el;
            })
            return new_todos;
        })
    }
    return (
        <div style={{margin:"30px"}}>
             <Typography id="modal-modal-title" variant="h3" component="h1">
                Todo List :-
                </Typography> 
                <hr></hr>
            {todos.map((el, i) => <Todo key={i} todo={el} index={i} deleteHandler={deleteHandler} editHandler={editHandler} />)}
            <Box
                sx={{
                    '& > :not(style)': {
                        m: 2,
                    },
                }}
            >
                <Button variant="outlined" onClick={handleOpen} startIcon={<AddIcon />}>
                    Add Task
                </Button>

            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add Task
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        onSubmit={addHandler}
                    >

                        <TextField
                            required
                            id="outlined-required"
                            label="Task"
                            name="task"
                        />
                        <div></div>
                        <Button type='submit'  variant="outlined">Add</Button>
                    </Box>
                </Box>
            </Modal>

        </div>
    )
}
