<template>
  <div class="rose">
    <base-echart :option="option" :style="Estyle"></base-echart>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import baseEchart from "@/base-ui/echart";
export default defineComponent({
  props: {
    roseData: {
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
        legend: {
          top: "bottom",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [50, 100],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: props.roseData,
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
