import React, { useEffect, useRef, useState } from 'react'
import ChartWrapper from '@/app/components/chartwrapper'
import ReactEcharts from 'echarts-for-react';
import { Dropdown } from 'primereact/dropdown'

function checkpricetrendtab() {
  const [selectedTeams, setSelectedTeams] = useState(null);
  const Teams = [
    { name: "Team 1", code: "NY" },
    { name: "Team 2", code: "RM" },
    { name: "Team 3", code: "LDN" },
  ];
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
      left: 30,
      right: 20,
      bottom: 75,
      top: 20,
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        name: "Quarters", // Add the common title for the x-axis here
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
        name: "Count of Tickets",
        nameLocation: "center",
        nameGap: 40,
        nameTextStyle: {
          color: "#6C768B",
          fontSize: 12,
        },
        min: 0,
        max: 1000,
        interval: 100,
        axisLabel: {
          color: "#6C768B",
          fontSize: 10,
          formatter: "{value}$",
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
        data: [220, 370, 300, 210,270,190,190],
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
        data: [480, 300, 290, 300,330,420,240],
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
        data: [220, 200, 300, 300,190,200,350],
      },
    ],
  };
  return (
    <>
      <div className="bg-white border border-[#E4E7EC] rounded-[8px] 3xl:rounded-[0.833vw]">
            <ChartWrapper
              title={"Historical Price"}
              ExportIcon={true}
              tabSection={true}
              infoIcon={true}
              bulbIcon={true}
              downloadIcon={true}
              graphIcon={true}
              data={
                <div>
                  
                  <div className='w-full h-[421px] 3xl:h-[21.927vw]'>
                  <ReactEcharts
                    option={stackbarwithline}
                    style={{ height: "100%", width: "100%" }}
                  />
                  </div>
                </div>
              }
            />

          </div>
    </>
  );
}

export default checkpricetrendtab;
