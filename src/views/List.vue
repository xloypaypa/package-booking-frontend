<template>
  <div>
    <h1>候鸟驿站</h1>
    <PackageTable/>
  </div>
</template>

<script>
  import PackageTable from "../components/list/PackageTable";

  export default {
    name: "List",
    components: {
      PackageTable
    }
  }
</script>

<style scoped>

</style>
