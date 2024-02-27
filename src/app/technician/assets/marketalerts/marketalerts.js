import React, {useState} from "react";
import Productlist from "./productlist";
import Recentsearches from "./recentsearches";
import Marketalertspopup from "./marketalertspopup";
import Marketalertspopupheader from "./marketalertspopupheader";
import Marketalertspopupbody from "./marketalertspopupbody";
import Link from "next/link";
import Image from "next/image";
import * as echarts from "echarts";
import ReactEcharts from "echarts-for-react";

export default function MarketAlerts() {
  const [isAlertPopupVisible, setAlertPopupVisible] = useState(false);
  const [isSearchShow, setSearchShow] = useState(false);
  const linechartdata = {
    grid: {
      left: "0%",
      right: "0%",
      top: "0%",
      bottom: "5%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      // data:props.label,
      data: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
      ],
      show: false,
    },
    yAxis: {
      type: "value",
      show: false,
    },

    series: [
      {
        // data: props.data,
        data: [2, 3.5, 1.8, 3, 3.8, 2.8, 3.4, 2, 3, 3.6, 3, 3.5, 2, 3.3, 2.3],
        type: "line",
        symbol: "none",
        itemStyle: {
          color: "#96CF4C",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              // color: '#96BF0D'rgba(185, 225, 120, 0)
              color: "rgba(185,225,120,1)",
            },

            {
              offset: 1,
              // color: '#ffff'
              color: "rgba(185,225,120,0)",
            },
          ]),
        },
      },
    ],
  };
  return (
    <>
      
      {isSearchShow ?
        <div className="grid grid-cols-12 gap-[50px] 3xl:gap-[2.604vw]">
          <div className="col-span-8">
            <div className="flex items-center justify-between">
              <div className="col">
                <div className="flex items-center gap-[10px] 3xl:gap-[0.521vw]">
                  <div className="text-[#3A3E49] text-[18px] 3xl:text-[0.938vw] font-medium">
                    Search Results
                  </div>
                  <div className="inline-block text-[#4169E1] text-[12px] 3xl:text-[0.625vw] font-medium bg-[#EDEDF7] rounded-full py-[4px] 3xl:py-[0.208vw] px-[12px] 3xl:px-[0.625vw]">
                    Showing 35 results
                  </div>
                </div>
              </div>
              <div className="col">
                <button
                  onClick={()=>setSearchShow(false)}
                  className="inline-block bg-white text-[#4B586E] text-[14px] 3xl:text-[0.729vw] border border-[#BECDE3] rounded-[4px] 3xl:rounded-[4px] p-[8px] 3xl:p-[0.417vw]"
                >
                  <i className="asetsmng-arrow-left-line mr-[8px] 3xl:mr-[0.417vw]"></i>{" "}
                  Back
                </button>
              </div>
            </div>
            <div className="space-y-[20px] 3xl:space-y-[1.042vw]">
              <div className="bg-white rounded-[8px] 3xl:rounded-[0.417vw] boxShadow1 mt-[32px] 3xl:mt-[1.667vw] cursor-pointer" onClick={()=>setAlertPopupVisible(true)}>
                <div className="rounded-tl-2xl 3xl:rounded-tl-2xl-[0.833vw] p-[24px] 3xl:p-[1.25vw] z-10 relative border-b border-[#E4E7EC] ">
                  <div className="">
                    <div className="gap-[24px] 3xl:gap-[1.25vw] flex items-center expandHide">
                      <div className="col min-w-[150px] 3xl:min-w-[7.813vw] expandProductImg">
                        <div className="border border-[#E4E7EC] rounded-lg 3xl:rounded-[0.417vw] py-[18px] px-[12px] 3xl:px-[0.625vw] 3xl:py-[0.838vw]">
                          <Image
                            src={"/assets/images/laptop4.png"}
                            width={150}
                            height={140}
                          />
                        </div>
                      </div>

                      {/* header Three */}
                      <div className="col w-full header3">
                        <div className="flex items-center justify-between">
                          <div className="col">
                            <div className="space-y-[6px] 3xl:space-y-[0.313vw]">
                              <div className="text-[#20232E] text-[20px] 3xl:-[1.042vw] font-medium ">
                                Aspire 5 A515-56-51EV Notebook
                              </div>
                              <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw]">
                                Model: A515-56-51EV
                              </div>
                            </div>
                            <div className="mt-[16px] 3xl:mt-[0.833vw]">
                              <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                                <div className="col">
                                  <button
                                    
                                    className="inline-block bg-white border border-[#BECDE3] rounded-[8px] 3xl:rounded-[0.417vw] px-[12px] 3xl:px-[0.625vw] py-[10px] 3xl:py-[0.521vw]"
                                  >
                                    Manage Alert
                                  </button>
                                </div>
                                <div className="col">
                                  <button
                                    className="inline-block bg-white border border-[#BECDE3] rounded-[8px] 3xl:rounded-[0.417vw] px-[12px] 3xl:px-[0.625vw] py-[10px] 3xl:py-[0.521vw]"
                                  >
                                    Check Price Trend
                                  </button>
                                </div>
                                <div className="col">
                                  <button
                                    className="inline-block bg-white border border-[#BECDE3] rounded-[8px] 3xl:rounded-[0.417vw] px-[12px] 3xl:px-[0.625vw] py-[10px] 3xl:py-[0.521vw]"
                                  >
                                    Product Information
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div>
                              <div className="text-end">
                                <div className="text-[20px] 3xl:text-[1.042vw] text-[#000000] font-medium ">
                                  $3450
                                </div>{" "}
                                <div className="text-[#6D9636] text-[14px] 3xl:text-[0.729vw] font-semibold">
                                  20.4% Increased{" "}
                                  <i className="asetsmng-arrow-up-line mx-[5px] 3xl:mx-[0.26vw]"></i>
                                </div>
                                <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw]">
                                  Current Price, at 2 PM. On 30th Nov
                                </div>
                              </div>
                            </div>
                            <div className="min-w-[200px] 3xl:min-w-[10.417vw] mt-[20px] 3xl:mt-[1.042vw]">
                              <ReactEcharts
                                option={linechartdata}
                                style={{ height: "80%", width: "100%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[8px] 3xl:rounded-[0.417vw] boxShadow1 mt-[32px] 3xl:mt-[1.667vw] cursor-pointer" onClick={()=>setAlertPopupVisible(true)}>
                <div className="rounded-tl-2xl 3xl:rounded-tl-2xl-[0.833vw] p-[24px] 3xl:p-[1.25vw] z-10 relative border-b border-[#E4E7EC] ">
                  <div className="">
                    <div className="gap-[24px] 3xl:gap-[1.25vw] flex items-center expandHide">
                      <div className="col min-w-[150px] 3xl:min-w-[7.813vw] expandProductImg">
                        <div className="border border-[#E4E7EC] rounded-lg 3xl:rounded-[0.417vw] py-[18px] px-[12px] 3xl:px-[0.625vw] 3xl:py-[0.838vw]">
                          <Image
                            src={"/assets/images/laptop4.png"}
                            width={150}
                            height={140}
                          />
                        </div>
                      </div>

                      {/* header Three */}
                      <div className="col w-full header3">
                        <div className="flex items-center justify-between">
                          <div className="col">
                            <div className="space-y-[6px] 3xl:space-y-[0.313vw]">
                              <div className="text-[#20232E] text-[20px] 3xl:-[1.042vw] font-medium ">
                                Aspire 5 A515-56-51EV Notebook
                              </div>
                              <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw]">
                                Model: A515-56-51EV
                              </div>
                            </div>
                            <div className="mt-[16px] 3xl:mt-[0.833vw]">
                              <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                                <div className="col">
                                  <button
                                    className="inline-block bg-white border border-[#BECDE3] rounded-[8px] 3xl:rounded-[0.417vw] px-[12px] 3xl:px-[0.625vw] py-[10px] 3xl:py-[0.521vw]"
                                  >
                                    Manage Alert
                                  </button>
                                </div>
                                <div className="col">
                                  <button
                                    className="inline-block bg-white border border-[#BECDE3] rounded-[8px] 3xl:rounded-[0.417vw] px-[12px] 3xl:px-[0.625vw] py-[10px] 3xl:py-[0.521vw]"
                                  >
                                    Check Price Trend
                                  </button>
                                </div>
                                <div className="col">
                                  <button
                                    className="inline-block bg-white border border-[#BECDE3] rounded-[8px] 3xl:rounded-[0.417vw] px-[12px] 3xl:px-[0.625vw] py-[10px] 3xl:py-[0.521vw]"
                                  >
                                    Product Information
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div>
                              <div className="text-end">
                                <div className="text-[20px] 3xl:text-[1.042vw] text-[#000000] font-medium ">
                                  $3450
                                </div>{" "}
                                <div className="text-[#6D9636] text-[14px] 3xl:text-[0.729vw] font-semibold">
                                  20.4% Increased{" "}
                                  <i className="asetsmng-arrow-up-line mx-[5px] 3xl:mx-[0.26vw]"></i>
                                </div>
                                <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw]">
                                  Current Price, at 2 PM. On 30th Nov
                                </div>
                              </div>
                            </div>
                            <div className="min-w-[200px] 3xl:min-w-[10.417vw] mt-[20px] 3xl:mt-[1.042vw]">
                              <ReactEcharts
                                option={linechartdata}
                                style={{ height: "80%", width: "100%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-[8px] 3xl:rounded-[0.417vw] boxShadow1 mt-[32px] 3xl:mt-[1.667vw] cursor-pointer" onClick={()=>setAlertPopupVisible(true)}>
                <div className="rounded-tl-2xl 3xl:rounded-tl-2xl-[0.833vw] p-[24px] 3xl:p-[1.25vw] z-10 relative border-b border-[#E4E7EC] ">
                    <div className="">
                      <div className="gap-[24px] 3xl:gap-[1.25vw] flex items-center expandHide">
                        <div className="col min-w-[150px] 3xl:min-w-[7.813vw] expandProductImg">
                          <div className="border border-[#E4E7EC] rounded-lg 3xl:rounded-[0.417vw] py-[18px] px-[12px] 3xl:px-[0.625vw] 3xl:py-[0.838vw]">
                            <Image
                              src={"/assets/images/laptop4.png"}
                              width={150}
                              height={140}
                            />
                          </div>
                        </div>

                        {/* header Three */}
                        <div className="col w-full header3">
                          <div className="flex items-center justify-between">
                            <div className="col">
                              <div className="space-y-[6px] 3xl:space-y-[0.313vw]">
                                <div className="text-[#20232E] text-[20px] 3xl:-[1.042vw] font-medium ">
                                  Aspire 5 A515-56-51EV Notebook
                                </div>
                                <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw]">
                                  Model: A515-56-51EV
                                </div>
                              </div>
                              <div className="mt-[16px] 3xl:mt-[0.833vw]">
                                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                                  <div className="col">
                                    <button
                                      className="inline-block bg-white border border-[#BECDE3] rounded-[8px] 3xl:rounded-[0.417vw] px-[12px] 3xl:px-[0.625vw] py-[10px] 3xl:py-[0.521vw]"
                                    >
                                      Manage Alert
                                    </button>
                                  </div>
                                  <div className="col">
                                    <button
                                      className="inline-block bg-white border border-[#BECDE3] rounded-[8px] 3xl:rounded-[0.417vw] px-[12px] 3xl:px-[0.625vw] py-[10px] 3xl:py-[0.521vw]"
                                    >
                                      Check Price Trend
                                    </button>
                                  </div>
                                  <div className="col">
                                    <button
                                      className="inline-block bg-white border border-[#BECDE3] rounded-[8px] 3xl:rounded-[0.417vw] px-[12px] 3xl:px-[0.625vw] py-[10px] 3xl:py-[0.521vw]"
                                    >
                                      Product Information
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div>
                                <div className="text-end">
                                  <div className="text-[20px] 3xl:text-[1.042vw] text-[#000000] font-medium ">
                                    $3450
                                  </div>{" "}
                                  <div className="text-[#6D9636] text-[14px] 3xl:text-[0.729vw] font-semibold">
                                    20.4% Increased{" "}
                                    <i className="asetsmng-arrow-up-line mx-[5px] 3xl:mx-[0.26vw]"></i>
                                  </div>
                                  <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw]">
                                    Current Price, at 2 PM. On 30th Nov
                                  </div>
                                </div>
                              </div>
                              <div className="min-w-[200px] 3xl:min-w-[10.417vw] mt-[20px] 3xl:mt-[1.042vw]">
                                <ReactEcharts
                                  option={linechartdata}
                                  style={{ height: "80%", width: "100%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <div className="bg-white rounded-[8px] 3xl:rounded-[0.417vw] boxShadow1 mt-[32px] 3xl:mt-[1.667vw] cursor-pointer" onClick={()=>setAlertPopupVisible(true)}>
                <div className="rounded-tl-2xl 3xl:rounded-tl-2xl-[0.833vw] p-[24px] 3xl:p-[1.25vw] z-10 relative border-b border-[#E4E7EC] ">
                    <div className="">
                      <div className="gap-[24px] 3xl:gap-[1.25vw] flex items-center expandHide">
                        <div className="col min-w-[150px] 3xl:min-w-[7.813vw] expandProductImg">
                          <div className="border border-[#E4E7EC] rounded-lg 3xl:rounded-[0.417vw] py-[18px] px-[12px] 3xl:px-[0.625vw] 3xl:py-[0.838vw]">
                            <Image
                              src={"/assets/images/laptop4.png"}
                              width={150}
                              height={140}
                            />
                          </div>
                        </div>

                        {/* header Three */}
                        <div className="col w-full header3">
                          <div className="flex items-center justify-between">
                            <div className="col">
                              <div className="space-y-[6px] 3xl:space-y-[0.313vw]">
                                <div className="text-[#20232E] text-[20px] 3xl:-[1.042vw] font-medium ">
                                  Aspire 5 A515-56-51EV Notebook
                                </div>
                                <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw]">
                                  Model: A515-56-51EV
                                </div>
                              </div>
                              <div className="mt-[16px] 3xl:mt-[0.833vw]">
                                <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                                  <div className="col">
                                    <button
                                      className="inline-block bg-white border border-[#BECDE3] rounded-[8px] 3xl:rounded-[0.417vw] px-[12px] 3xl:px-[0.625vw] py-[10px] 3xl:py-[0.521vw]"
                                    >
                                      Manage Alert
                                    </button>
                                  </div>
                                  <div className="col">
                                    <button
                                      className="inline-block bg-white border border-[#BECDE3] rounded-[8px] 3xl:rounded-[0.417vw] px-[12px] 3xl:px-[0.625vw] py-[10px] 3xl:py-[0.521vw]"
                                    >
                                      Check Price Trend
                                    </button>
                                  </div>
                                  <div className="col">
                                    <button
                                      className="inline-block bg-white border border-[#BECDE3] rounded-[8px] 3xl:rounded-[0.417vw] px-[12px] 3xl:px-[0.625vw] py-[10px] 3xl:py-[0.521vw]"
                                    >
                                      Product Information
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div>
                                <div className="text-end">
                                  <div className="text-[20px] 3xl:text-[1.042vw] text-[#000000] font-medium ">
                                    $3450
                                  </div>{" "}
                                  <div className="text-[#6D9636] text-[14px] 3xl:text-[0.729vw] font-semibold">
                                    20.4% Increased{" "}
                                    <i className="asetsmng-arrow-up-line mx-[5px] 3xl:mx-[0.26vw]"></i>
                                  </div>
                                  <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw]">
                                    Current Price, at 2 PM. On 30th Nov
                                  </div>
                                </div>
                              </div>
                              <div className="min-w-[200px] 3xl:min-w-[10.417vw] mt-[20px] 3xl:mt-[1.042vw]">
                                <ReactEcharts
                                  option={linechartdata}
                                  style={{ height: "80%", width: "100%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <Recentsearches />
          </div>
        </div>
        :
        <div className="marketAlertsListpage">
          <div className="w-full max-w-[1144px] 3xl:max-w-[59.583vw] mx-auto ">
            <Productlist setSearchShow={setSearchShow} setAlertPopupVisible={setAlertPopupVisible} />
            <div className="mt-[15px] lg:mt-[24px] xl:mt-[32px] 3xl:mt-[1.667vw]">
              <Recentsearches />
            </div>
          </div>
        </div>
      }
      
      <Marketalertspopup isAlertPopupVisible={isAlertPopupVisible} setAlertPopupVisible={setAlertPopupVisible} />

      <div className="expandFullDiv">
        <div className="grid grid-cols-12 gap-[50px] 3xl:gap-[2.604vw]">
          <div className="col-span-8">
            <div className="bg-white rounded-[8px] 3xl:rounded-[0.417vw] boxShadow1">
              <Marketalertspopupheader />
              <Marketalertspopupbody />
            </div>
          </div>
          <div className="col-span-4">
            <Recentsearches />
          </div>
        </div>
      </div>      
    </>
  );
}
