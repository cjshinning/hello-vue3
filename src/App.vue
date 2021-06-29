<template>
  <h3>vue3 生命周期</h3>
  <p>{{counter}}</p>
  <button @click="updateCounter">增加</button>
</template>

<script>
import {ref, onMounted, onBeforeMount, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue';
export default {
  setup(){
    const counter = ref(0);
    const updateCounter = () => {
      counter.value++;
    }
    onBeforeMount(() => {
      console.log('--onBeforeMount');
    })
    onMounted(() => {
      console.log('--onMounted');
    })
    onBeforeUpdate(() => {
      console.log('--onBeforeUpdate');
    })
    onUpdated(() => {
      console.log('--onUpdated');
    })
    onBeforeUnmount(() => {
      console.log('--onBeforeUnmount');
    })
    onUnmounted(() => {
      console.log('--onUnmounted');
    })
    return {
      counter,
      updateCounter
    }
  },
  created(){
    console.log('created');
  },
  beforeCreate(){
    console.log('beforeCreate');
  },
  beforeMount(){
    console.log('beforeMount');
  },
  mounted(){
    console.log('mounted');
  }
}
</script>


