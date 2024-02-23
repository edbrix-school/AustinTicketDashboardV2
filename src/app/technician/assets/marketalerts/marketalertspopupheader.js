import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as echarts from "echarts";
import ReactEcharts from "echarts-for-react";

function marketalertspopupHeader() {
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

  const [drodownlonValueClick, setDroDownvalueClick] = useState(false);
  const dropwonClick = (e) => {
    if (e === "dropwonClick") {
      document.querySelector("body").classList.add("expandFull");
      setDroDownvalueClick(false);
    } else if (e === "bodyclick" && drodownlonValueClick) {
      document.querySelector("body").classList.remove("expandFull");
      setDroDownvalueClick(false);
    }
  };

  return (
    <div onClick={() => dropwonClick("bodyclick")}>
      {/* Header */}
      <div className="rounded-tl-2xl 3xl:rounded-tl-2xl-[0.833vw] p-[24px] 3xl:p-[1.25vw] z-10 relative border-b border-[#E4E7EC]">
        <div className="space-y-2xl 3xl:space-y-[1.25vw]">
          <div className="flex justify-between">
            <div className="text-[#20232E] font-medium leading-7 3xl:leading-[1.458vw] text-2xl 3xl:text-[1.25vw]">
              Market Alert
            </div>
            <div className="text-[#4169E1] text-[14px] 3xl:text-[0.729vw] font-medium expandHide ExpandTitle">
              <Link
                href={""}
                onClick={() => {
                  dropwonClick("dropwonClick"), setDroDownvalueClick(true);
                }}
              >
                Expand
              </Link>
            </div>
          </div>

          <div className="gap-[24px] 3xl:gap-[1.25vw] flex items-center expandHide">
            <div className="col min-w-[175px] 3xl:min-w-[9.115vw] expandProductImg">
              <div className="border border-[#E4E7EC] rounded-lg 3xl:rounded-[0.417vw] py-[18px] px-[12px] 3xl:px-[0.625vw] 3xl:py-[0.838vw]">
                <Image
                  src={"/assets/images/laptop4.png"}
                  width={175}
                  height={140}
                />
              </div>
            </div>

            <div className="col w-full ExpandHeader1">
              <div className="text-[#20232E] text-[20px] 3xl:-[1.042vw] font-medium ">
                Aspire 5 A515-56-51EV Notebook
              </div>
              <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw]">
                Model: A515-56-51EV
              </div>
              <div>
                <ReactEcharts
                  option={linechartdata}
                  style={{ height: "80%", width: "100%" }}
                />
              </div>
              <div>
                <div>
                  <span className="text-[20px] 3xl:text-[1.042vw] text-[#000000] font-medium ">
                    $3450
                  </span>{" "}
                  <span className="text-[#6D9636] text-[14px] 3xl:text-[0.729vw] font-semibold">
                    20.4% Increased{" "}
                    <i className="asetsmng-arrow-up-line mx-[5px] 3xl:mx-[0.26vw]"></i>
                  </span>
                  <span className="text-[#84878D] text-[12px] 3xl:text-[0.625vw]">
                    Current Price, at 2 PM. On 30th Nov
                  </span>
                </div>
              </div>
            </div>

            <div className="col w-full ExpandHeader2">
              <div className="flex items-center justify-between">
                <div className="col space-y-[6px] 3xl:space-y-[0.313vw]">
                  <div className="text-[#20232E] text-[20px] 3xl:-[1.042vw] font-medium ">
                    Aspire 5 A515-56-51EV Notebook
                  </div>
                  <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw]">
                    Model: A515-56-51EV
                  </div>
                </div>
                <div className="col flex items-start gap-[20px] 3xl:gap-[1.042vw]">
                  <div className="min-w-[200px] 3xl:min-w-[10.417vw]">
                    <ReactEcharts
                      option={linechartdata}
                      style={{ height: "80%", width: "100%" }}
                    />
                  </div>
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
                </div>
              </div>
            </div>

            {/* <div className="col w-full header3">
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
                        <Link
                          href={""}
                          className="inline-block bg-white border border-[#BECDE3] rounded-[8px] 3xl:rounded-[0.417vw] px-[12px] 3xl:px-[0.625vw] py-[10px] 3xl:py-[0.521vw]"
                        >
                          Manage Alert
                        </Link>
                      </div>
                      <div className="col">
                        <Link
                          href={""}
                          className="inline-block bg-white border border-[#BECDE3] rounded-[8px] 3xl:rounded-[0.417vw] px-[12px] 3xl:px-[0.625vw] py-[10px] 3xl:py-[0.521vw]"
                        >
                          Check Price Trend
                        </Link>
                      </div>
                      <div className="col">
                        <Link
                          href={""}
                          className="inline-block bg-white border border-[#BECDE3] rounded-[8px] 3xl:rounded-[0.417vw] px-[12px] 3xl:px-[0.625vw] py-[10px] 3xl:py-[0.521vw]"
                        >
                          Product Information
                        </Link>
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
            </div> */}

          </div>
        </div>
      </div>
      {/* Header */}
    </div>
  );
}

export default marketalertspopupHeader;
