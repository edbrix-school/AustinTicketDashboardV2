"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FilterComponent from "@/app/components/filtercomponent";
import PageLayout from "@/app/components/pagelayout/pagelayout";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import ChartWrapper from "@/app/components/chartwrapper";
import { Dropdown } from "primereact/dropdown";
import LineChartwithShadow from "@/app/components/charts/linechartwithshadow";
import LineChartwithShadow1 from "@/app/components/charts/linechartwithshadow1";
import PerformanceTrend from "@/app/components/charts/performancetrend";
import TreeMap from "@/app/components/charts/treemapchart";
import Image from "next/image";
import TicketsbyPriority from "@/app/components/charts/ticketsbypriority";
import Piechart from "@/app/components/charts/piechart";
import Assignedticketshourlytrend from "@/app/components/charts/assignedticketshourlytrend";
import Newticketsbyagebarchart from "@/app/components/charts/newticketsbtagebarchart";

export default function Index() {
  const [pageName, setPageName] = useState("Summary");
  const [pageTitle, setPageTitle] = useState("Summary");

  const [selectedCluster, setSelectedCluster] = useState(null);
  const [selectedClusterData, setSelectedClusterData] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [incorrectTickets, setIncorrectTickets] = useState(null);
  const [ticketsSchool, setTicketsSchool] = useState(null);

  const cluster = [
    { name: "All", code: "RM" },
    { name: "With in SLA", code: "NY" },
    { name: "Outside SLA", code: "RM" },
  ];
  const clusterData = [
    { name: "All", code: "RM" },
    { name: "High", code: "NY" },
    { name: "Medium", code: "RM" },
    { name: "Low", code: "MC" },
  ];
  const TicketsData = [
    { name: "New Tickets", code: "RM" },
    { name: "Tickets Resolved", code: "NY" },
    { name: "Re Assigned Tickets", code: "RM" },
  ];
  const TicketsSchoolData = [
    { name: "New", code: "RM" },
    { name: "Assigned", code: "NY" },
    { name: "In Progress", code: "RM" },
    { name: "Awaiting Parts/Updates", code: "RM" },
    { name: "Awaiting User Input", code: "RM" },
    { name: "Resolved", code: "RM" },
    { name: "Closed", code: "RM" },
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
                    setPageName("Summary"), setPageTitle("Dashboard");
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
          <div>
            <TabPanel>
              <FilterComponent />
              <div className="grid grid-cols-12 xl:grid-cols-5 gap-[20px] 3xl:gap-[1.042vw] mt-[24px] 3xl:mt-[1.25vw]">
                <div className="col-span-12 sm:col-span-6  lg:col-span-4 xl:col-span-1 ">
                  <div
                    className="shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC]  bg-[#fff] px-[16px] py-[12px] lg:py-[16px] lg:px-[12px] 3xl:py-[0.833vw] 
                    3xl:px-[0.625vw]"
                  >
                    <div className="text-[#20232E] xl:text-[12px]  3xl:text-[0.866vw] 3xl:mb-[0.729vw] lg:mb-[14px] mb-[14px]">
                      Total Tickets Assigned
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="">
                        <div className="text-[#3A3E49] xl:text-[28px] text-[22px] 3xl:text-[1.875vw] font-medium ">
                          1000
                        </div>
                      </div>
                      <div className="3xl:mt-[0.729vw] lg:mt-[14px] mt-[14px]">
                        <div className="flex items-center  justify-end gap-2">
                          <div className="text-[#20232E] text-[16px] font-medium">
                            2%
                          </div>
                          <div>
                            <i className="asetsmng-arrow-up-circle-fill text-[20px]  text-[#057A55]"></i>
                          </div>
                        </div>
                        <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light">
                          by last period
                        </div>
                        <div className=""></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 2nd card */}
                <div className="col-span-12 sm:col-span-6  lg:col-span-4 xl:col-span-1 ">
                  <div
                    className="shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC]  bg-[#fff] px-[16px] py-[12px] lg:py-[16px] lg:px-[12px] 3xl:py-[0.833vw] 
                    3xl:px-[0.625vw]"
                  >
                    <div className="text-[#20232E] xl:text-[12px]  3xl:text-[0.866vw] 3xl:mb-[0.729vw] lg:mb-[14px] mb-[14px]">
                      Tickets in Awaiting User Input
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="">
                        <div className="text-[#3A3E49] xl:text-[28px] text-[22px] 3xl:text-[1.875vw] font-medium ">
                          80
                          <span className="font-normal text-[16px] 3xl:text-[0.933vw] ml-2">
                            (8%)
                          </span>
                        </div>
                      </div>
                      <div className="3xl:mt-[0.729vw] lg:mt-[14px] mt-[14px]">
                        <div className="flex items-center  justify-end gap-2">
                          <div className="text-[#20232E] text-[16px] font-medium">
                            2%
                          </div>
                          <div>
                            <i className="asetsmng-arrow-up-circle-fill text-[20px]  text-[#057A55]"></i>
                          </div>
                        </div>
                        <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light">
                          by last period
                        </div>
                        <div className=""></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 3rd card */}
                <div className="col-span-12 sm:col-span-6  lg:col-span-4 xl:col-span-1 ">
                  <div
                    className="shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC]  bg-[#fff] px-[16px] py-[12px] lg:py-[16px] lg:px-[12px] 3xl:py-[0.833vw] 
                    3xl:px-[0.625vw]"
                  >
                    <div className="text-[#20232E] xl:text-[12px]  3xl:text-[0.866vw] 3xl:mb-[0.729vw] lg:mb-[14px] mb-[14px]">
                      Ticket In-Progress
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="">
                        <div className="text-[#3A3E49] xl:text-[28px] text-[22px] 3xl:text-[1.875vw] font-medium ">
                          560
                          <span className="font-normal text-[16px] 3xl:text-[0.933vw] ml-2">
                            (56%)
                          </span>
                        </div>
                      </div>
                      <div className="3xl:mt-[0.729vw] lg:mt-[14px] mt-[14px]">
                        <div className="flex items-center  justify-end gap-2">
                          <div className="text-[#20232E] text-[16px] font-medium ">
                            2%
                          </div>
                          <div>
                            <i className="asetsmng-arrow-up-circle-fill text-[20px]  text-[#057A55]"></i>
                          </div>
                        </div>
                        <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light">
                          by last period
                        </div>
                        <div className=""></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 4th card */}
                <div className="col-span-12 sm:col-span-6  lg:col-span-4 xl:col-span-1 ">
                  <div
                    className="shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC]  bg-[#fff] px-[16px] py-[12px] lg:py-[16px] lg:px-[12px] 3xl:py-[0.833vw] 
                    3xl:px-[0.625vw]"
                  >
                    <div className="text-[#20232E] xl:text-[12px]  3xl:text-[0.866vw] 3xl:mb-[0.729vw] lg:mb-[14px] mb-[14px]">
                      Tickets Resolved
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="">
                        <div className="text-[#3A3E49] xl:text-[28px] text-[22px] 3xl:text-[1.875vw] font-medium ">
                          120
                          <span className="font-normal text-[16px] 3xl:text-[0.933vw] ml-2">
                            (12%)
                          </span>
                        </div>
                      </div>
                      <div className="3xl:mt-[0.729vw] lg:mt-[14px] mt-[14px]">
                        <div className="flex items-center  justify-end gap-2">
                          <div className="text-[#20232E] text-[16px] font-medium ">
                            2%
                          </div>
                          <div>
                            <i className="asetsmng-arrow-up-circle-fill text-[20px]  text-[#057A55]"></i>
                          </div>
                        </div>
                        <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light">
                          by last period
                        </div>
                        <div className=""></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 5th card */}
                <div className="col-span-12 sm:col-span-6  lg:col-span-4 xl:col-span-1 ">
                  <div
                    className="shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC]  bg-[#fff] px-[16px] py-[12px] lg:py-[16px] lg:px-[12px] 3xl:py-[0.833vw] 
                    3xl:px-[0.625vw]"
                  >
                    <div className="text-[#20232E] xl:text-[12px]  3xl:text-[0.866vw] 3xl:mb-[0.729vw] lg:mb-[14px] mb-[14px]">
                      Average Feedback Ratings
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="">
                        <div className="text-[#3A3E49] xl:text-[28px] text-[22px] 3xl:text-[1.875vw] font-medium ">
                          3.5
                        </div>
                      </div>
                      <div className="3xl:mt-[0.729vw] lg:mt-[14px] mt-[14px]">
                        <div className="flex items-center  justify-end gap-2">
                          <div className="text-[#20232E] text-[16px] font-medium ">
                            2%
                          </div>
                          <div>
                            <i className="asetsmng-arrow-up-circle-fill text-[20px]  text-[#057A55]"></i>
                          </div>
                        </div>
                        <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light">
                          by last period
                        </div>
                        <div className=""></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[30px] xl:mt-[36px] lg:mt-[36px] 3xl:mt-[1.875vw] mb-[300px  ]">
                <div className="grid grid-cols-2 gap-[24px] 3xl:gap-[1.25vw]">
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
                            <LineChartwithShadow />
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
                                value={selectedClusterData}
                                onChange={(e) =>
                                  setSelectedClusterData(e.value)
                                }
                                options={clusterData}
                                optionLabel="name"
                                placeholder="All"
                                className="w-full"
                              />
                            </div>
                          </div>
                          <div className=" 3xl:h-[19.531vw] xl:h-[375px] lg:h-[360px]">
                            <LineChartwithShadow1 />
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
                                value={performance}
                                onChange={(e) => setPerformance(e.value)}
                                options={clusterData}
                                optionLabel="name"
                                placeholder="All"
                                className="w-full"
                              />
                            </div>
                          </div>
                          <div className=" 3xl:h-[19.531vw] xl:h-[375px] lg:h-[360px]">
                            <PerformanceTrend />
                          </div>
                        </div>
                      }
                    />
                  </div>

                  <div className="bg-white border border-[#E4E7EC] shadow-card rounded-2xl 3xl:rounded-[0.833vw]">
                    <ChartWrapper
                      title={"Incorrect Re-routed Tickets - By SubCategory"}
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
                                value={incorrectTickets}
                                onChange={(e) => setIncorrectTickets(e.value)}
                                options={TicketsData}
                                optionLabel="name"
                                placeholder="All"
                                className="w-full"
                              />
                            </div>
                          </div>
                          <div className=" 3xl:h-[19.531vw] xl:h-[375px] lg:h-[360px] px-5">
                            <TreeMap />
                          </div>
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-12 xl:grid-cols-12 gap-[20px] 3xl:gap-[0.800vw] mt-[24px] 3xl:mt-[1.25vw]">
                <div className="col-span-12 sm:col-span-6  lg:col-span-6 xl:col-span-2 ">
                  <div
                    className="shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC]  bg-[#fff] px-[16px] py-[12px] lg:py-[16px] lg:px-[12px] 3xl:py-[0.833vw] 
                            3xl:px-[0.625vw]"
                  >
                    <div className="flex items-center gap-[16px] 3xl:gap-[0.833vw]">
                      <div>
                        <Image
                          src={`/assets/images/profile.svg`}
                          alt="notification"
                          width={40}
                          height={40}
                          className="3xl:w-[2.083vw] w-[40px] h-auto"
                        />
                      </div>
                      <div>
                        <div className="text-[#20232E] text-[18px] 3xl:text-[0.938vw] font-normal ">
                          Wade Warren
                        </div>
                      </div>
                    </div>
                    <div className="mt-[32px] xl:mt-[30px] lg:mt-[30px] 3xl:mt-[1.900vw]">
                      <div className="flex items-center gap-[16px] 3xl:gap-[0.833vw]">
                        <div className="border border-[#E4E7EC] p-[10px] xl:p-[10px] lg:p-[10px] 3xl:p-[0.469vw] rounded-md">
                          <Image
                            src={`/assets/images/profile-circle.svg`}
                            alt="notification"
                            width={32}
                            height={32}
                            className="3xl:w-[1.667vw] w-[32px] h-auto"
                          />
                        </div>
                        <div>
                          <div className="text-[#262626] text-[22px] 3xl:text-[1.146vw] font-semibold ">
                            3453741
                          </div>
                          <div className="text-[#424242] text-[14px] lg:text-[14px]  3xl:text-[0.729vw] font-light ">
                            Employee ID
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-12  lg:col-span-10 xl:col-span-10">
                  <div
                    className="shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC]  bg-[#fff] px-[16px] py-[12px] lg:py-[16px] lg:px-[12px] 3xl:py-[0.833vw] 
                            3xl:px-[0.625vw]"
                  >
                    <div className="text-[#3A3E49] text-[14px] lg:text-[14px]  3xl:text-[0.729vw] font-medium ">
                      Number of Tickets in each Status Today
                    </div>
                    <div className="flex flex-wrap  mt-[20px] xl:mt-[20px] lg:mt-[20px] 3xl:mt-[0.890vw] w-full ">
                      <div className="border border-[#E4E7EC] p-[16px] xl:p-[10px] lg:p-[16px] 3xl:p-[0.633vw]  rounded-l-lg bg-[#FAFAFA] grow">
                        <div className="text-[#20232E] text-[14px] lg:text-[14px]  3xl:text-[0.729vw] font-light ">
                          New
                        </div>
                        <div className="3xl:mt-[0.417vw] lg:mt-[8px] mt-[8px]">
                          <div className="flex items-center   xl:gap-[2px] lg:gap-1 3xl:gap-2">
                            <div className="text-[#20232E] text-[20px] lg:text-[20px]  3xl:text-[1.25vw] font-semibold ">
                              10
                            </div>
                            <i className="asetsmng-arrow-up-circle-fill text-[16px]  lg:text-[16px]  3xl:text-[0.833vw] text-[#057A55]"></i>{" "}
                            <div className="text-[#057A55] text-[12px] 3xl:text-[0.625vw] text-right font-medium">
                              2%
                            </div>
                            <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light">
                              by yesterday
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 2nd */}
                      <div className="border border-[#E4E7EC] p-[16px] xl:p-[10px] lg:p-[16px] 3xl:p-[0.633vw] bg-[#FAFAFA] grow">
                        <div className="text-[#20232E] text-[14px] lg:text-[14px]  3xl:text-[0.729vw] font-light ">
                          Assigned
                        </div>
                        <div className="3xl:mt-[0.417vw] lg:mt-[8px] mt-[8px]">
                          <div className="flex items-center     xl:gap-[2px] lg:gap-1 3xl:gap-2">
                            <div className="text-[#20232E] text-[20px] lg:text-[20px]  3xl:text-[1.25vw] font-semibold ">
                              12
                            </div>
                            <i className="asetsmng-arrow-up-circle-fill text-[16px]  lg:text-[16px]  3xl:text-[0.833vw] text-[#057A55]"></i>{" "}
                            <div className="text-[#057A55] text-[12px] 3xl:text-[0.625vw] text-right font-medium">
                              2%
                            </div>
                            <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light">
                              by yesterday
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 3rd */}
                      <div className="border border-[#E4E7EC] p-[16px] xl:p-[10px] lg:p-[16px] 3xl:p-[0.633vw] bg-[#FAFAFA] grow">
                        <div className="text-[#20232E] text-[14px] lg:text-[14px]  3xl:text-[0.729vw] font-light ">
                          In-Progress
                        </div>
                        <div className="3xl:mt-[0.417vw] lg:mt-[8px] mt-[8px]">
                          <div className="flex items-center    xl:gap-[2px] lg:gap-1 3xl:gap-2">
                            <div className="text-[#20232E] text-[20px] lg:text-[20px]  3xl:text-[1.25vw] font-semibold ">
                              2
                            </div>
                            <i className="asetsmng-arrow-up-circle-fill text-[16px]  lg:text-[16px]  3xl:text-[0.833vw] text-[#B21E4B]"></i>{" "}
                            <div className="text-[#B21E4B] text-[12px] 3xl:text-[0.625vw] text-right font-medium">
                              2%
                            </div>
                            <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light">
                              by yesterday
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 4th */}
                      <div className="border border-[#E4E7EC] p-[16px] xl:p-[10px] lg:p-[16px] 3xl:p-[0.633vw] bg-[#FAFAFA] grow">
                        <div className="text-[#20232E] text-[14px] lg:text-[14px]  3xl:text-[0.729vw] font-light ">
                          Awaiting Parts/Updates
                        </div>
                        <div className="3xl:mt-[0.417vw] lg:mt-[8px] mt-[8px]">
                          <div className="flex items-center   xl:gap-[2px] lg:gap-1 3xl:gap-2">
                            <div className="text-[#20232E] text-[20px] lg:text-[20px]  3xl:text-[1.25vw] font-semibold ">
                              5
                            </div>
                            <i className="asetsmng-arrow-up-circle-fill text-[16px]  lg:text-[16px]  3xl:text-[0.833vw]  text-[#B21E4B]"></i>{" "}
                            <div className="text-[#B21E4B] text-[12px] 3xl:text-[0.625vw] text-right font-medium">
                              2%
                            </div>
                            <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light">
                              by yesterday
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 5th */}
                      <div className="border border-[#E4E7EC] p-[16px] xl:p-[10px] lg:p-[16px] 3xl:p-[0.633vw] bg-[#FAFAFA] grow">
                        <div className="text-[#20232E] text-[14px] lg:text-[14px]  3xl:text-[0.729vw] font-light ">
                          Awaiting User Input
                        </div>
                        <div className="3xl:mt-[0.417vw] lg:mt-[8px] mt-[8px]">
                          <div className="flex items-center    xl:gap-[2px] lg:gap-1 3xl:gap-2">
                            <div className="text-[#20232E] text-[20px] lg:text-[20px]  3xl:text-[1.25vw] font-semibold ">
                              4
                            </div>
                            <i className="asetsmng-arrow-up-circle-fill text-[16px]  lg:text-[16px]  3xl:text-[0.833vw]  text-[#057A55]"></i>{" "}
                            <div className="text-[#057A55] text-[12px] 3xl:text-[0.625vw] text-right font-medium">
                              2%
                            </div>
                            <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light">
                              by yesterday
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 6th */}
                      <div className="border border-[#E4E7EC] p-[16px] xl:p-[10px] lg:p-[16px] 3xl:p-[0.633vw] bg-[#FAFAFA] grow">
                        <div className="text-[#20232E] text-[14px] lg:text-[14px]  3xl:text-[0.729vw] font-light ">
                          Resolved
                        </div>
                        <div className="3xl:mt-[0.417vw] lg:mt-[8px] mt-[8px]">
                          <div className="flex items-center    xl:gap-[2px] lg:gap-1 3xl:gap-2">
                            <div className="text-[#20232E] text-[20px] lg:text-[20px]  3xl:text-[1.25vw] font-semibold ">
                              20
                            </div>
                            <i className="asetsmng-arrow-up-circle-fill text-[16px]  lg:text-[16px]  3xl:text-[0.833vw]  text-[#B21E4B]"></i>{" "}
                            <div className="text-[#B21E4B] text-[12px] 3xl:text-[0.625vw] text-right font-medium">
                              2%
                            </div>
                            <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light">
                              by yesterday
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* 7th */}
                      <div className="border border-[#E4E7EC] p-[16px] xl:p-[10px] lg:p-[16px] 3xl:p-[0.633vw] rounded-r-lg bg-[#FAFAFA] grow">
                        <div className="text-[#20232E] text-[14px] lg:text-[14px]  3xl:text-[0.729vw] font-light ">
                          Closed
                        </div>
                        <div className="3xl:mt-[0.417vw] lg:mt-[8px] mt-[8px]">
                          <div className="flex items-center    xl:gap-[2px] lg:gap-1 3xl:gap-2">
                            <div className="text-[#20232E] text-[20px] lg:text-[20px]  3xl:text-[1.25vw] font-semibold ">
                              7
                            </div>
                            <i className="asetsmng-arrow-up-circle-fill text-[16px]  lg:text-[16px]  3xl:text-[0.833vw]  text-[#057A55]"></i>{" "}
                            <div className="text-[#057A55] text-[12px] 3xl:text-[0.625vw] text-right font-medium">
                              2%
                            </div>
                            <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light">
                              by yesterday
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[30px] xl:mt-[36px] lg:mt-[36px] 3xl:mt-[1.875vw] mb-[300px  ]">
                <div className="grid grid-cols-2 gap-[24px] 3xl:gap-[1.25vw]">
                  <div className="bg-white border border-[#E4E7EC] shadow-card rounded-2xl 3xl:rounded-[0.833vw]">
                    <ChartWrapper
                      title={"Tickets by Schools/Offices"}
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
                                value={ticketsSchool}
                                onChange={(e) => setTicketsSchool(e.value)}
                                options={TicketsSchoolData}
                                optionLabel="name"
                                placeholder="All"
                                className="w-full"
                              />
                            </div>
                          </div>
                          <div className=" 3xl:h-[19.531vw] xl:h-[375px] lg:h-[360px]">
                            <Piechart />
                          </div>
                        </div>
                      }
                    />
                  </div>

                  <div className="bg-white border border-[#E4E7EC] shadow-card rounded-2xl 3xl:rounded-[0.833vw]">
                    <ChartWrapper
                      title={"Tickets by Priority"}
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
                            <TicketsbyPriority />
                          </div>
                        </div>
                      }
                    />
                  </div>

                  <div className="bg-white border border-[#E4E7EC] shadow-card rounded-2xl 3xl:rounded-[0.833vw]">
                    <ChartWrapper
                      title={"New Tickets to Assigned Tickets  (Hourly Trend)"}
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
                            <Assignedticketshourlytrend
                              seclinecirclecolor={"#E04177"}
                              seclinecolor={"#E04177"}
                              chartshadow={"#E04177"}
                              linechartgradientcolor={"#E04177"}
                            />
                          </div>
                        </div>
                      }
                    />
                  </div>

                  <div className="bg-white border border-[#E4E7EC] shadow-card rounded-2xl 3xl:rounded-[0.833vw]">
                    <ChartWrapper
                      title={"New Tickets By Age"}
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
                          <div className=" 3xl:h-[19.531vw] xl:h-[375px] lg:h-[360px] px-5">
                            <Newticketsbyagebarchart />
                          </div>
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </PageLayout>
  );
}
