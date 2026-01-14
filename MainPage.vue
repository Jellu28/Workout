<template>
  <div>
    <Nav />
    <Head />
    <Courses :data="courses" />
    <Features />
    <Videos />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Head from "./components/Head.vue";
import Courses from "./components/Courses.vue";
import Features from "./components/Features.vue";
import Videos from "./components/Videos.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Nav, Head, Courses, Features, Videos, Footer },
  data() {
    return {
      courses: [
        {
          title: "Cardio",
          cl: "250 cal",
          time: "39:14",
          img: "cardio.png",
        },
        {
          title: "Stretching",
          cl: "250 cal",
          time: "58:24",
          img: "stretching.png",
        },
        { title: "Yoga", cl: "250 cal", time: "28:54", img: "yoga.png" },
        { title: "Run", cl: "250 cal", time: "39:17", img: "run.png" },
        {
          title: "Muscles",
          cl: "250 cal",
          time: "28:40",
          img: "muscules.png",
        },
        {
          title: "Outdoor",
          cl: "250 cal",
          time: "33:16",
          img: "outdoor.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
