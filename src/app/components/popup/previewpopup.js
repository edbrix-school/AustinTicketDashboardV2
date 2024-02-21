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
                          ? "bg-[#4169E1] dark:bg-[#4169E1] text-white active border border-[#4169E1] dark:border-[#4169E1]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] dark:bg-[#13161B] text-[#424242] dark:text-[#AAAAAA] border border-[#EAE0E] dark:border-[#374151]"
                      }`}
                    >
                      Preview
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-lg cursor-pointer ${
                        activeTab === 1
                          ? "bg-[#4169E1] dark:bg-[#4169E1] text-white active border border-[#4169E1] dark:border-[#4169E1]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] dark:bg-[#13161B] text-[#424242] dark:text-[#AAAAAA] border border-[#EAE0E] dark:border-[#374151]"
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
                      <PreviewTable/>
              </TabPanel>
              <TabPanel>
                      <MetadataPage/>
              </TabPanel>
            </div>
        
          </Tabs>
          <div className="flex w-full justify-end items-end bottom-0 pr-[24px] 3xl:pr-[1.25vw] p-[24px] 3xl:p-[1.25vw]">
              <Link href={""} className="text-[16px] 3xl:text-[0.833vw] text-[#FFF] bg-[#4169E1] rounded-lg leading-5 px-[12px] py-[8px]">
              Open this Folder
              </Link>
            </div>
        </div>
      </Sidebar>
    </div>
  );
}
