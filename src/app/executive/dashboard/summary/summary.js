import ChartWrapper from '@/app/components/chartwrapper'
import { Dropdown } from 'primereact/dropdown'
import React, { useState } from 'react'

export default function Summary() {

  const [selectedCluster, setSelectedCluster] = useState(null);
  const cluster = [
    { name: "RoME 1", code: "NY" },
    { name: "RoME 2", code: "RM" },
    { name: "RoME 3", code: "LDN" },
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
        <div className='grid grid-cols-2 gap-[24px] 3xl:gap-[1.25vw]'>
          <div className="bg-white border border-[#EAEDF3] shadow-md rounded-2xl 3xl:rounded-[0.833vw]">
            <ChartWrapper
              title={"Assigned to Resolved - Top 5 Teams (Resolved %)"}
              ExportIcon={true}
              tabSection={true}
              infoIcon={true}
              bulbIcon={true}
              downloadIcon={true}
              graphIcon={true}
              data={
                <div className="w-full xl:h-[19.333vw]">
                  <div className="flex justify-end ">
                      <div className="chartdropdown">
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

                  {/* <DoublebarLinechart

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
                  /> */}

                  
                </div>
              }
            />

          </div>
        </div>
      </div>
    </>
  )
}
