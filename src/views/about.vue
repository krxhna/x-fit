<template>
<div class="dfa">
    {{list}}
    about
    <button class="bg-red-500" @click="weight(80,0.20,300)"> yellow</button>
    <ul id="example-1">
  <li v-for="list in list" :key="list.message">
    {{ list }}
  </li>
</ul>
    </div>  
</template>

<script>
export default {
    data(){
        return{
            list:['df' ,'fds'],
            weight_:['df' ,'fds'],
            bodyfat_:['df' ,'fds'],


        }
    },

    methods: {
        generate(){
            this.list.push('meow')
        }
,
        weight(weight,bodyfat,deficit){
            let num = 3600;
            let fat_mass = weight*bodyfat
            let lean_mass = weight - fat_mass
            let perday = deficit/7700
        
            for (let i = 0; bodyfat > 0.10; ) {
                weight = weight - perday
                bodyfat = (weight-lean_mass)/weight
                
              
                this.list.push(Math.floor(bodyfat*100));
                console.log(lean_mass)
            
}

        }
    },

    props:['id']

}
</script>

<style>

</style>