<template>
  <div class="dashboard-editior-container">
    <!--引入自定义模块-->
    <github-corner class="github-corner" />
    <!--引入头部统计数据列表-->
    <panel-group @handleSetLineChartData="handleSetLineChartData" />
    <el-row>
      <line-chart :chart-data="lineChartData" />
    </el-row>
</template>
