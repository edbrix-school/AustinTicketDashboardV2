import React from 'react';
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import Link from "next/link";
import Successfullypopup from './successfullypopup';

export default function Addinventoryauditpopup(props) {
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedSchool, setselectedSchool] = useState(null);
    const [datestart, setDateStart] = useState(null);
    const [dateEnd, setDateEnd] = useState(null);
    const [create,setCreate] = useState(false)
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
  return (
   <>
   <div>
   <Sidebar visible={props.visible}
                position="right"
                onHide={() => props.onHides(false)}
                title={props.title} 
                className="auditpoups custmSidebar w-[922px] xl:w-[48.021vw]">
          <div className="font-medium">
            <div className="header bg-[#F9F9FC]">
              <div className='text-[24px] p-[24px] xl:p-[1.25vw] font-normal text-[#20232E] xl:text-[1.25vw]'>Add Inventory Audit</div>
            </div>
            </div>

            <div className="relative space-y-[20px] xl:space-y-[1.042vw] px-[24px] xl:px-[1.25vw] xl:mt-[1.042vw] mt-[20px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 xl:gap-[1.67vw] gap-y-4 xl:gap-y-[0.689vw]">

                    <div className="custInput custInputBox">
                            <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                                Audit Title<span className="text-[#FF0000]">*</span>
                            </label>
                            <InputText
                                id="gender"
                                aria-describedby="gender"
                                placeholder=" Audit Title"
                                className="w-full  border "
                            />
                        </div>
                        
                        <div className="flex flex-col  w-full custDropdownBox">
                            <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                                District<span className="text-[#FF0000]">*</span>
                            </label>
                            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                placeholder="Select a City" className="w-full md:w-14rem border" />

                        </div>

                        <div className="flex flex-col  w-full custDropdownBox">
                            <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                                School<span className="text-[#FF0000]">*</span>
                            </label>
                            <Dropdown value={selectedSchool} onChange={(e) => setselectedSchool(e.value)} options={cities} optionLabel="name"
                                placeholder="Select a City" className="w-full md:w-14rem border" />

                        </div>



                        <div className="custInput custInputBox">
                            <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                                Location
                            </label>
                            <InputText
                                id="gender"
                                aria-describedby="gender"
                                placeholder="Location"
                                className="w-full  border "
                            />
                        </div>

                        <div className="custInput customCalendar ">
                            <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                                Start Date
                            </label>
                            <Calendar
                                value={datestart}
                                onChange={(e) => setDateStart(e.value)}
                                showIcon
                                placeholder="24/04/2023"
                                className="w-full border"
                            />
                        </div>
                        <div className="custInput customCalendar">
                            <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                                End Date
                            </label>
                            <Calendar
                                value={dateEnd}
                                onChange={(e) => setDateEnd(e.value)}
                                showIcon
                                placeholder="24/04/2023"
                                className="w-full border"
                            />
                        </div>
                        <div className="custInput custInputBox">
                            <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                                Assigned To<span className="text-[#FF0000]">*</span>
                            </label>
                            <InputText
                                id="gender"
                                aria-describedby="gender"
                                placeholder=" Audit Title"
                                className="w-full  border "
                            />
                        </div>

                    </div>
                </div>

            <div className="absolute bottom-5 right-5 flex justify-end gap-2">
                <div><Link href="#" onClick={()=> props.onHides(false)} className="text-[#4B586E] border border-[#BECDE3] font-normal leading-[18px] xl:leading-[0.938vw] text-[14px] xl:text-[0.729vw] py-[10px] xl:py-[0.521vw] px-[12px] xl:px-[0.625vw] rounded-lg">Cancel</Link></div>
                <div><Link href="#" onClick={()=>setCreate(true)} className="text-[#FFFFFF] font-normal leading-[18px] xl:leading-[0.938vw] text-[14px] xl:text-[0.729vw] py-[10px] xl:py-[0.521vw] px-[12px] xl:px-[0.625vw] bg-[#1570EF] rounded-lg">Create</Link></div>
            </div>
</Sidebar>

 <Successfullypopup
 visible={create}
 position="right"
 onHides={()=> setCreate(false)}
 />
   </div>
   </>
  )
}
