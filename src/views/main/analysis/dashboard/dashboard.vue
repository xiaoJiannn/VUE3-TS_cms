<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <wj-card title="分类商品数量(pie)">
          <pie-echart :pie-data="categoryGoods"></pie-echart>
        </wj-card>
      </el-col>
      <el-col :span="10">
        <wj-card title="不同城市商品数量">
          <speed-chart></speed-chart>
        </wj-card>
      </el-col>
      <el-col :span="7">
        <wj-card title="分类商品数量(rose)">
          <rose-chart :rose-data="categoryGoods"></rose-chart>
        </wj-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="bottom-row">
      <el-col :span="12">
        <wj-card title="分类商品数量">
          <line-chart v-bind="categoryGoodsSale"></line-chart>
        </wj-card>
      </el-col>
      <el-col :span="12">
        <wj-card title="不同城市商品数量">
          <line-chart2></line-chart2>
        </wj-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import wjCard from "@/base-ui/card";
// import baseEchart from "@/base-ui/echart";
import pieEchart from "@/components/page-echarts/src/pieEchart.vue";
import roseChart from "@/components/page-echarts/src/roseChart.vue";
import lineChart from "@/components/page-echarts/src/lineChart.vue";
import lineChart2 from "@/components/page-echarts/src/lineChart2.vue";
import speedChart from "@/components/page-echarts/src/speedChart.vue";
export default defineComponent({
  name: "dashboard",
  components: {
    wjCard,
    pieEchart,
    roseChart,
    lineChart,
    lineChart2,
    speedChart,
  },
  setup() {
    const store = useStore();
    const categoryGoods = computed(() => {
      return store.state.dashBoard.categoryGoodsCount.map((item: any) => {
        return {
          name: item.name,
          value: item.goodsCount,
        };
      });
    });

    const categoryGoodsSale = computed(() => {
      const xValue: string[] = [];
      const value: any[] = [];
      const categoryGoodsSale = store.state.dashBoard.categoryGoodsSale;
      for (const item of categoryGoodsSale) {
        xValue.push(item.name);
        value.push(item.goodsSale);
      }
      return {
        xValue,
        value,
      };
    });
    return { categoryGoods, categoryGoodsSale };
  },
});
</script>

<style scoped>
.bottom-row {
  margin-top: 10px;
}
</style>
