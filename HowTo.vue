<template>
  <div class="main">
    <h2>Don't you know how to start?</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, fugiat.</p>
    <div class="blocks" :style="'left:' + left + 'px'">
      <div class="item">
        <h3>Video exercises</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vero
          reprehenderit, similique quod ullam hic?
        </p>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
      <div class="item">
        <h3>Courses</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vero
          reprehenderit, similique quod ullam hic?
        </p>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
      <div class="item">
        <h3>Pricing</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vero
          reprehenderit, similique quod ullam hic?
        </p>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
      <div class="item">
        <h3>Heavy workout</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vero
          reprehenderit, similique quod ullam hic?
        </p>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
      <div class="item">
        <h3>Feedback</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vero
          reprehenderit, similique quod ullam hic?
        </p>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
      <div class="item">
        <h3>Easy exercises</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vero
          reprehenderit, similique quod ullam hic?
        </p>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
      <div class="item">
        <h3>Worldwide</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vero
          reprehenderit, similique quod ullam hic?
        </p>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
    <div class="arrows">
      <img
        src="/img/arrow-next.svg"
        v-if="this.left != 0"
        @click="moveBlock('prev')"
        alt="arrow"
      />
      <img
        src="/img/arrow-next.svg"
        v-if="this.left >= -680"
        @click="moveBlock('next')"
        class="next"
        alt="arrow"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      left: 0,
    };
  },
  methods: {
    moveBlock(value) {
      let add = 320;
      if (value == "next" && this.left >= -680) this.left -= add;
      else if (value == "prev" && this.left != 0) this.left += add;
    },
  },
};
</script>

<style lang="scss">
h2 {
  margin-top: 80px;
  font-size: 2.4em;
}
p {
  color: #9b9a97;
  margin-top: 15px;
}
.main {
  overflow: hidden;
  @media (max-width: 1500px) {
    margin-top: -150px;
  }
  @media (max-width: 1500px) and (min-width: 1300px) {
    margin-top: -150px;
  }

  @media (max-width: 1024px) {
    margin-top: 0px;
  }
  @media (max-width: 600px) {
    margin-left: 15px;
  }
  @media (max-width: 360px) {
    margin-left: 0px;
  }
  @media (min-width: 375px) {
    margin-left: 0px;
  }
  @media (min-width: 412px) {
    margin-left: 10px;
  }
  @media (min-width: 414px) {
    margin-left: 10px;
  }
  @media (min-width: 430px) {
    margin-left: 20px;
  }
}
.blocks {
  display: flex;
  margin-bottom: 50px;
  margin-top: 80px;
  width: 2500px;
  position: relative;
  transition: left 500ms ease;

  .item {
    background: #323443;
    padding: 30px 25px;
    border-radius: 12px;
    width: 250px;

    @media (max-width: 1500px) and (min-width: 1440px) {
      width: 230px;
    }
    @media (max-width: 1440px) and (min-width: 1228px) {
      width: 200px;
    }
    @media (max-width: 1228px) and (min-width: 1024px) {
      width: 180px;
    }
    @media (max-width: 1024px) and (min-width: 780px) {
      width: 160px;
    }
    @media (max-width: 780px) and (min-width: 560px) {
      width: 140px;
    }
    @media (max-width: 560px) {
      width: 115px;
    }

    &:not(:last-of-type) {
      margin-right: 25px;
    }
    p {
      color: #9b9a97;
    }
    i {
      float: right;
      font-size: 1.2em;
      position: relative;
      bottom: 60px;
      @media (max-width: 1500px) and (min-width: 1200px) {
        position: relative;
        top: 10px;
        right: 110px;
      }

      @media (max-width: 1200px) and (min-width: 1024px) {
        position: relative;
        top: 10px;
        right: 80px;
      }
      @media (max-width: 1024px) and (min-width: 780px) {
        position: relative;
        top: 10px;
        right: 80px;
      }
      @media (max-width: 780px) and (min-width: 600px) {
        position: relative;
        top: 20px;
        right: 60px;
      }

      @media (max-width: 600px) {
        position: relative;
        top: 10px;
        right: 70px;
      }
    }
  }
}
.arrows {
  margin-bottom: 150px;
  img {
    cursor: pointer;
    transition: transform 500ms ease;
    margin-right: 30px;

    &:hover {
      transform: scale(1.1);
    }

    &.next {
      transform: rotate(180deg);

      &:hover {
        transform: scale(1.1) rotate(180deg);
      }
    }
  }
}
</style>
