<template>
  <div class="quiz">
  
    <!-- landingpage -->
    <div class=" bg-white flex flex-col justify-center align-middle" v-if="pagenumber == 1">
      
      <div class="bg-white h-[65vh]" ><img  class="opacity-90 object-cover h-full w-auto" src="https://images.unsplash.com/photo-1518459031867-a89b944bffe4"/></div>
      
      <div class="bg-slate-50 shadow-md fixed bottom-0 rounded p-9 rounded-t-xl">
        <div class="text-lg font-mono  italic">free quiz</div>
      <div class="text-3xl font-sans mx-3 font-bold italic">whats your goal</div>
      
        <img class=" block mx-auto my-3 animate-bounce h-10 w-10" src="../assets/hamd.png" />
      

      <button class="bg-purple-600 rounded-lg font-sans italic text-white text-2xl font-bold mx-10 p-2" @click="pagenumber = 2">Lose Weight</button>
      <button class="bg-purple-600 rounded-lg font-sans italic text-white text-2xl font-bold mx-10 p-2 my-3" @click="pagenumber = 2">Become Healthy</button>
    
      </div>
      
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
        @click="weight_inpput(weight1)"
      >Next</button>
    </div>

    <!-- //bodytype -->
    <div class=" bg-white flex flex-col justify-center" v-if="pagenumber == 5">
      <div class="w-full bg-gray-200 h-5 mb-6">
        <div class="bg-purple-600 h-5" style="width: 66.6%"></div>
      </div>


      <div class="font-sans font-bold text-3xl">Select your body type</div>
      <div class="grid grid-cols-3 m-10 gap-5">
        
        <img @click="bodyfat(10,weight1)"  src="../assets/10.png">
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
      <div class="w-full bg-gray-200 h-5 mb-6">
        <div class="bg-purple-600 h-5" style="width: 86.6%"></div>
      </div>
      <div class="text-3xl font-bold">
        How fast you wanna lose weight

      </div>
            <div
        class="bg-purple-200 m-4 p-5 rounded-lg text-xl font-sans font-semibold text-black"
        @click="generate_results(10,weight1,300)"
      >Slow and Steady</div>
            <div
        class="bg-purple-200 m-4 p-5 rounded-lg text-xl font-sans font-semibold text-black"
        @click="generate_results(10,weight1,500)"
      >Medium pace</div>
            <div
        class="bg-purple-200 m-4 p-5 rounded-lg text-xl font-sans font-semibold text-black"
        @click="generate_results(10,weight1,800)"
      >Agreesive weight loss</div>
    </div>
<!-- results -->
    <div class=" bg-white-300" v-if="pagenumber == 7">
      <div class="font-sans m-3  text-black italic font-bold text-xl">Projected Weightloss results 📉</div>
      <!-- results
      {{bf}} -->

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
     
      <header class="bottom-0  bg-purple-100 h-20 w-screen z-50 fixed"> 
        <div class="flex justify-center align-middle animate-bounce bg-purple-600 shadow-lg mx-6 my-3 p-3">
          <div class="font-bold italic text-white text-2xl " @click="pagenumber=1">
          Enroll
        </div>
        </div>
      </header>
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

    weight_inpput(weight){
      if(weight==null){
        alert("weight can't be empty");


      }else{
        this.pagenumber=5;
      }
      

    },


    loadingbefore(){
      this.pagenumber=7;
      setTimeout(this.pagenumber=7, 3000);

    },

    bodyfat(bf,weight1){

      this.bf = bf;
      this.pagenumber = 6;
      console.log(bf);
      console.log(weight1);
      // this.weight(weight1,bf/100,deficit);
     
       

    },
    generate_results(ss,weight1,deficit){
      //ss is just dumb idek why i havve it to lazy to remove

      console.log(ss);
      this.pagenumber = 7;
      this.weight(weight1,this.bf/100,deficit);
     
       

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