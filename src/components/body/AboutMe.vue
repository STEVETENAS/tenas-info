<template>
  <div class="myWhiteBG space-y-4 items-center w-screen">

    <div class="flex items-center justify-between">
      <div class="border-2 my-5 w-2/12 tablet:w-3/12 desktop:w-4/12"></div>
      <p class="px-2 tablet:text-2xl desktop:text-4xl text-gray-400 text-center font-sans ">ABOUT ME</p>
      <div class="border-2 my-5 w-2/12 tablet:w-3/12 desktop:w-4/12 items-end"></div>
    </div>

    <div class="tablet:flex tablet:justify-around tablet:items-center space-y-4 tablet:space-x-4 tablet:space-x-6 mx-4 overflow-x-hidden overflow-x-scroll scrollbar-hide">
      <div class="items-center text-center bgHobbies border-primary border-2 p-6 rounded-2xl space-y-3 w-full">
        <h1 class="font-sans font-bold text-gray-500 text-2xl">HOBBIES</h1>
        <p>👉🏽 Playing Basketball 🏀</p>
        <p>👉🏽 Listing to Music ♬</p>
        <p>👉🏽 Video Games 🎮</p>
      </div>

      <div class="items-center text-center bgContact border-primary border-2 p-6 rounded-2xl space-y-3 w-full">
        <h1 class="font-sans font-bold text-gray-500 text-2xl">CONTACT</h1>
        <div class="flex justify-center items-center space-x-2">
          <img src="https://img.icons8.com/fluent/24/000000/gmail-new.png"/>
          <p><b> Stevetenadjang@gmail.com</b></p>
        </div>
        <div class="flex justify-center items-center space-x-2">
          <img src="https://img.icons8.com/material/24/000000/android--v1.png"/>
          <p><b> +237-653-051-037 </b> </p>
        </div>
        <div class="flex justify-center items-center space-x-2">
          <img src="https://img.icons8.com/color/24/000000/linkedin.png"/>
          <p><a href="https://www.linkedin.com/in/stevetenadjang" target="_blank" class="text-blue-600 hover:text-gray-900"><b> LinkedIn</b></a></p>
        </div>
        <div class="flex justify-center items-center space-x-2">
          <img src="https://img.icons8.com/ios-glyphs/24/000000/github.png"/>
          <p><a href="https://github.com/STEVETENAS" target="_blank" class="text-blue-600 hover:text-gray-900"><b> GitHub</b></a></p>
        </div>
      </div>

    </div>

    </div>
</template>

<script>
export default {
  name: "AboutMe"
}
</script>

<style scoped>
  .bgHobbies{
    background-color: #EFD3C6;
  }

  .bgContact{
    background-color: #E1845B;
  }
</style>