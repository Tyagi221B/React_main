import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import TodoItem from "./components/TodoItems";
import { TodoForm } from "./components";
import { SparklesCore } from "./components/ui/sparkles";

export default function App() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		// prev -> previous sate of todos array
		setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
	};

	const updateTodo = (id, todo) => {
		setTodos((prev) =>
			prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
		);
	};

	const deleteTodo = (id) => {
		setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
	};
	//filter true statement return karta hai , to not equall to bhut sari hongi na to vo unhe return kar dega

	const toggleComplete = (id) => {
		// console.log(id)
		setTodos((prev) =>
			prev.map((prevTodo) =>
				prevTodo.id === id
					? { ...prevTodo, completed: !prevTodo.completed }
					: prevTodo
			)
		);
	};

	useEffect(() => {
		const todos = JSON.parse(localStorage.getItem("todos"));

		if (todos && todos.length > 0) {
			setTodos(todos);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	return (
		<TodoProvider
			value={{ todos, addTodo, deleteTodo, toggleComplete, updateTodo }}
		>
			<div className="bg-[#020202] min-h-screen py-8">
				<div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
					<div className="lg:h-80 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
						<h1 className="md:text-2xl text-xl lg:text-3xl font-bold text-center text-white relative z-20">
							Manage your To-dos
						</h1>
						<div className="w-[40rem] h-40 relative">
							{/* Gradients */}
							<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
							<div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
							<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
							<div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

							{/* Core component */}
							<SparklesCore
								background="transparent"
								minSize={0.4}
								maxSize={1}
								particleDensity={1200}
								className="w-full h-full"
								particleColor="#FFFFFF"
							/>

							{/* Radial Gradient to prevent sharp edges */}
							<div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
						</div>
					</div>
					<div className="mb-4">
						{/* Todo form goes here */}
						<TodoForm />
					</div>
					<div className="flex flex-wrap gap-y-3">
						{/*Loop and Add TodoItem here */}
						{todos.map((todo) => (
							<div key={todo.id} className="w-full">
								<TodoItem todo={todo} />
							</div>
						))}
					</div>
				</div>
			</div>
		</TodoProvider>
	);
}
