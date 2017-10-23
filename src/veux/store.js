import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// initial state object
// application level state to be shared between components
const state = {
  notes: [],
  // Active nodes hold the currently selected note object
  // Multiple components will neeed to be aware of this:
  // Toolbar will star/delete
  // NodeList will highlight
  // Editor will display content
  activeNote: {}
}

// define possible mutations that could be applied to our state
const mutations = {
  /*Mutations as the only means by which you can modify the state. The mutators we will be implementing for our notes app are:
  
  adding a note to our notes array (state.notes)
  setting the active note (state.activeNote) to the one selected by the user from the list of notes
  deleting the active note
  editing the active note
  toggling between favorite/unfavorite for the active note*/

  // Mutators always receive the state tree as first argument, then additional payload arguments
  ADD_NOTE (state) {
    const newNote = {
      text: 'New Note',
      favorite: false,
    }

    // Only mutator can mutate the state
    state.notes.push(newNote);
    state.activeNote = newNote;
  },

  EDIT_NOTE (state, content) {
    state.activeNote.text = content;
  },

  DELETE_NOTE (state) {
    state.notes.$remove(state.activeNote)
    state.activeNote = state.notes[0]
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  }

}

// Create Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  state,
  mutations
});
