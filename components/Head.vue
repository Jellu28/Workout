<template>
  <div class="head">
    <div class="promotion">
      <span>NEW</span>
      More powerfull workout...
    </div>
    <div class="lead">
      <div>
        <h1>
          Cardio <br />
          Exercise
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="lead__buttons">
          <button>Launch now</button>
          <button>Learn more</button>
        </div>
      </div>

      <div>
        <img src="/img/lead.png" alt="Workout" />
        <div class="lead__info">
          <div class="lead__info__time">
            <span>{{ showTime }}</span>
            TIME
          </div>
          <div class="lead__info__cl">
            <span>165</span>
            CALORIES
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTime: "39:00",
      timerCount: 38 * 60,
    };
  },
  watch: {
    timerCount: {
      handler() {
        setTimeout(() => {
          if (this.timerCount <= 0) return;

          this.timerCount--;
          const minutes = Math.ceil(this.timerCount / 60);
          const seconds = this.timerCount - minutes * 60 + 60;
          let txtSeconds = 0;
          if (seconds == 60) txtSeconds = "00";
          else if (seconds < 10 && seconds > 0) txtSeconds = "0" + seconds;
          else txtSeconds = seconds;

          this.showTime =
            (txtSeconds == "00" ? minutes + 1 : minutes) + ":" + txtSeconds;
        }, 1000);
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.head {
  margin-top: 70px;

  @media (min-width: 1024px) {
    overflow: hidden;
    height: 700px;
    width: 105%;
  }
}

.promotion {
  background: #191919;
  border-radius: 200px;
  padding: 10px 5px;
  color: "d1d1d1";

  animation: pulse infinite ease-in-out 1.5s alternate;

  @media (min-width: 450px) {
    width: 350px;
  }

  @media (max-width: 450px) {
    width: 270px;
    font-size: 0.85em;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }

  span {
    background: #25ab75;
    border-radius: 200px;
    padding: 5px 10px;
    margin-right: 10px;
    font-weight: 600;
  }
}
.lead {
  margin-top: 20px;
  display: flex;
  position: relative;

  h1 {
    letter-spacing: -2px;

    @media (min-width: 1500px) {
      font-size: 12em;
      line-height: 170px;
    }

    @media (max-width: 1500px) and (min-width: 1300px) {
      font-size: 11em;
      line-height: 160px;
    }

    @media (max-width: 1300px) and (min-width: 650px) {
      font-size: 8.5em;
      line-height: 150px;
    }
    @media (max-width: 650px) and (min-width: 450px) {
      font-size: 5.5em;
      line-height: 110px;
    }
    @media (max-width: 450px) {
      font-size: 4em;
      line-height: 90px;
    }
  }
  p {
    color: #868686;
    margin: 20px 0;

    @media (min-width: 650px) {
      width: 600px;
    }
  }
  .lead__buttons > button {
    background: #25ab75;
    padding: 20px;
    width: 160px;
    font-weight: 600;
    font-size: 1.02em;
    color: #fff;
    border: 0;
    cursor: pointer;
    border-radius: 10px;
    margin-top: 30px;
    transition: transform 500ms ease;

    @media (max-width: 390px) {
      width: 100%;
    }

    &:first-of-type {
      margin-right: 35px;
    }

    &:last-of-type {
      background: #191919;
    }

    &:hover {
      transform: translateX(10px);
    }
  }
  > div:last-of-type {
    @media (max-width: 1024px) {
      display: none;
    }
    img {
      position: relative;

      @media (min-width: 1500px) {
        bottom: 255px;
        right: 270px;
      }

      @media (max-width: 1500px) and (min-width: 1300px) {
        transform: scale(0.7);
        bottom: 315px;
        right: 300px;
      }
      @media (max-width: 1300px) {
        transform: scale(0.7);
        bottom: 330px;
        right: 350px;
      }
    }
    .lead__info {
      position: absolute;
      top: 0;
      right: 30px;

      @mixin info-block {
        background: #191919;
        border-radius: 20px;
        padding: 20px 30px;
        width: 110px;
        font-size: 0.7em;
        margin-bottom: 25px;

        span {
          font-weight: 600;
          font-size: 3em;
          display: block;
        }
      }
      .lead__info__time {
        @include info-block;

        span {
          color: yellow;
        }
      }
      .lead__info__cl {
        @include info-block;

        span {
          color: #fb1351;
        }
      }
    }
  }
}
</style>
