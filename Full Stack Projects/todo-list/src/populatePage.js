import { projects, createProject, createTodo, getProject } from './taskLogic';

const addProjectButton = document.getElementById('add-project-button');
const addTodoButton = document.getElementById('add-todo-button');

// when add project is button clicked, changes the add project button into a text field to allow the user to enter a name for the project
addProjectButton.addEventListener('click', () => {
	const projectsNavBar = document.getElementById('projects-navbar');
	const projectsList = document.getElementById('projects-list');

	// remove add button
	projectsNavBar.removeChild(addProjectButton);
	// create a new wrapper div to add to the navbar
	const wrapperDiv = document.createElement('div');
	// add an input box to the navbar
	const numProjects = projectsList.children.length;
	const projectInput = document.createElement('input');
	projectInput.defaultValue = `Project ${numProjects + 1}`;
	// adds a confirm button
	const finalizeProjectButton = document.createElement('button');
	finalizeProjectButton.classList.add('finalize-decline-buttons');
	finalizeProjectButton.textContent = 'Confirm';
	finalizeProjectButton.style.backgroundColor = 'green';
	finalizeProjectButton.addEventListener('click', (e) => {
		createProject(projectInput.value);
		renderProjects();
		revertToDefault(projectsNavBar, wrapperDiv, addProjectButton);
	});
	// adds a decline button
	const declineProjectButton = document.createElement('button');
	declineProjectButton.classList.add('finalize-decline-buttons');
	declineProjectButton.textContent = 'Delete';
	declineProjectButton.style.backgroundColor = 'red';
	declineProjectButton.addEventListener('click', (e) => {
		revertToDefault(projectsNavBar, wrapperDiv, addProjectButton);
	});
	// adds all children to the wrapper div, which is added to the navbar
	wrapperDiv.appendChild(projectInput);
	wrapperDiv.appendChild(document.createElement('br'));
	wrapperDiv.appendChild(finalizeProjectButton);
	wrapperDiv.appendChild(declineProjectButton);
	projectsNavBar.appendChild(wrapperDiv);
});

function revertToDefault(parent, child, button) {
	// remove the extra input box and accept/decline buttons
	parent.removeChild(child);
	// add the button back that allows for more projects or todos to be added
	parent.appendChild(button);
}

// displays options for adding a todo when the user clicks the add todo button
addTodoButton.addEventListener('click', () => {
	const todoList = document.getElementById('todos');
	const todoParent = document.getElementById('content');

	// remove add button
	todoParent.removeChild(addTodoButton);
	// create a new wrapper div to add to the navbar
	const wrapperDiv = document.createElement('div');
	// add an input box to the navbar
	const numTodos = todoList.children.length;
	const todoInput = document.createElement('input');
	todoInput.defaultValue = `Task ${numTodos + 1}`;
	// adds a confirm button
	const finalizeTodoButton = document.createElement('button');
	finalizeTodoButton.classList.add('finalize-decline-buttons');
	finalizeTodoButton.textContent = 'Add';
	finalizeTodoButton.style.backgroundColor = 'green';
	finalizeTodoButton.addEventListener('click', (e) => {
		// split the data into the task and the date itself
		const data = todoInput.value.split(' ');
		const activeProjectTitle = document.querySelector('.selected').textContent;
		const selectedProject = getProject(activeProjectTitle);
		createTodo(selectedProject, data[0], data[1]);
		renderTodos(selectedProject);
		revertToDefault(todoParent, wrapperDiv, addTodoButton);
	});
	// adds all children to the wrapper div, which is added to the navbar
	wrapperDiv.appendChild(todoInput);
	wrapperDiv.appendChild(document.createElement('br'));
	wrapperDiv.appendChild(finalizeTodoButton);
	todoParent.appendChild(wrapperDiv);
});

export function renderProjects() {
	// remove all projects from the list
	const projectsList = document.getElementById('projects-list');
	while (projectsList.firstChild) {
		projectsList.removeChild(projectsList.firstChild);
	}
	// add all of the remaining projects back
	projects.forEach((project) => {
		let projectTag;
		projectTag = document.createElement('li');
		projectTag.classList.add('project');
		projectTag.textContent = project.title;
		projectsList.appendChild(projectTag);
		// switch to a project's todos when it is clicked
		projectTag.addEventListener('click', () => {
			renderTodos(project);
			// add the selected class to a given project and remove it for the previously selected projects
			const projTags = Array.from(projectsList.children);
			projTags.forEach((projTag) => {
				projTag.classList.remove('selected');
			});
			projectTag.classList.add('selected');
		});
	});
	// display the first project by default
	if (projects) {
		renderTodos(projects[0]);
		projectsList.firstChild.classList.add('selected');
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
		// add check box
		checkBox = document.createElement('input');
		checkBox.type = 'checkbox';
		checkBox.name = todo.title;
		todoTag.appendChild(checkBox);
		checkBox.style.margin = '15px';
		// add the task title
		todoTag.appendChild(document.createTextNode(todo.title + ' | '));
		// add the task due date
		todoTag.appendChild(document.createTextNode(todo.dueDate));
		todosList.appendChild(todoTag);
	});
}
