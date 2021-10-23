<template>
  <div id="app">
    <h2>
      {{ todosCount}}
    </h2>
      <ul>
        <li v-for="todo in todos" :key="todo">
          {{ todo.text }}
        </li>
      </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      num: 10
    }
  },
  computed: mapGetters ({
    todos: 'doneTodos',
    todosCount: 'doneTodosCount'
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
