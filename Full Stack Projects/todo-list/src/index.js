import './style.css';
// what to do if navbar gets too crowded????

import { renderProjects, renderTodos } from './populatePage';
import { projects, initializePage } from './taskLogic';

initializePage();

// temporary
renderProjects();
