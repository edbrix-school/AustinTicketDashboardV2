import { Dropdown } from "primereact/dropdown";
import { Sidebar } from "primereact/sidebar";
import React, { useState } from "react";


export default function FilterAddPopup(props) {
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const DistrictList = [
    { name: "Adam", code: "NY" },
    { name: "Richard", code: "RM" },
  ];
  return (
    <div>
      <Sidebar
        visible={props.visible}
        position="right"
        onHide={() => props.onHides(false)}
        className="addPopupwidth custmSidebar rounded-l-xl "
        title={props.title}
      >
        <div>
          <div className="py-[24px] xl:py-[1.25vw] px-[24px] xl:px-[1.25vw] xl:text-[1.25vw] font-medium text-[24px] text-[#20232E]">
            Filters
          </div>
          <div className="grid p-[16px] 3xl:p-[0.833vw]">
            <div className="px-[16px] 3xl:px-[0.833vw] py-[12px] 3xl:py-[0.625vw] bg-[#F9FAFB] gap-[16px] 3xl:gap-[0.833vw]">
              <div className="flex flex-col w-full custDropdownBox">
                <label className="block text-[#20232E] text-[14px] xl:text-[0.729vw] font-medium leading-5 dark:text-[#fff]">
                  Select
                </label>
                <Dropdown
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.value)}
                  options={DistrictList}
                  optionLabel="name"
                  placeholder="--Select--"
                  className="w-full md:w-14rem border"
                />
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
