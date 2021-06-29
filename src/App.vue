<template>
  <div id="app">
    <!-- <child1 :msg="msg" msg2="哈哈哈"></child1> -->

    <!-- <child2 @click="show"></child2> -->

    <!-- <div>{{count}}</div>

    <button @click="updateCount">增加</button> -->

    <!-- <h2>App</h2>
    <input type="text">------
    <input type="text" ref="inputRef"> -->

    <!-- <h3>姓名：{{user.name}}</h3>
    <h3>年龄：{{user.age}}</h3>
    <h3>夫人：{{user.wife}}</h3>
    <button @click="updateUser">更新</button> -->

    <!-- <h2>{{fullName1}}</h2> -->
    <!-- <h2>{{fullName2}}</h2> -->
    
    <!-- <h2>{{fullName3}}</h2> -->
    <h2>{{fullName4}}</h2>
  </div>
</template>

<script>
import {reactive, ref, toRefs, onMounted, computed, watch, watchEffect} from 'vue';
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

    // const user = reactive({
    //   name: 'zzz',
    //   age: 20,
    //   wife: {
    //     name: 'ccc',
    //     age: 18,
    //     books: ['红宝书', '设计模式', '算法与数据结构']
    //   }
    // })
    // const updateUser = ()=>{
    //   user.name = 'rrr';
    //   user.age += 2;
    //   user.wife.books[0] = '红楼梦';
    // }
    // return {
    //   user,
    //   updateUser
    // }

    // const user = reactive({
    //   firstName: 'Chan',
    //   lastName: 'Jenny'
    // })
    // const fullName1 = computed(() => {
    //   return user.firstName + user.lastName;
    // })
    // return{
    //   user,
    //   fullName1
    // }

    // const user = reactive({
    //   firstName: 'Chan',
    //   lastName: 'Jenny'
    // })
    // const fullName2 = computed({
    //   get(){
    //     return user.firstName + '_' + user.lastName;
    //   },
    //   set(val){
    //     const names = val.split('_');
    //     user.firstName = names[0];
    //     user.lastName = names[1];
    //   }
    // })
    // return{
    //   user,
    //   fullName2
    // }

    // const user = reactive({
    //   firstName: 'Chan',
    //   lastName: 'Jenny'
    // });
    // const fullName3 = ref('');
    // watch(user, ({firstName, lastName}) => {
    //     fullName3.value = firstName + '_' + lastName;
    //   },
    //   {
    //     immediate: true, deep: true
    //   }
    // )
    // onMounted(()=>{
    //   setTimeout(()=>{
    //     user.firstName = 'Rolling';
    //   },3000)
    // })
    // return {
    //   user,
    //   fullName3
    // }

    const user = reactive({
      firstName: 'Chan',
      lastName: 'Jenny'
    });
    const fullName4 = ref('');
    watchEffect(user, () => {
        fullName4.value = firstName + '_' + lastName;
      }
    )
    // onMounted(()=>{
    //   setTimeout(()=>{
    //     user.firstName = 'Rolling';
    //   },3000)
    // })
    return {
      user,
      fullName4
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
