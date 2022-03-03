<template>
  <div class="dfa">

      <div class="flex flex-col m-10">
          weight
           <input
            type="number"
            class="search-bar"
            style="text-transform: uppercase"
            placeholder=" enter weight"
            @keyup.enter="handleClick(weight(w,bf,d))"
            v-model="w"
          />
          bp
          <input
            type="number"
            class="search-bar"
            style="text-transform: uppercase"
            placeholder="enter body fat"
            @keyup.enter="handleClick(weight(w,bf,d))"
            v-model="bf"
          />
          defivct
          <input
            type="number"
            class="search-bar"
            style="text-transform: uppercase"
            placeholder="Enter Ticker (eg., MSFT )"
            @keyup.enter="handleClick(weight(w,bf,d))"
            v-model="d"
          />

          <button class="bg-red-600 "></button>
      
        

          
      </div>

    <div class="fd">
        <div class="s">15% BODY FAT IN {{to_15.length}} days @ {{the_weight[to_15.length]}}</div>
        <div class="s">10% BODY FAT IN {{to_10.length}} days @ {{the_weight[to_10.length]}}</div>
    </div>
    <button class="bg-red-500" @click="weight(w,bf,d)">yellow</button>
    <ul id="example-1" class="m-3">
      
      <li v-for="the_weight in the_weight" :key="the_weight.message">
        {{ the_weight }}

      </li>
      <li v-for="list in list" :key="list.message">
        {{ list }}

      </li>     
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      to_15:[],
      to_10:[],
      weight_: ["df", "fds"],
      bodyfat_: ["df", "fds"],
    //   input_weight: 100,
    //   input_bodyfat: 0.2,
    //   input_deficit: 1200,
      the_weight:["the wer"],

    };
  },

  methods: {

      
    generate() {
      this.list.push("meow");
    },
    weight(weight, bodyfat, deficit) {
      
      let num = 3600;
      let fat_mass = weight * bodyfat;
      let lean_mass = weight - fat_mass;
      let perday = deficit / 7700;
     
      for (let i = 0; bodyfat > 0.1; ) {
        console.log("Sddsdd");
        weight = weight - perday;
        bodyfat = (weight - lean_mass) / weight;

        this.list.push(Math.round(bodyfat * 100));
        this.the_weight.push(Math.round(weight));
        console.log(lean_mass);
         if(bodyfat > 0.15){
                this.to_15.push(Math.round(bodyfat * 100));
            }

         if(bodyfat > 0.10){
                this.to_10.push(Math.round(bodyfat * 100));
            }
      }

        this.pushto15(bodyfat);
    },




    pushto15(bodyfat) {

       for (let i = 0; i < this.list.length; i++)  {

            if(bodyfat > 0.15){
                this.to_15.push(Math.round(bodyfat * 100));
            }
        

        
        
      }
      

    },


    handleClick(thing){
        alert(thing);
    }


  },

  props: ["id"],
};
</script>

<style>
</style>