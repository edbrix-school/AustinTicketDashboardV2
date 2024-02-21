import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import Link from "next/link";

function manageassetstab() {
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const District = [
    { name: "District 1" },
    { name: "District 2" },
    { name: "District 3" },
  ];

  return (
    <>
      <div className="relative">
        <div className="bg-[#F9F9FC] rounded-[8px] 3xl:rounded-[0.417vw] p-[24px] 3xl:p-[1.25vw]">
          <div className="space-y-[16px] lg:space-y-[24px] 3xl:space-y-[1.25vw]">
            <div className="col">
              <div className="text-[#262626] text-[14px] lg:text-[14px] 3xl:text-[0.729vw] font-medium mb-[4px] xl:mb-[0.417vw]">
                How Often
              </div>
              <div className="custDropdownBox">
                <Dropdown
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.value)}
                  options={District}
                  optionLabel="name"
                  placeholder="As it Happens"
                  className="w-full md:w-14rem "
                />
              </div>
            </div>
            <div className="col">
              <div className="text-[#262626] text-[14px] lg:text-[14px] 3xl:text-[0.729vw] font-medium mb-[4px] xl:mb-[0.417vw]">
                Language
              </div>
              <div className="custDropdownBox">
                <Dropdown
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.value)}
                  options={District}
                  optionLabel="name"
                  placeholder="English"
                  className="w-full md:w-14rem "
                />
              </div>
            </div>
            <div className="col">
              <div className="text-[#262626] text-[14px] lg:text-[14px] 3xl:text-[0.729vw] font-medium mb-[4px] xl:mb-[0.417vw]">
                Source
              </div>
              <div className="custDropdownBox">
                <Dropdown
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.value)}
                  options={District}
                  optionLabel="name"
                  placeholder="Select All"
                  className="w-full md:w-14rem "
                />
              </div>
            </div>
            <div className="col">
              <div className="text-[#262626] text-[14px] lg:text-[14px] 3xl:text-[0.729vw] font-medium mb-[4px] xl:mb-[0.417vw]">
                Threshold
              </div>
              <div className="custInput custInputBox">
                <InputText
                  id="gender"
                  aria-describedby="gender"
                  placeholder=" Audit Title"
                  className="w-full  border "
                />
              </div>
            </div>
            <div className="col">
              <div className="text-[#262626] text-[14px] lg:text-[14px] 3xl:text-[0.729vw] font-medium mb-[4px] xl:mb-[0.417vw]">
                Alert On
              </div>
              <div className="custDropdownBox">
                <Dropdown
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.value)}
                  options={District}
                  optionLabel="name"
                  placeholder="Price Falls Below 20%"
                  className="w-full md:w-14rem "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-[8px] 3xl:gap-[0.417vw] mt-[32px] 3xl:mt-[1.667vw]">
          <Link
            href={""}
            class="inline-block bg-[#FAFAFA] border border-[#D3D3CE] py-[10px] px-[12px] 3xl:py-[0.521vw] 3xl:px-[0.625vw] text-[16px] 3xl:text-[0.833vw] text-[#84878D] rounded-lg 3xl:rounded-[0.417vw]"
          >
            Reset
          </Link>
          <Link
            href={""}
            class="inline-block bg-[#4169E1] border border-[#4169E1] py-[10px] px-[12px] 3xl:py-[0.521vw] 3xl:px-[0.625vw] bg-[#1570EF] text-[#fff] text-[16px] 3xl:text-[0.833vw] text-white rounded-lg 3xl:rounded-[0.417vw]"
          >
            Update
          </Link>
        </div>
      </div>
    </>
  );
}

export default manageassetstab;
