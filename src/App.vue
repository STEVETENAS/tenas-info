<template>
  <div class="myWhiteBG space-y-2 scrollbar-hide">
    <Header />
    <SchoolDiploma />
    <JobExperience />
    <ProgrammingTools />
    <ProgrammingLanguage />
    <ProgrammingFrameworks />
    <AboutMe />
    <Footer class="mt-4"/>
  </div>
</template>

<script>
import Header from "./components/includes/Header.vue";
import Footer from "./components/includes/Footer.vue";
import SchoolDiploma from "./components/body/SchoolDiploma.vue";
import JobExperience from "./components/body/JobExperience.vue";
import ProgrammingTools from "./components/body/ProgrammingTools.vue";
import ProgrammingLanguage from "./components/body/ProgrammingLanguage.vue";
import ProgrammingFrameworks from "./components/body/ProgrammingFrameworks.vue";
import AboutMe from "./components/body/AboutMe.vue";
  export default {
    name: 'App',
    components: {
      AboutMe,
      ProgrammingFrameworks,
      ProgrammingLanguage,
      ProgrammingTools,
      JobExperience,
      SchoolDiploma,
      Footer,
      Header
    },
  }
</script>


<style>

</style>
