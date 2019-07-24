<template>
  <div id="package-list-filter">
    <a-button class="filter-button">ALL</a-button>
    <a-button class="filter-button">已预约</a-button>
    <a-button class="filter-button">未预约</a-button>
    <a-button class="filter-button">已取件</a-button>
    <a-button class="filter-button" shape="circle">+</a-button>
  </div>
</template>

<script>
  export default {
    name: "PackageListFilter"
  }
</script>

<style scoped>
  #package-list-filter {
    float: right;
    margin-top: 20px;
  }
  #package-list-filter >>> .filter-button {
    margin-left: 10px;
  }
</style>
