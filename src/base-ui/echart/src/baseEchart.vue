<template>
  <div class="base-echart">
    <div ref="echartRef" :style="style"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, watchEffect } from "vue";
import useEchart from "../hooks/useEchart";
export default defineComponent({
  name: "",
  props: {
    style: {
      type: Object,
      required: true,
    },
    option: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const echartRef = ref<HTMLElement>();
    onMounted(() => {
      const { setOption } = useEchart(echartRef.value!);
      watchEffect(() => {
        setOption(props.option);
      });
    });
    return { echartRef };
  },
});
</script>
<style scoped></style>
