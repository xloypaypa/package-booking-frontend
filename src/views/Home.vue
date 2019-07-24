<template>
  <div id="home" class="home">
    <h1>欢迎使用候鸟驿站</h1>
    <a-input placeholder="请输入运单号……"/>
    <div>
      <a-button :size="size" style="border-color: red; color: red;" shape="circle">
        <small><b>搜索</b></small>
      </a-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data: function () {
    return {
      size: 'large'
    }
  }
}
</script>

<style scoped>
  #home {
    text-align: center;
  }
</style>
