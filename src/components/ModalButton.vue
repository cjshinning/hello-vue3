<template>
    <div class="son">
        <button @click="modalOpen=true">
            点击打开对话框
        </button>
        <teleport to="body">
            <div class="looklook" v-if="modalOpen">
                看看我出现在哪里
                <!-- teleport start -->
                <!-- teleport end -->
                <button @click="modalOpen=false">
                    close
                </button>
            </div>    
        </teleport>    
    </div>
</template>
<script>
import { ref } from 'vue';
export default {
    setup(){
        const modalOpen = ref(false);
        return {
            modalOpen
        }
    }
}
</script>
