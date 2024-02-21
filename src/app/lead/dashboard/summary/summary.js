import ChartWrapper from '@/app/components/chartwrapper'
import React, { useEffect, useState, } from "react";
import { Dropdown } from "primereact/dropdown";
import ReactEcharts from "echarts-for-react";
import { useTheme } from "next-themes";
import DoublebarLinechart from '@/app/components/charts/techicianbarchart';
import { ProgressBar } from 'primereact/progressbar';
import Image from 'next/image';

export default function summary() {
  const [top, setTop] = useState(true)
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  const [selectedCluster, setSelectedCluster] = useState(null);
  const cluster = [
    { name: "All ", code: "NY" },
    { name: "High ", code: "RM" },
    { name: "Medium ", code: "LDN" },
    { name: "Low ", code: "LDN" },
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

  const TecketsReReouted = {
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

  const investigationsData = {
    labels: [
      "Technician1",
      "Technician2",
      "Technician3",
      "Technician4",
    ],
    values1: [120, 125, 142, 121],
    values2: [85, 115, 110, 118],
    values3: [49, 40, 35, 80],
  };

  const [selectedEmployeePerformance, setSelectedEmployeePerformance] = useState(null);
  const EmployeePerformance = [
    { name: "By Tickets Resolved", code: "NY" },
    { name: "By Tickets Resolved", code: "RM" },
    { name: "By Tickets Resolved", code: "LDN" },
  ];
  const employeeData = [
    {
      id: 1,
      name: 'Angel',
      image: 'employee1',
      team: 'Designantion',
      ticketsResolved: '450',
      rating: '4.5'
    },
    {
      id: 2,
      name: 'Shawn',
      image: 'employee2',
      team: 'Designantion',
      ticketsResolved: '450',
      rating: '4.5'
    },
    {
      id: 3,
      name: 'Mitchell',
      image: 'employee3',
      team: 'Designantion',
      ticketsResolved: '450',
      rating: '4.5'
    },
    {
      id: 4,
      name: 'Kyle',
      image: 'employee4',
      team: 'Designantion',
      ticketsResolved: '450',
      rating: '4.5'
    },
    {
      id: 5,
      name: 'Victoria',
      image: 'employee5',
      team: 'Designantion',
      ticketsResolved: '450',
      rating: '4.5'
    },
  ]
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
                  <div className="chartdropdown mr-[16px] 3xl:mr-[0.833vw]">
                    <Dropdown
                      value={selectedCluster}
                      onChange={(e) => setSelectedCluster(e.value)}
                      options={cluster}
                      optionLabel="name"
                      placeholder="High"
                      className="w-full"
                    />
                  </div>
                </div>


                {/* <ReactEcharts
                  option={BudgetExpense}
                  style={{ height: "100%", width: "100%" }}
                /> */}

                <div className='w-full h-[421px] 3xl:h-[21.927vw]'>
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
                  maxBar1={160}
                  interval1={20}
                  maxBar2={100}
                  interval2={10}
                  axistop={true}
                  axistoplabel={["4%", "4%", "4%", "4%"]}
                  color1={"#4169E1"}
                  color2={"#2C9999"}
                  color3={"#363A44"}
                  xAxisName={"Technicians"}
                  xAxisNameGap={"55"}
                  xAxisNamePosition={"middle"}
                  yAxisName={"Count of Tickets"}
                  yAxisName1={"Resolved ( In %)"}
                  yAxisNameGap={50}
                  yAxisNameGap1={45}
                  yAxisNamePosition={"middle"}
                />
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

                <div className="w-full min-h-[421px] 3xl:min-h-[21.927vw]">

                  <div className="flex justify-between px-[16px] 3xl:px-[0.833vw]">
                    <div className='flex items-center'>
                      <button onClick={() => setTop(true)} className={`${top === true ? 'text-[#1B458D] bg-[#DAEEFF]' : 'text-[#4B586E] bg-[#F5F6F7]'} text-[12px] 3xl:text-[0.625vw] font-semibold px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] rounded-bl-md`}>Top 5</button>
                      <button onClick={() => setTop(false)} className={`${top === false ? 'text-[#1B458D] bg-[#DAEEFF]' : 'text-[#4B586E] bg-[#F5F6F7]'} text-[12px] 3xl:text-[0.625vw] font-semibold px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] rounded-br-md`}>Bottom 5</button>
                    </div>
                    <div className="chartdropdown ">
                      <Dropdown
                        value={selectedEmployeePerformance}
                        onChange={(e) => setSelectedEmployeePerformance(e.value)}
                        options={EmployeePerformance}
                        optionLabel="name"
                        placeholder="By Tickets Resolved"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className='px-[16px] 3xl:px-[0.833vw] py-[38px] 3xl:py-[1.979vw]'>
                    <div className='grid grid-cols-3 gap-[24px] 3xl:gap-[1.25vw]'>
                      {employeeData.map((elm) => {
                        return (
                          <div key={elm.id} className='border border-[#E4E7EC] bg-[#F9F9FC] rounded-lg p-[16px] lg:p-[12px] 3xl:p-[0.833vw]'>
                            <div className='flex items-center gap-[16px] 3xl:gap-[0.833vw]'>
                              <div>
                                <Image src={`/assets/images/${elm.image}.svg`} alt="notification" width={38} height={38} className="3xl:w-[1.979vw] w-[38px] h-auto" />
                              </div>
                              <div>
                                <div className='text-[#20232E] text-[14px] 3xl:text-[0.729vw] font-semibold '>{elm.name}</div>
                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw] font-normal '>Team : {elm.team}</div>
                              </div>
                            </div>
                            <div className='space-y-[14px] 3xl:space-y-[0.833vw] mt-[24px] 3xl:mt-[1.25vw]'>
                              <div className='flex items-center justify-between '>
                                <div className='text-[#20232E] text-[12px] 3xl:text-[0.625vw] font-medium '>Tickets Resolved</div>
                                <div className='text-[#20232E] text-[12px] 3xl:text-[0.625vw] font-semibold '>{elm.ticketsResolved}</div>
                              </div>
                              <div className='flex items-center justify-between '>
                                <div className='text-[#20232E] text-[12px] 3xl:text-[0.625vw] font-medium '>Average Rating</div>
                                <div className='text-[#20232E] text-[12px] 3xl:text-[0.625vw] font-semibold '>{elm.rating}</div>
                              </div>
                            </div>
                            <div className='mt-2'>
                              <ProgressBar className='custProgress' color='#4169E1' value={60} style={{ height: '10px' }}></ProgressBar>
                            </div>
                          </div>
                        )
                      })}

                    </div>
                  </div>


                </div>
              </>
            }
          />
        </div>
        {/**col**/}
        <div className="bg-white border border-[#EAEDF3] shadow-md rounded-2xl xl:rounded-[0.833vw] xl:p-[0.833vw] p-4">
          <ChartWrapper
            title={"Tickets Re-Assigned/Re-Routed (From) Top5"}
            ExportIcon={true}
            tabSection={true}
            infoIcon={true}
            bulbIcon={true}
            downloadIcon={true}
            graphIcon={true}
            data={
              <>
                <div className="flex gap-2 pb-2">
                  <div className='flex items-center'>
                    <button onClick={() => setTop(true)} className={`${top === true ? 'text-[#1B458D] bg-[#DAEEFF]' : 'text-[#4B586E] bg-[#F5F6F7]'} text-[12px] 3xl:text-[0.625vw] font-semibold px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] rounded-bl-md`}>Top 5</button>
                    <button onClick={() => setTop(false)} className={`${top === false ? 'text-[#1B458D] bg-[#DAEEFF]' : 'text-[#4B586E] bg-[#F5F6F7]'} text-[12px] 3xl:text-[0.625vw] font-semibold px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] rounded-br-md`}>Bottom 5</button>
                  </div>
                </div>
                <div className="w-full xl:h-[19.90vw] relative">
                  <ReactEcharts
                    option={TecketsReReouted}
                    style={{ height: "100%", width: "100%" }}
                  />

                </div>
              </>
            }
          />
        </div>

        {/**col**/}
        <div className="bg-white border border-[#EAEDF3] shadow-md rounded-2xl xl:rounded-[0.833vw] xl:p-[0.833vw] p-4">
          <ChartWrapper
            title={"Tickets By Sub Category"}
            ExportIcon={true}
            tabSection={true}
            infoIcon={true}
            bulbIcon={true}
            downloadIcon={true}
            graphIcon={true}
            data={
              <>
                <div className="flex gap-2 pb-2">
                  <div className='flex items-center'>
                    <button onClick={() => setTop(true)} className={`${top === true ? 'text-[#1B458D] bg-[#DAEEFF]' : 'text-[#4B586E] bg-[#F5F6F7]'} text-[12px] 3xl:text-[0.625vw] font-semibold px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] rounded-bl-md`}>Top 5</button>
                    <button onClick={() => setTop(false)} className={`${top === false ? 'text-[#1B458D] bg-[#DAEEFF]' : 'text-[#4B586E] bg-[#F5F6F7]'} text-[12px] 3xl:text-[0.625vw] font-semibold px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] rounded-br-md`}>Bottom 5</button>
                  </div>
                </div>
                <div className="w-full xl:h-[19.90vw] ">
                  <ReactEcharts
                    option={Assetschart}
                    style={{ height: "100%", width: "100%" }}
                  />

                </div>
              </>
            }
          />
        </div>


      </div>
    </div>

  )
}
