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
	createTodo(exampleProject, 'Garbage', 'Tuesday');
	createTodo(exampleProject, 'Brush teeth', 'Monday');
	createTodo(exampleProject, 'Workout', 'Wednesday');
}

// return a project object for a give title
export function getProject(title) {
	for (let i = 0; i < projects.length; i++) {
		const curProject = projects[i];
		if (curProject.title == title) {
			return curProject;
		}
	}
	console.error('No project found!');
	return null;
}
