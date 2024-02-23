import React, { useEffect, useRef, useState } from "react";
import ChartWrapper from "@/app/components/chartwrapper";
import ReactEcharts from "echarts-for-react";
import { Dropdown } from "primereact/dropdown";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";


function checkpricetrendtab() {
  const [selectedTeams, setSelectedTeams] = useState(null);
  var echarts = require("echarts")
  const Teams = [
    { name: "Team 1", code: "NY" },
    { name: "Team 2", code: "RM" },
    { name: "Team 3", code: "LDN" },
  ];
  const upColor = '#9BC463';
  const upBorderColor = '#9BC463';
  const downColor = '#FF0006';
  const downBorderColor = '#FF0006';
  const dataCount = 100;
  const data = generateOHLC(dataCount);
  const stackbarwithline = {
    dataset: {
      source: data
    },
   
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line'
      }
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: false
        }
      }
    },
    grid: [
      {
        left: '0%',
        right: '0%',
        bottom: 200
      },
      {
        left: '0%',
        right: '0%',
        height: 80,
        bottom: 80
      }
    ],
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        // inverse: true,
        axisLine: { onZero: false },
        splitLine: { show: false },
        min: 'dataMin',
        max: 'dataMax'
      },
      {
        type: 'category',
        gridIndex: 1,
        boundaryGap: false,
        axisLine: { onZero: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: true },
        min: 'dataMin',
        max: 'dataMax'
      }
    ],
    yAxis: [
      {
        scale: true,
        splitArea: {
          show: true
        }
      },
      {
        scale: true,
        gridIndex: 1,
        splitNumber: 2,
        axisLabel: { show: true },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false }
      }
    ],
    dataZoom: [
      {
        type: 'inside',
        xAxisIndex: [0, 1],
        start: 10,
        end: 100
      },
      {
        show: true,
        xAxisIndex: [0, 1],
        type: 'slider',
        bottom: 10,
        start: 10,
        end: 100
      }
    ],
    visualMap: {
      show: false,
      seriesIndex: 1,
      dimension: 6,
      pieces: [
        {
          value: 1,
          color: upColor
        },
        {
          value: -1,
          color: downColor
        }
      ]
    },
    series: [
      {
        type: 'candlestick',
        itemStyle: {
          color: upColor,
          color0: downColor,
          borderColor: upBorderColor,
          borderColor0: downBorderColor
        },
        encode: {
          x: 0,
          y: [1, 4, 3, 2]
        }
      },
      {
        name: 'Volumn',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
          color: '#7fbe9e'
        },
        large: true,
        encode: {
          x: 0,
          y: 5
        }
      }
    ]
  };
  function generateOHLC(count) {
  
    let data = [];
    let xValue = +new Date("November 25, 2023");
    let minute = 60 * 1000;
    let baseValue = Math.random() * 12000;
    let boxVals = new Array(4);
    let dayRange = 12;
    for (let i = 0; i < count; i++) {
      baseValue = baseValue + Math.random() * 20 - 10;
      for (let j = 0; j < 4; j++) {
        boxVals[j] = (Math.random() - 0.5) * dayRange + baseValue;
      }
      boxVals.sort();
      let openIdx = Math.round(Math.random() * 3);
      let closeIdx = Math.round(Math.random() * 2);
      if (closeIdx === openIdx) {
        closeIdx++;
      }
      let volumn = boxVals[3] * (1000 + Math.random() * 500);
      // ['open', 'close', 'lowest', 'highest', 'volumn']
      // [1, 4, 3, 2]
      data[i] = [
  // console.log("echarts",  echarts?.format?.formatTime('yyyy-MM-dd\nhh:mm:ss', (xValue += minute))),

          echarts?.format?.formatTime('yyyy-MM-dd\nhh:mm:ss', (xValue += minute)),
        +boxVals[openIdx].toFixed(2),
        +boxVals[3].toFixed(2),
        +boxVals[0].toFixed(2),
        +boxVals[closeIdx].toFixed(2),
        +volumn.toFixed(0),
        getSign(data, i, +boxVals[openIdx], +boxVals[closeIdx], 4) // sign
      ];
    }
    return data;
    function getSign(data, dataIndex, openVal, closeVal, closeDimIdx) {
      var sign;
      if (openVal > closeVal) {
        sign = -1;
      } else if (openVal < closeVal) {
        sign = 1;
      } else {
        sign =
          dataIndex > 0
            ? // If close === open, compare with close of last record
              data[dataIndex - 1][closeDimIdx] <= closeVal
              ? 1
              : -1
            : // No record of previous, set to be positive
              1;
      }
      return sign;
    }
  }
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
          expand={true}
          historicalPrice={true}
          data={
            <div>
              <Tabs className={"marketAlertCharttabs"}>
                <div className="px-[20px] pt-[16px] 3xl:px-[1.042vw] 3xl:pt-[0.833vw]">
                <TabList>
                  <Tab>Daily</Tab>
                  <Tab>Weekly</Tab>
                  <Tab>Monthly</Tab>
                </TabList>
                </div>
                <TabPanel>
                  <div className="w-full h-[421px] 3xl:h-[21.927vw]">
                    <ReactEcharts
                      option={stackbarwithline}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="w-full h-[421px] 3xl:h-[21.927vw]">
                    <ReactEcharts
                      option={stackbarwithline}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="w-full h-[421px] 3xl:h-[21.927vw]">
                    <ReactEcharts
                      option={stackbarwithline}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          }
        />
      </div>
    </>
  );
}

export default checkpricetrendtab;
