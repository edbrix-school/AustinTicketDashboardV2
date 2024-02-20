import React, { useState } from "react";

import { Dropdown } from 'primereact/dropdown';


export default function drilldown() {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: 'All Tickets', code: 'AT' },
    { name: 'New Tickets', code: 'NT' },
    { name: 'Avg. Days to Resolve ReAssigned Tickets', code: 'ADRRT' },
    { name: 'ReRouted Tickets Path', code: 'RTP' },
    { name: 'Assigned Tickets', code: 'AST' },
    { name: 'InProgress Tickets', code: 'IPT' },
    { name: 'Awaiting Parts or Updates Tickets', code: 'APUT' },
    { name: 'Resolved Tickets Within SLA', code: 'RTW' },
    { name: 'Resolved Tickets Outside SLA', code: 'RTO' },
    { name: 'Closed Tickets', code: 'CT' },
    { name: 'Average Ratings', code: 'AR' },
    { name: 'Average days to Resolve Tickets', code: 'ADRT' }
  ];


  return (
    <>
      <div className='grid grid-cols-12 gap-6'>
        <div className='col-span-3 bg-[#FFFFFF] border borer-[#E4E7EC] rounded-2xl shadow-md p-[24px] xl:p-[1.25vw]'>
          <div className="flex flex-col gap-6">
            <div>
              <label className="text-[#3A3E49] text-[14px] xl:text-[0.729vw] font-medium">Select Metric</label>

              <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                placeholder="Select a City" className="w-full md:w-14rem" />
            </div>

            <div>
              <label className="text-[#3A3E49] text-[14px] xl:text-[0.729vw] font-medium">Level 1</label>

              <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                placeholder="Select a City" className="w-full md:w-14rem" />
            </div>


            <div>
              <label className="text-[#3A3E49] text-[14px] xl:text-[0.729vw] font-medium">Level 2</label>

              <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                placeholder="Select a City" className="w-full md:w-14rem" />
            </div>
          </div>

        </div>
        <div className='col-span-9 bg-[#FFFFFF] border borer-[#E4E7EC] rounded-2xl shadow-md '>
        {/* <DrillDownChart /> */}
      
            <div >
              <div className="drilldown-legend inline-block xl:px-[0.833vw] px-[16px] py-[10px] xl:py-[0.521vw] rounded-md  bg-[#F6F7F9] dark:bg-[#131316] relative top-[-19px]">
                <h6 className="text-[#363A44] opacity-[0.7] text-[14px] xl:text-[0.729vw] font-medium leading-none dark:text-[#fff]">Applied Dimensions</h6>
                <div className="flex gap-[15px] xl:gap-[1vw] xl:mt-[0.535vw] mt-[10px] items-center">
                  <div>
                    <div className="text-[#363A44] text-[11px] xl:text-[0.573vw] font-light leading-6 dark:text-[#4B5255]"> Metrics</div>
                    <div className="text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium leading-none dark:text-[#fff]">Provision</div>
                  </div>
                  <i className="pi pi-angle-right" style={{ color: '#4C525F99' }}></i>
                  <div>
                    <div className="text-[#363A44] text-[11px] xl:text-[0.573vw] font-light leading-6 dark:text-[#363A44]"> Level 1</div>
                    <div className="text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium leading-none dark:text-[#fff]"> SBU</div>
                  </div>
                  <i className="pi pi-angle-right" style={{ color: '#4C525F99' }}></i>
                  <div>
                    <div className="text-[#363A44] text-[11px] xl:text-[0.573vw] font-light leading-6 dark:text-[#363A44]"> Level 2</div>
                    <div className="text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium leading-none dark:text-[#fff]"> Business Type</div>
                  </div>
                  <div>
                    <div className="text-[#363A44] text-[11px] xl:text-[0.573vw] font-light leading-6 dark:text-[#363A44]"> Level 3</div>
                    <div className="text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium leading-none dark:text-[#fff]"> Legal Entity</div>
                  </div>
                  <i className="pi pi-angle-right" style={{ color: '#4C525F99' }}></i>
                  <div>
                    <div className="text-[#363A44] text-[11px] xl:text-[0.573vw] font-light leading-6 dark:text-[#363A44]"> Level 4</div>
                    <div className="text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium leading-none dark:text-[#fff]"> Product</div>
                  </div>
                  <i className="pi pi-angle-right" style={{ color: '#4C525F99' }}></i>
                </div>
              </div>
            </div>

            </div>
      </div>
    </>
  )
}
