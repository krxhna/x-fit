<template>
<div class="dfa">
    
    <div class=" bg-white flex flex-col justify-center align-middle">
      
      <div class="bg-white h-[65vh]" ><img  class="opacity-90 object-cover h-full w-auto" src="https://images.unsplash.com/photo-1518459031867-a89b944bffe4"/></div>
      
      <div class="bg-slate-50 shadow-md fixed bottom-0 rounded p-9 rounded-t-xl">
        <div class="text-lg font-mono  italic">free quiz</div>
      <div class="text-3xl font-sans mx-3 font-bold italic">whats your goal</div>
      
        <img class=" block mx-auto my-3 animate-bounce h-10 w-10" src="../assets/hamd.png" />
      

      <button class="bg-purple-600 rounded-lg font-sans italic text-white text-2xl font-bold mx-10 p-2" @click="handleclick()">Lose Weight</button>
      <button class="bg-purple-600 rounded-lg font-sans italic text-white text-2xl font-bold mx-10 p-2 my-3" @click="handleclick()">Become Healthy</button>
    
      </div>
      
      </div>
    
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