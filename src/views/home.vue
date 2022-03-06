<template>
<div class="dfa">
    home
    <div class="text-3xl p-4">Height</div>
    
    <Input class="bg-orange-400 w-4/5 h-12 rounded-md"> ds </Input>
    <div class="text-3xl p-4">Weight</div>
    <Input class="bg-orange-400 w-4/5 h-12"  v-model="weight"> ds </Input>
    <div class="text-3xl p-4">Age</div>
    <Input class="bg-orange-400 w-4/5 h-12"  v-model="height"> ds </Input>
    <div class="text-3xl p-4">deficit</div>
    <Input class="bg-orange-400 w-4/5 h-12 rounded-md"  v-model="deficit"> ds </Input>
    
    <div class="s">
        {{weight}}
    </div>
    <button class="bg-green-500 px-10" @click="handleclick()">go</button>
    </div>  

</template>

<script>
export default {

    data(){
        return {
            
            weight: 80,
            height: 180,
            age: 30,
            deficit: 200,
        }
    }
,

    methods: {
        calculate(){
            this.deficit = this.weight - (this.height - 100) * 0.9
        }


        ,
        handleclick(){
            this.$router.push(
                {
                    path: '/quiz',
                    
                }
                
                )
        }
    },
    



}
</script>

<style>

</style>