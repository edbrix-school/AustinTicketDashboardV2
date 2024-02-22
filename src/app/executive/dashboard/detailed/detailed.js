import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { InputText } from "primereact/inputtext";
import TeamtreetableComponent from "./teamtreetable"
import TechnicianTable from "./techniciantable"
import TechnicianMonthlyTable from "./technicianmonthlytable";
import TechnicianWeeklyTable from "./technicianweeklytable"

export default function Detailed() {
const [inputValue, setInputValue] = useState('');
const handleChange = (event) => {
setInputValue(event.target.value);
};
const clearInput = () => {
setInputValue(''); 
};

const [teamVisible , setteamVisible ] = useState(true);
const [technicianVisible, settechnicianVisible] = useState(false);

const toggleVisibility = () => {
  setteamVisible (!teamVisible );
  settechnicianVisible(!technicianVisible);
};
     
return (
<>
<Tabs className={'executiveCustTavbview'}>
   <div className="bg-white dark:bg-[#13161B] border border-[#F2EEEE] dark:border-[#1F2A37] rounded-lg 3xl:rounded-[0.521vw]">
      <div className="flex flex-wrap items-center justify-between 3xl:px-[1.042vw] px-4 3xl:pt-[1.042vw] pt-4 3xl:pb-[0.990vw] pb-4 border-b border-[#E4E7EC]">
         <div className="flex flex-wrap items-center 3xl:gap-[0.521vw] gap-2">
            <TabList>
               <Tab onClick={toggleVisibility}>Team</Tab>
               <Tab onClick={toggleVisibility}>Technician</Tab>
            </TabList>
            {teamVisible  &&
            <>
            <div className="flex items-center gap-3 3xl:gap-[0.625vw]">
            <Link href={''} className="3xl:py-[0.417vw] py-2 3xl:pl-[0.833vw] pl-4 text-[#4B586E] flex items-center gap-1 3xl:gap-[0.208vw]"><i className="asetsmng-home"></i><span>Team</span></Link>
            <Link href={''} className="text-[#9CA1AB] text-xs"><i className="asetsmng-arrow-right"></i></Link>
            <Link href={''} className="text-[#9CA1AB]"><span>Team 1</span></Link>
            <Link href={''} className="text-[#9CA1AB] text-xs"><i className="asetsmng-arrow-right"></i></Link>
            <Link href={''} className="text-[#9CA1AB]"><span>Category</span></Link>
            <Link href={''} className="text-[#9CA1AB] text-xs"><i className="asetsmng-arrow-right"></i></Link>
            <Link href={''} className="text-[#1570EF]"><span>Sub Category</span></Link>
            </div>            
            </>
            }
            {technicianVisible &&
            <div className="bg-[#F9F9FC] rounded-2xl 3xl:rounded-[0.833vw] py-1 3xl:py-[0.208vw] px-3 3xl:px-[0.625vw] text-[#84878D] text-xs font-medium leading-[18px] 3xl:text-[0.625vw] 3xl:leading-[0.938vw]">
            Display 1 to 10 of 150
            </div>
            }
         </div>
         <div className="flex flex-wrap items-center 3xl:gap-[0.833vw] gap-4">
            <div className="flex flex-wrap items-center 3xl:gap-[1.25vw] gap-5">
               <div>
                  <span className="p-input-icon-left custm-tdsearch p-input-icon-right">
                     <i className="asetsmng-td-search 3xl:text-[0.833vw] text-base text-[#84878D] cursor-pointer w-fit" />
                     <InputText
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Search"
                        className="p-inputtext p-component 3xl:h-[1.875vw] h-[33px] w-[300px] 3xl:w-[16.927vw] placeholder:text-[#888888] placeholder:font-normal placeholder:3xl:text-[0.833vw] "
                        />
                     {inputValue && (
                     <i onClick={clearInput} className="asetsmng-cross 3xl:text-[0.521vw] text-xs w-3 h-4 flex items-center justify-center text-[#84878D] cursor-pointer" />
                     )}  
                  </span>
               </div>
               <div className="flex flex-wrap items-center 3xl:gap-[0.521vw] gap-2">
                  <Link
                     href={""}
                     className="text-[#84878D] font-normal 3xl:text-[0.729vw] text-xs bg-white border border-[#D3D3CE] 3xl:py-[0.521vw] py-2 3xl:px-[0.833vw] px-3 3xl:rounded-[0.521vw] rounded-lg flex items-center 3xl:gap-[0.521vw] gap-2 dark:bg-[#13161B] dark:border-[#374151] dark:text-[#818181] h-[33px] 3xl:h-[1.875vw] hover:text-[#4169E1] hover:border-[#4169E1]"
                     >
                  <i className="asetsmng-export"></i>
                  <span>Export</span>
                  </Link>
               </div>
            </div>
         </div>
      </div>
      <div>
    </div>
    
      <TabPanel>
      <div>
      <Tabs className={'executiveTableInnerTab'}>
      <div className="3xl:py-[0.417vw] py-2 3xl:px-[1.042vw] px-5">
      <TabList>
      <Tab>All</Tab>
      <Tab>Monthly</Tab>
      <Tab>Weekly</Tab>
      </TabList>
      </div>
      <div>
      <TabPanel>
      <TeamtreetableComponent />
      </TabPanel>
      <TabPanel>
      <TeamtreetableComponent />
      </TabPanel>
      <TabPanel>
      <TeamtreetableComponent />
      </TabPanel>
      </div>
      </Tabs>
      </div>
      </TabPanel>
      <TabPanel>
      <Tabs className={'executiveTableInnerTab'}>
      <div className="3xl:py-[0.417vw] py-2 3xl:px-[1.042vw] px-5">
      <TabList>
      <Tab>All</Tab>
      <Tab>Monthly</Tab>
      <Tab>Weekly</Tab>
      </TabList>
      </div>
      <div>
      <TabPanel>
      <TechnicianTable />
      </TabPanel>
      <TabPanel>
      <TechnicianMonthlyTable />
      </TabPanel>
      <TabPanel>
      <TechnicianWeeklyTable />
      </TabPanel>
      </div>
      </Tabs>
      </TabPanel>
   </div>
</Tabs>
</>
)
}