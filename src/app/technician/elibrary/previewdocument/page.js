"use client";

import React, { useRef } from "react";
import PageLayout from "@/app/components/pagelayout/pagelayout";
import Image from "next/image";
import { Toast } from 'primereact/toast';

const page = () => {
    const toastTopCenter = useRef(null);
    const showMessage = (event, ref, severity) => {
        const label = event.target.innerText;

        ref.current.show({ severity: "success", summary: "Document saved successfully", life: 3000 });
    };
  return (
    <PageLayout>
      <div>
        <div className="flex justify-between items-center mt-[30px] 3xl:mt-[1.563vw]">
          <div className="bg-[#4169E1] rounded-lg text-[#FFF] flex items-center gap-[8px] 3xl:gap-[0.417vw] px-[12px] 3xl:px-[0.6vw] py-[8px] 3xl:py-[0.429vw] cursor-pointer">
            <span className="3xl:text-[0.729vw] text-[14px] font-normal leading-4 ">
              New Scan
            </span>
            <i className="asetsmng-plus 3xl:text-[0.629vw] text-[12px]"></i>
          </div>
          <div className="flex gap-[16px] 3xl:gap-[0.833vw]">
            <div onClick={(e) => showMessage(e, toastTopCenter, 'info')}
            className="bg-[#4169E1] rounded-lg text-[#FFF] border border-[#becde3] hover:bg-[#AAA] flex items-center gap-[8px] 3xl:gap-[0.417vw] px-[12px] 3xl:px-[0.6vw] py-[8px] 3xl:py-[0.429vw]">
              <span className="3xl:text-[0.729vw] text-[14px] font-normal leading-4 cursor-pointer">
                Save
              </span>
            </div>
            <div className="bg-[#FFF] rounded-lg text-[#4b586e] border border-[#becde3]/[0.3] hover:bg-[#AAA]/[0.3] flex items-center gap-[8px] 3xl:gap-[0.417vw] px-[12px] 3xl:px-[0.6vw] py-[8px] 3xl:py-[0.429vw]">
              <span className="3xl:text-[0.729vw] text-[14px] font-normal leading-4 cursor-pointer">
                Cancel
              </span>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-12 mt-[30px] 3xl:mt-[1.563vw]">
          <div className="col-span-3">
            <div className="grid gap-[30px] 3xl:gap-[1.563vw]">
              <div className="text-[20px] 3xl:text-[1.042vw] font-medium leading-5">
                Add Document
              </div>
              <div className="border-2 border-dashed border-[#E4E7EC] rounded-lg">
                <div className="p-[16px] 3xl:p-[0.833vw] ">
                  <div className="p-[16px] 3xl:p-[0.833vw] border rounded-lg grid grid-cols-12 gap-[16px] 3xl:gap-[0.833vw]">
                    <div className="col-span-4">
                      <Image
                        src={"/assets/images/pdfreport.svg"}
                        height={135}
                        width={85}
                        alt="pdf"
                      />
                    </div>
                    <div className="col-span-8">
                      <div className="flex flex-col justify-start items-start gap-[10px] 3xl:gap-[0.517vw]">
                        <div className="text-[18px] 3xl:text-[0.938vw] leading-5">
                          Report Document
                        </div>
                        <div>
                          <div className="3xl:text-[0.625vw] text-[12px]">
                            <span className="font-normal">Submitted By : </span>
                            <span className="font-semibold">Jhon M. C.</span>
                          </div>
                          <div className="3xl:text-[0.625vw] text-[12px]">
                            <span className="font-normal">Date : </span>
                            <span className="font-semibold">
                              2023,apr 23rd 12:23 pm
                            </span>
                          </div>
                          <div className="3xl:text-[0.625vw] text-[12px]">
                            <span className="font-normal">Format : </span>
                            <span className="font-semibold">PDF</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-[8px] 3xl:text-[0.5vw]">
                        <div className="bg-[#4169E1] rounded-lg text-[#FFF] flex items-center gap-[8px] 3xl:gap-[0.417vw] px-[12px] 3xl:px-[0.6vw] py-[8px] 3xl:py-[0.429vw] cursor-pointer">
                          <span className="3xl:text-[0.729vw] text-[14px] font-normal leading-4 ">
                          Preview
                          </span>
                          <i className="asetsmng-eye 3xl:text-[0.629vw] text-[12px]"></i>
                        </div>
                        <div className="bg-[#E4E4E4] rounded-lg p-[8px] 3xl:p-[0.4vw]">
                          <i className="asetsmng-trash  text-[18px] 3xl:text-[0.938vw]"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6"></div>
          <div className="col-span-3"></div>
        </div>
      </div>
      <Toast ref={toastTopCenter} position="top-center" />
    </PageLayout>
  );
};

export default page;
