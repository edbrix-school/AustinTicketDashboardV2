import React, { useState } from 'react'
import { InputText } from "primereact/inputtext";

import Link from 'next/link'
import { Checkbox } from "primereact/checkbox";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
function Finacialanalysis() {
    const [rowClick, setRowClick] = useState(true);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [filters, setFilters] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const products0 = [
        {
          id: "SR - 5318",
          code: "AC - 95826",
          Fname: "Routers",
          PODNumber: "POD 1754",
          group: "Hardware",
          Date: "22/06/2011",
          DueDate: "$4,500",
          Time: "1:00 PM",
          School: "Acer - 11223",
          Subject: "$430",
          Mentor: "Acer",
          Phase: "$4500",
          estimate: "10 Years",
          Mood: "-",
          LPlanStatus: "Inprogress",
          PreObsStatus: "Inprogress",
          PostObsStatus: "Pending",
         
        },
        {
          id: "SR - 4538",
          code: "AC - 95752",
          Fname: "Computers",
          PODNumber: "POD 1754",
          group: "Hardware",
          Date: "22/11/2013",
          DueDate: "$5,600",
          Time: "1:00 PM",
          School: "Acer - 11224",
          Subject: "$330",
          Mentor: "Acer",
          Phase: "$5600",
          estimate: "10 Years",
          Mood: "-",
          LPlanStatus: "Submitted",
          PreObsStatus: "Submitted",
          PostObsStatus: "Submitted",
        },
        {
          id: "SR - 2569",
          code: "AC - 55826",
          Fname: "Computers",
          PODNumber: "POD 1754",
          group: "Hardware",
          Date: "22/05/2012",
          DueDate: "$6,700",
          Time: "1:00 PM",
          School: "Acer - 11226",
          Subject: "$430",
          Mentor: "Acer",
          Phase: "$6700",
          estimate: "8 Years",
          Mood: "-",
          LPlanStatus: "Inprogress",
          PreObsStatus: "Inprogress",
          PostObsStatus: "Pending",
        },
        {
          id: "SR - 9853",
          code: "AC - 65826",
          Fname: "Computers",
          PODNumber: "POD 1754",
          group: "Hardware",
          Date: "22/06/2011",
          DueDate: "$3,400",
          Time: "1:00 PM",
          School: "Acer - 11229",
          Subject: "$330",
          Mentor: "Acer",
          Phase: "$3400",
          estimate: "10 Years",
          Mood: "-",
          LPlanStatus: "Inprogress",
          PreObsStatus: "Inprogress",
          PostObsStatus: "Pending",
         
        },
      
        {
          id: "SR - 5624",
          code: "AC - 95863",
          Fname: "Computers",
          PODNumber: "POD 1754",
          group: "Hardware",
          Date: "22/11/2011",
          DueDate: "$4,700",
          Time: "1:00 PM",
          School: "Acer - 11220",
          Subject: "$430",
          Mentor: "Acer",
          Phase: "$4700",
          estimate: "8 Years",
          Mood: "-",
          LPlanStatus: "Inprogress",
          PreObsStatus: "Inprogress",
          PostObsStatus: "Pending",
          
        },
        {
          id: "SR - 3568",
          code: "AC - 45568",
          Fname: "Computers",
          PODNumber: "POD 1754",
          group: "Hardware",
          Date: "22/05/2015",
          DueDate: "$5,500",
          Time: "1:00 PM",
          School: "Acer - 11222",
          Subject: "$330",
          Mentor: "Acer",
          Phase: "$5500",
          estimate: "10 Years",
          Mood: "-",
          LPlanStatus: "Inprogress",
          PreObsStatus: "Inprogress",
          PostObsStatus: "Pending",
          
        },
        {
          id: "SR - 12593",
          code: "AC - 45896",
          Fname: "Chromebook",
          PODNumber: "POD 1754",
          group: "Hardware",
          Date: "22/10/2011",
          DueDate: "$8,200",
          Time: "1:00 PM",
          School: "Acer - 11225",
          Subject: "$430",
          Mentor: "Acer",
          Phase: "$8200",
          estimate: "8 Years",
          Mood: "-",
          LPlanStatus: "Inprogress",
          PreObsStatus: "Inprogress",
          PostObsStatus: "Pending",
          
        },
        {
          id: "SR - 52368",
          code: "AC - 32586",
          Fname: "Laptops",
          PODNumber: "POD 1754",
          group: "Hardware",
          Date: "22/09/2012",
          DueDate: "$3,800",
          Time: "1:00 PM",
          School: "Acer - 11225",
          Subject: "$330",
          Mentor: "Acer",
          Phase: "$3800",
          estimate: "8 Years",
          Mood: "-",
          LPlanStatus: "Inprogress",
          PreObsStatus: "Inprogress",
          PostObsStatus: "Pending",
          
        },
        {
          id: "SR - 42530",
          code: "AC - 12542",
          Fname: "Laptops",
          PODNumber: "POD 1754",
          group: "Hardware",
          Date: "22/07/2010",
          DueDate: "$5,300",
          Time: "1:00 PM",
          School: "Acer - 11225",
          Subject: "$430",
          Mentor: "Acer",
          Phase: "$5300",
          estimate: "10 Years",
          Mood: "-",
          LPlanStatus: "Inprogress",
          PreObsStatus: "Inprogress",
          PostObsStatus: "Pending",
          
        },
      
        
      ];
      const SearchFilterTemplate = (options) => {
        return (
          <>
            <div className="SearchFilter xl:p-[0.729vw] p-3 xl:rounded-[0.521vw] rounded-lg bg-white boxshadow01 xl:space-y-[0.625vw] space-y-3">
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                  placeholder="Search"
                  className="xl:h-[2.083vw] h-[36px]"
                  style={{
                    background: "#F5F6F8",
                    border: "1px solid #BECDE3",
                    borderRadius: "8px",
                  }}
                />
              </span>
              <div className="flex flex-col xl:gap-[0.625vw] gap-2">
                {categories.map((category) => {
                  return (
                    <div key={category.key} className="flex items-center">
                      <Checkbox
                        inputId={category.key}
                        name="category"
                        value={category}
                        // onChange={onCategoryChange}
                        // checked={selectedCategories.some(
                        //   (item) => item.key === category.key
                        // )}
                        className="cutsm_checkbox"
                      />
                      <label htmlFor={category.key} className="ml-2">
                        {category.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        );
      };
      const categories = [
        { name: "Option 1", key: "A" },
        { name: "Option 2", key: "M" },
        { name: "Option 3", key: "P" },
        { name: "Option 4", key: "R" },
        { name: "Option 5", key: "R" },
      ];
  
      const actionBodyTemplate = (rowData) => {
        return (
          <>
            <div className="flex  items-center xl:gap-[0.833vw] gap-3 text-[#888888] xl:text-[0.938vw] text-sm">
              <Link href={""}>
                <i className="cgupod-user-tick"></i>
              </Link>
              <Link href={""} 
            //   onClick={() => settdCandidateGroupview(true)}
              >
                <i className="asetsmng-eye"></i>
              </Link>
              <Link href={""}>
                <i className="asetsmng-edit-rounded-box"></i>
              </Link>
             
            </div>
          </>
        );
      };
      const handleChange = (event) => {
        setInputValue(event.target.value);
      };
    
      const clearInput = () => {
        setInputValue('');
      };
    return (
        <>
            <div className='grid grid-cols-5 gap-[20px] xl:gap-[1.042vw] mt-[24px] xl:mt-[1.25vw]'>
                <div className='col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC] pl-[16px] xl:pl-[0.833vw]'>
                        <div className='text-[#20232E] text-[16px] xl:text-[0.866vw] py-[12px]  xl:py-[0.625vw] ' >Total Value of All Assets</div>
                        <div className='border border-[#E4E7EC] px-[12px] py-[6px] xl:px-[0.625vw] xl:py-[0.313vw] text-[#20232E] text-[12px] xl:text-[0.625vw] font-medium bg-[#E4E7EC] rounded-[6px] inline-block'>
                            Assets Value
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='my-[12px] xl:my-[0.625vw]'>
                                <div className='text-[#3A3E49] text-[36px] xl:text-[1.875vw] font-medium '>$3M</div>
                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw]  '>Total Value</div>
                            </div>
                            <div className='m-[16px] xl:m-[0.866vw]'>
                                <div className='flex items-center '>
                                    <div className='text-[#20232E] text-[16px] font-medium xl:text-[0.866vw] mr-[6px] xl:mr-[0.313vw]'>2%</div>
                                    <div><i className='asetsmng-arrow-up-circle-fill text-[16px]  text-[#057A55]'></i></div>
                                </div>

                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw] '>by last period</div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC] pl-[16px] xl:pl-[0.833vw]'>
                        <div className='text-[#20232E] text-[16px] xl:text-[0.866vw] py-[12px]  xl:py-[0.625vw] ' >Assets Expiring in 7 Days</div>
                        <div className='border border-[#E4E7EC] px-[12px] py-[6px] xl:px-[0.625vw] xl:py-[0.313vw] text-[#20232E] text-[12px] xl:text-[0.625vw] font-medium bg-[#E4E7EC] rounded-[6px] inline-block'>
                            Short-Term
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='my-[12px] xl:my-[0.625vw]'>
                                <div className='text-[#3A3E49] text-[36px] xl:text-[1.875vw] font-medium '>102</div>
                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw]  '>Total Expiring</div>
                            </div>
                            <div className='m-[16px] xl:m-[0.866vw]'>
                                <div className='flex items-center '>
                                    <div className='text-[#20232E] text-[16px] font-medium xl:text-[0.866vw] mr-[6px] xl:mr-[0.313vw]'>2%</div>
                                    <div><i className='asetsmng-arrow-up-circle-fill text-[16px]  text-[#057A55]'></i></div>
                                </div>

                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw] '>by last period</div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC] pl-[16px] xl:pl-[0.833vw]'>
                        <div className='text-[#20232E] text-[16px] xl:text-[0.866vw] py-[12px]  xl:py-[0.625vw] ' >Total Cost of Replacement</div>
                        <div className='border border-[#E4E7EC] px-[12px] py-[6px] xl:px-[0.625vw] xl:py-[0.313vw] text-[#20232E] text-[12px] xl:text-[0.625vw] font-medium bg-[#E4E7EC] rounded-[6px] inline-block'>
                            Short-Term Expiring Assets
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='my-[12px] xl:my-[0.625vw]'>
                                <div className='text-[#3A3E49] text-[36px] xl:text-[1.875vw] font-medium '>$340M</div>
                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw]  '>Total Cost</div>
                            </div>
                            <div className='m-[16px] xl:m-[0.866vw]'>
                                <div className='flex items-center '>
                                    <div className='text-[#20232E] text-[16px] font-medium xl:text-[0.866vw] mr-[6px] xl:mr-[0.313vw]'>2%</div>
                                    <div><i className='asetsmng-arrow-up-circle-fill text-[16px]  text-[#057A55]'></i></div>
                                </div>

                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw] '>by last period</div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC] pl-[16px] xl:pl-[0.833vw]'>
                        <div className='text-[#20232E] text-[16px] xl:text-[0.866vw] py-[12px]  xl:py-[0.625vw] ' >Assets Expiring in Current Quarter</div>
                        <div className='border border-[#E4E7EC] px-[12px] py-[6px] xl:px-[0.625vw] xl:py-[0.313vw] text-[#20232E] text-[12px] xl:text-[0.625vw] font-medium bg-[#E4E7EC] rounded-[6px] inline-block'>
                            Long-Term
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='my-[12px] xl:my-[0.625vw]'>
                                <div className='text-[#3A3E49] text-[36px] xl:text-[1.875vw] font-medium '>230</div>
                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw]  '>Total Expiring</div>
                            </div>
                            <div className='m-[16px] xl:m-[0.866vw]'>
                                <div className='flex items-center '>
                                    <div className='text-[#20232E] text-[16px] font-medium xl:text-[0.866vw] mr-[6px] xl:mr-[0.313vw]'>2%</div>
                                    <div><i className='asetsmng-arrow-up-circle-fill text-[16px]  text-[#057A55]'></i></div>
                                </div>

                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw] '>by last period</div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC] pl-[16px] xl:pl-[0.833vw]'>
                        <div className='text-[#20232E] text-[16px] xl:text-[0.866vw] py-[12px]  xl:py-[0.625vw] ' >Total Cost of Replacement</div>
                        <div className='border border-[#E4E7EC] px-[12px] py-[6px] xl:px-[0.625vw] xl:py-[0.313vw] text-[#20232E] text-[12px] xl:text-[0.625vw] font-medium bg-[#E4E7EC] rounded-[6px] inline-block'>
                            Long-Term Expiring Assets
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='my-[12px] xl:my-[0.625vw]'>
                                <div className='text-[#3A3E49] text-[36px] xl:text-[1.875vw] font-medium '>$560M</div>
                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw]  '>Total Cost</div>
                            </div>
                            <div className='m-[16px] xl:m-[0.866vw]'>
                                <div className='flex items-center '>
                                    <div className='text-[#20232E] text-[16px] font-medium xl:text-[0.866vw] mr-[6px] xl:mr-[0.313vw]'>2%</div>
                                    <div><i className='asetsmng-arrow-up-circle-fill text-[16px]  text-[#057A55]'></i></div>
                                </div>

                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw] '>by last period</div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className='border borde-[#E4E7EC] shadow-sm shadow-[#00000014] rounded-lg mt-[24px] xl:mt-[1.25vw]'>

                {/* <div className='py-[22px] xl:py-[1.146vw]'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <div className='text-[#3A3E49] text-[16px] xl:text-[0.866vw] font-medium'>Manage Assets</div>
                            <div className='bg-[#F9F9FC] rounded-[16px] xl:rounded-[0.866vw] py-[4px] px-[12px] xl:px-[0.625vw] xl:py-[0.208vw]'>
                                <div className='text-[#84878D] text-[12px] xl:text-[0.625vw] '>Display 1 to 10 of 150</div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <diV>
                                <span className="p-input-icon-right">
                                    <i className="pi pi-search" />
                                    <InputText placeholder="Search" />
                                </span>
                            </diV>

                            <Link href="#" className='border border-[#4169E1] text-[#4169E1] text-[12px] xl:text-[0.625vw] py-[10px] px-[16px] xl:py-[0.521vw] rounded-[8px] xl:px[0.866vw] mx-[8px] xl:mx-[0.417vw]'>
                                <i className='asetsmng-plus-rounded-box text-[14px] xl:text-[0.729vw] mr-[8px] xl:mr-[0.417vw]'></i>
                                Add Assets
                            </Link>

                            <Link href="#" className='text-[#84878D] border border-[#84878D] text-[12px] xl:text-[0.625vw] py-[10px] px-[16px] xl:py-[0.521vw] rounded-[8px] xl:px[0.866vw] mr-[8px] xl:mr-[0.417vw]'>
                                <i className='asetsmng-open-folder mr-[8px] xl:mr-[0.417vw] text-14px xl:text-[0.729vw] text-[#84878D]'></i>
                                Supporting Documnets</Link>
                            <Link href="#" className='text-[#84878D] border border-[#84878D] text-[12px] xl:text-[0.625vw] py-[10px] px-[16px] xl:py-[0.521vw] rounded-[8px] xl:px[0.866vw] mr-[8px] xl:mr-[0.417vw]'>
                                <i className='asetsmng-import mr-[8px] xl:mr-[0.417vw] text-14px xl:text-[0.729vw] text-[#84878D]'></i>
                                Import</Link>
                            <Link href="#" className='text-[#84878D] border border-[#84878D] text-[12px] xl:text-[0.625vw] py-[10px] px-[16px] xl:py-[0.521vw] rounded-[8px] xl:px[0.866vw] mr-[8px] xl:mr-[0.417vw]'>
                                <i className='asetsmng-export mr-[8px] xl:mr-[0.417vw] text-14px xl:text-[0.729vw] text-[#84878D]'></i>
                                Export</Link>
                            <Link href="#" className='text-[#84878D] border border-[#84878D] text-[12px] xl:text-[0.625vw] py-[10px] px-[9px] xl:py-[0.521vw] rounded-[8px] xl:px[0.469vw] mr-[8px] xl:mr-[0.417vw]'>
                                <i className='asetsmng-map-view  text-14px xl:text-[0.729vw] text-[#84878D]'></i>
                            </Link>
                            <Link href="#" className='text-[#ffffff] bg-[#4169E1] border border-[#4169E1] text-[12px] xl:text-[0.625vw] py-[10px] px-[9px] xl:py-[0.521vw] rounded-[8px] xl:px[0.469vw] mr-[8px] xl:mr-[0.417vw]'>
                                <i className='asetsmng-map-view  text-14px xl:text-[0.729vw] text-[#ffffff]'></i>
                            </Link>
                            <Link href="#" className='text-[#84878D] border border-[#EAE0E0] text-[12px] xl:text-[0.625vw] py-[10px] px-[9px] xl:py-[0.521vw] rounded-[8px] xl:px[0.469vw] mr-[8px] xl:mr-[0.417vw]'>
                                <i className='asetsmng-arrow-left-think  text-14px xl:text-[0.729vw] text-[#84878D]'></i>
                            </Link>
                            <Link href="#" className='text-[#84878D] border border-[#EAE0E0] text-[12px] xl:text-[0.625vw] py-[10px] px-[9px] xl:py-[0.521vw] rounded-[8px] xl:px[0.469vw] mr-[8px] xl:mr-[0.417vw]'>
                                <i className='asetsmng-arrow-right-think  text-14px xl:text-[0.729vw] text-[#84878D]'></i>
                            </Link>
                        </div>
                    </div>

                </div> */}
 <div className="bg-white dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37] rounded-lg xl:rounded-[0.521vw] ">
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
                    className="text-[#84878D] font-normal xl:text-[1.042vw] text-xs bg-white border border-[#D3D3CE] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1]"
                  >
                    <i className="asetsmng-import"></i>
                    <span>Import</span>
                  </Link>
                  <Link
                    href={""}
                    className="text-[#84878D] font-normal xl:text-[1.042vw] text-xs bg-white border border-[#D3D3CE] xl:py-[0.521vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1]"
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


                <Link
                  href={""}
                  className="text-[#84878D] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#D3D3CE] xl:py-[0.421vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1]"
                >
                   <i className='asetsmng-arrow-left-think '></i>
                  {/* <i className="asetsmng-grid-outline"></i> */}
                </Link>
                <Link
                  href={""}
                  className="text-[#84878D] font-normal xl:text-[0.729vw] text-xs bg-white border border-[#D3D3CE] xl:py-[0.421vw] py-2 xl:px-[0.833vw] px-3 xl:rounded-[0.521vw] rounded-lg flex items-center xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1]"
                >
                 <i className='asetsmng-arrow-right-think '></i>

                  {/* <i className="asetsmng-grid-outline"></i> */}
                </Link>
                </div>
              </div>
            </div>
           
          </div>
         


                <DataTable
            value={products0}
            className="custTable tableCust custCheckBox "
            scrollable
            responsiveLayout="scroll"
            style={{ width: "100%" }}
            paginator
            paginatorTemplate="CurrentPageReport RowsPerPageDropdown PrevPageLink PageLinks NextPageLink custmpaginator"
            currentPageReportTemplate="Rows per page  {first}-{last} of {totalRecords}"
            rowsPerPageOptions={[5, 10, 25, 50]}
            rows={10}
            onSelectionChange={(e) => setSelectedProducts(e.value)}
            selectionMode={rowClick ? null : "checkbox"}
            selection={selectedProducts}
            filters={filters}
            globalFilterFields={[
              "Fname",
              "group",
              "Date",
              "DueDate",
              "Time",
              "School",
              "Subject",
              "Advisor",
              "Phase",
              "estimate",
              "Mood",
            ]}
            dataKey="id"
          >
            <Column
              selectionMode="multiple"
              style={{ minWidth: "1rem", maxWidth: "1rem" }}
            ></Column>
            <Column
              field="code"
              header="Asset Code"
          
              style={{ minWidth: "6rem" }}
            ></Column>
            <Column
              field="id"
              header="Serial Number"
              sortable
              style={{ minWidth: "10rem" }}
            ></Column>
            <Column
              field="Fname"
              header="Category"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "8rem" }}
            ></Column>

            <Column
              field="group"
              header="Group"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "8rem" }}
            ></Column>
             <Column
              field="School"
              header="Model"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "8rem" }}
            ></Column>
            
            <Column
              field="Mentor"
              header="Manufacturer"
              showFilterMatchModes={false}
              showFilterMenuOptions={false}
              showClearButton={false}
              showApplyButton={false}
              filter
              filterElement={SearchFilterTemplate}
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="Date"
              header="Date of Purchase"
              sortable
              style={{ minWidth: "9rem" }}
            ></Column>
            <Column
              field="DueDate"
              header="Purchase Cost"
       
            sortable
              style={{ minWidth: "9rem" }}
            ></Column>
         
           
            <Column
              field="Subject"
              header="Depreciation (Current Value)"
       
            sortable
              style={{ minWidth: "14rem" }}
            ></Column>
       
            <Column
              field="Phase"
              header="Cost of Replacement"
        
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>


            <Column
              field="estimate"
              header="Total Estimated Life"
              className="action-shadow-table"
              frozen
              sortable
              align="center"
              style={{ minWidth: "10rem" }}
          
            ></Column>
             <Column
              field="Date"
              header="Estimated Expiry Date"
              className="action-shadow-table"
              frozen
              sortable
              align="center"
              style={{ minWidth: "10rem" }}
            //   body={actionBodyTemplate}
            ></Column>
             <Column
              field="Date"
              header="Action"
              className="action-shadow-table"
              frozen
              alignFrozen="right"
              align="center"
              style={{ minWidth: "5rem" }}
              body={actionBodyTemplate}
            ></Column>
          </DataTable>
            </div>


        </>
    )
}

export default Finacialanalysis
