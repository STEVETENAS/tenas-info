<template>
  <div class="myWhiteBG space-y-4 items-center w-screen">

    <div class="flex items-center justify-between">
      <div class="border-2 my-5 w-2/12 tablet:w-3/12 desktop:w-4/12"></div>
      <p class="px-2 tablet:text-2xl desktop:text-4xl text-gray-400 text-center font-sans ">SCHOOL DIPLOMA</p>
      <div class="border-2 my-5 w-2/12 tablet:w-3/12 desktop:w-4/12 items-end"></div>
    </div>

    <div class="flex flex-nowrap tablet:justify-around items-center space-x-3 overflow-x-scroll overflow-x-hidden mx-4">
      <div class="flex flex-col w-40 h-32 mb-6 rounded-2xl border-primary border-2 p-4 space-y-3 text-center tablet:py-10">
        <p class="text-gray-700 font-sans font-bold"> GCE Ordinary Level </p>
        <button class="myBG rounded-md text-gray-200 p-2 hover:myOrangeD hover:bg-myOrangeD">Download</button>
      </div>

      <div class="flex flex-col w-40 h-32 mb-6 rounded-2xl border-primary border-2 p-4 space-y-3 text-center tablet:py-10">
        <p class="text-gray-700 font-sans font-bold"> GCE Advance Level </p>
        <button class="myBG rounded-md text-gray-200 p-2 hover:myOrangeD hover:bg-myOrangeD">Download</button>
      </div>

      <div class="flex flex-col w-40 h-32 mb-6 rounded-2xl border-primary border-2 p-4 space-y-3 text-center tablet:py-10">
        <p class="text-gray-700 font-sans font-bold"> <abbr title="Dimplome d'etude collegial en proframmantion et application Mobile">DEC</abbr> From CCNB Canada </p>
        <button class="myBG rounded-md text-gray-200 p-2 hover:myOrangeD hover:bg-myOrangeD">Download</button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "SchoolDiploma"
}
</script>

<style scoped>

</style>
<!--<div class="flex items-center justify-between">-->
<!--<div class="border-2 my-5 w-2/12 laptop:w-3/12 desktop:w-4/12"></div>-->
<!--<p class="px-2 tablet:text-2xl laptop:text-3xl desktop:text-4xl textColor text-center font-sans ">SCHOOL DIPLOMA</p>-->
<!--<div class="border-2 my-5 w-2/12 laptop:w-3/12 desktop:w-4/12 items-end"></div>-->
<!--</div>-->
<!--<div class="flex laptop:justify-around mx-4 items-center space-x-3 overflow-x-scroll scrollbar-hide text-2xl">-->
<!--<div class="text-center rounded-2xl border-2 px-4 block space-y-4 py-2">-->
<!--  <p class="text-gray-700 font-bold font-sans">GCE ORDINARY LEVEL</p>-->
<!--  <button class="primary myBG myWhite rounded-2xl py-4 px-2">Download</button>-->
<!--</div>-->

<!--<div class="text-center rounded-2xl border-2 px-4 block space-y-4 py-2">-->
<!--  <p class="text-gray-700 font-bold font-sans">GCE ADVANCE LEVEL</p>-->
<!--  <button class="primary myBG myWhite rounded-2xl py-4 px-2">Download</button>-->
<!--</div>-->

<!--<div class="text-center rounded-2xl border-2 px-4 block space-y-4 py-2">-->
<!--  <p class="text-gray-700 font-bold font-sans "><abbr title="Dimplome d'etude collegial en proframmantion et application Mobile">DEC</abbr> From CCNB Canada</p>-->
<!--  <button class="primary myBG myWhite rounded-2xl py-4 px-2">Download</button>-->
<!--</div>-->
<!--</div>-->
