import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { graphic } from "echarts";
import { useTheme } from "next-themes";



export default function PerformanceTrend({ }) {

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const barwithline = {
  tooltip: { trigger: "axis" },
  legend: {
    show: true,
    bottom: "20",
    left: "20",
    itemWidth: 14,
    itemHeight: 14,
    borderRadius: [4, 4, 0, 0],
    textStyle: {
      color: "#6C768B",
      fontSize: 12,
    },
  },
  grid: {
    left: "4%",
    right: "5%",
    bottom: "15%",
    top: "10%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      name: "Months", // Add the common title for the x-axis here
      nameLocation: "center", // Set the position of the x-axis name to the center
      nameGap: 40, // Adjust the gap between the x-axis name and the axis
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
      data: ["Jan", "Feb", "Mar", "Apr","May"],
    },
    {
      
      splitLine: { show: false },
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: {
        color: "#363A44",
        fontSize: 13,
        backgroundColor: "#EEF8F4",
        padding: 5,
      },
      // data: ["PBT-$250", "PBT-$259", "PBT-$284", "PBT-$288"],
    },
  ],
  yAxis: [
    {
      type: "value",
      name: "Number of Days",
      nameLocation: "center", // Set the position of the y-axis name to the center
      nameGap: 25, // Adjust the gap between the y-axis name and the axis
      nameTextStyle: {
        color: "#6C768B", // Set title text color
        fontSize: 12, // Set title font size
      },
      min: 0,
      max: 16,
      interval: 2,
      axisLabel: {
        color: "#6C768B",
        fontSize: 10,
       
      },
      axisLine: {
        show: true,
        lineStyle:"#EAEDF3",
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "#EAEDF3",
        },
      },
    },
    {
      type: "value",
      name: "Average Ratings",
      nameLocation: "center", // Set the position of the y-axis name to the center
      nameGap: 30, // Adjust the gap between the y-axis name and the axis
      nameTextStyle: {
        color: "#6C768B", // Set title text color
        fontSize: 12, // Set title font size
      },
      min: 0,
      max: 5,
      interval: 1,
      axisLabel: {
        color: "#6C768B",
        fontSize: 10,
    
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
      name: "Avg Days to resolve Tickets",
      type: "bar",
      barWidth: 70,
      itemStyle: {
        color: "#4169E1",
        borderRadius: [4, 4, 0, 0],
      },
      label: {
        show: true,
      },

      emphasis: { focus: "series" },
      data: [6, 7, 5, 15,3],
     
    },

  

    {
      name: "Avg Ratings",
      type: "line",
      smooth: false,
      symbolSize: 10,
      label:{
          show: true,
          // formatter: '{@[n]} %',
          color:'#24262D',
          fontSize:10,
          backgroundColor: "#EEF8F4",
          padding: [4, 4, 4, 4]
      },
      itemStyle: { color: "#E04177" },
      data: [8, 9, 13, 5,8],
      areaStyle: {
              

        color: new echarts.graphic.LinearGradient(0, 0, 0, 0.5, [
          {
            offset: 0,
            color: 'rgba(224,65,119,0.6)'
          },
          {
            offset: 1,
            color: 'rgba(255, 255, 255,0)'
          }
        ])
      },
    },
  ],
};

  return (
      <ReactEcharts
          echarts={echarts}
          option={barwithline}
          style={{ width: '100%', height: '100%' }}
      />
  )
};