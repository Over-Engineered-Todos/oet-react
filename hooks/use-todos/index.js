import { createContext, useCallback, useContext, useState } from 'react';

const DEFAULT_STATE = {
	add: () => {},
	remove: () => {},
	update: () => {},
	todos: [],
};

export const TodosContext = createContext(DEFAULT_STATE);

export const TodosContextProvider = ({ children }) => {
	const [todos, setTodos] = useState(DEFAULT_STATE.todos);

	const add = (todo) => {
		setTodos([...todos, todo]);
	};

	const remove = (id) => {
		const updatedTodos = todos.filter((t) => t.id !== id);
		setTodos(updatedTodos);
	};

	const update = (id, completed) => {
		const updatedTodos = todos.map((t) => {
			if (t.id === id) {
				return {
					...t,
					completed,
				};
			} else {
				return t;
			}
		});
		setTodos([...updatedTodos]);
	};

	return (
		<TodosContext.Provider
			value={{
				add,
				remove,
				update,
				todos,
			}}
		>
			{children}
		</TodosContext.Provider>
	);
};

export default function useTodos() {
	return useContext(TodosContext);
}
