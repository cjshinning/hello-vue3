<template>
  <div id="app">
    <!-- <child1 :msg="msg" msg2="哈哈哈"></child1> -->

    <!-- <child2 @click="show"></child2> -->

    <!-- <div>{{count}}</div>

    <button @click="updateCount">增加</button> -->

    <!-- <h2>App</h2>
    <input type="text">------
    <input type="text" ref="inputRef"> -->

    <h3>姓名：{{user.name}}</h3>
    <h3>年龄：{{user.age}}</h3>
    <h3>夫人：{{user.wife}}</h3>
    <button @click="updateUser">更新</button>
  </div>
</template>

<script>
import {reactive, ref, toRefs, onMounted} from 'vue';
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

    // const count = ref(0);
    // function updateCount(){
    //   count.value++;
    // }
    // return {
    //   count,
    //   updateCount
    // }

    // const inputRef = ref<HTMLElement|null>(null);

    // onMounted(()=>{
    //   inputRef.value && inputRef.value.focus();
    // })

    const user = reactive({
      name: 'zzz',
      age: 20,
      wife: {
        name: 'ccc',
        age: 18,
        books: ['红宝书', '设计模式', '算法与数据结构']
      }
    })
    const updateUser = ()=>{
      user.name = 'rrr';
      user.age += 2;
      user.wife.books[0] = '红楼梦';
    }
    return {
      user,
      updateUser
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
