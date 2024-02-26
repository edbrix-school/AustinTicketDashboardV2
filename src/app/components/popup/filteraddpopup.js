import { Dropdown } from "primereact/dropdown";
import { Sidebar } from "primereact/sidebar";
import React, { useState } from "react";

export default function FilterAddPopup(props) {
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCampus, setSelectedCampus] = useState("");
  const [selectedAsset, setSelectedAsset] = useState("");
  const [selectedCategroy, setSelectedCategroy] = useState("");

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
          <div className="grid p-[16px] 3xl:p-[0.833vw] h-full">
            <div className="px-[16px] 3xl:px-[0.833vw] py-[12px] 3xl:py-[0.625vw] bg-[#F9FAFB] grid gap-[16px] 3xl:gap-[0.833vw] h-[100%]">
              <div className="flex flex-col w-full gap-[8px] 3xl:gap-[0.429vw] custDropdownBox">
                <label className="block text-[#20232E] text-[14px] xl:text-[0.729vw] font-medium leading-5 dark:text-[#fff]">
                  District
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
              <div className="flex flex-col w-full gap-[8px] 3xl:gap-[0.429vw] custDropdownBox">
                <label className="block text-[#20232E] text-[14px] xl:text-[0.729vw] font-medium leading-5 dark:text-[#fff]">
                  Campus
                </label>
                <Dropdown
                  value={selectedCampus}
                  onChange={(e) => setSelectedCampus(e.value)}
                  options={DistrictList}
                  optionLabel="name"
                  placeholder="--Select--"
                  className="w-full md:w-14rem border"
                />
              </div>
              <div className="flex flex-col w-full gap-[8px] 3xl:gap-[0.429vw] custDropdownBox">
                <label className="block text-[#20232E] text-[14px] xl:text-[0.729vw] font-medium leading-5 dark:text-[#fff]">
                  Category
                </label>
                <Dropdown
                  value={selectedCategroy}
                  onChange={(e) => setSelectedCategroy(e.value)}
                  options={DistrictList}
                  optionLabel="name"
                  placeholder="--Select--"
                  className="w-full md:w-14rem border"
                />
              </div>
              <div className="flex flex-col w-full gap-[8px] 3xl:gap-[0.429vw] custDropdownBox">
                <label className="block text-[#20232E] text-[14px] xl:text-[0.729vw] font-medium leading-5 dark:text-[#fff]">
                  Asset SR
                </label>
                <Dropdown
                  value={selectedAsset}
                  onChange={(e) => setSelectedAsset(e.value)}
                  options={DistrictList}
                  optionLabel="name"
                  placeholder="--Select--"
                  className="w-full md:w-14rem border"
                />
              </div>
            </div>
            <div className="flex justify-end w-full items-center px-[24px] 3xl:px-[1.25vw] py-[16px] 3xl:py-[0.833vw] absolute bottom-0">
              <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw] xl:gap-[0.417vw]">
                <div className="w-full text-[#84878D] text-[16px] xl:text-[0.833vw] 3xl:text-[0.833vw]  cursor-pointer
                rounded-lg border border-[#D3D3CE] px-[12px] xl:px-[0.625vw] 3xl:px-[0.625vw] py-[8px] xl:py-[0.427vw] 3xl:py-[0.427vw]">
                  Reset
                </div>
                <div className="w-full bg-[#4169E1] text-[#FFFFFF] text-[16px] xl:text-[0.833vw] 3xl:text-[0.833vw] cursor-pointer
                 rounded-lg border border-[#4169E1] px-[12px] xl:px-[0.625vw] 3xl:px-[0.625vw] py-[8px] xl:py-[0.427vw] 3xl:py-[0.427vw]">
                  Apply
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
