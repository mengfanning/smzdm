<template>
  <nav>
    <div class="container">
      <router-link to="/" exact>shouye</router-link>
      <div class="pull-right">
        <a href="#">denglu</a>
        <a href="#">zhuce</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav{
  color: #fff;
  background: #333;
}
.container{
  font-size: 0;
  & a {
    display: inline-block;
    padding: 10px 24px;
    color: #fff;
    font-size: 14px;
    text-align: center;

    &.active,
    &:hover,
    &:focus{
      background: #464646;
      text-decoration: none;
    }
  }
}
</style>
