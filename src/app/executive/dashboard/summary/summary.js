import DoublebarLinechart from '@/app/components/charts/techicianbarchart';
import ChartWrapper from '@/app/components/chartwrapper'
import Image from 'next/image';
import { Dropdown } from 'primereact/dropdown'
import { ProgressBar } from 'primereact/progressbar';
import React, { useState } from 'react'

export default function Summary() {

  const [top, setTop] = useState(true)

  const [selectedCluster, setSelectedCluster] = useState(null);
  const cluster = [
    { name: "Medium 1", code: "NY" },
    { name: "Medium 2", code: "RM" },
    { name: "Medium 3", code: "LDN" },
  ];

  const [selectedTeams, setSelectedTeams] = useState(null);
  const Teams = [
    { name: "Team 1", code: "NY" },
    { name: "Team 2", code: "RM" },
    { name: "Team 3", code: "LDN" },
  ];

  const [selectedResolvedRequests, setSelectedResolvedRequests] = useState(null);
  const ResolvedRequests = [
    { name: "Within SLA%", code: "NY" },
    { name: "Within SLA%", code: "RM" },
    { name: "Within SLA%", code: "LDN" },
  ];

  const [selectedEmployeePerformance, setSelectedEmployeePerformance] = useState(null);
  const EmployeePerformance = [
    { name: "By Tickets Resolved", code: "NY" },
    { name: "By Tickets Resolved", code: "RM" },
    { name: "By Tickets Resolved", code: "LDN" },
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


  return (
    <>
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
      <div className='mt-[36px] 3xl:mt-[1.875vw]'>
        <div className='grid grid-cols-1 xl:grid-cols-2 3xl:grid-cols-2 gap-[24px] 3xl:gap-[1.25vw]'>
          <div className="bg-white border border-[#EAEDF3] shadow-card rounded-2xl 3xl:rounded-[0.833vw]">
            <ChartWrapper
              title={"Assigned to Resolved - Top 5 Teams (Resolved %)"}
              ExportIcon={true}
              tabSection={true}
              infoIcon={true}
              bulbIcon={true}
              downloadIcon={true}
              graphIcon={true}
              data={
                <div >
                  <div className="flex justify-end ">
                    <div className="chartdropdown mr-[16px] 3xl:mr-[0.833vw]">
                      <Dropdown
                        value={selectedCluster}
                        onChange={(e) => setSelectedCluster(e.value)}
                        options={cluster}
                        optionLabel="name"
                        placeholder="Medium"
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
              tabSection={true}
              infoIcon={true}
              bulbIcon={true}
              downloadIcon={true}
              graphIcon={true}
              data={
                <div className="w-full xl:h-[19.333vw]">
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



                </div>
              }
            />

          </div>

          {/* col  */}
          <div className="bg-white border border-[#EAEDF3] shadow-card rounded-2xl 3xl:rounded-[0.833vw]">
            <ChartWrapper
              title={"Resolved Requests - Monthly Trend"}
              ExportIcon={true}
              tabSection={true}
              infoIcon={true}
              bulbIcon={true}
              downloadIcon={true}
              graphIcon={true}
              data={
                <div className="w-full xl:h-[19.333vw]">
                  <div className="flex justify-end ">
                    <div className="chartdropdown mr-[16px] 3xl:mr-[0.833vw]">
                      <Dropdown
                        value={selectedResolvedRequests}
                        onChange={(e) => setSelectedResolvedRequests(e.value)}
                        options={ResolvedRequests}
                        optionLabel="name"
                        placeholder="Within SLA%"
                        className="w-full"
                      />
                    </div>
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
              tabSection={true}
              infoIcon={true}
              bulbIcon={true}
              downloadIcon={true}
              graphIcon={true}
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
              }
            />

          </div>
        </div>
      </div>
    </>
  )
}
