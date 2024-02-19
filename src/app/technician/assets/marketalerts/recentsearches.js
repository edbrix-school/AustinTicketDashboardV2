import Link from "next/link";
import React from "react";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function MarketAlerts() {
  return (
    <>
      <div className="mt-[15px] lg:mt-[24px] xl:mt-[32px] 3xl:mt-[1.667vw]">
        {/* row */}
        <div className="flex justify-between border-b border-[#E4E7EC] pb-[16px] 3xl:pb-[0.833vw]">
            <div className="text-[#20232E]">Recent Searches</div>
            <div className="text-[#4169E1]">
              <Link href={""}>See all Recent Search</Link>
            </div>
          </div>
          <div className="mt-[15px] lg:mt-[24px] xl:mt-[32px] 3xl:mt-[1.667vw]">
            <div className="flex items-center flex-wrap gap-[8px] 3xl:gap-[0.417vw]">
              <div className="bg-[#EDEDF7] border border-[#E4E7EC] px-[16px] py-[10px] 3xl:px-[0.833vw] 3xl:py-[0.521vw] rounded-[4px] 3xl:rounded-[0.208vw]">
              Acer Aspire 5 Gaming Laptop 13th Gen Intel Core i5 <Link href={""}><i className="asetsmng-close-circle text-[16px] 3xl:text-[0.833vw] ml-[8px] 3xl:ml-[0.417vw]"></i></Link></div>
              <div className="bg-[#EDEDF7] border border-[#E4E7EC] px-[16px] py-[10px] 3xl:px-[0.833vw] 3xl:py-[0.521vw] rounded-[4px] 3xl:rounded-[0.208vw]">
                MSI GF63 Thin <Link href={""}><i className="asetsmng-close-circle text-[16px] 3xl:text-[0.833vw] ml-[8px] 3xl:ml-[0.417vw]"></i></Link></div>
              <div className="bg-[#EDEDF7] border border-[#E4E7EC] px-[16px] py-[10px] 3xl:px-[0.833vw] 3xl:py-[0.521vw] rounded-[4px] 3xl:rounded-[0.208vw]">
                ASUS Vivobook 15 <Link href={""}><i className="asetsmng-close-circle text-[16px] 3xl:text-[0.833vw] ml-[8px] 3xl:ml-[0.417vw]"></i></Link></div>
              <div className="bg-[#EDEDF7] border border-[#E4E7EC] px-[16px] py-[10px] 3xl:px-[0.833vw] 3xl:py-[0.521vw] rounded-[4px] 3xl:rounded-[0.208vw]">
                Acer Aspire Lite 12th Gen <Link href={""}><i className="asetsmng-close-circle text-[16px] 3xl:text-[0.833vw] ml-[8px] 3xl:ml-[0.417vw]"></i></Link></div>
              <div className="bg-[#EDEDF7] border border-[#E4E7EC] px-[16px] py-[10px] 3xl:px-[0.833vw] 3xl:py-[0.521vw] rounded-[4px] 3xl:rounded-[0.208vw]">
                HP Laptop 15s, 11th Gen Intel Core i5-1155G7 <Link href={""}><i className="asetsmng-close-circle text-[16px] 3xl:text-[0.833vw] ml-[8px] 3xl:ml-[0.417vw]"></i></Link></div>
              <div className="bg-[#EDEDF7] border border-[#E4E7EC] px-[16px] py-[10px] 3xl:px-[0.833vw] 3xl:py-[0.521vw] rounded-[4px] 3xl:rounded-[0.208vw]">
                Dell G15 5520 Gaming Laptop <Link href={""}><i className="asetsmng-close-circle text-[16px] 3xl:text-[0.833vw] ml-[8px] 3xl:ml-[0.417vw]"></i></Link></div>
              <div className="bg-[#EDEDF7] border border-[#E4E7EC] px-[16px] py-[10px] 3xl:px-[0.833vw] 3xl:py-[0.521vw] rounded-[4px] 3xl:rounded-[0.208vw]">
                Dell 15 Vostro 3510 Laptop <Link href={""}><i className="asetsmng-close-circle text-[16px] 3xl:text-[0.833vw] ml-[8px] 3xl:ml-[0.417vw]"></i></Link></div>
              <div className="bg-[#EDEDF7] border border-[#E4E7EC] px-[16px] py-[10px] 3xl:px-[0.833vw] 3xl:py-[0.521vw] rounded-[4px] 3xl:rounded-[0.208vw]">
                HP Victus Gaming Laptop <Link href={""}><i className="asetsmng-close-circle text-[16px] 3xl:text-[0.833vw] ml-[8px] 3xl:ml-[0.417vw]"></i></Link></div>
              <div className="bg-[#EDEDF7] border border-[#E4E7EC] px-[16px] py-[10px] 3xl:px-[0.833vw] 3xl:py-[0.521vw] rounded-[4px] 3xl:rounded-[0.208vw]">
                Lenovo V14 Gen 2 <Link href={""}><i className="asetsmng-close-circle text-[16px] 3xl:text-[0.833vw] ml-[8px] 3xl:ml-[0.417vw]"></i></Link></div>
              <div className="bg-[#EDEDF7] border border-[#E4E7EC] px-[16px] py-[10px] 3xl:px-[0.833vw] 3xl:py-[0.521vw] rounded-[4px] 3xl:rounded-[0.208vw]">
                Lenovo IdeaPad Slim 3 <Link href={""}><i className="asetsmng-close-circle text-[16px] 3xl:text-[0.833vw] ml-[8px] 3xl:ml-[0.417vw]"></i></Link></div>
              <div className="bg-[#EDEDF7] border border-[#E4E7EC] px-[16px] py-[10px] 3xl:px-[0.833vw] 3xl:py-[0.521vw] rounded-[4px] 3xl:rounded-[0.208vw]">
                ASUS TUF <Link href={""}><i className="asetsmng-close-circle text-[16px] 3xl:text-[0.833vw] ml-[8px] 3xl:ml-[0.417vw]"></i></Link></div>
              <div className="bg-[#EDEDF7] border border-[#E4E7EC] px-[16px] py-[10px] 3xl:px-[0.833vw] 3xl:py-[0.521vw] rounded-[4px] 3xl:rounded-[0.208vw]">
                MSI Modern 15 <Link href={""}><i className="asetsmng-close-circle text-[16px] 3xl:text-[0.833vw] ml-[8px] 3xl:ml-[0.417vw]"></i></Link></div>
              <div className="bg-[#EDEDF7] border border-[#E4E7EC] px-[16px] py-[10px] 3xl:px-[0.833vw] 3xl:py-[0.521vw] rounded-[4px] 3xl:rounded-[0.208vw]">
                Lenovo IdeaPad Flex 5 <Link href={""}><i className="asetsmng-close-circle text-[16px] 3xl:text-[0.833vw] ml-[8px] 3xl:ml-[0.417vw]"></i></Link></div>
              <div className="bg-[#EDEDF7] border border-[#E4E7EC] px-[16px] py-[10px] 3xl:px-[0.833vw] 3xl:py-[0.521vw] rounded-[4px] 3xl:rounded-[0.208vw]">
                Lenovo IdeaPad Slim 5 <Link href={""}><i className="asetsmng-close-circle text-[16px] 3xl:text-[0.833vw] ml-[8px] 3xl:ml-[0.417vw]"></i></Link></div>
              <div className="bg-[#EDEDF7] border border-[#E4E7EC] px-[16px] py-[10px] 3xl:px-[0.833vw] 3xl:py-[0.521vw] rounded-[4px] 3xl:rounded-[0.208vw]">
                Lenovo ThinkPad E14 <Link href={""}><i className="asetsmng-close-circle text-[16px] 3xl:text-[0.833vw] ml-[8px] 3xl:ml-[0.417vw]"></i></Link></div>
            </div>
          </div>
      </div>
    </>
  );
}
