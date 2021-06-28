<template>
    <h2>子组件</h2>
    <h3>msg: {{msg}}</h3>
</template>
<script>
export default {
    name: 'Child1',
    props: ['msg'],
    setup(props, {attrs, slots, emit}){
        console.log(props); //msg: "hello, vue3"
        console.log(attrs); //msg2: "哈哈哈"
        return {};
    }
}
</script>

