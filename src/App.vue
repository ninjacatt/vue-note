<template>
  <div id="app">
    <Toolbar></Toolbar>
    <NoteList></NoteList>
    <Editor></Editor>
  </div>
</template>

<script>
import Toolbar from './components/ToolBar'
import NoteList from './components/NoteList'
import Editor from './components/Editor'

export default {
  name: 'app',
  components: {
    Toolbar,
    NoteList,
    Editor
  }
}
</script>
