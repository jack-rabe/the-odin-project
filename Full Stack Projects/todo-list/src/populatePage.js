import { projects, createProject, createTodo } from './taskLogic';

const addProjectButton = document.getElementById('add-project-button');

// when add project is button clicked, changes the add project button into a text field to allow the user to enter a name for the project
addProjectButton.addEventListener('click', () => {
	const projectsNavBar = document.getElementById('projects-navbar');
	const projectsList = document.getElementById('projects-list');

	// remove add button
	projectsNavBar.removeChild(addProjectButton);
	// create a new wrapper div to add to the navbar
	const wrapperDiv = document.createElement('div');
	wrapperDiv.id = 'input-wrapper';
	// add an input box to the navbar
	const numProjects = projectsList.children.length;
	const projectInput = document.createElement('input');
	projectInput.id = 'project-input';
	projectInput.defaultValue = `Project ${numProjects + 1}`;
	// adds a confirm button
	const finalizeProjectButton = document.createElement('button');
	finalizeProjectButton.classList.add('finalize-decline-buttons');
	finalizeProjectButton.textContent = 'Confirm';
	finalizeProjectButton.style.backgroundColor = 'green';
	finalizeProjectButton.addEventListener('click', (e) => {
		createProject(projectInput.value);
		renderProjects();
		revertNavBarToDefault();
	});
	// adds a decline button
	const declineProjectButton = document.createElement('button');
	declineProjectButton.classList.add('finalize-decline-buttons');
	declineProjectButton.textContent = 'Delete';
	declineProjectButton.style.backgroundColor = 'red';
	declineProjectButton.addEventListener('click', (e) => {
		revertNavBarToDefault();
	});
	// adds all children to the wrapper div, which is added to the navbar
	wrapperDiv.appendChild(projectInput);
	wrapperDiv.appendChild(document.createElement('br'));
	wrapperDiv.appendChild(finalizeProjectButton);
	wrapperDiv.appendChild(declineProjectButton);
	projectsNavBar.appendChild(wrapperDiv);
});

function revertNavBarToDefault() {
	// remove the extra input box and accept/decline buttons
	const projectsNavBar = document.getElementById('projects-navbar');
	projectsNavBar.removeChild(document.getElementById('input-wrapper'));
	// add the button back that allows for more projects to be added
	projectsNavBar.appendChild(addProjectButton);
}

// addTodoButton.addEventListener('click', () => {
// 	const todoList = document.getElementById('todos');
// 	const todoParent = document.getElementById('content');
// 	const addTodoButton = document.getElementById('add-todo-button');

// 	// remove add button
// 	todoParent.removeChild(addProjectButton);
// 	// create a new wrapper div to add to the navbar
// 	const wrapperDiv = document.createElement('div');
// 	wrapperDiv.id = 'input-wrapper';
// 	// add an input box to the navbar
// 	const numProjects = projectsList.children.length;
// 	const projectInput = document.createElement('input');
// 	projectInput.id = 'project-input';
// 	projectInput.defaultValue = `Project ${numProjects + 1}`;
// 	// adds a confirm button
// 	const finalizeProjectButton = document.createElement('button');
// 	finalizeProjectButton.classList.add('finalize-decline-buttons');
// 	finalizeProjectButton.textContent = 'Confirm';
// 	finalizeProjectButton.style.backgroundColor = 'green';
// 	finalizeProjectButton.addEventListener('click', (e) => {
// 		createProject(projectInput.value);
// 		renderProjects();
// 		revertNavBarToDefault();
// 	});
// 	// adds a decline button
// 	const declineProjectButton = document.createElement('button');
// 	declineProjectButton.classList.add('finalize-decline-buttons');
// 	declineProjectButton.textContent = 'Delete';
// 	declineProjectButton.style.backgroundColor = 'red';
// 	declineProjectButton.addEventListener('click', (e) => {
// 		revertNavBarToDefault();
// 	});
// 	// adds all children to the wrapper div, which is added to the navbar
// 	wrapperDiv.appendChild(projectInput);
// 	wrapperDiv.appendChild(document.createElement('br'));
// 	wrapperDiv.appendChild(finalizeProjectButton);
// 	wrapperDiv.appendChild(declineProjectButton);
// 	projectsNavBar.appendChild(wrapperDiv);
// });

export function renderProjects() {
	// remove all projects from the list
	const projectsList = document.getElementById('projects-list');
	while (projectsList.firstChild) {
		projectsList.removeChild(projectsList.firstChild);
	}
	// add all of the remaining projects back
	let projectTag;
	projects.forEach((project) => {
		projectTag = document.createElement('li');
		projectTag.classList.add('project');
		projectTag.textContent = project.title;
		projectsList.appendChild(projectTag);
		// switch to a project's todos when it is clicked
		projectTag.addEventListener('click', () => {
			renderTodos(project);
		});
	});
	// display the first project by default
	if (projects) {
		renderTodos(projects[0]);
	}
}

export function renderTodos(project) {
	const todosList = document.getElementById('todos');
	// remove all todos from the list
	while (todosList.firstChild) {
		todosList.removeChild(todosList.firstChild);
	}
	// add the updated todos from the selected project
	let todoTag;
	let checkBox;

	project.todos.forEach((todo) => {
		todoTag = document.createElement('li');
		checkBox = document.createElement('input');
		checkBox.type = 'checkbox';
		checkBox.name = todo.title;
		todoTag.appendChild(checkBox);
		todoTag.appendChild(document.createTextNode(todo.title));
		todosList.appendChild(todoTag);
	});
}
