<template>
  <div class="myWhiteBG space-y-4 items-center w-screen">

    <div class="flex items-center justify-between">
      <div class="border-2 my-5 w-2/12 tablet:w-3/12 desktop:w-4/12"></div>
      <p class="px-2 tablet:text-2xl desktop:text-4xl text-gray-400 text-center font-sans ">PROGRAMMING TOOLS</p>
      <div class="border-2 my-5 w-2/12 tablet:w-3/12 desktop:w-4/12 items-end"></div>
    </div>

    <div class="flex laptop:justify-around space-x-4 tablet:space-x-6 mx-4 overflow-x-scroll scrollbar-hide">
      <img src="/src/assets/ProgrammingTools/PhpStorm.png" alt="PhpStorm"
           class="w-40 h-40 rounded-2xl border-2 border-primary shadow p-4">
      <img src="/src/assets/ProgrammingTools/visual-studio-2019.png" alt="Visual Studio 2019"
           class="w-40 h-40 rounded-2xl border-2 border-primary p-4 shadow">
      <img src="/src/assets/ProgrammingTools/visual-studio-code-logo.png" alt="Visual Studio Code"
           class="w-40 h-40 rounded-2xl border-2 border-primary p-4 shadow">
      <img src="/src/assets/ProgrammingTools/git.png" alt="Git"
           class="w-40 h-40 rounded-2xl border-2 border-primary p-4 shadow">
    </div>

  </div>
</template>

<script>
export default {
  name: "ProgrammingTools"
}
</script>

<style scoped>

</style>
