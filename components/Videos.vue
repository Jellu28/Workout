<template>
  <div class="videos">
    <div class="video" @click="videos[0] = !videos[0]">
      <p class="number">01</p>
      <div>
        <h4>Exercises at home</h4>
        <p>15 videos</p>
      </div>
      <div><i class="fa-solid fa-arrow-right"></i></div>

      <div class="video__open" v-if="videos[0]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          architecto temporibus libero hic voluptatem iure molestiae, qui
          facilis incidunt dolorem.
        </p>
      </div>
    </div>
    <div class="video" @click="videos[1] = !videos[1]">
      <p class="number">02</p>
      <div>
        <h4>Stay in shape</h4>
        <p>19 videos</p>
      </div>
      <div><i class="fa-solid fa-arrow-right"></i></div>

      <div class="video__open" v-if="videos[1]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          architecto temporibus libero hic voluptatem iure molestiae, qui
          facilis incidunt dolorem.
        </p>
      </div>
    </div>
    <div class="video" @click="videos[2] = !videos[2]">
      <p class="number">03</p>
      <div>
        <h4>Intensive mode</h4>
        <p>9 videos</p>
      </div>
      <div><i class="fa-solid fa-arrow-right"></i></div>
      <div class="video__open" v-if="videos[2]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          architecto temporibus libero hic voluptatem iure molestiae, qui
          facilis incidunt dolorem.
        </p>
      </div>
    </div>
    <div class="video" @click="videos[3] = !videos[3]">
      <p class="number">04</p>
      <div>
        <h4>Simple exercises</h4>
        <p>37 videos</p>
      </div>
      <div><i class="fa-solid fa-arrow-right"></i></div>
      <div class="video__open" v-if="videos[3]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          architecto temporibus libero hic voluptatem iure molestiae, qui
          facilis incidunt dolorem.
        </p>
      </div>
    </div>
    <div class="video" @click="videos[4] = !videos[4]">
      <p class="number">05</p>
      <div>
        <h4>Calories lost</h4>
        <p>22 videos</p>
      </div>
      <div><i class="fa-solid fa-arrow-right"></i></div>
      <div class="video__open" v-if="videos[4]">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          architecto temporibus libero hic voluptatem iure molestiae, qui
          facilis incidunt dolorem.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videos: [false, false, false, false, false],
    };
  },
};
</script>
<style lang="scss" scoped>
.videos {
  margin-top: 250px;

  @media (max-width: 768px) {
    margin-top: -80px;
  }
  @media (max-width: 1440px) {
    margin-top: 200px;
  }
  @media (min-width: 1440px) {
    margin-top: 200px;
  }
  @media (max-width: 1360px) {
    margin-top: 100px;
  }
}
.video {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0px;
  cursor: pointer;
  transition: all 500ms ease;
  flex-wrap: wrap;

  &:not(:last-of-type) {
    border-bottom: 0.5px solid #666;
  }

  &:hover {
    background: #1d1d1d;

    i {
      transform: rotate(90deg);
    }
  }

  .video__open {
    width: 100%;
    margin: 30px 50px;
    margin-bottom: -10px;
  }

  .number {
    font-size: 25px;
    color: #575757;
    font-weight: 600;

    @media (max-width: 425px) {
      display: none;
    }
  }
  h4 {
    color: #fff;
    font-weight: 400;

    @media (min-width: 768px) {
      font-size: 2.5em;
      width: 450px;
    }
    @media (max-width: 768px) {
      font-size: 1.5em;
      width: 250px;
    }
  }
  p {
    font-size: 14px;
    color: #ababab;
    margin-top: 5px;
  }
  i {
    font-size: 20px;
    margin-right: 30px;
    transition: all 500ms ease;

    @media (max-width: 375px) {
      margin-top: 20px;
    }
  }
}
</style>
