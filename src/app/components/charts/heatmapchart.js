import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { graphic } from "echarts";
import { useTheme } from "next-themes";

export default function Heatmapchart() {
    const Assetschart = {
        tooltip: { trigger: "axis" },
        legend: {
          show: true,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: '#222222',
          },
          data: ['Inventory', 'Vendor Receivable']
        },
    
        series: [
          {
            type: "treemap",
            width: "100%",
            height: "90%",
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
                name: "Badges\n\n100",
                value: "2",
                itemStyle: {
                  color: "#263040",
                },
              },
              {
                value: "2",
                children: [
                  {
                    name: 'Asset\n\n60',
                    value: 1,
                    itemStyle: {
                      color: "#6480AB",
                    },
                  },
                  {
                    name: 'Security\n\n50',
                    value: 1,
                    itemStyle: {
                      color: "#91A5C3",
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
                    name: 'Request\n\n90',
                    value: 1,
                    itemStyle: {
                      color: "#4F6484",
                    },
                  },
                  {
                    name: 'Others\n\n20',
                    value: 1,
                    itemStyle: {
                      color: "#A9B9D0",
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
    option={Assetschart}
    style={{ width: '100%', height: '100%' }}
    />
  )
}
