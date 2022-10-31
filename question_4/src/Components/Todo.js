import React, { useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
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
export default function Todo(props) {
    const { todo, index,deleteHandler,editHandler } = props;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const submitHandler = (evt) =>{
        evt.preventDefault();
        const form = evt.currentTarget;
        const formData = new FormData (form);
        const new_task = formData.get("task");
        editHandler(index,new_task);
        setOpen(false);
    }
    return (
        <Stack direction="row" >
            <div style={{ margin: "10px" }}>
                <Typography id="modal-modal-title" variant="span" component="h2">
                {todo}
                </Typography> 
                <Stack direction="row" sx={{mt:2}} >
                <Button variant="contained" sx={{ marginLeft: "10px" }} onClick={()=>deleteHandler(index)} startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button variant="contained" sx={{ marginLeft: "10px" }} onClick={handleOpen} endIcon={<SendIcon />}>
                    Edit
                </Button>
                </Stack>
            </div>
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
                        onSubmit={submitHandler}
                    >

                        <TextField
                            required
                            id="outlined-required"
                            label="Task"
                            name="task"
                            defaultValue={todo}
                        />
                        <div></div>
                        <Button type='submit'  variant="outlined">Edit</Button>
                    </Box>
                </Box>
            </Modal>
        </Stack>

    )
}
