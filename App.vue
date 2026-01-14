<template>
  <div class="wrapper">
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
$additionColor: #25ab75;
$mainColor: #000;
$textColor: #fff;
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto:wght@100..900&display=swap");
::selection {
  background: $additionColor;
}

* {
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
  background: $mainColor;
  color: $textColor;
  font-weight: 400;
  font-size: 1em;
}
a {
  color: #ababab;
  text-decoration: none;

  &:hover {
    color: #c7c7c7;
  }
}
.wrapper {
  overflow: hidden;
}
.container {
  @media (min-width: 1500px) {
    width: 1300px;
    margin: 0 auto;
  }
  @media (max-width: 1500px) and (min-width: 900px) {
    width: 80%;
    margin: 0 10%;
  }
  @media (max-width: 900px) {
    width: 90%;
    margin: 0 5%;
  }
}
</style>
