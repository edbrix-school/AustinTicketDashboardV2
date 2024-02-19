import ChartWrapper from '@/app/components/chartwrapper'
import React, { useEffect, useState, } from "react";
import { Dropdown } from "primereact/dropdown";
import ReactEcharts from "echarts-for-react";
import { useTheme } from "next-themes";
import DoublebarLinechart from '@/app/components/charts/techicianbarchart';


export default function summary() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const [selectedCluster, setSelectedCluster] = useState(null);
  const cluster = [
    { name: "RoME 1", code: "NY" },
    { name: "RoME 2", code: "RM" },
    { name: "RoME 3", code: "LDN" },
  ];


  /***Budget vs. Expense*** */
  const BudgetExpense = {
    tooltip: { trigger: "axis" },
    legend: {
      show: true,
      bottom: 0,
      left: 0,
      data: [
        { name: "Budget", icon: "roundRect" },
        { name: "Revenue", icon: "roundRect" },
        { name: "Growth %", icon: "image:///assets/images/growth-legend.svg" },
      ],
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        fontSize: 10,
        color: "rgba(108, 118, 139, 1)",
        fontWeight: "400",
      },
    },
    grid: {
      left: "5%",
      right: "5%",
      top: "10%",
      bottom: "18%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["Q1", "Q2", "Q3", "Q4"],
        axisLine: {
          show: true,
          lineStyle: {
            color: "#EAEDF3",
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#363A44",
        },
      },
      {
        type: "category",
        data: ["-5%", "-2%", "4%", "4%"],
        axisLine: {
          show: false,
          lineStyle: {
            color: "#EAEDF3",
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "rgba(255, 255, 255, 1)",
          backgroundColor: "rgba(200, 30, 30, 1)",
          padding: [4, 4, 4, 4],
          borderRadius: [4, 4, 4, 4],
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        min: 0,
        max: 300,
        interval: 50,
        axisLabel: {
          formatter: "${value}",
          color: "#363A44",
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#EAEDF3",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dotted",
            color: "#EDEEF1",
          },
        },
      },
      {
        type: "value",
        name: "Growth %",
        min: 0,
        max: 14,
        interval: 2,
        axisLabel: {
          formatter: "{value} %",
          color: "#363A44",
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#EAEDF3",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dotted",
            color: "#EDEEF1",
          },
        },
      },
    ],
    series: [
      {
        name: "Budget",
        data: [200, 225, 230, 250],
        type: "bar",
        color: "#009CDA",
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
        },
        label: {
          show: true,
          position: "insideTop",
          color: "rgba(255, 255, 255, 1)",
        },
      },
      {
        name: "Revenue",
        data: [210, 230, 220, 240],
        type: "bar",
        color: "#256D85",
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
        },
        label: {
          show: true,
          position: "insideTop",
          color: "rgba(255, 255, 255, 1)",
        },
      },
      {
        name: "Growth %",
        yAxisIndex: 1,
        data: [5, 10, 5, 9],
        type: "line",
        color: "#363A44",
        label: {
          show: true,
          formatter: "{@[n]} %",
          color: "#24262D",
          backgroundColor: "#EEF8F4",
          position: [-10, 10],
          padding: [4, 4, 4, 4],
        },
      },
    ],
  };

  const stackbarwithline = {
    tooltip: { trigger: "axis" },
    legend: {
      show: true,
      bottom: "bottom",
      left: "left",
      itemWidth: 8,
      itemHeight: 8,
      borderRadius: [4, 4, 0, 0],
      textStyle: {
        color: currentTheme == "dark" ? "#fff" : "#6C768B",
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
        name: "Quarters", // Add the common title for the x-axis here
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
          color: currentTheme == "dark" ? "#fff" : "#363A44",
          fontSize: 10,

        },
        data: ["Q1", "Q2", "Q3", "Q4"],

      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Value ( in US $)",
        nameLocation: "center",
        nameGap: 40,
        nameTextStyle: {
          color: "#6C768B",
          fontSize: 12,
        },
        min: 0,
        max: 600,
        interval: 100,
        axisLabel: {
          color: currentTheme == "dark" ? "#B3B9C6" : "#6C768B",
          fontSize: 10,
          formatter: "{value}$",
        },
        axisLine: {
          show: true,
          lineStyle: { color: currentTheme == "dark" ? "#2A2C32" : "#EAEDF3" },
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color: currentTheme == "dark" ? "#2A2C32" : "#EAEDF3",
          },
        },
      },
    ],

    series: [
      {
        name: "Salary",
        type: "bar",
        barWidth: 60,

        stack: "Ad",
        itemStyle: {
          color: currentTheme == "dark" ? "#96BF0D" : "#96BF0D",
        },
        label: {
          show: true,
          color: "#fff",
          formatter: "${c}",
        },
        emphasis: { focus: "series" },
        data: [200, 225, 230, 250],
      },

      {
        name: "Rent",
        type: "bar",
        stack: "Ad",
        itemStyle: {
          borderRadius: [0, 0, 0, 0],
          color: currentTheme == "dark" ? "#009CDA" : "#009CDA",
        },
        label: {
          show: true,
          color: "#fff",
          formatter: "${c}",
        },
        emphasis: { focus: "series" },
        data: [180, 190, 198, 213],
      },

      {
        name: "Others",
        type: "bar",
        stack: "Ad",
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          color: currentTheme == "dark" ? "#256D85" : "#256D85",
        },
        label: {
          show: true,
          color: "#fff",
          formatter: "${c}",
        },
        emphasis: { focus: "series" },
        data: [100, 120, 110, 110],
      },
    ],
  };

  const investigationsData = {
    labels: [
      "Q1",
      "Q2",
      "Q3",
      "Q4",
    ],
    values1: [200, 225, 230, 250],
    values2: [210, 230, 220, 240],
    values3: [4, 5, 4, 6],
  };

  return (
    <div>
      {" "}
      <div className="grid grid-cols-2 xl:gap-[1.250vw] gap-5 xl:mt-[1.458vw] mt-[24px]">
        {/**col**/}
        <div className="bg-white border border-[#EAEDF3] shadow-md rounded-2xl xl:rounded-[0.833vw] xl:p-[0.833vw] p-4">
          <ChartWrapper
            title={"Assigned to resolved -by Technician"}
            ExportIcon={true}
            tabSection={true}
            infoIcon={true}
            bulbIcon={true}
            downloadIcon={true}
            graphIcon={true}
            data={
              <div className="w-full xl:h-[19.333vw] relative">
                <div className="flex justify-end ">
                  <div className="rounded pb-[4px] px-[3px]  cursor-pointer overflow-hidden bg-[#F6F7F9] dark:bg-[#24262D]">
                    <span className="text-[#6C768B] dark:text-[#B3B9C6] text-[10px] font-normal">
                      Select Cost Head
                    </span>
                    <div className="custDropdown ">
                      <Dropdown
                        value={selectedCluster}
                        onChange={(e) => setSelectedCluster(e.value)}
                        options={cluster}
                        optionLabel="name"
                        placeholder="All"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="rotate-[-90deg] absolute left-0 -translate-x-12 inset-y-1/2 text-[#6C768B] text-[10px] font-normal leading-4">
                  Sales Revenue in US$
                </div>
                {/* <ReactEcharts
                  option={BudgetExpense}
                  style={{ height: "100%", width: "100%" }}
                /> */}

                
                <DoublebarLinechart
                
                data={investigationsData}
                barname={["Projected", "Actual", "PAT%"]}
                legend={{
                  left: 0,
                  bottom: 2,
                  itemWidth: 10,
                  itemHeight: 10,
                  symbolKeepAspect: true,
                  data: [
                    { name: 'Projected', },
                    { name: 'Actual', },
                    { name: 'PAT%', icon: 'image:///assets/images/profit-3rd-legends.svg' },
                  ],
                  textStyle: {
                    color: currentTheme == "dark" ? "#ffff" : "#344054",
                  },
                }}
                grid={{
                  top: 30,
                  bottom: 90,
                  right: 60,
                  left: 70,
                }}
                maxBar1={300}
                interval1={50}
                maxBar2={7}
                interval2={1}
                axistop={true}
                axistoplabel={["4%", "4%", "4%", "4%"]}
                color1={"#009CDA"}
                color2={"#256D85"}
                color3={"#363A44"}
                xAxisName={"Quarters"}
                xAxisNameGap={"55"}
                xAxisNamePosition={"middle"}
                yAxisName={"Value ( In US $)"}
                yAxisName1={"Value ( In %)"}
                yAxisNameGap={50}
                yAxisNameGap1={45}
                yAxisNamePosition={"middle"}
                />

                <div className="rotate-[90deg] absolute right-0 translate-x-12 inset-y-1/2 text-[#6C768B] text-[10px] font-normal leading-4">
                  Sales Revenue in US$
                </div>
                <div className="absolute bottom-[-34px] xl:bottom-[-1.771vw] inset-x-1/2 text-[#6C768B] text-[10px] font-normal leading-4">
                  Quarters
                </div>
                <div className="absolute bottom-[-15px] xl:bottom-[-0.885vw] left-[11vw] xl:left-[6vw]">
                  <div className="flex items-center gap-1">
                    <i className="text-[10px] xl:text-[0.521vw] finance-arrow-line-up-light text-[#31C48D] rounded-full"></i>
                    <div className="text-[#6C768B] text-[12px] xl:text-[0.625vw] font-normal">
                      <span className="font-medium">5%</span> LY Var
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[-15px] xl:bottom-[-0.885vw] left-[30vw] xl:left-[15vw]">
                  <div className="flex items-center gap-1">
                    <i className="text-[10px] xl:text-[0.521vw] finance-arrow-line-down text-[#FF4537] rounded-full"></i>
                    <div className="text-[#6C768B] text-[12px] xl:text-[0.625vw] font-normal">
                      <span className="font-medium">5%</span> LY Var
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[-15px] xl:bottom-[-0.885vw] left-[47vw] xl:bottom-[0.781vw] xl:left-[23vw]">
                  <div className="flex items-center gap-1">
                    <i className="text-[10px] xl:text-[0.521vw] finance-arrow-line-up-light text-[#31C48D] rounded-full"></i>
                    <div className="text-[#6C768B] text-[12px] xl:text-[0.625vw] font-normal">
                      <span className="font-medium">5%</span> LY Var
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-8  xl:bottom-[-0.885vw] left-[65vw] xl:left-[32vw]">
                  <div className="flex items-center gap-1">
                    <i className="text-[10px] xl:text-[0.521vw] finance-arrow-line-up-light text-[#31C48D] rounded-full"></i>
                    <div className="text-[#6C768B] text-[12px] xl:text-[0.625vw] font-normal">
                      <span className="font-medium">5%</span> LY Var
                    </div>
                  </div>
                </div>
              </div>
            }
          />

        </div>
        {/**col**/}
        {/**col**/}
        <div className="bg-white border border-[#EAEDF3] shadow-md rounded-2xl xl:rounded-[0.833vw] xl:p-[0.833vw] p-4">
          <ChartWrapper
            title={"Opex by Expense Type"}
            ExportIcon={true}
            tabSection={true}
            infoIcon={true}
            bulbIcon={true}
            downloadIcon={true}
            graphIcon={true}
            data={
              <>
                <div className="flex gap-2 pb-2">
                  <button className="py-2 px-3 bg-[#4FB155] rounded-lg text-sm text-white font-medium">
                    Top 10
                  </button>
                  <button className="py-2 px-3 bg-[#fff] rounded-lg text-sm text-[#363A44] font-medium">
                    Bottom 10
                  </button>
                </div>
                <div className="w-full xl:h-[19.90vw] relative">
                  <ReactEcharts
                    option={stackbarwithline}
                    style={{ height: "100%", width: "100%" }}
                  />
                  <div className="absolute bottom-8 left-[11vw] xl:left-[7.5vw]">
                    <div className="flex items-center gap-1">
                      <i className="text-[10px] xl:text-[0.521vw] finance-arrow-line-up-light text-[#31C48D] rounded-full"></i>
                      <div className="text-[#6C768B] text-[12px] xl:text-[0.625vw] font-normal">
                        <span className="font-medium">5%</span> LY Var
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-[30vw] xl:left-[16.5vw]">
                    <div className="flex items-center gap-1">
                      <i className="text-[10px] xl:text-[0.521vw] finance-arrow-line-down text-[#FF4537] rounded-full"></i>
                      <div className="text-[#6C768B] text-[12px] xl:text-[0.625vw] font-normal">
                        <span className="font-medium">5%</span> LY Var
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-[47vw] xl:left-[25.5vw]">
                    <div className="flex items-center gap-1">
                      <i className="text-[10px] xl:text-[0.521vw] finance-arrow-line-up-light text-[#31C48D] rounded-full"></i>
                      <div className="text-[#6C768B] text-[12px] xl:text-[0.625vw] font-normal">
                        <span className="font-medium">5%</span> LY Var
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-8  left-[65vw] xl:left-[34.4vw]">
                    <div className="flex items-center gap-1">
                      <i className="text-[10px] xl:text-[0.521vw] finance-arrow-line-up-light text-[#31C48D] rounded-full"></i>
                      <div className="text-[#6C768B] text-[12px] xl:text-[0.625vw] font-normal">
                        <span className="font-medium">5%</span> LY Var
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          />
        </div>
      </div>
    </div>

  )
}
