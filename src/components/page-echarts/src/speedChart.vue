<template>
  <div class="rose">
    <base-echart :option="option" :style="Estyle"></base-echart>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import baseEchart from "@/base-ui/echart";
export default defineComponent({
  components: {
    baseEchart,
  },
  name: "",
  setup(props) {
    const option = computed(() => {
      return {
        series: [
          {
            type: "gauge",
            progress: {
              show: true,
              width: 18,
            },
            axisLine: {
              lineStyle: {
                width: 18,
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              length: 15,
              lineStyle: {
                width: 2,
                color: "#999",
              },
            },
            axisLabel: {
              distance: 25,
              color: "#999",
              fontSize: 20,
            },
            anchor: {
              show: true,
              showAbove: true,
              size: 25,
              itemStyle: {
                borderWidth: 10,
              },
            },
            title: {
              show: false,
            },
            detail: {
              valueAnimation: true,
              fontSize: 80,
              offsetCenter: [0, "70%"],
            },
            data: [
              {
                value: 70,
              },
            ],
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
