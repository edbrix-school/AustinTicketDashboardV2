import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { graphic } from "echarts";
import { useTheme } from "next-themes";



export default function Piechart({ }) {

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;



  const pie = {
    legend: {
      bottom: "10",
      left: "10",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: '#84878D',
      },
    },

    series: [
      {
        name: "By BU",
        type: "pie",
        radius: "80%",
        center: ["50%", "43%"],
        
        color: ["#3957D7", "#3696FB", "#41E0E0", "#34B2B2", "#B21E4B",'#951C45'],
        data: [
  

          { value: 400, name: 'School 1' },
          { value: 380, name: 'School 2' },
          { value: 380, name: 'School 3' },
          { value: 380, name: 'School 4' },
          { value: 380, name: 'School 5' },
          { value: 350, name: 'School 6' }
        ],
        roseType: "radius",
        label: {
          color: '#222222',
          lineHeight: 20,
          textStyle: {
            fontSize: 15,
            fontWeight: "bold"
          },
          formatter: function (value) {
            console.log(value.data.value ,'vallue')
            return `{completed| ${value.data.name} } \n {value|  ${value.data.value} }`;
        },
            rich: {
                completed: {
                  fontSize: 16,
                  fontWeight: 550,
                  color: '#171A1F'
                },
                value: {
                   
                    fontSize: 12,
                    fontWeight: 300,
                    color: '#6F7787'
                },
                
            }
       
        },
        itemStyle: {
          shadowBlur: 20,
          shadowColor: "rgba(16,24,40,0.25)",
        },
      },
    ],
  };

  return (
      <ReactEcharts
          echarts={echarts}
          option={pie}
          style={{ width: '100%', height: '100%' }}
      />
  )
};