import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { DrillDownChart } from "./drilldownchart";


export default function drilldown() {
  const [selectedCity, setSelectedCity] = useState(null);
  const SelectMetric = [
    { name: 'All Tickets' },
    { name: 'New Tickets' },
    { name: 'Avg. Days to Resolve ReAssigned Tickets' },
    { name: 'ReRouted Tickets Path' },
    { name: 'Assigned Tickets' },
    { name: 'InProgress Tickets' },
    { name: 'Awaiting Parts or Updates Tickets' },
    { name: 'Resolved Tickets Within SLA'},
    { name: 'Resolved Tickets Outside SLA' },
    { name: 'Closed Tickets' },
    { name: 'Average Ratings' },
    { name: 'Average days to Resolve Tickets' }
  ];

  const Level =[
    { name: 'Schools/Offices'},
    { name: 'Teams'},
    { name: 'Technician'},
    { name: 'Priority'},
    { name: 'Category'},
    { name: 'SubCategory'}
  ]



  return (
    <>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-3 bg-[#FFFFFF] border borer-[#E4E7EC] rounded-2xl shadow-md p-[24px] xl:p-[1.25vw]'>
          <div className="flex flex-col gap-6">
            <div>
              <label className="text-[#3A3E49] text-[14px] xl:text-[0.729vw] font-medium ">Select Metric</label>

              <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={SelectMetric} optionLabel="name"
                placeholder="Re-Routed Tickets Path" className="w-full md:w-14rem mt-[8px] 3xl:mt-[0.417vw]" />
            </div>

            <div>
              <label className="text-[#3A3E49] text-[14px] xl:text-[0.729vw] font-medium">Level 1</label>

              <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={Level} optionLabel="name"
                placeholder="Initial Team" className="w-full md:w-14rem mt-[8px] 3xl:mt-[0.417vw]" />
            </div>


            <div>
              <label className="text-[#3A3E49] text-[14px] xl:text-[0.729vw] font-medium">Level 2</label>

              <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={Level} optionLabel="name"
                placeholder="Final Team" className="w-full md:w-14rem mt-[8px] 3xl:mt-[0.417vw]" />
            </div>
          </div>

        </div>
        <div className='col-span-9 bg-[#FFFFFF] border borer-[#E4E7EC] rounded-2xl shadow-md py-[19px] 3xl:py-[0.99vw] px-[20px] 3xl:px-[1.042vw]'>
            <div className="3xl:h-[29.063vw] h-[458px] w-full">
              <DrillDownChart />
            </div>
            <div className="3xl:mt-[1.25vw] mt-6 3xl:py-[0.625vw] py-3 3xl:px-[0.833vw] px-4 bg-[#F9F9FC] 3xl:rounded-[0.417vw] rounded-lg 3xl:w-[21.667vw] w-[400px] 3xl:space-y-[0.625vw] space-y-[12px]">
              <div className="text-[#20232E] 3xl:text-[0.729vw] text-xs font-medium 3xl:leading-[0.938vw] leading-[18px]">Applied Dimensions</div>
              <div className="flex items-center gap-3 3xl:gap-[0.625vw]">
                <div className="3xl:space-y-[0.208vw] space-y-1">
                  <div className="text-[#84878D] text-xs 3xl:text-[0.625vw] font-normal 3xl:leading-[0.833vw] leading-4">Metrics</div>
                  <div className="text-[#3A3E49] text-sm 3xl:text-[0.729vw] font-normal 3xl:leading-[0.938vw] leading-[18px]">Re-Routed Tickets</div>
                </div>
                <div><i className="asetsmng-arrow-right text-[#84878D]"></i></div>
                <div className="3xl:space-y-[0.208vw] space-y-1">
                  <div className="text-[#84878D] text-xs 3xl:text-[0.625vw] font-normal 3xl:leading-[0.833vw] leading-4">Level 1</div>
                  <div className="text-[#3A3E49] text-sm 3xl:text-[0.729vw] font-normal 3xl:leading-[0.938vw] leading-[18px]">Initial Team</div>
                </div>
                <div><i className="asetsmng-arrow-right text-[#84878D]"></i></div>
                <div className="3xl:space-y-[0.208vw] space-y-1">
                  <div className="text-[#84878D] text-xs 3xl:text-[0.625vw] font-normal 3xl:leading-[0.833vw] leading-4">Level 2</div>
                  <div className="text-[#3A3E49] text-sm 3xl:text-[0.729vw] font-normal 3xl:leading-[0.938vw] leading-[18px]">Final Team</div>
                </div>

              </div>
            </div>

            </div>
      </div>
    </>
  )
}
