<template>
  <h3>父组件</h3>
  <p>当前颜色：{{counter}}</p>
  <button @click="color='red'">红色</button>
  <button @click="color='green'">绿色</button>
  <button @click="color='blue'">蓝色</button>
  <hr>
  <son></son>
</template>
<script>
import {ref, provide} from 'vue';
import Son from './components/Son.vue';
export default {
  setup(){
    const color = ref('red');
    provide('color', color);
    return {
      color
    }
  },
  components: {
    Son
  }
}
</script>


