export const projects = [];

// creates a new project, adds it to the list of projects, and returns it
export function createProject(title) {
	const todos = [];
	const newProject = {
		title,
		todos,
		selected: false,
		addTodo: (newTodo) => {
			todos.push(newTodo);
		},
		deleteTodo: (toRemove) => {
			const idxToRemove = todos.indexOf(toRemove);
			todos.splice(idxToRemove, 1);
		},
	};
	projects.push(newProject);
	return newProject;
}

// creates and returns a new todo object
export function createTodo(title, description, dueDate, priority) {
	return { title, description, dueDate, priority };
}

// adds default projects and todos to the page to demonstrate how the page should initially look to users
export function initializePage() {
	const exampleProject = createProject('Example Project');
	const exampleToDos = [
		createTodo('Garbage', 'Take out the garbage', 'Tuesday', 'low'),
		createTodo('Brush teeth', 'Monday', 'high'),
		createTodo('Workout', 'Go for a ten mile run', 'Wednesday', 'medium'),
	];
	exampleToDos.forEach((todo) => {
		exampleProject.addTodo(todo);
	});
}
