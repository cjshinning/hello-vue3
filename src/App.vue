<template>
  <p>年龄： {{user.name}}</p>
  <p>性别： {{user.age}}</p>
  <p>其他： {{user.other}}</p>
  <button @click="updateUser">更新</button>
</template>

<script>
import {reactive} from 'vue';
export default {
  setup(){
    const user = reactive({
      name: 'Jenny',
      age: 18,
      other: {
        country: 'China',
        hobbies: ['coding', 'singing']
      }
    });
    const updateUser = () => {
      user.name = 'Jane';
      user.age = 20;
      user.other.hobbies[1] = 'drawing';
    }
    return {
      user,
      updateUser
    }
  }
}
</script>