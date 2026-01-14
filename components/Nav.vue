<template>
  <nav class="nav">
    <span class="nav__logo"><router-link to="/">Workout</router-link></span>
    <ul class="nav__links" v-if="screenWidth > 700">
      <li><a href="">Home</a></li>
      <li><a href="">Cardio</a></li>
      <li><router-link to="/tariffs">Pricing</router-link></li>
      <li><a href="">About us</a></li>
    </ul>
    <i v-else :class="menuIcon" @click="showMenu()"></i>

    <ul class="nav__links__mobile" v-if="screenWidth <= 700 && mobileMenu">
      <li><a href="">Exercises</a></li>
      <li><a href="">Cardio</a></li>
      <li><router-link to="/tariffs">Prices</router-link></li>
      <li><a href="">About us</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: screen.width,
      mobileMenu: false,
      menuIcon: "fa-solid fa-bars",
    };
  },
  mounted() {
    this.onScreenResize();
  },
  methods: {
    onScreenResize() {
      window.addEventListener("resize", () => {
        this.screenWidth = screen.width;
      });
    },
    showMenu() {
      this.mobileMenu = !this.mobileMenu;
      this.menuIcon = this.menuIcon.includes("bars")
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars";
    },
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  .nav__logo {
    font-size: 1.8em;
    text-transform: uppercase;
  }
  .nav__links {
    list-style: none;
    text-transform: uppercase;

    > li {
      display: inline-block;

      &:not(:last-of-type) {
        margin-right: 27px;
      }
    }
  }
}
.nav__links__mobile {
  list-style: none;
  text-align: center;
  width: 100%;

  li {
    margin-top: 25px;
  }
}
</style>
