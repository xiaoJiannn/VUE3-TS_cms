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
    // lineData: {
    //   type: Array,
    //   required: true,
    // },
    xValue: {
      type: Array,
    },
    value: {
      type: Array,
    },
  },
  components: {
    baseEchart,
  },
  name: "",
  setup(props) {
    console.log(props.xValue);

    const option = computed(() => {
      return {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: props.xValue,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: props.value,
            type: "line",
            areaStyle: {},
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
