import DoublebarLinechart from '@/app/components/charts/techicianbarchart';
import ChartWrapper from '@/app/components/chartwrapper'
import Image from 'next/image';
import { Dropdown } from 'primereact/dropdown'
import { ProgressBar } from 'primereact/progressbar';
import React, { useEffect, useRef, useState } from 'react'
import ReactEcharts from 'echarts-for-react';
import StackBarwithLine from '@/app/components/charts/stackbarwithline';
import { ScrollPanel } from 'primereact/scrollpanel';

export default function Summary() {

  const [top, setTop] = useState(true)

  const [selectedCluster, setSelectedCluster] = useState(null);
  const cluster = [
    { name: "All", code: "NY" },
    { name: "High", code: "RM" },
    { name: "Medium", code: "LDN" },
    { name: "Low", code: "LDN" },
    
 
  ];

  const [selectedTeams, setSelectedTeams] = useState(null);
  const Teams = [
    { name: "Team 1", code: "NY" },
    { name: "Team 2", code: "RM" },
    { name: "Team 3", code: "LDN" },
    { name: "All", code: "LDN" },
  ];

  const [selectedResolvedRequests, setSelectedResolvedRequests] = useState(null);
  const ResolvedRequests = [
    { name: "Within SLA", code: "NY" },
    { name: "Outside SLA", code: "RM" },
    
  ];

  const [selectedEmployeePerformance, setSelectedEmployeePerformance] = useState(null);
  const EmployeePerformance = [
    { name: "By tickets resolved", code: "NY" },
    { name: "By Avg. Ratings", code: "RM" },
    
  ];


  const cardData = [
    {
      id: 1,
      title: 'Total Number of Tickets',
      count: '1000',
      bylastperioddata: '2%'
    },
    {
      id: 2,
      title: 'Tickets Unopened',
      count: '80',
      bylastperioddata: '2%'
    },
    {
      id: 3,
      title: 'Tickets in Progress',
      count: '560',
      bylastperioddata: '2%'
    },
    {
      id: 4,
      title: 'Tickets Resolved',
      count: '120',
      bylastperioddata: '2%'
    },
    {
      id: 5,
      title: 'Avg Feedback Rating ',
      count: '3.5',
      bylastperioddata: '2%'
    },
  ]

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

  const assignedData = {
    labels: [
      "Team 1",
      "Team 2",
      "Team 3",
      "Team 4",
      "Team 5",
    ],
    values1: [2400, 3200, 2400, 3300, 2300],
    values2: [1500, 1000, 1500, 1000, 1500],
    values3: [80, 73, 65, 10, 8],
  };

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

    /* Popup scroll height start */
    const popupPaddingTopRef = useRef(null);
    const popupTitleRef = useRef(null);
    const [elementHeight, setElementHeight] = useState(0);
    useEffect(() => {
      const updateTapScrollHeight = () => {
        let timeoutId = setTimeout(() => {
          const popupPaddingTop = popupPaddingTopRef.current;
          let computedStyles, paddingTopValue, numericValue;
          if (popupPaddingTop) {
            computedStyles = window.getComputedStyle(popupPaddingTop);
            paddingTopValue = computedStyles.getPropertyValue("padding-top");
            numericValue = parseFloat(paddingTopValue);
            console.log("Padding-top value:", numericValue);
          }
  
          const popupTitle = popupTitleRef.current;
          let height;
          if (popupTitle) {
            height = popupTitle.offsetHeight;
            console.log(height + " height of ref");
            setElementHeight(height + numericValue);
          }
        }, 200);
  
        return () => {
          clearTimeout(timeoutId);
        };
      };
  
      // Initial update
      updateTapScrollHeight();
  
      // Update elementHeight on window resize
      const handleResize = () => {
        updateTapScrollHeight();
      };
  
      window.addEventListener("resize", handleResize);
  
      // Cleanup: remove the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    const elementStyle = {
      height: `calc(100vh - ${elementHeight}px)`,
    };
    /* Popup scroll height end */

  return (
    <>
     <ScrollPanel className="popupTabs" style={elementStyle}>
      <div className='mt-[16px] 3xl:mt-[0.833vw]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[20px] 3xl:gap-[1.042vw]'>
          {cardData.map((elm) => {
            return (
              <div key={elm.id} className='border border-[#E4E7EC] rounded-lg tileShow bg-[#FFFFFF]'>
                <div className='px-[16px] 3xl:px-[0.833vw] py-[12px] 3xl:py-[0.625vw]'>
                  <div className='text-[#20232E] text-[16px] 3xl:text-[0.833vw] font-normal'>
                    {elm.title}
                  </div>
                </div>
                <div className='px-[16px] 3xl:px-[0.833vw] py-[12px] 3xl:py-[0.625vw]'>
                  <div className='flex justify-between gap-1'>
                    <div className='text-[#3A3E49] text-[36px] 3xl:text-[1.875vw] font-medium'>{elm.count}</div>
                    <div className='text-end'>
                      <div className='text-[#20232E] text-[16px] 3xl:text-[0.833vw] font-medium'>{elm.bylastperioddata}  <i className='asetsmng-arrow-up-circle-fill text-[16px] 3xl:text-[0.833vw] text-[#057A55]'></i></div>
                      <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw] font-normal'>by last period</div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
      <div className='mt-[36px] 3xl:mt-[1.875vw] mb-2'>
        <div className='grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-2 gap-[24px] 3xl:gap-[1.25vw]'>
          <div className="bg-white border border-[#EAEDF3] shadow-card rounded-2xl 3xl:rounded-[0.833vw]">
            <ChartWrapper
              title={"Assigned to Resolved - Top 5 Teams (Resolved %)"}
              ExportIcon={true}
              tabSection={false}
              infoIcon={false}
              bulbIcon={false}
              downloadIcon={false}
              graphIcon={false}
              data={
                <div >
                  <div className="flex justify-end ">
                    <div className="chartdropdown mr-[16px] 3xl:mr-[0.833vw]">
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
                  <div className='w-full h-[421px] 3xl:h-[21.927vw]'>
                    <DoublebarLinechart
                      data={assignedData}
                      barname={["Assigned", "Resolved", "Resolved %"]}
                      legend={{
                        left: 10,
                        bottom: 10,
                        itemWidth: 10,
                        itemHeight: 10,
                        symbolKeepAspect: true,
                        data: [
                          { name: 'Assigned', },
                          { name: 'Resolved', },
                          { name: 'Resolved %', },
                        ],
                        textStyle: {
                          color: "#344054",
                        },
                      }}
                      grid={{
                        top: 30,
                        bottom: 90,
                        right: 70,
                        left: 70,
                      }}
                      maxBar1={3500}
                      interval1={500}
                      maxBar2={90}
                      interval2={10}
                      color1={"#3B5FCC"}
                      color2={"#2C9999"}
                      color3={"#333330"}
                      xAxisName={"Team"}
                      xAxisNameGap={35}
                      xAxisNamePosition={"middle"}
                      yAxisName={"Count of Tickets"}
                      yAxisName1={"Tickets Resolved ( in %)"}
                      yAxisNameGap={40}
                      yAxisNameGap1={45}
                      yAxisNamePosition={"middle"}
                      yAxisLabelFormmater1='{value}'
                      yAxisLabelFormmater2="{value}%"
                      barLabelFormatter="{c}"
                    />
                  </div>

                </div>
              }
            />

          </div>
          {/* col  */}
          <div className="bg-white border border-[#EAEDF3] shadow-card rounded-2xl 3xl:rounded-[0.833vw]">
            <ChartWrapper
              title={"Tickets by Unopened Days"}
              ExportIcon={true}
              tabSection={false}
              infoIcon={false}
              bulbIcon={false}
              downloadIcon={false}
              graphIcon={false}
              data={
                <div>
                  <div className="flex justify-end ">
                    <div className="chartdropdown mr-[16px] 3xl:mr-[0.833vw]">
                      <Dropdown
                        value={selectedTeams}
                        onChange={(e) => setSelectedTeams(e.value)}
                        options={Teams}
                        optionLabel="name"
                        placeholder="Teams 1"
                        className="w-full"
                      />
                    </div>
                  </div>
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

          {/* col  */}
          <div className="bg-white border border-[#EAEDF3] shadow-card rounded-2xl 3xl:rounded-[0.833vw]">
            <ChartWrapper
              title={"Resolved Requests - Monthly Trend"}
              ExportIcon={true}
              tabSection={false}
              infoIcon={false}
              bulbIcon={false}
              downloadIcon={false}
              graphIcon={false}
              data={
                <div>
                  <div className="flex justify-end ">
                    <div className="chartdropdown mr-[16px] 3xl:mr-[0.833vw]">
                      <Dropdown
                        value={selectedResolvedRequests}
                        onChange={(e) => setSelectedResolvedRequests(e.value)}
                        options={ResolvedRequests}
                        optionLabel="name"
                        placeholder="Within SLA"
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="w-full h-[421px] 3xl:h-[21.927vw]">
                  <StackBarwithLine />
                  </div>
                </div>
              }
            />

          </div>

          {/* col  */}
          <div className="bg-white border border-[#EAEDF3] shadow-card rounded-2xl 3xl:rounded-[0.833vw]">
            <ChartWrapper
              title={"Employee Performance"}
              ExportIcon={true}
              tabSection={false}
              infoIcon={false}
              bulbIcon={false}
              downloadIcon={false}
              graphIcon={false}
              data={
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
                        placeholder="By tickets resolved"
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
              }
            />

          </div>
        </div>
      </div>
      </ScrollPanel>
    </>
  )
}
