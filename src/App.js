import './App.css';
import { useState } from 'react';
import AddTodo from './components/Addtodo';
import TodoList from './components/TodoList';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function App() {
	const [todoList, setTodoList] = useState([]);
	const [todo, setTodo] = useState('');

	const addItem = (e) => {
		e.preventDefault();
		const existingTodo = todoList.find((item) => item === todo);
		if (existingTodo) {
			alert('Todo already exists');
			setTodo('');
		} else {
			setTodoList([...todoList, todo]);
			setTodo('');
		}
	};

	const deleteItem = (item) => {
		const newTodos = todoList.filter((todo) => {
			return todo !== item;
		});
		setTodoList(newTodos);
	};

	return (
		<Box
			sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<Typography
				component="h2"
				variant="h2"
				color="inherit"
				align="center"
				noWrap
				sx={{ flex: 1 }}
				mt={3}
				mb={3}
			>
				Todo App
			</Typography>
			<AddTodo todo={todo} setTodo={setTodo} addItem={addItem} />
			<TodoList todoList={todoList} deleteItem={deleteItem} />
		</Box>
	);
}

export default App;
