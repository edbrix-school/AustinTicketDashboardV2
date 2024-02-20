import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

export default function Drilldown() {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const District = [
  { name: "District 1", },
  { name: "District 2", },
  { name: "District 3", },
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
      <div className="col-span-3">
      <div className='shadow-md bg-white border border-[#E4E7EC] 3xl:rounded-[0.833vw] rounded-2xl 3xl:p-[1.25vw] p-6 3xl:space-y-[1.25vw] space-y-6'>
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
      <div className="col-span-9">

      </div>
    </div>
    </>
  )
}
