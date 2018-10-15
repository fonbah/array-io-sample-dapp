import { ipfs, room } from '../ipfs'

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const loadTodos = todos => ({
  type: 'LOAD_TODOS',
  todos
})

export const sendTodos = (peer) => {
  return (dispatch, getState) => {
    const todos = getState().todos
    if(todos.length > 0){
      dispatch(() => (
        room.sendTo(peer, JSON.stringify(todos))
        ))
    }
  }
}

export const broadcastTodo = (id, text, completed) => {
  const todos = [{
    id,
    text,
    completed
  }]
  return (dispatch, getState) => {
    dispatch(() => (
      room.broadcast(JSON.stringify(todos))
      ))
  }
}

export const broadcastToggle = (id) => {
  return (dispatch, getState) => {
    const todo = getState().todos.find(item => (item.id === id))
    dispatch(() => (
      room.broadcast(JSON.stringify([{...todo, completed: !todo.completed}]))
      ))
  }
}