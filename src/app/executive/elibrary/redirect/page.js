"use client";

import React, { useEffect, useState } from "react";
import PageLayout from "@/app/components/pagelayout/pagelayout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const RedirectPage = ({ redirectTo }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(3);
  const router = useRouter();
  useEffect(() => {
    const timer =
      secondsRemaining > 0 &&
      setTimeout(() => setSecondsRemaining(secondsRemaining - 1), 1000);

    if (secondsRemaining === 0) {
      router.push("/technician/elibrary/previewdocument");
    }

    return () => clearTimeout(timer);
  }, [secondsRemaining, router, redirectTo]);

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
            <div
              onClick={(e) => showMessage(e, toastTopCenter, "info")}
              className="bg-[#4169E1] rounded-lg text-[#FFF] border border-[#becde3] hover:bg-[#AAA] flex items-center gap-[8px] 3xl:gap-[0.417vw] px-[12px] 3xl:px-[0.6vw] py-[8px] 3xl:py-[0.429vw]"
            >
              <span className="3xl:text-[0.729vw] text-[14px] font-normal leading-4 cursor-pointer">
                Save
              </span>
            </div>
            <Link
              href={"/technician/elibrary/adddocument"}
              className="bg-[#FFF] rounded-lg text-[#4b586e] border border-[#becde3]/[0.3] hover:bg-[#AAA]/[0.3] flex items-center gap-[8px] 3xl:gap-[0.417vw] px-[12px] 3xl:px-[0.6vw] py-[8px] 3xl:py-[0.429vw]"
            >
              <span className="3xl:text-[0.729vw] text-[14px] font-normal leading-4 cursor-pointer">
                Cancel
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full grid grid-cols-12 mt-[30px] 3xl:mt-[1.563vw] gap-[24px] 3xl:gap-[1.25vw]">
          <div className="col-span-3">
            <div className="grid gap-[30px] 3xl:gap-[1.563vw]">
              <div className="text-[20px] 3xl:text-[1.042vw] font-medium leading-5">
                Add Document
              </div>
              <div className="border border-[#E4E7EC] rounded-lg h-full">
                <div className="p-[16px] 3xl:p-[0.833vw] ">
                  <div className="p-[16px] 3xl:p-[0.833vw] border-2 border-dashed rounded-lg grid gap-[16px] 3xl:gap-[0.833vw]">
                    <div className="h-[430px] 3xl:h-[22.396vw]">
                      <div className="w-full h-full flex justify-center items-center">
                        <Image
                          src={"/assets/images/importimage.svg"}
                          height={200}
                          width={200}
                          alt="import"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="grid gap-[30px] 3xl:gap-[1.563vw]">
              <div className="text-[20px] 3xl:text-[1.042vw] font-medium leading-5">
                Preview Document
              </div>
              <div className="border border-[#E4E7EC]  rounded-lg h-[500px] 3xl:h-[26.042vw] p-[16px] 3xl:p-[0.833vw]">
                <div className="h-full w-full flex justify-center items-center border-2 border-dashed rounded-lg p-[16px] 3xl:p-[0.833vw]">
                  <Image
                    src={"/assets/images/previewredirect.svg"}
                    height={200}
                    width={350}
                    alt="preview"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="grid gap-[30px] 3xl:gap-[1.563vw]">
              <div className="text-[20px] 3xl:text-[1.042vw] font-medium leading-5">
                Key Fields
              </div>
              <div className="border border-[#E4E7EC] rounded-lg p-[16px] 3xl:p-[0.833vw]">
                <div className="p-[24px] 3xl:p-[1.25vw] grid h-[470px] 3xl:h-[24.479vw] border-2 border-dashed rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default RedirectPage;
