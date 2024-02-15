import React, { useState } from "react";
import Link from 'next/link'
import { InputText } from "primereact/inputtext";

export default function ManageAssets() {

      const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const clearInput = () => {
    setInputValue('');
  };

  return (
    <>
    {/* <div className="bg-white border border-[#D3D3CE] w-[16.927vw] h-[1.875vw] flex items-center xl:gap-[0.521vw] xl:py-[0.521vw] py-2.5 xl:px-[0.833vw] px-4 rounded-lg">
    <i className="asetsmng-td-search xl:text-[0.833vw] text-xs text-[#84878D] cursor-pointer" />
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search"
      />
      {inputValue && (
        <button onClick={clearInput}><i className="asetsmng-cross xl:text-[0.521vw] text-xs text-[#84878D] cursor-pointer" /></button>
      )}
    </div> */}
    <div className="bg-white dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37] rounded-lg xl:rounded-[0.521vw]">
            <div className="flex flex-wrap items-center justify-between xl:px-[1.042vw] px-4 xl:pt-[1.042vw] pt-4 xl:pb-[0.990vw] pb-4">
              <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
                <div className="text-[#3A3E49] dark:text-white xl:text-[0.833vw] text-sm font-medium xl:leading-[1.042vw] leading-5">
                Manage Assets
                </div>
                <div className="text-[#84878D] xl:text-[0.625vw] text-xs font-medium xl:leading-[0.938vw] leading-5 bg-[#F9F9FC] dark:bg-[#1C2026] xl:rounded-[0.938vw] rounded-2xl xl:px-[0.729vw] px-3 xl:py-[0.313vw] py-1">
                  Display 1 to 10 of 150
                </div>
              </div>
              <div className="flex flex-wrap items-center xl:gap-[0.833vw] gap-4">
                <div className="flex flex-wrap items-center xl:gap-[1.25vw] gap-5">
                <div>
                  <span className="p-input-icon-left custm-tdsearch p-input-icon-right">
                    <i className="asetsmng-td-search xl:text-[0.833vw] text-xs text-[#84878D] cursor-pointer w-fit" />
                    <InputText
                    value={inputValue}
                    onChange={handleChange}
                      placeholder="Search"
                      className="p-inputtext p-component xl:h-[1.875vw] h-[33px] xl:w-[16.927vw] placeholder:text-[#888888] placeholder:font-normal placeholder:xl:text-[0.833vw] "
                    />
                    {inputValue && (
                    <i onClick={clearInput} className="asetsmng-cross xl:text-[0.521vw] text-[10px] text-[#84878D] cursor-pointer" />
                    )}  
                  </span>
                </div>
                <div className="flex flex-wrap items-center xl:gap-[0.521vw] gap-2">
                <Link
                    href={""}
                    className="text-[#4169E1] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#4169E1] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] xl:h-[1.875vw]"
                  >
                    <i className="asetsmng-plus-rounded-box"></i>
                    <span>Add Assets</span>
                  </Link>
                  <Link
                    href={""}
                    className="text-[#84878D] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#D3D3CE] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1]"
                  >
                    <i className="asetsmng-import"></i>
                    <span>Import</span>
                  </Link>
                  <Link
                    href={""}
                    className="text-[#84878D] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#D3D3CE] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1]"
                  >
                    <i className="asetsmng-export"></i>
                    <span>Export</span>
                  </Link>
                </div>
                </div>
                <div className="flex items-center xl:gap-[0.417vw] gap-1.5">
                <Link
                  href={""}
                  className="bg-white rounded border border-[#D3D3CE] text-[#84878D] xl:text-[1.042vw] flex items-center justify-center text-xs xl:p-[0.417vw] p-2 xl:h-[1.875vw] h-[33px] xl:rounded-[0.417vw] hover:bg-[#4169E1] hover:text-white hover:border-[#4169E1]"
                >
                  <i className="asetsmng-map-view"></i>
                </Link>
                <Link
                  href={""}
                  className="bg-[#4169E1] rounded border text-white xl:text-[1.042vw] flex items-center justify-center text-xs xl:p-[0.417vw] p-2 xl:h-[1.875vw] h-[33px] xl:rounded-[0.417vw]"
                >
                  <i className="asetsmng-grid-outline"></i>
                </Link>
                </div>
              </div>
            </div>
           
          </div>
    </>
  );
}
