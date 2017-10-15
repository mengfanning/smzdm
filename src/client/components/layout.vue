<template>
  <div class="layout">
    <header-component></header-component>
    <nav-component></nav-component>
    <div calss="container">
      <div class="row">
        <div class="col-sm-9">
          <solt name="body"></solt>
        </div>
        <div class="col-sm-3">
          <solt name="side"></solt>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import headerComponent from './header.vue'
import footerComponent from './footer.vue'
import navComponent from './nav.vue'

export default {
  components: {
    headerComponent,
    footerComponent,
    navComponent
  }
}

</script>

<style scoped>
.layout{
  background: #f5f5f5;
}
</style>
