<template>
  <div id="package-details">
    <h1>包裹详情</h1>
    <a-row class="package-details">
      <a-col :span="4">
        <h3>运单编号：</h3>
      </a-col>
      <a-col :span="20">
        <a-input class="package-details"/>
      </a-col>
    </a-row>
    <a-row class="package-details">
      <a-col :span="4">
        <h3>预约日期：</h3>
      </a-col>
      <a-col :span="10">
        <a-date-picker style="width: 100%"/>
      </a-col>
      <a-col :span="10" style="padding-left: 10px">
        <a-time-picker style="width: 100%" format="HH:mm" />
      </a-col>
    </a-row>
    <a-row class="package-details">
      <a-col :offset="5" :span="6">
        <a-button style="width: 100%">预约取件</a-button>
      </a-col>
      <a-col :offset="2" :span="6">
        <a-button style="width: 100%">取消</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import ARow from "ant-design-vue/es/grid/Row";
  import ACol from "ant-design-vue/es/grid/Col";

  export default {
    name: "NewPackage",
    components: {ACol, ARow},
  }
</script>

<style scoped>
  #package-details {
    text-align: center;
    padding: 10px;
    max-width: 600px;
    margin: auto;
  }

  #package-details >>> .package-details {
    margin-bottom: 20px;
  }
</style>
