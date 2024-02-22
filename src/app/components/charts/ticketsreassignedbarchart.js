import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { graphic } from "echarts";
import { useTheme } from "next-themes";

export default function Ticketsreassignedbarchart() {
    const options = {
        tooltip: { trigger: "axis" },
        legend: {
          show: true,
          bottom: "bottom",
          left: "left",
          itemWidth: 8,
          itemHeight: 8,
          borderRadius: [4, 4, 0, 0],
          textStyle: {
            color: "#6C768B",
            fontSize: 12,
          },
        },
        grid: {
          left: "8%",
          right: "4%",
          bottom: "18%",
          top: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            name: "Team", // Add the common title for the x-axis here
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
    
            },
            data: ["Team1", "Team2", "Team3", "Team4", "Team5"],
    
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "Tickets Re-Routed",
            nameLocation: "center",
            nameGap: 40,
            nameTextStyle: {
              color: "#6C768B",
              fontSize: 12,
            },
            min: 0,
            max: 160,
            interval: 20,
            axisLabel: {
              color: "#6C768B",
              fontSize: 10,
              formatter: "{value} ",
            },
            axisLine: {
              show: true,
              lineStyle: { color: "#EAEDF3" },
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
            name: "Tickets Re-Routed",
            type: "bar",
            barWidth: 60,
    
            stack: "Ad",
            itemStyle: {
              color: "#009CDA",
              borderRadius: [5, 5, 0, 0]
            },
            label: {
              show: true,
              color: "#fff",
              formatter: "${c}",
            },
            emphasis: { focus: "series" },
            data: [120, 100, 142, 120, 130,]
          },
    
        ],
      };
  return (
   <>
   <ReactEcharts
   echarts={echarts}
   option={options}
   style={{ width: '100%', height: '100%' }}
   />
   </>
  )
}
