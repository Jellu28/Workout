<template>
  <div>
    <Nav />
    <HeadTariffs />
    <HowTo />
    <Info />
    <Tariffs />
    <Footer />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import HeadTariffs from "./components/HeadTariffs.vue";
import HowTo from "./components/HowTo.vue";
import Info from "./components/Info.vue";
import Tariffs from "./components/Tariffs.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Nav, HeadTariffs, HowTo, Info, Tariffs, Footer },
};
</script>

<style lang="scss"></style>
