import * as echart from "echarts";

export default function (el: HTMLElement) {
  const echartInstance = echart.init(el);
  const setOption = (option: echart.EChartsOption) => {
    return echartInstance.setOption(option);
  };
  window.addEventListener("resize", () => {
    echartInstance.resize();
    console.log(111);
  });
  return {
    echartInstance,
    setOption,
  };
}
