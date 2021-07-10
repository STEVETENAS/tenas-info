<template>
  <div class="myWhiteBG space-y-4 items-center w-screen">

    <div class="flex items-center justify-between">
      <div class="border-2 my-5 w-2/12 tablet:w-3/12 desktop:w-4/12"></div>
      <p class="px-2 tablet:text-2xl desktop:text-4xl text-gray-400 text-center font-sans ">PROGRAMMING FRAMEWORKS</p>
      <div class="border-2 my-5 w-2/12 tablet:w-3/12 desktop:w-4/12 items-end"></div>
    </div>

    <div class="flex laptop:justify-around space-x-4 tablet:space-x-6 mx-4 overflow-x-hidden overflow-x-scroll scrollbar-hide">
      <img src="../../assets/ProgrammingFrameworks/laravel.png" alt="Laravel" class="w-full tablet:w-40 h-40 rounded-2xl border-2 border-primary shadow p-4">
      <img src="../../assets/ProgrammingFrameworks/dotnet-logo.png" alt="dotNet" class="w-full tablet:w-40 h-40 rounded-2xl border-2 border-primary p-4 shadow">
      <img src="../../assets/ProgrammingFrameworks/icons8-vue-js-96.png" alt="VueJs" class="w-full tablet:w-40 h-40 rounded-2xl border-2 border-primary p-4 shadow">
    </div>

  </div>
</template>

<script>
export default {
  name: "ProgrammingFrameworks"
}
</script>

<style scoped>

</style>