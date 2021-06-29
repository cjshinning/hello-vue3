<template>
  <p>名： {{user.firstName}}</p>
  <p>性： {{user.lastName}}</p>
  <p>全名： {{fullName}}</p>
</template>

<script>
import {reactive, computed} from 'vue';
export default {
  setup(){
    const user = reactive({
      firstName: 'Jenny',
      lastName: 'Chan'
    });
    const fullName = computed(() => {
      return user.firstName + ' ' + user.lastName;
    })
    return {
      user,
      fullName
    }
  }
}
</script>

