<template>
  <div class="quiz">
    quiz

    <!-- landingpage -->
    <div
      class="h-56 bg-white flex flex-col justify-center"
      v-if="pagenumber == 1"
    >
      landingpage
      <div class="d">e</div>

      <button class="bg-green-400" @click="pagenumber = 2">next</button>
    </div>

    <!-- //gender -->
    <div class="bg-white flex flex-col justify-center" v-if="pagenumber == 2">
      <div class="w-full bg-gray-200 h-5 mb-6">
        <div class="bg-purple-600 h-5" style="width: 16.6%"></div>
      </div>
      <div class="text-3xl font-sans font-bold text-black">
        Whats our gender
      </div>
      <div
        class="
          bg-purple-200
          m-4
          p-5
          rounded-lg
          text-xl
          font-sans font-semibold
          text-black
        "
        @click="pagenumber = 3"
      >
        Male
      </div>
      <div
        class="
          bg-purple-200
          m-4
          p-5
          rounded-lg
          text-xl
          font-sans font-semibold
          text-black
        "
        @click="pagenumber = 3"
      >
        Female
      </div>

    </div>




 
    <!-- //age -->
    <div class="bg-white flex flex-col justify-center" v-if="pagenumber == 3">
      <div class="w-full bg-gray-200 h-5 mb-6">
        <div class="bg-purple-600 h-5" style="width: 33.33%"></div>
      </div>
      <div class="text-3xl font-sans font-bold text-black">
        Whats our age
      </div>
      <div
        class="
          bg-purple-200
          m-4
          p-5
          rounded-lg
          text-xl
          font-sans font-semibold
          text-black
        "
        @click="pagenumber = 4"
      >
        Teens
      </div>
      <div
        class="
          bg-purple-200
          m-4
          p-5
          rounded-lg
          text-xl
          font-sans font-semibold
          text-black
        "
        @click="pagenumber = 4"
      >
        20s
      </div>
            <div
        class="
          bg-purple-200
          m-4
          p-5
          rounded-lg
          text-xl
          font-sans font-semibold
          text-black
        "
        @click="pagenumber = 4"
      >
        30s
      </div>
            <div
        class="
          bg-purple-200
          m-4
          p-5
          rounded-lg
          text-xl
          font-sans font-semibold
          text-black
        "
        @click="pagenumber = 4"
      >
        40s
      </div>
            <div
        class="
          bg-purple-200
          m-4
          p-5
          rounded-lg
          text-xl
          font-sans font-semibold
          text-black
        "
        @click="pagenumber = 4"
      >
        50s
      </div>

    </div>


    <!-- //weight height -->
    <div
      class="bg-white flex flex-col justify-center"
      v-if="pagenumber == 4"
    >
    <div class="w-full bg-gray-200 h-5 mb-6">
        <div class="bg-purple-600 h-5" style="width: 49.6%"></div>
      </div>
      <div class="text-3xl font-sans font-bold text-black">
        Your height and weight
      </div>

      <div class="flex flex-col justify-start">
          <div class="text-xl p-3">Height</div>
              <input class=" form-control
        block
        
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-purple-600 w-full focus:outline-none" type="text" v-model="height" />
      
          <div class="text-xl p-3">Weight</div>
           
       <input class=" form-control
        block
       
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none" type="text" v-model="height" />
      
         


      </div>


       <button class="bg-purple-600 font-semibold text-xl text-white p-4 italic  m-5" @click="pagenumber = 5">Next</button>


      
      




    </div>

    <!-- //bodytype -->
    <div
      class="h-56 bg-white flex flex-col justify-center"
      v-if="pagenumber == 5"
    >
      select your body type

      <button class="bg-green-400" @click="pagenumber = 6">next</button>
    </div>

    <!-- //program -->

    <div class="h-56 bg-yellow-300" v-if="pagenumber == 6">
      results
      <button class="bg-green-400" @click="pagenumber = 1">next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagenumber: 1,
    };
  },
};
</script>

<style>
</style>