<template>
  <div>
    <div class="heading">
      <h2>Home workout videos</h2>
      <a href="#">Check for more</a>
    </div>
    <div class="courses">
      <div class="courses__item" v-for="el in courses" :key="el.title">
        <img :src="'/img/' + el.img" :alt="el.title" />
        <h2>{{ el.title }}</h2>
        <p>{{ el.cl }}</p>
        <div class="time">{{ el.time }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  created() {
    this.courses = this.data;
  },
  data() {
    return {
      courses: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    margin-top: 70px;
  }

  h2 {
    font-size: 2.1em;
  }
  a {
    font-size: 0.8em;
    text-transform: uppercase;
  }
}
.courses {
  margin-bottom: 150px;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 800px) {
    justify-content: space-between;
  }
  @media (max-width: 800px) {
    justify-content: center;
    flex-direction: column;
  }

  .courses__item {
    margin-top: 70px;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    @media (min-width: 800px) {
      justify-content: space-between;
      margin-top: 20px;
    }

    @media (max-width: 800px) and (min-width: 440px) {
      width: 373px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: -50px;
    }
    @media (max-width: 440px) {
      width: 100%;
      margin-top: 10px;
    }

    .time {
      position: absolute;
      right: 0;
      bottom: 155px;
      background: #000;
      padding: 7px 10px;
      border-top-left-radius: 10px;
      font-weight: 600;
    }
    h2 {
      font-size: 2.2em;
      margin-left: 10px;
      position: relative;
      bottom: 135px;
    }
    p {
      color: #ababab;
      position: relative;
      bottom: 135px;
      margin-left: 10px;
      font-size: 0.9em;
    }
    img {
      opacity: 0.8;
      transition: all 500ms ease;
      border-radius: 10px;
      width: 350px;

      @media (max-width: 440px) {
        width: 100%;
      }

      &:hover {
        opacity: 1;
        transform: scale(1.1);
      }
    }
  }
}
</style>
