<template>
  <div id="app">
    <!-- <child1 :msg="msg" msg2="哈哈哈"></child1> -->
    <!-- <child2 @click="show"></child2> -->
    <div>{{count}}</div>
    <button @click="updateCount">增加</button>
  </div>
</template>

<script>
import {reactive, ref, toRefs} from 'vue';
import Child1 from './components/child1.vue';
import Child2 from './components/child2.vue';

export default {
  setup(){
    // console.log('我执行了');
    // const msg = ref('hello, vue3');
    // return {
    //   msg
    // }

    // const show = () => {
    //   console.log('name', 'cj');
    // }
    // return {
    //   show
    // }

    const count = ref(0);
    function updateCount(){
      count.value++;
    }
    return {
      count,
      updateCount
    }
  },
  components: {
    Child1,
    Child2
  },
  // beforeCreate(){
  //   console.log('beforeCreate执行了')
  // }
}
</script>
