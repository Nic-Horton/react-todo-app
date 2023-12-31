import './App.css';
import { useEffect, useState } from 'react';
import AddTodo from './components/Addtodo';
import TodoList from './components/TodoList';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#FF5733',
		},
		secondary: {
			main: '#33daff',
		},
	},
});

function App() {
	// sets todoList to either get what is in local storage if anything is there or an empty array when initialized
	const [todoList, setTodoList] = useState(() => {
		const savedTodoList = localStorage.getItem('todoList');
		if (savedTodoList) {
			return JSON.parse(savedTodoList);
		} else {
			return [];
		}
	});
	const [todo, setTodo] = useState('');

	//useEffect is used to set local storage to update when todoList is changed
	useEffect(() => {
		localStorage.setItem('todoList', JSON.stringify(todoList));
	}, [todoList]);

	//add item to list and check if it already exists
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
		const newTodoList = todoList.filter((todo) => {
			return todo !== item;
		});
		setTodoList(newTodoList);
	};

	return (
		<ThemeProvider theme={darkTheme}>
			<Box
				sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
			>
				<Typography
					component="h2"
					variant="h2"
					color="primary.main"
					align="center"
					noWrap
					sx={{
						flex: 1,
						fontFamily: 'monospace',
						fontWeight: 500,
						border: 'dotted',
						borderColor: 'primary.light',
						borderRadius: '10px',
						borderRightColor: 'secondary.main',
						borderLeftColor: 'secondary.main',
					}}
					p={2}
					mt={6}
					mb={3}
				>
					Todo App
				</Typography>
				<AddTodo todo={todo} setTodo={setTodo} addItem={addItem} />
				<TodoList todoList={todoList} deleteItem={deleteItem} />
			</Box>
		</ThemeProvider>
	);
}

export default App;
