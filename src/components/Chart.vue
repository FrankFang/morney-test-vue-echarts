<template>
  <div class="wrapper" ref="wrapper"></div>
</template>

<script lang="ts">
  import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
  import echarts, {EChartOption, ECharts} from 'echarts';

  @Component
  export default class Chart extends Vue {
    @Prop() options?: EChartOption;
    chart?: ECharts;

    mounted() {
      if (this.options === undefined) {
        return console.error('options 为空');
      }
      this.chart = echarts.init(this.$refs.wrapper as HTMLDivElement);
      this.chart.setOption(this.options);
    }

    @Watch('options')
    onOptionsChange(newValue: EChartOption) {
      this.chart!.setOption(newValue);
    }
  }
</script>

<style scoped lang="scss">
  .wrapper {
    height: 400px;
  }
</style>
