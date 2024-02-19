import React, { useState } from 'react'
import { InputText } from "primereact/inputtext";
import { Sidebar } from 'primereact/sidebar';
import Link from 'next/link'
import { Checkbox } from "primereact/checkbox";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import Financialpopup from './financialpopup';
function Finacialanalysis() {
    const [rowClick, setRowClick] = useState(true);
    const [visible, setVisible] = useState(false);
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
            <div className="SearchFilter 3xl:p-[0.729vw] p-3 3xl:rounded-[0.521vw] rounded-lg bg-white boxshadow01 3xl:space-y-[0.625vw] space-y-3">
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                  placeholder="Search"
                  className="3xl:h-[2.083vw] h-[36px]"
                  style={{
                    background: "#F5F6F8",
                    border: "1px solid #BECDE3",
                    borderRadius: "8px",
                  }}
                />
              </span>
              <div className="flex flex-col 3xl:gap-[0.625vw] gap-2">
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
      const LineChartData = {
        labels: ["2020 Q1", "2020 Q2", "2020 Q3", "2020 Q4", "2020 Q1", "2020 Q2", "2020 Q3", "2020 Q4","2020 Q1", "2020 Q2", "2020 Q3", "2020 Q4",],
        values: ["4650", "4400", "4000", "3510", "2750", "2100","1510","1480","1350","1000","550","350"],
    };
      const categories = [
        { name: "Option 1", key: "A" },
        { name: "Option 2", key: "M" },
        { name: "Option 3", key: "P" },
        { name: "Option 4", key: "R" },
        { name: "Option 5", key: "R" },
      ];
       const depreciationValue=(rowData)=>{
        return(
          <>
          <div className=''  onClick={() => setVisible(true)}>
              {rowData.Subject}
          </div>
          
          </>
        )
       }
  
      const actionBodyTemplate = (rowData) => {
        return (
          <>
            <div className="flex  items-center 3xl:gap-[0.833vw] gap-3 text-[#888888] 3xl:text-[0.938vw] text-sm">
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
            <div className='grid grid-cols-12 xl:grid-cols-5 gap-[20px] 3xl:gap-[1.042vw] mt-[24px] 3xl:mt-[1.25vw]'>
                <div className='col-span-12 sm:col-span-6  lg:col-span-4 xl:col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC] pl-[16px] 3xl:pl-[0.833vw]'>
                        <div className='text-[#20232E] xl:text-[12px]  3xl:text-[0.866vw] py-[12px]  3xl:py-[0.625vw] ' >Total Value of All Assets</div>
                        <div className='border border-[#E4E7EC] px-[12px] py-[6px] 3xl:px-[0.625vw] 3xl:py-[0.313vw] text-[#20232E] text-[10px] 3xl:text-[0.625vw] font-medium bg-[#E4E7EC] rounded-[6px] inline-block'>
                            Assets Value                                                                      
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='my-[12px] 3xl:my-[0.625vw]'>
                                <div className='text-[#3A3E49] xl:text-[28px] text-[22px] 3xl:text-[1.875vw] font-medium '>$3M</div>
                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw]  '>Total Value</div>
                            </div>
                            <div className='m-[16px] 3xl:m-[0.866vw]'>
                                <div className='flex items-center '>
                                    <div className='text-[#20232E] text-[16px] font-medium 3xl:text-[0.866vw] mr-[6px] 3xl:mr-[0.313vw]'>2%</div>
                                    <div><i className='asetsmng-arrow-up-circle-fill text-[16px]  text-[#057A55]'></i></div>
                                </div>

                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw] '>by last period</div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC] pl-[16px] 3xl:pl-[0.833vw]'>
                        <div className='text-[#20232E] xl:text-[12px] text-sm 3xl:text-[0.866vw] py-[12px]  3xl:py-[0.625vw] ' >Assets Expiring in 7 Days</div>
                        <div className='border border-[#E4E7EC] px-[12px] py-[6px] 3xl:px-[0.625vw] 3xl:py-[0.313vw] text-[#20232E] text-[10px] 3xl:text-[0.625vw] font-medium bg-[#E4E7EC] rounded-[6px] inline-block'>
                            Short-Term
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='my-[12px] 3xl:my-[0.625vw]'>
                                <div className='text-[#3A3E49] xl:text-[28px] text-[22px] 3xl:text-[1.875vw] font-medium '>102</div>
                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw]  '>Total Expiring</div>
                            </div>
                            <div className='m-[16px] 3xl:m-[0.866vw]'>
                                <div className='flex items-center '>
                                    <div className='text-[#20232E] text-[16px] font-medium 3xl:text-[0.866vw] mr-[6px] 3xl:mr-[0.313vw]'>2%</div>
                                    <div><i className='asetsmng-arrow-up-circle-fill text-[16px]  text-[#057A55]'></i></div>
                                </div>

                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw] '>by last period</div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC] pl-[16px] 3xl:pl-[0.833vw]'>
                        <div className='text-[#20232E] xl:text-[12px]  3xl:text-[0.866vw] py-[12px]  3xl:py-[0.625vw] ' >Total Cost of Replacement</div>
                        <div className='border border-[#E4E7EC] px-[12px] py-[6px] 3xl:px-[0.625vw] 3xl:py-[0.313vw] text-[#20232E] text-[10px] 3xl:text-[0.625vw] font-medium bg-[#E4E7EC] rounded-[6px] inline-block'>
                            Short-Term Expiring Assets
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='my-[12px] 3xl:my-[0.625vw]'>
                                <div className='text-[#3A3E49] xl:text-[28px] text-[22px] 3xl:text-[1.875vw] font-medium '>$340M</div>
                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw]  '>Total Cost</div>
                            </div>
                            <div className='m-[16px] 3xl:m-[0.866vw]'>
                                <div className='flex items-center '>
                                    <div className='text-[#20232E] text-[16px] font-medium 3xl:text-[0.866vw] mr-[6px] 3xl:mr-[0.313vw]'>2%</div>
                                    <div><i className='asetsmng-arrow-up-circle-fill text-[16px]  text-[#057A55]'></i></div>
                                </div>

                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw] '>by last period</div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC] pl-[16px] 3xl:pl-[0.833vw]'>
                        <div className='text-[#20232E] xl:text-[12px]  3xl:text-[0.866vw] py-[12px]  3xl:py-[0.625vw] ' >Assets Expiring in Current Quarter</div>
                        <div className='border border-[#E4E7EC] px-[12px] py-[6px] 3xl:px-[0.625vw] 3xl:py-[0.313vw] text-[#20232E] text-[10px] 3xl:text-[0.625vw] font-medium bg-[#E4E7EC] rounded-[6px] inline-block'>
                            Long-Term
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='my-[12px] 3xl:my-[0.625vw]'>
                                <div className='text-[#3A3E49] xl:text-[28px] text-[22px] 3xl:text-[1.875vw] font-medium '>230</div>
                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw]  '>Total Expiring</div>
                            </div>
                            <div className='m-[16px] 3xl:m-[0.866vw]'>
                                <div className='flex items-center '>
                                    <div className='text-[#20232E] text-[16px] font-medium 3xl:text-[0.866vw] mr-[6px] 3xl:mr-[0.313vw]'>2%</div>
                                    <div><i className='asetsmng-arrow-up-circle-fill text-[16px]  text-[#057A55]'></i></div>
                                </div>

                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw] '>by last period</div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC] pl-[16px] 3xl:pl-[0.833vw]'>
                        <div className='text-[#20232E] xl:text-[12px]  3xl:text-[0.866vw] py-[12px]  3xl:py-[0.625vw] ' >Total Cost of Replacement</div>
                        <div className='border border-[#E4E7EC] px-[12px] py-[6px] 3xl:px-[0.625vw] 3xl:py-[0.313vw] text-[#20232E] text-[10px] 3xl:text-[0.625vw] font-medium bg-[#E4E7EC] rounded-[6px] inline-block'>
                            Long-Term Expiring Assets
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='my-[12px] 3xl:my-[0.625vw]'>
                                <div className='text-[#3A3E49] xl:text-[28px] text-[22px] 3xl:text-[1.875vw] font-medium '>$560M</div>
                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw]  '>Total Cost</div>
                            </div>
                            <div className='m-[16px] 3xl:m-[0.866vw]'>
                                <div className='flex items-center '>
                                    <div className='text-[#20232E] text-[16px] font-medium 3xl:text-[0.866vw] mr-[6px] 3xl:mr-[0.313vw]'>2%</div>
                                    <div><i className='asetsmng-arrow-up-circle-fill text-[16px]  text-[#057A55]'></i></div>
                                </div>

                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw] '>by last period</div>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


  <div className="bg-white dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37] rounded-lg 3xl:rounded-[0.521vw]">
            <div className="flex flex-wrap items-center justify-between 3xl:px-[1.042vw] px-4 3xl:pt-[1.042vw] pt-4 3xl:pb-[0.990vw] pb-4">
              <div className="flex flex-wrap items-center 3xl:gap-[0.521vw] gap-2">
                <div className="text-[#3A3E49] dark:text-white 3xl:text-[0.833vw] text-sm font-medium 3xl:leading-[1.042vw] leading-5">
                Manage Assets
                </div>
                <div className="text-[#84878D] 3xl:text-[0.625vw] text-xs font-medium 3xl:leading-[0.938vw] leading-5 bg-[#F9F9FC] dark:bg-[#1C2026] 3xl:rounded-[0.938vw] rounded-2xl 3xl:px-[0.729vw] px-3 3xl:py-[0.313vw] py-1">
                  Display 1 to 10 of 150
                </div>
              </div>
              <div className="flex flex-wrap items-center 3xl:gap-[0.833vw] gap-4">
                <div className="flex flex-wrap items-center 3xl:gap-[1.25vw] gap-5">
                <div>
                  <span className="p-input-icon-left custm-tdsearch p-input-icon-right">
                    <i className="asetsmng-td-search 3xl:text-[0.833vw] text-xs text-[#84878D] cursor-pointer w-fit" />
                    <InputText
                    value={inputValue}
                    onChange={handleChange}
                      placeholder="Search"
                      className="p-inputtext p-component 3xl:h-[1.875vw] h-[33px] w-[300px] 3xl:w-[16.927vw] placeholder:text-[#888888] placeholder:font-normal placeholder:3xl:text-[0.833vw] "
                    />
                    {inputValue && (
                    <i onClick={clearInput} className="asetsmng-cross 3xl:text-[0.521vw] text-[10px] leading-4 text-[#84878D] cursor-pointer" />
                    )}  
                  </span>
                </div>
                <div className="flex flex-wrap items-center 3xl:gap-[0.521vw] gap-2">
                <Link
                    href={""}
                    className="text-[#4169E1] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#4169E1] 3xl:py-[0.521vw] py-2 3xl:px-[0.833vw] px-3 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] 3xl:h-[1.875vw]"
                  >
                    <i className="asetsmng-plus-rounded-box"></i>
                    <span>Add Assets</span>
                  </Link>
                  <Link
                    href={""}
                    className="text-[#84878D] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#D3D3CE] 3xl:py-[0.521vw] py-2 3xl:px-[0.833vw] px-3 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] 3xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1]"
                  >
                    <i className="asetsmng-import"></i>
                    <span>Import</span>
                  </Link>
                  <Link
                    href={""}
                    className="text-[#84878D] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#D3D3CE] 3xl:py-[0.521vw] py-2 3xl:px-[0.833vw] px-3 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] 3xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1]"
                  >
                    <i className="asetsmng-export"></i>
                    <span>Export</span>
                  </Link>
                </div>
                </div>
                <div className="flex items-center 3xl:gap-[0.417vw] gap-1.5">
                <Link
                  href={""}
                  className="bg-white rounded border border-[#D3D3CE] text-[#84878D] 3xl:text-[1.042vw] flex items-center justify-center text-base 3xl:p-[0.417vw] p-2 3xl:h-[1.875vw] h-[33px] 3xl:rounded-[0.417vw] hover:bg-[#4169E1] hover:text-white hover:border-[#4169E1]"
                >
                  <i className="asetsmng-map-view"></i>
                </Link>
                <Link
                  href={""}
                  className="bg-[#4169E1] rounded border text-white 3xl:text-[1.042vw] flex items-center justify-center text-base 3xl:p-[0.417vw] p-2 3xl:h-[1.875vw] h-[33px] 3xl:rounded-[0.417vw]"
                >
                  <i className="asetsmng-grid-outline"></i>
                </Link>
                <Link
                  href={""}
                  className="text-[#84878D] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#D3D3CE] 3xl:py-[0.421vw] py-2 3xl:px-[0.833vw] px-3 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] 3xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1]"
                >
                   <i className='asetsmng-arrow-left-think '></i>
           
                </Link>
                <Link
                  href={""}
                  className="text-[#84878D] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#D3D3CE] 3xl:py-[0.421vw] py-2 3xl:px-[0.833vw] px-3 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] 3xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1]"
                >
                 <i className='asetsmng-arrow-right-think '></i>

                </Link>
                </div>
              </div>
            </div>
            <DataTable
              value={products0}
              className="custTable tableCust custCheckBox"
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
                "Type",
                "Assetcode",
                "representative.Serialnumber",
                "District",
                "School",
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
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="DueDate"
              header="Purchase Cost"
       
            sortable
              style={{ minWidth: "10rem" }}
            ></Column>
         
           
            <Column
              field="Subject"
              header="Depreciation (Current Value)"
              body={depreciationValue}
            sortable
              style={{ minWidth: "16rem" }}
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
             
              style={{ minWidth: "12rem" }}
          
            ></Column>
             <Column
              field="Date"
              header="Estimated Expiry Date"
              className="action-shadow-table"
              frozen
              sortable
              
              style={{ minWidth: "12rem" }}
            //   body={actionBodyTemplate}
            ></Column>
             <Column
            
              field="Action"
              header="Action"
              style={{ minWidth: "4rem" }}
              align="center"
              body={actionBodyTemplate}
              sortable
              frozen
              alignFrozen="right"
            ></Column>
            </DataTable>
          </div>
          <Sidebar 
          // visible={props.visible} 
          position="right" className="custmSidebar width740 w-[730px]" 
          // onHide={() => props.onHides(false)}
          Sidebar visible={visible} onHide={() => setVisible(false)}
          >
                {/* Header */}
                <div className="  rounded-tl-2xl xl:rounded-tl-2xl-[0.833vw] 3xl:p-[1.25vw] p-6 z-10 relative">
                    <div className="3xl:space-y-[0.417vw] space-y-2">
                        <div className="text-[#20232E] text-xl font-medium leading-7 3xl:leading-[1.458vw] 3xl:text-[1.25vw]">5 Year Trend Analysis</div>
                    </div>
                    <div className='bg-[#F9F9FC] rounded-[8px] h-[500px] mt-[24px] xl:mt-[1.25vw] '>
                       <Financialpopup
                           legend={{
                            show: true,
                            bottom: 30,
                            left: 0,
                            itemWidth: 9,
                            itemHeight: 9,
                            textStyle: {
                                color: "#FFF",
                                fontSize: "10px",
                                fontWeight: 400,
                            }
                        }}
                        labelShow={true}
                        grid={{
                            top: "15%",
                            bottom: "10%",
                            left: "10%",
                            right: "05%",
                        }}
                        data={LineChartData}
                        lineType={"line"}
                        color1={"black"}
                        fillcolor={["#1D224E"]}
                        // borderColor={"#FFF"}
                        lineColor={["#1D224E"]}
                        yAxisNameGap={"33"}
                        yAxisNamePosition={"middle"}
                       
                       />

                    </div>
                    
                </div>           
                {/* Header */} 
                {/*Map view */}
                
                {/*Map view */}
            </Sidebar>
        </>
    )
}

export default Finacialanalysis
