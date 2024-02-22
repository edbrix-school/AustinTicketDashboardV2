import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { graphic } from "echarts";
import { useTheme } from "next-themes";



export default function TreeMap({ }) {

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const Treemap = {
    tooltip: { trigger: "axis" },
  

    series: [
      {
        type: "treemap",
        width: "100%",
        height: "80%",
        label: {
          show: true,
          position: "inside",
          overflow: "breakAll",
          rich: {
            larger: {
              fontSize: 12,
              color: "#FFFFFF",
            },
            normal: {
              fontSize: 12,
              color: "#FFFFFF00",
            },
          },
          formatter: "{larger|{b}}\n\n {normal|{c}}",
        },
        data: [
          {
            name: "Sub Cat1\n\n120",
            value: "3",
            itemStyle: {
              color: "#263040",
            },
          },
          {
            value: "2",
            children: [
              {
                name: 'Sub Cat5\n\n10',
                value: 1,
                itemStyle: {
                  color: "#A9B9D0",
                },
              },
              {
                name: 'Sub Cat2\n\n110',
                value: 2,
                itemStyle: {
                  color: "#4F6484",
                },
              }
            ],
            itemStyle: {
              color: "rgba(2, 144, 70, 1)",
            },
          },
          {

            value: "2",
            children: [
              {
                name: 'Sub Cat4\n\n35',
                value: 1,
                itemStyle: {
                  color: "#91A5C3",
                },
              },
              {
                name: 'Sub Cat3\n\n50',
                value: 1.5,
                itemStyle: {
                  color: "#6480AB",
                },
              }
            ],
            itemStyle: {
              color: "rgba(188, 186, 121, 1)",
            },
          },
        ],
      },
    ],
  };

  return (
      <ReactEcharts
          echarts={echarts}
          option={Treemap}
          style={{ width: '100%', height: '100%' }}
      />
  )
};