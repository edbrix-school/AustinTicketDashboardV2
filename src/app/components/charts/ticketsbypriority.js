import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { graphic } from "echarts";
import { useTheme } from "next-themes";



export default function TicketsbyPriority({ }) {

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // Tickets by Priority Data

  // prettier-ignore
  const hours = [
    '12a', '1a', '2a', '3a', '4a', '5a', '6a',
    '7a', '8a', '9a', '10a', '11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p'
  ];
  // prettier-ignore
  const days = [
    'Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday', 'Sunday', 'Monday', 'Sunday'
  ];
    const data = [ [0, 0,1],[0, 1,1],[0, 2,1],[0, 3,1],[0, 1,1],[0, 4,1],
               [0, 5,1],[0, 6,1],[0, 7,1],[0, 8,1],[0, 9,1],[0, 10,1],
               [0, 11,1],[0, 12,1],[0, 13,1],[0, 14,1],[0, 15,1],[0, 16,1],
               [0, 17,1],[0, 18,1],[0, 19,1],[0, 20,1],[0, 21,1],[0, 22,1],
               [0, 23,1],[1, 0,1],[1, 1,1],[1, 2,1],[1, 3,1],[1, 1,1],[1, 4,1],
               [1, 5,1],[1, 6,1],[1, 7,1],[1, 8,1],[1, 9,1],[1, 10,1],
               [1, 11,1],[1, 12,1],[1, 13,1],[1, 14,1],[1, 15,1],[1, 16,1],
               [1, 17,1],[1, 18,1],[1, 19,1],[1, 20,1],[1, 21,1],[1, 22,1],
               [1, 23,1], [2, 0,4],[2, 1,4],[2, 2,4],[2, 3,4],[2, 4,4],[2, 5,4]
               ,[2, 6,4],[2, 7,1],[2, 8,1],[2, 9,1],[2, 10,1],
               [2, 11,1],[2, 12,1],[2, 13,1],[2, 14,1],[2, 15,1],[2, 16,1],
               [2, 17,1],[2, 18,1],[2, 19,1],[2, 20,1],[2, 21,1],[2, 22,1],
               [2, 23,1],[3, 0,4],[3, 1,4],[3, 2,4],[3, 3,4],[3, 4,4],[3, 5,4]
               ,[3, 6,4],[3, 7,4],[3, 8,4],[3, 9,4],[3, 10,4],[3, 11,4],[3, 12,4]
               ,[3, 13,4],[3, 14,4],[3, 15,4],[3, 16,4],[3, 17,4],[3, 18,4],[3, 19,4]
               ,[3, 20,4],[3, 21,4],[3, 22,4],[3, 23,4],[4, 0,4],[4, 1,4],[4, 2,4],[4, 3,4],[4, 4,4],[4, 5,4]
               ,[4, 6,4],[4, 7,4],[4, 8,4],[4, 9,4],[4, 10,4],[4, 4,4],[4, 11,4]
               ,[4, 12,4],[4, 13,4],[4, 14,4],[4, 15,4],[4, 16,4],[4, 17,4],[4, 18,4]
               ,[4, 19,4],[4, 20,4],[4, 21,4],[4, 22,4],[4, 23,4],
               [5, 0,9],[5, 1,9],[5, 2,9],[5, 3,9],[5, 4,9]
               ,[5, 5,9],[5, 6,9],[5, 7,9],[5, 8,9],[5, 9,9],[5, 10,9],[5, 11,9]
               ,[5, 12,9],[5, 13,9],[5, 14,9],[5, 15,9],[5, 16,9],[5, 17,9],[5, 18,9]
               ,[5, 19,9],[5, 20,5],[5, 21,5],[5, 22,5],[5, 23,5],
               [6, 0,9],[6, 1,9],[6, 2,9],[6, 3,9],[6, 4,9]
               ,[6, 5,9],[6, 6,9],[6, 7,9],[6, 8,9],[6, 9,9],[6, 10,9],[6, 11,9]
               ,[6, 12,9],[6, 13,9],[6, 14,9],[6, 15,9],[6, 16,9],[6, 17,9],[6, 18,9]
               ,[6, 19,9],[6, 20,9],[6, 21,9],[6, 22,9],[6, 23,9],
               [7, 0,9],[7, 1,9],[7, 2,9],[7, 3,9],[7, 4,9]
               ,[7, 5,9],[7, 6,9],[7, 7,9],[7, 8,9],[7, 9,9],[7, 10,9],[7, 11,9]
               ,[7, 12,9],[7, 13,9],[7, 14,9],[7, 15,9],[7, 16,9],[7, 17,9],[7, 18,9]
               ,[7, 19,9],[7, 20,9],[7, 21,9],[7, 22,9],[7, 23,9],
               [8, 0,9],[8, 1,9],[8, 2,9],[8, 3,9],[8, 4,9]
               ,[8, 5,9],[8, 6,9],[8, 7,9],[8, 8,9],[8, 9,9],[8, 10,9],[8, 11,9]
               ,[8, 12,9],[8, 13,9],[8, 14,9],[8, 15,9],[8, 16,9],[8, 17,9],[8, 18,9]
               ,[8, 19,9],[8, 20,9],[8, 21,9],[8, 22,9],[8, 23,9]]
    .map(function (item) {
    return [item[1], item[0], item[2] || '-'];
  });
    // Tickets by Priority Data
  const TicketsbyPriority = {
    tooltip: {
      position: 'top',
      trigger:'item',
      axisPOinter:{
        type: 'line',
        axis:"auto"
      },
      backgroundColor: '#000000',
      textStyle:{
        color:"#FFF"
      }
    },
    grid: {
      top: 10,
      right:20,
      left:20,
      bottom:40
    },
    
    xAxis: {
      type: 'category',
      data: hours,
      splitArea: {
        show: true
      },
      show:false
     
    },
    yAxis: {
      type: 'category',
      data: days,
      splitArea: {
        show: true
      },
      show:false
    },
    visualMap: {
      min: 0,
      max: 10,
       type: 'piecewise',
       selectedMode: 'multiple', // Add this line
      orient: 'horizontal',
      
      left: 20,
      bottom: 10,
     
        itemWidth:15,
      inRange: {
        color: ['#4169E1', '#256d85', '#2C9999'] // specify your desired colors here
      },
       pieces: [
        { min: 8, label: 'High', color: '#2C9999',name: 'High',},
        { min: 4, max: 8, label: 'Medium', color: '#256d85',name: 'Medium', },
        { max: 4, label: 'Low', color: '#4169E1' , borderColor: '#fff',name: 'Low', }
      ]
    },
    series: [
      {
        name: 'High',
        type: 'heatmap',
        data: data,
        label: {
          show: false,
       
        },
        itemStyle:{
           borderColor:"#fff",
            borderWidth:0.5
        },
      
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
           
          }
        }
      },
    ]
    };

  return (
      <ReactEcharts
          echarts={echarts}
          option={TicketsbyPriority}
          style={{ width: '100%', height: '100%' }}
      />
  )
};