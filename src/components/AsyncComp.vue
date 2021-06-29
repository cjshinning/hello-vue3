<template>
    <h2>AsyncComp</h2>
    <p>{{msg}}</p>
</template>
<script>
export default {
    setup(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve({
                    msg: 'abc'
                })
            }, 2000)
        })
    }
}
</script>
