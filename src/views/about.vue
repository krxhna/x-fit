<template>
<div class="dfa">
    {{list}}
    about
    <button class="bg-red-500" @click="weight"> yellow</button>
    </div>  
</template>

<script>
export default {
    data(){
        return{
            list:['df' ,'fds']

        }
    },

    methods: {
        generate(){
            this.list.push('meow')
        }
,
        weight(){
            let num = 3600;
        
            for (let i = 0; i < 100; i++) {
                num = num-200
                this.list.push(num);
            
}

        }
    },

    props:['id']

}
</script>

<style>

</style>