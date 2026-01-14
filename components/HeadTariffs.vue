<template>
  <div class="head">
    <div class="lead">
      <div>
        <h1>
          Cardio <br />
          Exercise
        </h1>
        <p>
          Starting with warm-ups, progressing gradually, and including
          cool-downs are key for safety and effectiveness, with options ranging
          from short bursts to longer sessions.
        </p>
        <button>Join now</button>
        <img src="/img/companies.png" alt="companies" />
      </div>

      <div>
        <img src="/img/lead2.png" alt="Workout" />
        <div class="lead__info">
          <div class="lead__info__km">
            <i class="fa-solid fa-person-running"></i>
            <span>4,95</span>
            km
          </div>
          <div class="lead__info__training">
            <i class="fa-solid fa-play"></i>
            <span>350+</span>
            Trainings
          </div>
          <div class="lead__info__videos">
            <span>500+</span>
            Free Workouts
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.head {
  margin-top: 70px;

  @media (min-width: 1024px) {
    overflow: hidden;
    height: 800px;
    width: 100%;
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

    @media (min-width: 1024px) {
      margin-right: 60px;
    }
    @media (min-width: 1440px) {
      width: 700px;
    }
    @media (max-width: 1440px) {
      width: 500px;
    }
    @media (max-width: 550px) {
      width: 450px;
      margin-right: -10px;
    }
    @media (max-width: 475px) {
      width: 400px;
      margin-right: -10px;
    }
    @media (max-width: 425px) {
      width: 300px;
    }
  }
  button {
    background: #e6533c;
    letter-spacing: 1px;
    width: 200px;
    text-transform: uppercase;
    padding: 20px;
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

    &:hover {
      transform: translateX(10px);
    }
  }
  > div:first-of-type img {
    display: block;
    max-width: 100%;
    margin-top: 70px;
    @media (max-width: 540px) and(min-width:440px) {
      width: 420px;
    }
  }

  > div:last-of-type {
    @media (max-width: 1024px) {
      display: none;
    }
    img {
      position: relative;

      @media (min-width: 1500px) {
        bottom: -40px;
        right: 80px;
      }

      @media (max-width: 1500px) and (min-width: 1300px) {
        transform: scale(0.85);
        bottom: 40px;
        right: 150px;
      }
      @media (max-width: 1300px) {
        transform: scale(0.5);
        bottom: 100px;
        right: 200px;
      }
    }
    .lead__info {
      position: absolute;
      top: 0;
      right: 0px;

      i {
        width: 14px;
        height: 14px;
        padding: 10px;
        color: #fff;
        font-size: 1.3em;
        text-align: center;
        border-radius: 50%;
        line-height: 14px;
      }

      @mixin info-block {
        border-radius: 20px;
        padding: 20px 30px;
        width: 110px;
        font-size: 0.7em;
        margin-bottom: 25px;
        position: relative;

        span {
          font-weight: 600;
          color: #fff;
        }
      }
      .lead__info__km {
        @include info-block;
        background: #ef8964;
        color: #efcaba;
        right: 80px;
        top: 0px;
        @media (max-width: 1440px) and (min-width: 1300px) {
          transform: scale(0.7);
          padding: 5px 10px;
          right: 690px;
          top: 445px;
        }
        @media (max-width: 1300px) and (min-width: 1200px) {
          transform: scale(0.7);
          padding: 5px 20px;
          top: 425px;
          right: 600px;
        }
        @media (max-width: 1200px) and (min-width: 1024px) {
          transform: scale(0.7);
          padding: 6px 10px;
          right: 480px;
          top: 425px;
        }

        i {
          display: block;
          background: #efa082;
          font-size: 17px;
        }

        span {
          font-size: 2.7em;
          margin-right: 4px;
        }
      }
      .lead__info__training {
        @include info-block;
        background: #303030;
        color: #acaba8;

        @media (max-width: 1440px) and (min-width: 1300px) {
          transform: scale(0.7);
          padding: 25px 20px;
          right: 580px;
          top: 328px;
        }

        @media (max-width: 1300px) and (min-width: 1200px) {
          transform: scale(0.7);
          padding: 16px 20px;
          right: 200px;
          top: 185px;
        }
        @media (max-width: 1200px) and (min-width: 1024px) {
          transform: scale(0.7);
          padding: 26px 20px;
          right: 380px;
          top: 305px;
        }
        right: 500px;
        top: 270px;

        span {
          font-size: 1.7em;
        }

        i {
          background: #ef8963;
          float: left;
          position: relative;
          top: 8px;
          right: 10px;
        }
      }
      .lead__info__videos {
        @include info-block;
        background-color: #7a29dc;
        color: #c6a8e4;
        right: 80px;
        top: 250px;
        @media (max-width: 1440px) and (min-width: 1300px) {
          transform: scale(0.7);
          padding: 16px 12px;
          right: 450px;
          top: 210px;
        }

        @media (max-width: 1300px) and (min-width: 1200px) {
          transform: scale(0.6);
          padding: 14px 12px;
          right: 425px;
          top: 195px;
        }
        @media (max-width: 1300px) and (min-width: 1200px) {
          transform: scale(0.7);
          padding: 15px 20px;
          top: 208px;
          right: 460px;
        }
        @media (max-width: 1200px) and (min-width: 1024px) {
          transform: scale(0.7);
          padding: 16px 15px;
          right: 260px;
          top: 187px;
        }

        span {
          font-size: 2.5em;
          display: block;
        }
      }
    }
  }
}
</style>
