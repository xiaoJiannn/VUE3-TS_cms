<template>
  <div class="pie">
    <base-echart :option="option" :style="Estyle"></base-echart>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import baseEchart from "@/base-ui/echart";
// import { IChart } from "../types";
export default defineComponent({
  props: {
    pieData: {
      type: Array,
      required: true,
    },
  },
  components: {
    baseEchart,
  },
  name: "",
  setup(props) {
    const option = computed(() => {
      return {
        title: {
          // text: "pie",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "horizontal",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: props.pieData,

            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
    });

    const Estyle = {
      height: "360px",
      width: "100%",
    };
    return {
      option,
      Estyle,
    };
  },
});
</script>
<style scoped></style>
