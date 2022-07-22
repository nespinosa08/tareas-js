
import './styles.css';

import { Todo, TodoList } from  './classes';
import { crearTodoHtml } from './js/componentes';





/* const tarea = new Todo('Aprender JavaScript bien');
const tarea1 = new Todo('Aprender framework'); */

export const todoList = new TodoList();

/* todoList.nuevoTodo( tarea );
todoList.nuevoTodo( tarea1 ); */

/* console.log(todoList); */
/* console.log(tarea); */

/* crearTodoHtml(tarea); */

/* todoList.todos.forEach( todo => crearTodoHtml(todo) ); */ // se puede simplificar 
todoList.todos.forEach( crearTodoHtml );

/* console.log('son todos ahora', todoList.todos); */
