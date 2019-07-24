<template>
  <div>

    <a-row>
      <a-col :span="8"><h1 >候鸟驿站</h1></a-col>
      <a-col :span="8" :offset="8"><PackageListFilter /></a-col>
    </a-row>
    <a-table bordered :dataSource="dataSource" :columns="columns"/>
  </div>
</template>

<script>
  import PackageListFilter from "./PackageListFilter";
  import ACol from "ant-design-vue/es/grid/Col";
  import ARow from "ant-design-vue/es/grid/Row";

  export default {
    name: "PackageTable",
    components: {
      ARow,
      ACol,
      PackageListFilter
    },
    data() {
      return {

        columns: [{
          title: '运单号',
          dataIndex: 'id',
          width: '30%',
          scopedSlots: {customRender: 'name'},
        }, {
          title: '收件人',
          dataIndex: 'owner',
        }, {
          title: '电话',
          dataIndex: 'tel',
        }, {
          title: '状态',
          dataIndex: 'status',
        }, {
          title: '预约时间',
          dataIndex: 'dateTime',
        }, {
          title: '类型',
          dataIndex: 'type',
        }],
      }
    },
    computed: {
      dataSource: function () {
        return this.$store.getters.getPackages();
      }
    }
  }
</script>

<style scoped>

</style>
