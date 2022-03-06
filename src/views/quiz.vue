<template>
<div class="quiz">
    quiz
    <div class="h-56 bg-red-300 flex flex-col justify-center" v-if="pagenumber==1">
        box1
        <button class="bg-green-400" @click="pagenumber=2"> next </button>
    </div>
        <div class="h-56 bg-yellow-300" v-if="pagenumber==2">
        box2
        <button class="bg-green-400" @click="pagenumber=1"> next </button>
    </div>
    
    
    </div>  
</template>

<script>
export default {

    data () {
        return {

            pagenumber: 1,

        };
    },

}
</script>

<style>

</style>