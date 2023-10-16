import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';


function TodoList({todoList,deleteItem}) {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (todo) => () => {
    const currentIndex = checked.indexOf(todo);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(todo);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
    {todoList?.length > 0 ? (
    <List sx={{ width: '100%', maxWidth: 380 }}>
      {todoList.map((todo) => {

        return (
          <ListItem
            key={todo}
            secondaryAction={
              <IconButton color='secondary' edge="end" aria-label="comments" onClick={() => {deleteItem(todo);}}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(todo)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(todo) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': todo }}
                />
              </ListItemIcon>
              <ListItemText sx={checked.includes(todo)?{textDecoration: 'line-through', color:'primary.main'}:{textDecoration: 'none'}}
                primaryTypographyProps={{fontSize: 18}}  
                id={todo} primary={`${todo}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  ) : (
    <Typography fontFamily='monospace' variant="subtitle1">Currently No Todos</Typography>
  )}
  </>
  );
}

export default TodoList