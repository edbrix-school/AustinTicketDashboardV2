"use client";

import FilterComponent from "@/app/components/filtercomponent";
import React, { useState } from "react";
import PageLayout from "@/app/components/pagelayout/pagelayout";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import Link from "next/link";
import ChartWrapper from "@/app/components/chartwrapper";
import AdvancedSearchPopup from "@/app/components/popup/advancedsearch";
import Docspopup from "@/app/components/popup/docspopup";
import PreviewPopup from "@/app/components/popup/previewpopup";
const ElibraryPage = () => {
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [previewPopup, setPreviewPopup] = useState(false);
  const [pageName, setPageName] = useState("E-Library");
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const clearInput = () => {
    setInputValue("");
  };
  const [orderBy, setOrderBy] = useState(null);
  const [groupSchool, setGroupSchool] = useState(null);

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <PageLayout topTab={true} pageTitle="E-Library" pageName={pageName}>
      <FilterComponent />
      <div className="grid gap-[12px] 3xl:gap-[0.625vw]">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-[8px] 3xl:gap-[0.417vw]">
            <div className="flex gap-[10px] 3xl:gap-[0.521vw]">
              <span className="p-input-icon-left custm-tdsearch p-input-icon-right">
                <i className="asetsmng-td-search 3xl:text-[0.833vw] text-xs text-[#84878D] cursor-pointer w-fit" />
                <InputText
                  value={inputValue}
                  onChange={handleChange}
                  placeholder="Search"
                  className="p-inputtext p-component 3xl:h-[1.875vw] h-[33px] w-[300px] 3xl:w-[16.927vw] placeholder:text-[#888888] placeholder:font-normal placeholder:3xl:text-[0.833vw] "
                />
                <i className="asetsmng-cross 3xl:text-[0.521vw] text-[10px] leading-4 text-[#84878D] cursor-pointer" />
              </span>
              <div className="bg-[#4169e1] flex justify-center items-center w-[35px] 3xl:w-[1.823vw] rounded-lg">
                <i className="asetsmng-td-search 3xl:text-[0.833vw] text-xs text-[#FFF] cursor-pointer w-fit" />
              </div>
            </div>
            <div
              onClick={() => setAdvancedSearch(true)}
              className="text-[#4169e1] text-[14px] 3xl:text-[0.729vw] font-medium leading-4 cursor-pointer"
            >
              Advanced Search
            </div>
          </div>
          <div className="flex gap-[12px] 3xl:gap-[0.625vw]">
            <div className="custDropdownBox">
              <Dropdown
                value={orderBy}
                onChange={(e) => setOrderBy(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Order by"
                className="w-full md:w-14rem border 3xl:h-[2.083vw] h-[36px]"
              />
            </div>

            <div className="custDropdownBox">
              <Dropdown
                value={groupSchool}
                onChange={(e) => setGroupSchool(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Group by School"
                className="w-full md:w-14rem border 3xl:h-[2.083vw] h-[36px]"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[16px] xl:gap-[0.833vw]">
            <i className="asetsmng-home text-[16px] 3xl:text-[0.833vw] text-[#84878d]"></i>
            <div className="text-[#84878d] text-[14px] 3xl:text-[0.729vw]">
              Home
            </div>
            <i className="asetsmng-arrow-right text-[12px] 3xl:text-[0.625vw] text-[#84878d]"></i>
            <div className="text-[#3a3e49] text-[14px] 3xl:text-[0.729vw]">
              District 1
            </div>
          </div>
          <div className="flex gap-[16px] 3xl:gap-[0.833vw]">
            <div className="flex flex-wrap items-center 3xl:gap-[0.521vw] gap-2">
              <Link
                href="/technician/elibrary/adddocument"
                className="text-[#4169E1] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#4169E1] 3xl:py-[0.521vw] py-2 3xl:px-[0.833vw] px-3 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] 3xl:h-[1.875vw]"
              >
                <i className="asetsmng-text-doc"></i>
                <span>Add Documents</span>
              </Link>
              <Link
                href={""}
                className="text-[#84878D] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#D3D3CE] 3xl:py-[0.521vw] py-2 3xl:px-[0.833vw] px-3 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] 3xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1]"
              >
                <i className="asetsmng-export"></i>
                <span>Export</span>
              </Link>
            </div>
            <div className="flex items-center 3xl:gap-[0.417vw] gap-1.5">
              <Link
                href={""}
                className="bg-white rounded border border-[#D3D3CE] text-[#84878D] 3xl:text-[1.042vw] flex items-center justify-center text-base 3xl:p-[0.417vw] p-2 3xl:h-[1.875vw] h-[33px] 3xl:rounded-[0.417vw] hover:bg-[#4169E1] hover:text-white hover:border-[#4169E1]"
              >
                <i className="asetsmng-menu 3xl:text-[0.625vw] text-[12px]"></i>
              </Link>
              <Link
                href={""}
                className="bg-[#4169E1] rounded border text-white 3xl:text-[1.042vw] flex items-center justify-center text-base 3xl:p-[0.417vw] p-2 3xl:h-[1.875vw] h-[33px] 3xl:rounded-[0.417vw]"
              >
                <i className="asetsmng-grid-outline"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 xl:mt-[1.250vw] mt-6 xl:gap-[1.250vw] gap-5">
      <Link href={"/technician/elibrary/allison"} className="bg-white shadow-[0px 1px 2px 0px] shadow-[rgba(0,0,0,0.08)] rounded-lg xl:rounded-[0.521vw] xl:p-[1.042vw] p-5 relative dark:bg-[#13161B]">
          <div className="gap-[8px] 3xl:gap-[0.417vw] grid">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[4px] 3xl:gap-[0.208vw]">
                <div className="">
                  <i className="asetsmng-folder text-[24px] 3xl:text-[1.25vw]"></i>
                </div>
                <div
                  className={`text-[#000000] dark:text-[#FFF] text-[16px] xl:text-[0.833vw] font-semibold`}
                >
                  Allison
                </div>
              </div>
              <div>
                <i
                  className="asetsmng-three-dots-circle text-[14px] xl:text-[0.94vw] align-top"
                  title="Click here for multiple option"
                ></i>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-[4px] 3xl:gap-[0.208vw]">
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                File Size : 1.5 GB
              </div>
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                Folders : 3
              </div>
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                Files : 3
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="3xl:text-[0.625vw] text-[12px] text-[#84878d]">
                Last Updated on: 07/30/2023
              </div>
              <div className="flex items-center gap-[4px] 3xl:gap-[0.208vw]">
                <i className="asetsmng-info-i text-[#4c72e3] 3xl:text-[0.469vw] text-[9px]"></i>
                <div className="text-[#4c72e3] 3xl:text-[0.521vw] text-[10px]">
                  View History
                </div>
              </div>
            </div>
            <div className="gap-[16px] 3xl:gap-[0.833vw] flex items-center justify-center w-full">
              <div className="gap-[8px] cursor-pointer 3xl:gap-[0.417vw] flex items-center justify-center border-[#d3d3ce] border rounded-lg px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] w-full">
                <span className="text-[14px] 3xl:text-[0.729vw]">
                  Open Folder
                </span>
                <i className="asetsmng-open-folder text-[14px] 3xl:text-[0.729vw]"></i>
              </div>
              <div
                onClick={() => setPreviewPopup(true)}
                className="gap-[8px] cursor-pointer 3xl:gap-[0.417vw] flex items-center justify-center border-[#d3d3ce] border rounded-lg px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] w-full"
              >
                <span className="text-[14px] 3xl:text-[0.729vw]">Preview</span>
                <i className="asetsmng-eye text-[14px] 3xl:text-[0.729vw]"></i>
              </div>
            </div>
          </div>
        </Link>
        <div className="bg-white shadow-[0px 1px 2px 0px] shadow-[rgba(0,0,0,0.08)] rounded-lg xl:rounded-[0.521vw] xl:p-[1.042vw] p-5 relative dark:bg-[#13161B]">
          <div className="gap-[8px] 3xl:gap-[0.417vw] grid">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[4px] 3xl:gap-[0.208vw]">
                <div className="">
                  <i className="asetsmng-folder text-[24px] 3xl:text-[1.25vw]"></i>
                </div>
                <div
                  className={`text-[#000000] dark:text-[#FFF] text-[16px] xl:text-[0.833vw] font-semibold`}
                >
                  Baldwin 
                </div>
              </div>
              <div>
                <i
                  className="asetsmng-three-dots-circle text-[14px] xl:text-[0.94vw] align-top"
                  title="Click here for multiple option"
                ></i>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-[4px] 3xl:gap-[0.208vw]">
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                File Size : 1.5 GB
              </div>
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                Folders : 3
              </div>
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                Files : 3
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="3xl:text-[0.625vw] text-[12px] text-[#84878d]">
                Last Updated on: 07/30/2023
              </div>
              <div className="flex items-center gap-[4px] 3xl:gap-[0.208vw]">
                <i className="asetsmng-info-i text-[#4c72e3] 3xl:text-[0.469vw] text-[9px]"></i>
                <div className="text-[#4c72e3] 3xl:text-[0.521vw] text-[10px]">
                  View History
                </div>
              </div>
            </div>
            <div className="gap-[16px] 3xl:gap-[0.833vw] flex items-center justify-center w-full">
              <div className="gap-[8px] 3xl:gap-[0.417vw] flex items-center justify-center border-[#d3d3ce] border rounded-lg px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] w-full">
                <span className="text-[14px] 3xl:text-[0.729vw]">
                  Open Folder
                </span>
                <i className="asetsmng-open-folder text-[14px] 3xl:text-[0.729vw]"></i>
              </div>
              <div
                onClick={() => setPreviewPopup(true)}
                className="gap-[8px] 3xl:gap-[0.417vw] flex items-center justify-center border-[#d3d3ce] border rounded-lg px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] w-full"
              >
                <span className="text-[14px] 3xl:text-[0.729vw]">Preview</span>
                <i className="asetsmng-eye text-[14px] 3xl:text-[0.729vw]"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-[0px 1px 2px 0px] shadow-[rgba(0,0,0,0.08)] rounded-lg xl:rounded-[0.521vw] xl:p-[1.042vw] p-5 relative dark:bg-[#13161B]">
          <div className="gap-[8px] 3xl:gap-[0.417vw] grid">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[4px] 3xl:gap-[0.208vw]">
                <div className="">
                  <i className="asetsmng-folder text-[24px] 3xl:text-[1.25vw]"></i>
                </div>
                <div
                  className={`text-[#000000] dark:text-[#FFF] text-[16px] xl:text-[0.833vw] font-semibold`}
                >
                  Woodword 
                </div>
              </div>
              <div>
                <i
                  className="asetsmng-three-dots-circle text-[14px] xl:text-[0.94vw] align-top"
                  title="Click here for multiple option"
                ></i>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-[4px] 3xl:gap-[0.208vw]">
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                File Size : 1.5 GB
              </div>
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                Folders : 3
              </div>
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                Files : 3
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="3xl:text-[0.625vw] text-[12px] text-[#84878d]">
                Last Updated on: 07/30/2023
              </div>
              <div className="flex items-center gap-[4px] 3xl:gap-[0.208vw]">
                <i className="asetsmng-info-i text-[#4c72e3] 3xl:text-[0.469vw] text-[9px]"></i>
                <div className="text-[#4c72e3] 3xl:text-[0.521vw] text-[10px]">
                  View History
                </div>
              </div>
            </div>
            <div className="gap-[16px] 3xl:gap-[0.833vw] flex items-center justify-center w-full">
              <div className="gap-[8px] cursor-pointer 3xl:gap-[0.417vw] flex items-center justify-center border-[#d3d3ce] border rounded-lg px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] w-full">
                <span className="text-[14px] 3xl:text-[0.729vw]">
                  Open Folder
                </span>
                <i className="asetsmng-open-folder text-[14px] 3xl:text-[0.729vw]"></i>
              </div>
              <div
                onClick={() => setPreviewPopup(true)}
                className="gap-[8px] cursor-pointer 3xl:gap-[0.417vw] flex items-center justify-center border-[#d3d3ce] border rounded-lg px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] w-full"
              >
                <span className="text-[14px] 3xl:text-[0.729vw]">Preview</span>
                <i className="asetsmng-eye text-[14px] 3xl:text-[0.729vw]"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-[0px 1px 2px 0px] shadow-[rgba(0,0,0,0.08)] rounded-lg xl:rounded-[0.521vw] xl:p-[1.042vw] p-5 relative dark:bg-[#13161B]">
          <div className="gap-[8px] 3xl:gap-[0.417vw] grid">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[4px] 3xl:gap-[0.208vw]">
                <div className="">
                  <i className="asetsmng-folder text-[24px] 3xl:text-[1.25vw]"></i>
                </div>
                <div
                  className={`text-[#000000] dark:text-[#FFF] text-[16px] xl:text-[0.833vw] font-semibold`}
                >
                  Arkinson 
                </div>
              </div>
              <div>
                <i
                  className="asetsmng-three-dots-circle text-[14px] xl:text-[0.94vw] align-top"
                  title="Click here for multiple option"
                ></i>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-[4px] 3xl:gap-[0.208vw]">
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                File Size : 1.5 GB
              </div>
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                Folders : 3
              </div>
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                Files : 3
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="3xl:text-[0.625vw] text-[12px] text-[#84878d]">
                Last Updated on: 07/30/2023
              </div>
              <div className="flex items-center gap-[4px] 3xl:gap-[0.208vw]">
                <i className="asetsmng-info-i text-[#4c72e3] 3xl:text-[0.469vw] text-[9px]"></i>
                <div className="text-[#4c72e3] 3xl:text-[0.521vw] text-[10px]">
                  View History
                </div>
              </div>
            </div>
            <div className="gap-[16px] 3xl:gap-[0.833vw] flex items-center justify-center w-full">
              <div className="gap-[8px] cursor-pointer 3xl:gap-[0.417vw] flex items-center justify-center border-[#d3d3ce] border rounded-lg px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] w-full">
                <span className="text-[14px] 3xl:text-[0.729vw]">
                  Open Folder
                </span>
                <i className="asetsmng-open-folder text-[14px] 3xl:text-[0.729vw]"></i>
              </div>
              <div
                onClick={() => setPreviewPopup(true)}
                className="gap-[8px] cursor-pointer 3xl:gap-[0.417vw] flex items-center justify-center border-[#d3d3ce] border rounded-lg px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] w-full"
              >
                <span className="text-[14px] 3xl:text-[0.729vw]">Preview</span>
                <i className="asetsmng-eye text-[14px] 3xl:text-[0.729vw]"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-[0px 1px 2px 0px] shadow-[rgba(0,0,0,0.08)] rounded-lg xl:rounded-[0.521vw] xl:p-[1.042vw] p-5 relative dark:bg-[#13161B]">
          <div className="gap-[8px] 3xl:gap-[0.417vw] grid">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[4px] 3xl:gap-[0.208vw]">
                <div className="">
                  <i className="asetsmng-folder text-[24px] 3xl:text-[1.25vw]"></i>
                </div>
                <div
                  className={`text-[#000000] dark:text-[#FFF] text-[16px] xl:text-[0.833vw] font-semibold`}
                >
                  Justin 
                </div>
              </div>
              <div>
                <i
                  className="asetsmng-three-dots-circle text-[14px] xl:text-[0.94vw] align-top"
                  title="Click here for multiple option"
                ></i>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-[4px] 3xl:gap-[0.208vw]">
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                File Size : 1.5 GB
              </div>
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                Folders : 3
              </div>
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                Files : 3
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="3xl:text-[0.625vw] text-[12px] text-[#84878d]">
                Last Updated on: 07/30/2023
              </div>
              <div className="flex items-center gap-[4px] 3xl:gap-[0.208vw]">
                <i className="asetsmng-info-i text-[#4c72e3] 3xl:text-[0.469vw] text-[9px]"></i>
                <div className="text-[#4c72e3] 3xl:text-[0.521vw] text-[10px]">
                  View History
                </div>
              </div>
            </div>
            <div className="gap-[16px] 3xl:gap-[0.833vw] flex items-center justify-center w-full">
              <div className="gap-[8px] cursor-pointer 3xl:gap-[0.417vw] flex items-center justify-center border-[#d3d3ce] border rounded-lg px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] w-full">
                <span className="text-[14px] 3xl:text-[0.729vw]">
                  Open Folder
                </span>
                <i className="asetsmng-open-folder text-[14px] 3xl:text-[0.729vw]"></i>
              </div>
              <div
                onClick={() => setPreviewPopup(true)}
                className="gap-[8px] cursor-pointer 3xl:gap-[0.417vw] flex items-center justify-center border-[#d3d3ce] border rounded-lg px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] w-full"
              > 
                <span className="text-[14px] 3xl:text-[0.729vw]">Preview</span>
                <i className="asetsmng-eye text-[14px] 3xl:text-[0.729vw]"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-[0px 1px 2px 0px] shadow-[rgba(0,0,0,0.08)] rounded-lg xl:rounded-[0.521vw] xl:p-[1.042vw] p-5 relative dark:bg-[#13161B]">
          <div className="gap-[8px] 3xl:gap-[0.417vw] grid">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[4px] 3xl:gap-[0.208vw]">
                <div className="">
                  <i className="asetsmng-folder text-[24px] 3xl:text-[1.25vw]"></i>
                </div>
                <div
                  className={`text-[#000000] dark:text-[#FFF] text-[16px] xl:text-[0.833vw] font-semibold`}
                >
                 Casa 
                </div>
              </div>
              <div>
                <i
                  className="asetsmng-three-dots-circle text-[14px] xl:text-[0.94vw] align-top"
                  title="Click here for multiple option"
                ></i>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-[4px] 3xl:gap-[0.208vw]">
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                File Size : 1.5 GB
              </div>
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                Folders : 3
              </div>
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                Files : 3
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="3xl:text-[0.625vw] text-[12px] text-[#84878d]">
                Last Updated on: 07/30/2023
              </div>
              <div className="flex items-center gap-[4px] 3xl:gap-[0.208vw]">
                <i className="asetsmng-info-i text-[#4c72e3] 3xl:text-[0.469vw] text-[9px]"></i>
                <div className="text-[#4c72e3] 3xl:text-[0.521vw] text-[10px]">
                  View History
                </div>
              </div>
            </div>
            <div className="gap-[16px] 3xl:gap-[0.833vw] flex items-center justify-center w-full">
              <div className="gap-[8px] cursor-pointer 3xl:gap-[0.417vw] flex items-center justify-center border-[#d3d3ce] border rounded-lg px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] w-full">
                <span className="text-[14px] 3xl:text-[0.729vw]">
                  Open Folder
                </span>
                <i className="asetsmng-open-folder text-[14px] 3xl:text-[0.729vw]"></i>
              </div>
              <div
                onClick={() => setPreviewPopup(true)}
                className="gap-[8px] cursor-pointer 3xl:gap-[0.417vw] flex items-center justify-center border-[#d3d3ce] border rounded-lg px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] w-full"
              >
                <span className="text-[14px] 3xl:text-[0.729vw]">Preview</span>
                <i className="asetsmng-eye text-[14px] 3xl:text-[0.729vw]"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-[0px 1px 2px 0px] shadow-[rgba(0,0,0,0.08)] rounded-lg xl:rounded-[0.521vw] xl:p-[1.042vw] p-5 relative dark:bg-[#13161B]">
          <div className="gap-[8px] 3xl:gap-[0.417vw] grid">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[4px] 3xl:gap-[0.208vw]">
                <div className="">
                  <i className="asetsmng-folder text-[24px] 3xl:text-[1.25vw]"></i>
                </div>
                <div
                  className={`text-[#000000] dark:text-[#FFF] text-[16px] xl:text-[0.833vw] font-semibold`}
                >
                 City Lab
                </div>
              </div>
              <div>
                <i
                  className="asetsmng-three-dots-circle text-[14px] xl:text-[0.94vw] align-top"
                  title="Click here for multiple option"
                ></i>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-[4px] 3xl:gap-[0.208vw]">
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                File Size : 1.5 GB
              </div>
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                Folders : 3
              </div>
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                Files : 3
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="3xl:text-[0.625vw] text-[12px] text-[#84878d]">
                Last Updated on: 07/30/2023
              </div>
              <div className="flex items-center gap-[4px] 3xl:gap-[0.208vw]">
                <i className="asetsmng-info-i text-[#4c72e3] 3xl:text-[0.469vw] text-[9px]"></i>
                <div className="text-[#4c72e3] 3xl:text-[0.521vw] text-[10px]">
                  View History
                </div>
              </div>
            </div>
            <div className="gap-[16px] 3xl:gap-[0.833vw] flex items-center justify-center w-full">
              <div className="gap-[8px] cursor-pointer 3xl:gap-[0.417vw] flex items-center justify-center border-[#d3d3ce] border rounded-lg px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] w-full">
                <span className="text-[14px] 3xl:text-[0.729vw]">
                  Open Folder
                </span>
                <i className="asetsmng-open-folder text-[14px] 3xl:text-[0.729vw]"></i>
              </div>
              <div
                onClick={() => setPreviewPopup(true)}
                className="gap-[8px] cursor-pointer 3xl:gap-[0.417vw] flex items-center justify-center border-[#d3d3ce] border rounded-lg px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] w-full"
              >
                <span className="text-[14px] 3xl:text-[0.729vw]">Preview</span>
                <i className="asetsmng-eye text-[14px] 3xl:text-[0.729vw]"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-[0px 1px 2px 0px] shadow-[rgba(0,0,0,0.08)] rounded-lg xl:rounded-[0.521vw] xl:p-[1.042vw] p-5 relative dark:bg-[#13161B]">
          <div className="gap-[8px] 3xl:gap-[0.417vw] grid">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[4px] 3xl:gap-[0.208vw]">
                <div className="">
                  <i className="asetsmng-folder text-[24px] 3xl:text-[1.25vw]"></i>
                </div>
                <div
                  className={`text-[#000000] dark:text-[#FFF] text-[16px] xl:text-[0.833vw] font-semibold`}
                >
                  HEC
                </div>
              </div>
              <div>
                <i
                  className="asetsmng-three-dots-circle text-[14px] xl:text-[0.94vw] align-top"
                  title="Click here for multiple option"
                ></i>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-[4px] 3xl:gap-[0.208vw]">
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                File Size : 1.5 GB
              </div>
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                Folders : 3
              </div>
              <div className="text-[14px] 3xl:text-[0.729vw] font-normal leading-4">
                Files : 3
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="3xl:text-[0.625vw] text-[12px] text-[#84878d]">
                Last Updated on: 07/30/2023
              </div>
              <div className="flex items-center gap-[4px] 3xl:gap-[0.208vw]">
                <i className="asetsmng-info-i text-[#4c72e3] 3xl:text-[0.469vw] text-[9px]"></i>
                <div className="text-[#4c72e3] 3xl:text-[0.521vw] text-[10px]">
                  View History
                </div>
              </div>
            </div>
            <div className="gap-[16px] 3xl:gap-[0.833vw] flex items-center justify-center w-full">
              <div className="gap-[8px] cursor-pointer 3xl:gap-[0.417vw] flex items-center justify-center border-[#d3d3ce] border rounded-lg px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] w-full">
                <span className="text-[14px] 3xl:text-[0.729vw]">
                  Open Folder
                </span>
                <i className="asetsmng-open-folder text-[14px] 3xl:text-[0.729vw]"></i>
              </div>
              <div
                onClick={() => setPreviewPopup(true)}
                className="gap-[8px] cursor-pointer 3xl:gap-[0.417vw] flex items-center justify-center border-[#d3d3ce] border rounded-lg px-[12px] 3xl:px-[0.625vw] py-[8px] 3xl:py-[0.417vw] w-full"
              >
                <span className="text-[14px] 3xl:text-[0.729vw]">Preview</span>
                <i className="asetsmng-eye text-[14px] 3xl:text-[0.729vw]"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PreviewPopup
        visible={previewPopup}
        onHides={() => setPreviewPopup(false)}
      />
      <AdvancedSearchPopup
        visible={advancedSearch}
        onHides={() => setAdvancedSearch(false)}
      />
      <Docspopup />
    </PageLayout>
  );
};

export default ElibraryPage;
