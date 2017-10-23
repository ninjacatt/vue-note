<<template>
  <div id="note-editor">
    <textarea
      :value="activeNoteText"
      @input="editNote"
      class="form-control">
    </textarea>
</div>
</template>

<<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: mapActions([
    'editNote',
  ]),
  computed: {
    activeNoteText() {
      return this.$store.getters.activeNote.text;
    }
  }
}
</script>
