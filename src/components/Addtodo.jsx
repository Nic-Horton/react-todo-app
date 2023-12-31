import React from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


function AddTodo({todo,addItem,setTodo}) {

  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={(e)=>{addItem(e)}} sx={{ mt: 1 }}>
            <TextField
              inputProps={{style: {fontSize: 18}}}
              type='text'
              margin="normal"
              required
              fullWidth
              label="Enter Task"
              name="todo"
              value={todo}
              onChange={(e) => {setTodo(e.target.value);}}
              autoComplete='off'
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,fontWeight: 700,}}
            >
              Add todo
            </Button>
          </Box>
        </Box>
      </Container>
  )
}

export default AddTodo