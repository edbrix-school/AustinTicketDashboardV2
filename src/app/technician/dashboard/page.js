"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FilterComponent from "@/app/components/filtercomponent";
import PageLayout from "@/app/components/pagelayout/pagelayout";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import ChartWrapper from "@/app/components/chartwrapper";
import { Dropdown } from 'primereact/dropdown'
import LineChartwithShadow from "@/app/components/charts/linechartwithshadow";
import LineChartwithShadow1 from "@/app/components/charts/linechartwithshadow1";
import PerformanceTrend from "@/app/components/charts/performancetrend";

export default function Index() {
    const [pageName, setPageName] = useState('Summary');
    const [pageTitle, setPageTitle] = useState('Summary');

  const [selectedCluster, setSelectedCluster] = useState(null);
  const cluster = [
    { name: "With in SLA", code: "NY" },
    { name: "With Out SLA", code: "RM" },
  ];
  return (
    
    <PageLayout
      topTab={true}
      pageTitle={pageTitle}
      parentPageName={["Dashboard"]}
      pageName={pageName}
    >
      <div className="xl:mt-[1.198vw] mt-5">
        <Tabs className={"custTavbview"}>
          <div className="flex flex-wrap items-center justify-between gap-y-3">
            <div>
              <TabList>
                <Tab
                  onClick={() => {
                    setPageName("Summary"), setPageTitle("Summary");
                  }}
                >
                 Summary
                </Tab>
                <Tab
                  onClick={() => {
                    setPageName("Quick Add"), setPageTitle("Quick Add");
                  }}
                >
                     Daily Dashboard
                </Tab>
              
              </TabList>
            </div>
            <div>
              <div className="p-input-icon-right custInputsearch">
                <i className="asetsmng-search-big text-[#84878D] xl:text-[1.042vw]" />
                <InputText
                  placeholder="Quick Search"
                  className="placeholder:text-[#84878D] placeholder:xl:text-[0.833vw] placeholder:text-sm placeholder:font-normal"
                />
              </div>
            </div>
          </div>
             <FilterComponent />
          <div>
            <TabPanel>
            <div className='grid grid-cols-12 xl:grid-cols-5 gap-[20px] 3xl:gap-[1.042vw] mt-[24px] 3xl:mt-[1.25vw]'>
            <div className='col-span-12 sm:col-span-6  lg:col-span-4 xl:col-span-1 '>
                <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC]  bg-[#fff] px-[16px] py-[12px] lg:py-[16px] lg:px-[12px] 3xl:py-[0.833vw] 
                    3xl:px-[0.625vw]'>
                        <div className='text-[#20232E] xl:text-[12px]  3xl:text-[0.866vw] 3xl:mb-[0.729vw] lg:mb-[14px] mb-[14px]'>Total Tickets Assigned</div>
                        <div className='flex justify-between items-center'>
                            <div className=''>
                                <div className='text-[#3A3E49] xl:text-[28px] text-[22px] 3xl:text-[1.875vw] font-medium '>1000 
                                </div>
                            </div>
                            <div className='3xl:mt-[0.729vw] lg:mt-[14px] mt-[14px]'>
                                <div className='flex items-center  justify-end gap-2'>
                                    <div className='text-[#20232E] text-[16px] font-medium'>2%</div>
                                   <div><i className='asetsmng-arrow-up-circle-fill text-[20px]  text-[#057A55]'></i></div>
                               </div>
                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light'>by last period</div>
                                <div className=''>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2nd card */}
                <div className='col-span-12 sm:col-span-6  lg:col-span-4 xl:col-span-1 '>
                <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC]  bg-[#fff] px-[16px] py-[12px] lg:py-[16px] lg:px-[12px] 3xl:py-[0.833vw] 
                    3xl:px-[0.625vw]'>
                        <div className='text-[#20232E] xl:text-[12px]  3xl:text-[0.866vw] 3xl:mb-[0.729vw] lg:mb-[14px] mb-[14px]'>Tickets in Awaiting User Input</div>
                        <div className='flex justify-between items-center'>
                            <div className=''>
                                <div className='text-[#3A3E49] xl:text-[28px] text-[22px] 3xl:text-[1.875vw] font-medium '>80 
                                <span className="font-normal text-[16px] 3xl:text-[0.933vw] ml-2">(8%)</span></div>
                            </div>
                            <div className='3xl:mt-[0.729vw] lg:mt-[14px] mt-[14px]'>
                                <div className='flex items-center  justify-end gap-2'>
                                    <div className='text-[#20232E] text-[16px] font-medium'>2%</div>
                                   <div><i className='asetsmng-arrow-up-circle-fill text-[20px]  text-[#057A55]'></i></div>
                               </div>
                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light'>by last period</div>
                                <div className=''>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3rd card */}
                <div className='col-span-12 sm:col-span-6  lg:col-span-4 xl:col-span-1 '>
                <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC]  bg-[#fff] px-[16px] py-[12px] lg:py-[16px] lg:px-[12px] 3xl:py-[0.833vw] 
                    3xl:px-[0.625vw]'>
                        <div className='text-[#20232E] xl:text-[12px]  3xl:text-[0.866vw] 3xl:mb-[0.729vw] lg:mb-[14px] mb-[14px]'>Ticket In-Progress</div>
                        <div className='flex justify-between items-center'>
                            <div className=''>
                                <div className='text-[#3A3E49] xl:text-[28px] text-[22px] 3xl:text-[1.875vw] font-medium '>560 
                                <span className="font-normal text-[16px] 3xl:text-[0.933vw] ml-2">(56%)</span></div>
                            </div>
                            <div className='3xl:mt-[0.729vw] lg:mt-[14px] mt-[14px]'>
                                <div className='flex items-center  justify-end gap-2'>
                                    <div className='text-[#20232E] text-[16px] font-medium '>2%</div>
                                   <div><i className='asetsmng-arrow-up-circle-fill text-[20px]  text-[#057A55]'></i></div>
                               </div>
                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light'>by last period</div>
                                <div className=''>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 {/* 4th card */}
                 <div className='col-span-12 sm:col-span-6  lg:col-span-4 xl:col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC]  bg-[#fff] px-[16px] py-[12px] lg:py-[16px] lg:px-[12px] 3xl:py-[0.833vw] 
                    3xl:px-[0.625vw]'>
                        <div className='text-[#20232E] xl:text-[12px]  3xl:text-[0.866vw] 3xl:mb-[0.729vw] lg:mb-[14px] mb-[14px]'>Tickets Resolved</div>
                        <div className='flex justify-between items-center'>
                            <div className=''>
                                <div className='text-[#3A3E49] xl:text-[28px] text-[22px] 3xl:text-[1.875vw] font-medium '>120 
                                <span className="font-normal text-[16px] 3xl:text-[0.933vw] ml-2">(12%)</span></div>
                            </div>
                            <div className='3xl:mt-[0.729vw] lg:mt-[14px] mt-[14px]'>
                                <div className='flex items-center  justify-end gap-2'>
                                    <div className='text-[#20232E] text-[16px] font-medium '>2%</div>
                                   <div><i className='asetsmng-arrow-up-circle-fill text-[20px]  text-[#057A55]'></i></div>
                               </div>
                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light'>by last period</div>
                                <div className=''>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                 {/* 5th card */}
                 <div className='col-span-12 sm:col-span-6  lg:col-span-4 xl:col-span-1 '>
                    <div className='shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC]  bg-[#fff] px-[16px] py-[12px] lg:py-[16px] lg:px-[12px] 3xl:py-[0.833vw] 
                    3xl:px-[0.625vw]'>
                        <div className='text-[#20232E] xl:text-[12px]  3xl:text-[0.866vw] 3xl:mb-[0.729vw] lg:mb-[14px] mb-[14px]'>Average Feedback Ratings</div>
                        <div className='flex justify-between items-center'>
                            <div className=''>
                                <div className='text-[#3A3E49] xl:text-[28px] text-[22px] 3xl:text-[1.875vw] font-medium '>3.5 
                           
                                </div>
                            </div>
                            <div className='3xl:mt-[0.729vw] lg:mt-[14px] mt-[14px]'>
                                <div className='flex items-center  justify-end gap-2'>
                                    <div className='text-[#20232E] text-[16px] font-medium '>2%</div>
                                   <div><i className='asetsmng-arrow-up-circle-fill text-[20px]  text-[#057A55]'></i></div>
                               </div>
                                <div className='text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light'>by last period</div>
                                <div className=''>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-[30px] xl:mt-[36px] lg:mt-[36px] 3xl:mt-[1.875vw] mb-[300px  ]">
            <div className='grid grid-cols-2 gap-[24px] 3xl:gap-[1.25vw]'>
          <div className="bg-white border border-[#E4E7EC] shadow-card rounded-2xl 3xl:rounded-[0.833vw]">
            <ChartWrapper
              title={"Tickets Resolved % - Trendline"}
              ExportIcon={true}
              tabSection={true}
              infoIcon={true}
              bulbIcon={true}
              downloadIcon={true}
              graphIcon={true}
              data={
                <div className="w-full">
                  <div className="flex justify-end  px-[16px]">
                      <div className="chartdropdown">
                        <Dropdown
                          value={selectedCluster}
                          onChange={(e) => setSelectedCluster(e.value)}
                          options={cluster}
                          optionLabel="name"
                          placeholder="All"
                          className="w-full"
                        />
                      </div>
                  </div>
                <div className=" 3xl:h-[19.531vw] xl:h-[375px] lg:h-[360px]">
                    <LineChartwithShadow/>
                </div>
                 

                  
                </div>
              }
            />

          </div>

          <div className="bg-white border border-[#E4E7EC] shadow-card rounded-2xl 3xl:rounded-[0.833vw]">
            <ChartWrapper
              title={"Tickets Assigned To Resolve"}
              ExportIcon={true}
              tabSection={true}
              infoIcon={true}
              bulbIcon={true}
              downloadIcon={true}
              graphIcon={true}
              data={
                <div className="w-full">
                  <div className="flex justify-end  px-[16px]">
                      <div className="chartdropdown">
                        <Dropdown
                          value={selectedCluster}
                          onChange={(e) => setSelectedCluster(e.value)}
                          options={cluster}
                          optionLabel="name"
                          placeholder="All"
                          className="w-full"
                        />
                      </div>
                  </div>
                <div className=" 3xl:h-[19.531vw] xl:h-[375px] lg:h-[360px]">
                    <LineChartwithShadow1/>
                </div>
                 

                  
                </div>
              }
            />

          </div>

          <div className="bg-white border border-[#E4E7EC] shadow-card rounded-2xl 3xl:rounded-[0.833vw]">
            <ChartWrapper
              title={"Performance Trend - Last 5 Months"}
              ExportIcon={true}
              tabSection={true}
              infoIcon={true}
              bulbIcon={true}
              downloadIcon={true}
              graphIcon={true}
              data={
                <div className="w-full">
                  <div className="flex justify-end  px-[16px]">
                      <div className="chartdropdown">
                        <Dropdown
                          value={selectedCluster}
                          onChange={(e) => setSelectedCluster(e.value)}
                          options={cluster}
                          optionLabel="name"
                          placeholder="All"
                          className="w-full"
                        />
                      </div>
                  </div>
                <div className=" 3xl:h-[19.531vw] xl:h-[375px] lg:h-[360px]">
                    <PerformanceTrend/>
                </div>
                 

                  
                </div>
              }
            />

          </div>
        </div>
            </div>
            </TabPanel>
            <TabPanel>yadav</TabPanel>
          </div>
        </Tabs>
      </div>
    </PageLayout>
  );
}
