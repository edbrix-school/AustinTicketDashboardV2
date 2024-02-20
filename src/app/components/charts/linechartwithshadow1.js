import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { graphic } from "echarts";
import { useTheme } from "next-themes";



export default function LineChartwithShadow1({ }) {

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;


    const LineChartwithShadow = {
      tooltip: { trigger: "axis" },
      legend: {
        show: true,
        bottom: "15",
        left: "10",
        icon: "roundRect",
        itemWidth: 10,
        itemHeight: 10,
      },
      grid: {
        left:'5%',
        right:'8%',
        top:'10%',
        bottom:'15%',
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          name: "Time Period", // Add the common title for the x-axis here
          nameLocation: "center", // Set the position of the x-axis name to the center
          nameGap: 40, // Adjust the gap between the x-axis name and the axis
          nameTextStyle: {
            color: currentTheme == "dark" ? "#818181" : "#888888", // Set title text color
            fontSize: 10, // Set title font size
          },
          splitLine: { show: false },
          axisTick: { show: false },
          axisLine: {
            show: true,
            lineStyle: {
              color: currentTheme == "dark" ? "#818181" : "#EDEEF1",
            },
          },
          axisLabel: {
            color: currentTheme == "dark" ? "#20232E" : "#6C768B",
            fontSize: 11,
            lineHeight: 14,
          },
          data: ["01-01-2023", "02-01-2023", "03-01-2023", "04-01-2023" , "05-01-2023","06-01-2023"],
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "No. of Tickets",
          nameLocation: "center", // Set the position of the y-axis name to the center
          nameGap: 40, // Adjust the gap between the y-axis name and the axis
          nameTextStyle: {
            color: currentTheme == "dark" ? "#818181" : "#84878D", // Set title text color
            fontSize: 10, // Set title font size
          },
          min: 0,
          max: 300,
          interval: 50,
          axisLabel: {
            color: currentTheme == "dark" ? "#818181" : "#6C768B",
            fontSize: 10,
            formatter: '{value}',
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: currentTheme == "dark" ? "#818181" : "#EDEEF1",
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              color: currentTheme == "dark" ? "#2A2C32" : "#F2EEEE",
            },
          },
        },
      
      ],
      series: [
          {
            name:'Assigned',
            data: [140, 105, 120, 110,105,100],
            type: 'line',
            smooth: false,
            symbol: 'circle',  // Set the symbol to circle
            symbolSize: 11,     // Adjust the symbol size
            itemStyle: {
              color: "#fff",
              borderWidth: 2,
              borderColor: "#4169E1",
            },
            lineStyle: {
              color: "#4169E1",
              shadowColor: "#4169E1",
              shadowBlur: 10
            },
            label: {
              show: true,
              color: currentTheme == 'dark' ? '#FFFFFF' : '#24262D',
              position: 'top',
              formatter: "${c}",
              // formatter: '{@[n]} %',
              backgroundColor: "#EEF8F4",
              padding: [4, 8, 4, 8],
            },
            areaStyle: {
              

              color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                {
                  offset: 0,
                  color: 'rgba(65,105,225,0.6)'
                },
                {
                  offset: 1,
                  color: 'rgba(255, 255, 255,0)'
                }
              ])
            },
          },
          {
            name:'Resolved',
            data: [80, 70, 55, 55,30,60],
            type: 'line',
            smooth: false,
            symbol: 'circle',  // Set the symbol to circle
            symbolSize: 11,     // Adjust the symbol size
            itemStyle: {
              color: "#fff",
              borderWidth: 2,
              borderColor: "#E04177",
            },
            lineStyle: {
              color: "#E04177",
              shadowColor: "#E04177",
              shadowBlur: 10
            },
            label: {
              show: true,
              color: currentTheme == 'dark' ? '#FFFFFF' : '#24262D',
              position: 'bottom',
              formatter: "${c}",
              // formatter: '{@[n]} %',
              backgroundColor: "#EEF8F4",
              padding: [4, 8, 4, 8],
            },
            areaStyle: {
              
             

              color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
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
         
        ]
    };

    return (
        <ReactEcharts
            echarts={echarts}
            option={LineChartwithShadow}
            style={{ width: '100%', height: '100%' }}
        />
    )
};