"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function MarketAlerts() {
  
  return (
    <>
      <div className="mt-[15px] lg:mt-[40px] xl:mt-[67px] 3xl:mt-[3.49vw]">
        <div className="w-full max-w-[1144px] 3xl:max-w-[59.583vw] mx-auto bg-white rounded-[16px] lg:rounded-[24px] 3xl:rounded-[1.25vw] px-[15px] lg:px-[56px] 3xl:px-[2.917vw] py-[15px] lg:py-[40px] 3xl:py-[2.083vw]">
          <div className="text-[#20232E] text-[18px] lg:text-[24px] 3xl:text-[1.25vw] font-medium text-center">
            Chose Product for Market Alert
          </div>
          <div className="flex justify-center productSearch gap-[16px] 3xl:gap-[0.833vw] mt-[15px] lg:mt-[36px] 3xl:mt-[1.875vw] mb-[24px] lg:mb-[48px] 3xl:mb-[2.5vw]">
            <div className="p-input-icon-left">
              <i className="asetsmng-search-big text-[20px] 3xl:text-[1.042vw] text-[#4B586E]" />
              {/* <i className="asetsmng-microphone text-[20px] 3xl:text-[1.042vw] text-[#4B586E] leading-none" /> */}
              <InputText
                className="placeholder:text-[#84878D] placeholder:text-[16px] 3xl:placeholder:text-[0.833vw]"
                placeholder="Search products by name, brand, etc.,"
              />
             
            </div>
            <div className="col min-h-full">
              <Button type="submit" label="Search" />
            </div>
          </div>
          {/* row */}
          <div className="flex justify-between">
            <div className="text-[#20232E]">Popular Searches</div>
            <div className="text-[#4169E1]">
              <Link href={""}>See all Popular Products</Link>
            </div>
          </div>
          {/* row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-[15px] lg:gap-[32px] 3xl:gap-[1.667vw] mt-[16px] 3xl:mt-[0.833vw]">
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop1.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                HP 15s
              </div>
            </div>
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop2.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                Dell Alienware x16
              </div>
            </div>
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop3.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                HP Pavilion Plus
              </div>
            </div>
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop1.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                HP Victus
              </div>
            </div>
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop2.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                Asus Vivobook S 140
              </div>
            </div>
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop3.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                Acer Predator Triton 17 X
              </div>
            </div>
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop1.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                HP Envy x360 15
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
