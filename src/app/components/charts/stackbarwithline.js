import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { graphic } from "echarts";
import { useTheme } from "next-themes";



export default function StackBarwithLine({ }) {

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const stackbarwithline = {
    tooltip: { trigger: "axis" },
    legend: {
      show: true,
      bottom: 10,
      left: 20,
      itemWidth: 8,
      itemHeight: 8,
      borderRadius: [4, 4, 0, 0],
      textStyle: {
        color: "#6C768B",
        fontSize: 12,
      },
    },
    grid: {
      left: "6%",
      right: "6%",
      bottom: "15%",
      top: 25,
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        name: "Team", // Add the common title for the x-axis here
        nameLocation: "center", // Set the position of the x-axis name to the center
        nameGap: 35, // Adjust the gap between the x-axis name and the axis
        nameTextStyle: {
          color: "#6C768B", // Set title text color
          fontSize: 12, // Set title font size
        },
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          color: "#363A44",
          fontSize: 10,
          lineHeight: 16
        },
        data: ["Jan", "Frb", "Mar", "Apr", "May"],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Count of Tickets",
        nameLocation: "center", // Set the position of the y-axis name to the center
        nameGap: 50, // Adjust the gap between the y-axis name and the axis
        nameTextStyle: {
          color: "#6C768B", // Set title text color
          fontSize: 12, // Set title font size
        },
        min: 0,
        max: 5000,
        interval: 500,
        axisLabel: {
          color:"#6C768B",
          fontSize: 10,
          formatter: "{value}$",
        },
        axisLine: {
          show: true,
          lineStyle: "#EAEDF3",
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color:"#EAEDF3",
          },
        },
      },
      {
        type: "value",
        name: "Value ( in %)",
        nameLocation: "center", // Set the position of the y-axis name to the center
        nameGap: 50, // Adjust the gap between the y-axis name and the axis
        nameTextStyle: {
          color: "#6C768B", // Set title text color
          fontSize: 12, // Set title font size
        },
        min: 0,
        max: 100,
        interval: 10,
        axisLabel: {
          color: "#6C768B",
          fontSize: 10,
          formatter: "{value}%",
        },
        axisLine: {
          show: true,
          lineStyle: "#EAEDF3",
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: "#EAEDF3",
          },
        },
      },
    ],
    series: [
      {
        name: "Within SLA",
        type: "bar",
        barWidth: 70,
        stack: "Ad",
        itemStyle: {
          color: "#256D85",
        },
        label: {
          show: true,
          color:'#fff'
        },
        emphasis: { focus: "series" },
        data: [2400, 3200, 2400, 3300,2300],
      },

      {
        name: "Outside SLA",
        type: "bar",
        stack: "Ad",
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          color:"#2C9999",
        },
        label: {
          show: true,
        },
        emphasis: { focus: "series" },
        data: [1500, 1000, 1500, 1000, 1500],
      },

      {
        name: "Within SLA%",
        type: "line",
        yAxisIndex: 1,
        smooth: false,
        symbolSize: 10,
        label:{
            show: true,
            formatter: '{c} %',
            color:'#24262D',
            fontSize:10,
            backgroundColor: "#EEF8F4",
            padding: [4, 4, 4, 4]
        },
        itemStyle: { color: "#363A44" },
        data: [40, 25, 40, 25, 40],
      },
    ],
  };

    return (
        <ReactEcharts
            echarts={echarts}
            option={stackbarwithline}
            style={{ width: '100%', height: '100%' }}
        />
    )
};