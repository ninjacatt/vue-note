<template>
  <div id = "notes-list">
    <div id="list-header">
      <h2>Notes</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Notes button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'all'"
            :class="{active: show === 'all'}">
            All Notes
          </button>
        </div>
        <!-- Favorites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
            @click="show = 'favorites'"
            :class="{active: show === 'favorites'}">
            Favorites
          </button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="list-group">
        <a v-for="(note, index) in filteredNotes"
        :key="index"
        class="list-group-item" href="#"
        :class="{active: activeNote === note}"
        @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{note.text.trim().substring(0, 30)}}
          </h4>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      show: 'all' // component local state
    }
  },
  methods: mapActions([
    'updateActiveNote',
  ]),
  computed: {
    ...mapGetters({
      activeNote: 'activeNote',
      notes: 'notes'
    }),
    filteredNotes () {
      if (this.show === 'all') {
        console.log('show all');
        return this.notes;
      } else if (this.show === 'favorites') {
        console.log('show favorites');
        return this.notes.filter(note => note.favorite);
      }
    },
  }
}
</script>