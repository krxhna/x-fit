<template>
  <div class="quiz">
    quiz
    <!-- landingpage -->
    <div class="h-56 bg-white flex flex-col justify-center" v-if="pagenumber == 1">
      landingpage
      <div class="d">e</div>

      <button class="bg-green-400" @click="pagenumber = 2">next</button>
    </div>

    <!-- //gender -->
    <div class="bg-white flex flex-col justify-center" v-if="pagenumber == 2">
      <div class="w-full bg-gray-200 h-5 mb-6">
        <div class="bg-purple-600 h-5" style="width: 16.6%"></div>
      </div>
      <div class="text-3xl font-sans font-bold text-black">Whats our gender</div>
      <div
        class="bg-purple-200 m-4 p-5 rounded-lg text-xl font-sans font-semibold text-black"
        @click="pagenumber = 3"
      >Male</div>
      <div
        class="bg-purple-200 m-4 p-5 rounded-lg text-xl font-sans font-semibold text-black"
        @click="pagenumber = 3"
      >Female</div>
    </div>

    <!-- //age -->
    <div class="bg-white flex flex-col justify-center" v-if="pagenumber == 3">
      <div class="w-full bg-gray-200 h-5 mb-6">
        <div class="bg-purple-600 h-5" style="width: 33.33%"></div>
      </div>
      <div class="text-3xl font-sans font-bold text-black">Whats your age</div>
      <div
        class="bg-purple-200 m-4 p-5 rounded-lg text-xl font-sans font-semibold text-black"
        @click="pagenumber = 4"
      >Teens</div>
      <div
        class="bg-purple-200 m-4 p-5 rounded-lg text-xl font-sans font-semibold text-black"
        @click="pagenumber = 4"
      >20s</div>
      <div
        class="bg-purple-200 m-4 p-5 rounded-lg text-xl font-sans font-semibold text-black"
        @click="pagenumber = 4"
      >30s</div>
      <div
        class="bg-purple-200 m-4 p-5 rounded-lg text-xl font-sans font-semibold text-black"
        @click="pagenumber = 4"
      >40s</div>
      <div
        class="bg-purple-200 m-4 p-5 rounded-lg text-xl font-sans font-semibold text-black"
        @click="pagenumber = 4"
      >50s</div>
    </div>

    <!-- //weight height -->
    <div class="bg-white flex flex-col justify-center" v-if="pagenumber == 4">
      <div class="w-full bg-gray-200 h-5 mb-6">
        <div class="bg-purple-600 h-5" style="width: 49.6%"></div>
      </div>
      <div class="text-3xl font-sans font-bold text-black">Your height and weight</div>

      <div class="flex flex-col justify-start">
        <div class="text-xl p-3">Height</div>
        <input
          class="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 w-full focus:outline-none"
          type="text"
          v-model="height"
        />

        <div class="text-xl p-3">Weight</div>

        <input
          class="form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
          type="text"
          v-model="weight1"
        />
        
      </div>

      <button
        class="bg-purple-600 font-semibold text-xl text-white p-4 italic m-5"
        @click="pagenumber = 5"
      >Next</button>
    </div>

    <!-- //bodytype -->
    <div class=" bg-white flex flex-col justify-center" v-if="pagenumber == 5">


      <div class="font-sans font-bold text-3xl">Select your body type</div>
      <div class="grid grid-cols-3 m-10 gap-5">
        
        <img  @click="bodyfat(10,weight1)"  src="../assets/10.png">
        <img @click="bodyfat(15,weight1)" src="../assets/15.png">
        <img @click="bodyfat(20,weight1)" src="../assets/20.png">
        <img @click="bodyfat(25,weight1)" src="../assets/25.png">
        <img @click="bodyfat(30,weight1)" src="../assets/30.png">
        <img @click="bodyfat(35,weight1)" src="../assets/35.png">
        <img @click="bodyfat(40,weight1)" src="../assets/40.png">
        <img @click="bodyfat(45,weight1)" src="../assets/45.png">
        <img @click="bodyfat(50,weight1)" src="../assets/50.png">

      </div>
      <!-- <button
        class="bg-purple-600 font-semibold text-xl text-white p-4 italic m-5"
        @click="pagenumber = 6"
      >Next</button> -->
    </div>

    <!-- //program -->

    <div class="fd"  v-if="pagenumber == 6">
      <div class="text-3xl font-bold">
        How fast you wanna lose weight

      </div>
            <div
        class="bg-purple-200 m-4 p-5 rounded-lg text-xl font-sans font-semibold text-black"
        @click="pagenumber = 7"
      >Slow and Steady</div>
            <div
        class="bg-purple-200 m-4 p-5 rounded-lg text-xl font-sans font-semibold text-black"
        @click="pagenumber = 7"
      >Medium pace</div>
            <div
        class="bg-purple-200 m-4 p-5 rounded-lg text-xl font-sans font-semibold text-black"
        @click="pagenumber = 7"
      >Agreesive weight loss</div>
    </div>
<!-- results -->
    <div class=" bg-white-300" v-if="pagenumber == 7">
      results
      {{bf}}

       <div class="flex flex-col justify-center">
        
        <!-- <div class=" font-mono font-bold text-3xl m-2" v-if="to_10.length>0">10% BODY FAT IN {{to_10.length}} days @  {{the_weight[to_10.length]}}</div>
        <div class=" font-mono font-bold text-3xl m-2"  v-if="to_15.length>0">15% BODY FAT IN {{to_15.length}} days @ {{the_weight[to_15.length]}}</div>
        <div class=" font-mono font-bold text-3xl m-2" v-if="to_20.length>0">20% BODY FAT IN {{to_20.length}} days @ {{the_weight[to_20.length]}}</div>
        <div class=" font-mono font-bold text-3xl m-2" v-if="to_25.length>0">25% BODY FAT IN {{to_25.length}} days @ {{the_weight[to_25.length]}}</div>
        <div class=" font-mono font-bold text-3xl m-2" v-if="to_30.length>0">30% BODY FAT IN {{to_30.length}} days @ {{the_weight[to_30.length]}}</div>
        <div class=" font-mono font-bold text-3xl m-2" v-if="to_35.length>0">35% BODY FAT IN {{to_30.length}} days @ {{the_weight[to_30.length]}}</div>
        <div class=" font-mono font-bold text-3xl m-2" v-if="to_40.length>0">40% BODY FAT IN {{to_30.length}} days @ {{the_weight[to_30.length]}}</div> -->
        <div class=" font-sans italic text-black font-bold text-3xl m-2 mx-16 flex bg-purple-400  flex-col  justify-center" v-if="to_45.length>0"> In {{to_45.length}} days <div class="text-2xl m-1">{{the_weight[to_45.length]}} kg</div> <img class="" src="../assets/45.png"></div>
        <div class=" font-sans italic text-black font-bold text-3xl m-2 mx-16 flex bg-purple-400  flex-col  justify-center" v-if="to_40.length>0"> In {{to_40.length}} days <div class="text-2xl m-1">{{the_weight[to_40.length]}} kg</div> <img class="" src="../assets/40.png"></div>
        <div class=" font-sans italic text-black font-bold text-3xl m-2 mx-16 flex bg-purple-400  flex-col  justify-center" v-if="to_35.length>0"> In {{to_35.length}} days <div class="text-2xl m-1">{{the_weight[to_35.length]}} kg</div> <img class="" src="../assets/35.png"></div>
        <div class=" font-sans italic text-black font-bold text-3xl m-2 mx-16 flex bg-purple-400  flex-col  justify-center" v-if="to_30.length>0"> In {{to_30.length}} days <div class="text-2xl m-1">{{the_weight[to_30.length]}} kg</div> <img class="" src="../assets/30.png"></div>
        <div class=" font-sans italic text-black font-bold text-3xl m-2 mx-16 flex bg-purple-400  flex-col  justify-center" v-if="to_25.length>0"> In {{to_25.length}} days <div class="text-2xl m-1">{{the_weight[to_25.length]}} kg</div> <img class="" src="../assets/25.png"></div>
        
        <div class=" font-sans italic text-black font-bold text-3xl m-2 mx-16 flex bg-purple-400  flex-col  justify-center" v-if="to_20.length>0"> In {{to_20.length}} days <div class="text-2xl m-1">{{the_weight[to_20.length]}} kg</div> <img class="" src="../assets/20.png"></div>
        <div class=" font-sans italic text-black font-bold text-3xl m-2 mx-16 flex bg-purple-400  flex-col  justify-center" v-if="to_15.length>0"> In {{to_15.length}} days <div class="text-2xl m-1">{{the_weight[to_15.length]}} kg</div> <img class="" src="../assets/15.png"></div>
        <div class=" font-sans italic text-black font-bold text-3xl m-2 mx-16 flex bg-purple-400  flex-col  justify-center" v-if="to_10.length>0"> In {{to_10.length}} days <div class="text-2xl m-1">{{the_weight[to_10.length]}} kg</div> <img class="" src="../assets/10.png"></div>
    </div>
      <!-- <button class="bg-blue-400 m-6 p-10"  @click="weight(weight1,bf/100,700)">show results</button> -->
      <button class="bg-green-400" @click="pagenumber = 1">next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bf:'loading..',

       list: [],
      to_15:[],
      to_10:[],
      to_20:[],
      to_25:[],
      to_30:[],
      to_35:[],
      to_40:[],
      to_45:[],
      weight_: ["df", "fds"],
      bodyfat_: ["df", "fds"],
    //   input_weight: 100,
    //   input_bodyfat: 0.2,
    //   input_deficit: 1200,
      the_weight:[""],
      pagenumber: 1,
    };
  },

  methods:{

    bodyfat(bf,weight1){

      this.bf = bf;
      this.pagenumber = 6;
      this.weight(weight1,bf/100,700);
     
       

    },
          
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
         if(bodyfat > 0.45){
                this.to_45.push(Math.round(bodyfat * 100));
            }
         if(bodyfat > 0.40){
                this.to_40.push(Math.round(bodyfat * 100));
            }
        if(bodyfat > 0.35){
                this.to_35.push(Math.round(bodyfat * 100));
            }
                 if(bodyfat > 0.30){
                this.to_30.push(Math.round(bodyfat * 100));
            }

         if(bodyfat > 0.25){
                this.to_25.push(Math.round(bodyfat * 100));
            }

         if(bodyfat > 0.20){
                this.to_20.push(Math.round(bodyfat * 100));
            }

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

  }
};
</script>

<style>
</style>