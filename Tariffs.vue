<template>
  <div>
    <h3 class="pricing">Pricing</h3>
    <div class="tariffs">
      <div>
        <h4>For Free</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          numquam ratione omnis suscipit dolore quasi illo atque libero nemo
          alias.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit.</li>
        </ul>
        <span><a href="#">More</a><i class="fa-solid fa-arrow-right"></i></span>
      </div>
      <div>
        <h4>PRO+</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
          numquam ratione omnis suscipit dolore quasi illo atque libero nemo
          alias.
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit.</li>
        </ul>
        <button>Join now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.pricing {
  margin: 70px 0;
  font-size: 3em;
  font-weight: 400;
  text-align: center;
  @media (max-width: 550px) {
    font-size: 2em;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
.tariffs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 150px;

  > div {
    width: 400px;
    background: #232532;
    color: #a8a7a8;
    padding: 50px 5%;
    border-radius: 10px;
    @media (max-width: 1320px) {
      width: 60%;
      &:first-of-type {
        margin-bottom: 30px;
      }

      &:last-of-type {
        margin-bottom: -60px;
      }
    }

    &:last-of-type {
      background: #323443;
      color: #adacae;
    }
    h4 {
      color: #fff;
      text-align: center;
      font-size: 2em;
      margin-bottom: 30px;
    }
    ul {
      margin: 20px 30px;
    }
    span {
      a {
        color: #0070c9;
        font-size: 1.2em;
        margin-right: 10px;
      }
    }
    button {
      background: #0070c9;
      width: 150px;
      padding: 10px 20px;
      border: 0;
      border-radius: 10px;
      color: #fff;
      transition: background 500ms ease;
      cursor: pointer;
      font-size: 1em;

      &:hover {
        background: #2a90e3;
      }
    }
  }
}
</style>
