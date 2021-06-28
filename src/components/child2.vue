<template>
    <!-- <h2>子组件</h2>
    <h3>msg: {{msg}}</h3> -->
    <button>事件分发</button>
</template>
<script>
export default {
    name: 'Child2',
    setup(props, {emit}){
        const emitFn = () => {
            emit('show');
        }
        return {
            emitFn
        };
    }
}
</script>

