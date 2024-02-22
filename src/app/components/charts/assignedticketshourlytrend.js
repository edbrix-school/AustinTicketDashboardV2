import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { graphic } from "echarts";
import { useTheme } from "next-themes";

export default function Assignedticketshourlytrend() {
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
          bottom:'18%',
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            name: "Time ", // Add the common title for the x-axis here
            nameLocation: "center", // Set the position of the x-axis name to the center
            nameGap: 40, // Adjust the gap between the x-axis name and the axis
            interval:0,
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
              interval:0
            },
            data: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM" , "1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM"],
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "No. of Tickets",
            nameLocation: "center", // Set the position of the y-axis name to the center
            nameGap: 30, // Adjust the gap between the y-axis name and the axis
            nameTextStyle: {
              color: currentTheme == "dark" ? "#818181" : "#84878D", // Set title text color
              fontSize: 10, // Set title font size
            },
            min: 0,
            max: 80,
            interval: 10,
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
              name:'New Tickets',
              data: [40, 27, 25, 49,60,52,65,50,40,30],
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
                    color: '#4169E1'
                  },
                  {
                    offset: 1,
                    color: 'rgba(255, 255, 255,0)'
                  }
                ])
              },
            },
            {
              name:'Assigned Tickets',
              data: [30, 20, 40, 40,18,26,36,5,3,2],
              type: 'line',
              smooth: false,
              symbol: 'circle',  // Set the symbol to circle
              symbolSize: 11,     // Adjust the symbol size
              itemStyle: {
                color: "#fff",
                borderWidth: 2,
                borderColor: "#2C9999",
              },
              lineStyle: {
                color: "#2C9999",
                shadowColor: "#2C9999",
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
                    color: '#2C9999'
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
}
