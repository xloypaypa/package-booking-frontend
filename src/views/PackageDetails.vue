<template>
  <div id="package-details">
    <div>
      <h1>包裹详情</h1>
      <a-input class="package-details" addonBefore="运单号："/>
      <a-input class="package-details" addonBefore="收件人："/>
      <a-input class="package-details" addonBefore="电话："/>
      <a-input class="package-details" addonBefore="类型："/>
    </div>
    <div>
      <a-button>预约取件</a-button>
    </div>
  </div>
</template>

<script>
  import ARow from "ant-design-vue/es/grid/Row";
  import ACol from "ant-design-vue/es/grid/Col";

  export default {
    name: "NewPackage",
    components: {ACol, ARow}
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
