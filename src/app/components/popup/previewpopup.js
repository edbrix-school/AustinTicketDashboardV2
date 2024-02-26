import MetadataPage from "@/app/technician/elibrary/metadata/page";
import PreviewTable from "@/app/technician/elibrary/previewtable/page";
import { Sidebar } from "primereact/sidebar";
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Link from "next/link";


export default function PreviewPopup(props) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <Sidebar
        visible={props.visible}
        blockScroll={true}
        position="right"
        onHide={() => props.onHides(false)}
        className="sidebarwidth custmSidebar rounded-l-xl "
        title={props.title}
      >
        <div className="">
          <div className="py-[24px] xl:py-[1.25vw] text-[24px] text-[#20232E]">
            SR - 113
          </div>
          <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
            <div>
              <TabList>
                <div className="flex gap-[16px] 3xl:gap-[0.833vw]">
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 0
                          ? "bg-[#4169E1] text-white active border border-[#4169E1] "
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] text-[#424242] border border-[#EAE0E] "
                      }`}
                    >
                      Preview
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 1
                          ? "bg-[#4169E1] text-white active border border-[#4169E1]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] text-[#424242] border border-[#EAE0E]"
                      }`}
                    >
                      Metadata
                    </div>
                  </Tab>
                </div>
              </TabList>
            </div>
            <div>
            <TabPanel>
                     <div className="h-[400px] 3xl:h-[41.667vw] xl:h-[800px]  lg:h-[600px] ">
                      <PreviewTable/>
                      </div>
              </TabPanel>
              <TabPanel>
              <div className="h-[400px] 3xl:h-[41.667vw] xl:h-[800px] lg:h-[600px]">
                      <MetadataPage/>
                      </div>
              </TabPanel>
            </div>
        
          </Tabs>
          <div className="flex w-full justify-end items-end  xl:px-[20px]  px-[24px] 3xl:px-[1.25vw] xl:py-[30px]  py-[24px] 3xl:py-[1.25vw] bg-[#fff]">
              <Link href={""} className="text-[16px] 3xl:text-[0.833vw] text-[#FFF] bg-[#4169E1] rounded-lg leading-5 px-[12px] py-[8px] ">
              Open this Folder
              </Link>
            </div>
        </div>
      </Sidebar>
    </div>
  );
}
