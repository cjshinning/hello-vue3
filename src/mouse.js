import {ref, onMounted, onUnmounted, computed} from 'vue';

export default function useMouse(){
    let x = ref(0);
    function update(e){
        x.value = e.pageX;
    }
    let double = computed(() => x.value * 2);
    onMounted(() => {
        window.addEventListener('mousemove', update);
    })
    onUnmounted(() => {
        window.removeEventListener('mousemove', update);
    })
    return {x, double};
}

// export default{
//     data(){
//         return {
//             x: 0
//         }
//     },
//     methods: {
//         update(e){
//             this.x = e.pageX
//         }
//     },
//     computed: {
//         double(){
//             return this.x * 2;
//         }
//     },
//     mounted(){
//         window.addEventListener('mousemove', this.update);
//     },
//     destroyed(){
//         window.removeEventListener('mousemove', this.update);
//     }
// }