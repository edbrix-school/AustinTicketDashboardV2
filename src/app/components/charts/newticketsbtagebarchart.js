import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { graphic } from "echarts";
import { useTheme } from "next-themes";

export default function Newticketsbyagebarchart() {
    const stackbarwithline2 = {
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
          left: 30,
          right: 20,
          bottom: 65,
          top: 20,
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            name: "Ages", // Add the common title for the x-axis here
            nameLocation: "center", // Set the position of the x-axis name to the center
            nameGap: 40, // Adjust the gap between the x-axis name and the axis
            nameTextStyle: {
              color: "#84878D", // Set title text color
              fontSize: 12, // Set title font size
    
            },
            splitLine: { show: false },
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: {
              color:  "#20232E",
              fontSize: 10,
    
            },
            data: ["0 - 5", "6 - 10", "11 - 15", "16 - 20","21 - 25", "26 - 30", '30+'],
    
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "No. of Tickets",
            nameLocation: "center",
            nameGap: 40,
            nameTextStyle: {
              color: "#6C768B",
              fontSize: 12,
            },
            min: 0,
            max: 140,
            interval: 20,
            axisLabel: {
              color: "#6C768B",
              fontSize: 10,
              formatter: "{value}",
            },
            axisLine: {
              show: true,
              lineStyle: { color:  "#EAEDF3" },
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
            name: "Low",
            type: "bar",
            barWidth: 60,
            
            stack: "Ad",
            itemStyle: {
              color: "#2C9999",
            },
            label: {
              show: true,
              color: "#fff",
              formatter: "{c}",
            },
            emphasis: { focus: "series" },
            data: [48, 5, 20, 55,18,38,10],
          },
    
          {
            name: "Medium",
            type: "bar",
            stack: "Ad",
            itemStyle: {
              borderRadius: [0, 0, 0, 0],
              color: "#256D85",
            },
            label: {
              show: true,
              color: "#fff",
              formatter: "{c}",
            },
            emphasis: { focus: "series" },
            data: [22, 25, 15, 10,35,65,25],
          },
    
          {
            name: "High",
            type: "bar",
            stack: "Ad",
            itemStyle: {
              borderRadius: [4, 4, 0, 0],
              color: "#309DC1",
            },
            label: {
              show: true,
              color: "#fff",
              formatter: "{c}",
            },
            emphasis: { focus: "series" },
            data: [10, 40, 35, 23,10,20,28],
          },
        ],
      };
  return (
    <>
    <ReactEcharts
    echarts={echarts}
    option={stackbarwithline2}
    style={{ width: '100%', height: '100%' }}
    />
    </>
  )
}
