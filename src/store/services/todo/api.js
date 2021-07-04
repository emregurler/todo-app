import api from '../axios';

const getTodos = () => api.get('todos');
const putTodo = (id, todo) => {
  api.put(`todos/${id}`, todo);
};
const postTodo = (todo) => api.post('todos', todo);
const deleteTodo = (id) => api.delete(`todos/${id}`);

export { getTodos, putTodo, postTodo, deleteTodo };
