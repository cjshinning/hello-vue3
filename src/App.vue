<template>
  <p>名： {{user.firstName}}</p>
  <p>性： {{user.lastName}}</p>
  <p>全名： {{fullName}}</p>
</template>

<script>
import {ref, reactive, watch} from 'vue';
export default {
  setup(){
    const user = reactive({
      firstName: 'Jenny',
      lastName: 'Chan'
    });
    const fullName = ref('');
    watch(
      user,
      ({firstName, lastName}) => {
        fullName.value = firstName + '_' + lastName;
      },
      {
        immediate: true,
        deep: true
      }
    )
    return {
      user,
      fullName
    }
  }
}
</script>

