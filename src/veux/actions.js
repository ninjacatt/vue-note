// Actions are just functions that can be called by our components to dispatch mutations
// They receive the store as the first argument followed by any number of additional arguments.

export const addNote = (store) => {
  let dispatch = store.dispatch;
  dispatch('ADD_NOTE');
}

export const editNote = ({dispatch}, e) => {
  dispatch('EDIT_NOTE', e.target.value);
}

export const deleteNote = ({dispatch}) => {
  dispatch('DELETE_NOTE');
}

export const toggleFavorite = ({ dispatch }) => {
  dispatch('TOGGLE_FAVORITE')
}

export const updateActiveNote = ({dispatch}, noteToSet) => {
  dispatch('SET_ACTIVE_NOTE', noteToSet);
}
