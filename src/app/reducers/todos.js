const todos = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_TODOS':
      return [
        ...state.map(item => {
          const actionItem = action.todos.find(itemNew => (item.id === itemNew.id))
          if (actionItem) return { ...item, ...actionItem }
          return item
        }),
        ...action.todos.filter(item => (!state.some(stateItem => (stateItem.id === item.id))))
      ]
    default:
      return state
  }
}

export default todos