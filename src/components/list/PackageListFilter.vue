<template>
  <div id="package-list-filter">
    <a-button v-on:click="filterAll" class="filter-button">ALL</a-button>
    <a-button v-on:click="filterNotDate" class="filter-button">已预约</a-button>
    <a-button v-on:click="filterDate" class="filter-button">未预约</a-button>
    <a-button v-on:click="filterGone" class="filter-button">已取件</a-button>
    <a-button class="filter-button" shape="circle">+</a-button>
  </div>
</template>

<script>
  import Constants from '../../Constants'

  export default {
    name: "PackageListFilter",
    methods: {
      filterAll: function () {
        this.$store.commit('updateFilter', function (packages) {
          return packages;
        })
      },
      filterNotDate: function () {
        this.$store.commit('updateFilter', function (packages) {
          return packages.filter(now => now.status === Constants.status.notDate);
        })
      },
      filterDate: function () {
        this.$store.commit('updateFilter', function (packages) {
          return packages.filter(now => now.status === Constants.status.date);
        })
      },
      filterGone: function () {
        this.$store.commit('updateFilter', function (packages) {
          return packages.filter(now => now.status === Constants.status.gone);
        })
      },
    }
  }
</script>

<style scoped>
  #package-list-filter {
    /*float: right;*/
    margin-top: 20px;
  }
  #package-list-filter >>> .filter-button {
    margin-left: 10px;
  }
</style>
