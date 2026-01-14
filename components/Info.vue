<template>
  <div class="main__blocks">
    <div class="info__blocks">
      <div>
        <h2>Trainings at home</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minima,
          expedita error accusantium nesciunt repudiandae placeat nostrum, ut
          eligendi Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Saepe minima, expedita error accusantium nesciunt repudiandae placeat
          nostrum, ut eligendi quod explicabo repellat illum est deserunt!lore
        </p>
        <span><a href="#">More</a><i class="fa-solid fa-arrow-right"></i></span>
      </div>
      <div><img src="/img/info-1.png" alt="Training" /></div>
    </div>

    <div class="info__blocks">
      <div><img src="/img/info-2.png" alt="Training" /></div>

      <div>
        <h2>Start today to <br />see the changes</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe minima,
          expedita error accusantium nesciunt repudiandae placeat nostrum, ut
          eligendi quod explicabo repellat illum est deserunt!
        </p>
        <span><a href="#">More</a><i class="fa-solid fa-arrow-right"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main__blocks {
  @media (max-width: 780px) and (min-width: 320px) {
    margin-top: -150px;
  }
  @media (max-width: 1250px) and (min-width: 780px) {
    margin-top: -150px;
  }
  @media (max-width: 1450px) and (min-width: 1200px) {
    margin-top: -150px;
  }
}
.info__blocks {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;

  @media (max-width: 1450px) and (min-width: 1200px) {
    flex-direction: column;
    margin-left: -70px;
  }
  @media (max-width: 1250px) and (min-width: 780px) {
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 780px) and (min-width: 320px) {
    flex-direction: column;
    width: 100%;
  }

  > div {
    width: 50%;
    @media (max-width: 1250px) and (min-width: 780px) {
      flex-direction: column;
      width: 500px;
    }

    h2 {
      margin-bottom: 30px;
      font-size: 2.2em;
      @media (max-width: 780px) and (min-width: 310px) {
        font-size: 1em;
        margin-top: 0px;
        margin-bottom: 10px;
      }
    }
    img {
      max-width: 100%;
      @media (max-width: 1500px) and (min-width: 1024px) {
        flex-direction: column;
        width: 600px;
      }
      @media (max-width: 1500px) and (min-width: 1450px) {
        margin-left: -20px;
      }
      @media (max-width: 1024px) and (min-width: 780px) {
        flex-direction: column;
        width: 500px;
      }
    }
    p {
      color: #9b9a97;
      max-width: 550px;
      margin-bottom: 20px;
      @media (max-width: 780px) and (min-width: 320px) {
        font-size: 0.5em;
        margin-bottom: 10px;
      }
    }
    span {
      @media (max-width: 780px) and (min-width: 320px) {
        font-size: 0.7em;
      }
      a {
        color: #0070c9;
        font-size: 1.2em;
      }
      i {
        margin-left: 15px;
        font-size: 1.2em;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
