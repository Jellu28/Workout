<template>
  <div>
    <div class="features">
      <div class="features__heading">
        <img src="/img/line.svg" alt="Workout" />
        <h3>Workout with your personal support</h3>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua consectetur
        adipiscing.
      </p>
      <button>Start</button>
    </div>
    <div class="pictures">
      <div>
        <img src="/img/features1.png" alt="picture relax" />
        <h4>Emily Smith</h4>
        <p>Trainer</p>
      </div>
      <div class="middle">
        <img src="/img/features2.png" alt="picture trainee" />
        <h4>Samantha Black</h4>
        <p>Trainer</p>
      </div>
      <div class="big">
        <img class="big-img" src="/img/features3.png" alt="picture run" />
        <h4>Alex Roland</h4>
        <p>Trainer</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.features {
  width: 1000px;
  background: #191919;
  position: relative;
  @media (min-width: 1380px) {
    margin-left: 300px;
    font-size: 2em;
  }
  @media (max-width: 1380px) and(min-width: 1100px) {
    margin-left: 330px;
    font-size: 1.3em;
  }
  @media (min-width: 1100px) {
    padding: 120px 5% 270px 15%;
  }
  @media (max-width: 1100px) {
    padding: 50px;
  }
  @media (max-width: 390px) {
    margin-top: -130px;
  }
  @media (min-width: 390px) {
    margin-top: -100px;
  }
  @media (min-width: 650px) {
    margin-top: -30px;
  }

  .features__heading {
    @media (min-width: 1100px) {
      position: absolute;
      top: -120px;
      left: -370px;
    }

    h3 {
      @media (min-width: 1100px) {
        position: relative;
        top: 80px;
      }
      @media (max-width: 1100px) {
        position: relative;
        top: -200px;
      }

      @media (min-width: 650px) {
        font-size: 2.5em;
        width: 550px;
        margin-left: 50px;
        margin-top: 0px;
      }

      @media (max-width: 650px) {
        font-size: 2.3em;
        width: 350px;
        margin-top: 30px;
        margin-left: 10px;
      }
      @media (max-width: 460px) {
        font-size: 1.5em;
        width: 250px;
        margin-left: 10px;
        margin-top: 90px;
      }
      @media (max-width: 390px) {
        font-size: 1.2em;
        width: 230px;
        margin-left: -10px;
        margin-top: 100px;
      }
    }
    img {
      @media (max-width: 1380px) {
        position: relative;
        top: 310px;
        width: 370px;
        margin-left: 80px;
      }
      @media (min-width: 1380px) {
        position: relative;
        top: 660px;
      }
      @media (max-width: 1100px) {
        position: relative;
        top: -10px;
        width: 330px;
        margin-left: 60px;
      }
      @media (max-width: 650px) {
        width: 250px;
        margin-left: 30px;
        margin-top: 50px;
      }
      @media (min-width: 650px) {
        margin-left: 70px;
        margin-top: 80px;
      }
      @media (max-width: 460px) {
        width: 150px;
        margin-left: 50px;
        margin-top: 20px;
      }
      @media (max-width: 390px) {
        width: 150px;
        margin-left: 0px;
        margin-top: 20px;
      }
    }
  }

  p {
    color: #ababab;
    line-height: 170%;
    @media (min-width: 1380px) {
      margin-left: 120px;
    }

    @media (max-width: 1380px) and (min-width: 1100px) {
      padding: 0 40px;
      width: 200px;
    }
    @media (max-width: 1100px) {
      position: relative;
      top: -50px;
      margin-left: 50px;
    }
    @media (min-width: 650px) {
      font-size: 1.3em;
      width: 500px;
      margin-top: -60px;
    }

    @media (max-width: 650px) {
      font-size: 1.3em;
      width: 350px;
      margin-left: 10px;
      margin-top: -70px;
    }
    @media (max-width: 460px) {
      font-size: 1em;
      width: 250px;
      margin-left: 10px;
      margin-top: -90px;
    }
    @media (max-width: 390px) {
      font-size: 0.8em;
      width: 230px;
      margin-left: -10px;
    }
  }

  button {
    @media (min-width: 1380px) {
      margin-left: 120px;
    }
    @media (max-width: 1380px) {
      margin-left: 40px;
    }
    @media (max-width: 1100px) {
      margin-left: 50px;
    }
    @media (max-width: 650px) {
      width: 100px;
      padding: 10px;
      margin-top: -30px;
      margin-left: 10px;
    }
    @media (max-width: 390px) {
      margin-left: -10px;
    }
    margin-left: 125px;
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
    text-transform: uppercase;
    letter-spacing: 1px;

    &:hover {
      transform: translateX(10px);
    }
  }
}
.pictures {
  margin-bottom: 130px;
  display: flex;
  @media (min-width: 1440px) {
    margin-left: -20px;
    margin-top: -40px;
  }
  @media (max-width: 1440px) and (min-width: 1380px) {
    margin-left: -20px;
  }
  @media (max-width: 1380px) and (min-width: 650px) {
    margin-left: 10px;
  }
  @media (max-width: 1370px) {
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 70px;
  }

  > div {
    @media (min-width: 1370px) {
      position: relative;
    }
    @media (max-width: 1100px) {
      margin-top: 70px;
    }
    @media (min-width: 1100px) {
      margin-top: 40px;
    }
    @media (max-width: 725px) {
      margin: auto;
      margin-top: 40px;
    }
    @media (max-width: 350px) {
      margin-left: -17px;
    }

    &.middle {
      top: 321px;
    }
    .big-img {
      @media (max-width: 1370px) {
        width: 330px;
      }
    }

    &.big {
      top: -193px;

      h4,
      p {
        margin-left: 20px;
        @media (max-width: 1370px) {
          margin-left: 0px;
        }
      }
    }
    h4 {
      margin-top: 10px;
      font-weight: 400;
      font-size: 1.2em;
      @media (max-width: 350px) {
        text-align: center;
      }
    }
    p {
      color: #ababab;
      @media (max-width: 350px) {
        text-align: center;
      }
    }
  }
}
</style>
