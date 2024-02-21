import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { DrillDownChart } from "./drilldownchart";

export default function Drilldown() {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const District = [
    { name: "Schools/Offices", },
    { name: "Teams", },
    { name: "Technician", },
    { name: "Priority", },
    { name: "Category", },
    { name: "SubCategory", },
  ];
  const SelectMetric = [
    { name: "All Tickets", },
    { name: "New Tickets", },
    { name: "Avg. Days to Resolve ReAssigned Tickets", },
    { name: "ReRouted Tickets Path", },
    { name: "Assigned Tickets", },
    { name: "InProgress Tickets", },
    { name: "Awaiting Parts or Updates Tickets", },
    { name: "Resolved Tickets Within SLA", },
    { name: "Closed Tickets", },
    { name: "Average Ratings", },
    { name: "Average days to Resolve Tickets", },
  ];
  return (
    <>
      <div className='grid grid-cols-12 gap-6 3xl:gap-[1.25vw]'>
        {/* row */}
        <div className="col-span-12 lg:col-span-3">
          <div className='shadow-md bg-white border border-[#E4E7EC] 3xl:rounded-[0.833vw] rounded-2xl 3xl:p-[1.25vw] p-6 3xl:space-y-[1.25vw] space-y-6 h-full'>
            {/*col*/}
            <div>
              <div className="text-[#262626] text-[14px] 3xl:text-[0.729vw] font-medium mb-[4px] xl:mb-[0.417vw]">Select Metric</div>
              <div className="custDropdownBox dropdown_bg01">
                <Dropdown
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.value)}
                  options={SelectMetric}
                  optionLabel="name"
                  placeholder="Re-Routed Tickets Path"
                  className="w-full md:w-14rem "
                />
              </div>
            </div>
            {/*col*/}
            <div>
              <div className="text-[#262626] text-[14px] 3xl:text-[0.729vw] font-medium mb-[4px] xl:mb-[0.417vw]">Level 1</div>
              <div className="custDropdownBox dropdown_bg01">
                <Dropdown
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.value)}
                  options={District}
                  optionLabel="name"
                  placeholder="Initial Team"
                  className="w-full md:w-14rem "
                />
              </div>
            </div>
            {/*col*/}
            <div>
              <div className="text-[#262626] text-[14px] 3xl:text-[0.729vw] font-medium mb-[4px] xl:mb-[0.417vw]">Level 2</div>
              <div className="custDropdownBox dropdown_bg01">
                <Dropdown
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.value)}
                  options={District}
                  optionLabel="name"
                  placeholder="Final Team"
                  className="w-full md:w-14rem "
                />
              </div>
            </div>
          </div>
        </div>
        {/* row */}
        <div className="col-span-12 lg:col-span-9">
          {/*row */}
          <div className="shadow-md bg-white border border-[#E4E7EC] 3xl:rounded-[0.833vw] rounded-2xl 3xl:p-[1.25vw] p-6">
            <div className="3xl:h-[29.063vw] h-[458px] w-full">
              <DrillDownChart />
            </div>
            <div className="3xl:mt-[1.25vw] mt-6 3xl:py-[0.625vw] py-3 3xl:px-[0.833vw] px-4 bg-[#F9F9FC] 3xl:rounded-[0.417vw] rounded-lg 3xl:w-[21.667vw] w-[400px] 3xl:space-y-[0.625vw] space-y-[12px]">
              <div className="text-[#20232E] 3xl:text-[0.729vw] text-xs font-medium 3xl:leading-[0.938vw] leading-[18px]">Applied Dimensions</div>
              <div className="flex items-center gap-3 3xl:gap-[0.625vw]">
                {/*col*/}
                <div className="3xl:space-y-[0.208vw] space-y-1">
                  <div className="text-[#84878D] text-xs 3xl:text-[0.625vw] font-normal 3xl:leading-[0.833vw] leading-4">Metrics</div>
                  <div className="text-[#3A3E49] text-sm 3xl:text-[0.729vw] font-normal 3xl:leading-[0.938vw] leading-[18px]">Re-Routed Tickets</div>
                </div>
                {/*col*/}
                <div><i className="asetsmng-arrow-right text-[#84878D]"></i></div>
                {/*col*/}
                <div className="3xl:space-y-[0.208vw] space-y-1">
                  <div className="text-[#84878D] text-xs 3xl:text-[0.625vw] font-normal 3xl:leading-[0.833vw] leading-4">Level 1</div>
                  <div className="text-[#3A3E49] text-sm 3xl:text-[0.729vw] font-normal 3xl:leading-[0.938vw] leading-[18px]">Initial Team</div>
                </div>
                {/*col*/}
                <div><i className="asetsmng-arrow-right text-[#84878D]"></i></div>
                {/*col*/}
                <div className="3xl:space-y-[0.208vw] space-y-1">
                  <div className="text-[#84878D] text-xs 3xl:text-[0.625vw] font-normal 3xl:leading-[0.833vw] leading-4">Level 2</div>
                  <div className="text-[#3A3E49] text-sm 3xl:text-[0.729vw] font-normal 3xl:leading-[0.938vw] leading-[18px]">Final Team</div>
                </div>
                {/*col*/}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
