<template>
  <div id="app">
    <h1 @click="add">LSP {{count}}号 double is {{double}}</h1>
    <h1>LSP is {{x}}, double is {{doubleX}}</h1>
    <input type="text" v-model="val" @keyup.enter="addTodo">
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{todo.title}}</li>
    </ul>
  </div>
</template>

<script>
import {reactive, ref, toRefs} from 'vue';
import useCounter from './counter.js';
import useMouse from './mouse.js';

export default {
  setup(){
    let val = ref('');
    let todos = reactive([
      {
        id: 0,
        title: '吃饭',
        done: false
      },
      {
        id: 1,
        title: '睡觉',
        done: false
      },
      {
        id: 2,
        title: 'lsp',
        done: false
      },
    ]);
    function addTodo(){
      todos.push({
        id: todos.length,
        title: val.value,
        done: false
      })
      val.value = '';
    }
    let {count, double, add} = useCounter();
    let {x, double: doubleX} = useMouse();
    return {
      val, todos, addTodo,
      count, double, add,
      x, doubleX
    };
  }
}
</script>
