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

// creates a new todo, adds it to a specified project, and returns it
export function createTodo(project, title, dueDate) {
	const newTodo = { title, dueDate };
	project.addTodo(newTodo);
	return newTodo;
}

// adds default projects and todos to the page to demonstrate how the page should initially look to users
export function initializePage() {
	const exampleProject = createProject('Example Project');
	const exampleToDos = [
		createTodo(exampleProject, 'Garbage', 'Tuesday'),
		createTodo(exampleProject, 'Brush teeth', 'Monday'),
		createTodo(exampleProject, 'Workout', 'Wednesday'),
	];
}

export function getProject(title) {
	projects.forEach((p) => {
		if (p.title == title) {
			return p;
		} else {
			console.log(title);
			console.log(p.title);
		}
	});
	return null;
}
