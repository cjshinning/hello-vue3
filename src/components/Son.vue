<template>
    <div>
        <h2>子组件</h2>
        <hr>
        <grand-son></grand-son>
    </div>
</template>
<script>
import GrandSon from './GrandSon.vue';
export default {
    components: {
        GrandSon
    }
}
</script>
