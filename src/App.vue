<template>
  <p>名： {{user.firstName}}</p>
  <p>性： {{user.lastName}}</p>
  <p>全名： {{fullName}}</p>
</template>

<script>
import {ref, reactive, watchEffect} from 'vue';
export default {
  setup(){
    const user = reactive({
      firstName: 'Jenny',
      lastName: 'Chan'
    });
    const fullName = ref('');
    watchEffect(() => {
      fullName.value = user.firstName + '_' + user.lastName;
    })
    return {
      user,
      fullName
    }
  }
}
</script>


