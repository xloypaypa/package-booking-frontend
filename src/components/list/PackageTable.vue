<template>
  <a-table bordered :dataSource="dataSource" :columns="columns">
  </a-table>
</template>

<script>
  export default {
    name: "PackageTable",
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
