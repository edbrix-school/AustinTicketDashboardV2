import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import AssetsRefreshPopup from "./assetsrefreshreportpopup";

export default function AssetPopup(props) {
    const [assetsRefreshShow, setAssetsRefreshShow] = useState(false);
    return (
        <>
            <Sidebar
                visible={props.visible}
                position="right"
                blockScroll={true}
                onHide={props.onHide}
                className="w-[922px]  lg:w-[922px] 3xl:w-[48.021vw] custmSidebar rounded-lg"
            >
                <div className=" ">
                    <div className="bg-[#F9F9FC] px-[20px] 3xl:px-[1.042vw] py-[30px] 3xl:py-[1.563vw]  ">
                        <div className="text-[24px] font-semibold text-[#20232E] lg:text-[24px] 3xl:text-[1.25vw] min-h-[20px] 3xl:min-h-[1.823vw] lg:min-h-[20px] ">
                            Assets
                        </div>
                        <div className="text-[14px] text-[#20232E] lg:text-[16px] 3xl:text-[0.833vw] min-h-[20px] 3xl:min-h-[1.823vw lg:min-h-[20px]">
                            Generate a report based on your selected fields.
                        </div>
                    </div>

                    <div className="space-y-3 p-4 pt-[24px]">
                        <div className="grid gap-5 grid-cols-2  cursor-pointer">
                            <div className="border border-[#E4E7EC] rounded-lg p-3 hover:bg-[#E4E7EC] parent-div hover:border-[#d1d5db]">
                                <div className="text-[16px] lg:text-[18px] text-[#3A3E49] 3xl:text-[0.938vw] min-h-[20px] 3xl:min-h-[1.042vw] lg:min-h-[20px] child-div">
                                    Assets by Type/Status
                                </div>
                                <div className="text-[12px] lg:text-[14px] text-[#84878D] 3xl:text-[0.729vw] min-h-[25px] 3xl:min-h-[1.302vw] lg:min-h-[25px]">
                                    {" "}
                                    Generate a report for the assets to see their type/ status.
                                </div>
                            </div>
                            <div className="border border-[#E4E7EC] rounded-lg p-3 hover:bg-[#E4E7EC] parent-div  hover:border-[#d1d5db]">
                                <div className="text-[16px] lg:text-[18px] text-[#3A3E49] 3xl:text-[0.938vw] min-h-[20px] 3xl:min-h-[1.042vw] lg:min-h-[20px] child-div ">
                                    Checked Out Assets
                                </div>
                                <div className="text-[12px] lg:text-[14px] text-[#84878D] 3xl:text-[0.729vw] min-h-[25px] 3xl:min-h-[1.302vw] lg:min-h-[25px]">
                                    {" "}
                                    Generate a report for the assets which are assigned to
                                    students/Employees
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-5 grid-cols-2  cursor-pointer">
                            <div className="border border-[#E4E7EC] rounded-lg p-3 hover:bg-[#E4E7EC]  parent-div  hover:border-[#d1d5db]">
                                <div className="text-[16px] lg:text-[18px] text-[#3A3E49] 3xl:text-[0.938vw] min-h-[20px] lg:min-h-[20px] 3xl:min-h-[1.042vw] child-div">
                                    Assets by Checked Out to Location
                                </div>
                                <div className="text-[12px] lg:text-[14px]  text-[#84878D] 3xl:text-[0.729vw] min-h-[25px]  lg:min-h-[25px] 3xl:min-h-[1.302vw]">
                                    {" "}
                                    Generate report for the assets which are assigned to various
                                    Locations.
                                </div>
                            </div>
                            <div className="border border-[#E4E7EC] rounded-lg p-3 hover:bg-[#E4E7EC] parent-div  hover:border-[#d1d5db]">
                                <div className="text-[16px] lg:text-[18px] text-[#3A3E49] xl:text-[0.938vw] min-h-[20px] xl:min-h-[1.042vw] lg:min-h-[20px] child-div">
                                    Assets by Status
                                </div>
                                <div className="text-[12px]  lg:text-[14px] text-[#84878D] 3xl:text-[0.729vw] min-h-[25px] lg:min-h-[25px] 3xl:min-h-[1.302vw]">
                                    {" "}
                                    Generate reports to see assets sorted by their status.
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-5 grid-cols-2 cursor-pointer">
                            <div className="border border-[#E4E7EC] rounded-lg p-3 hover:bg-[#E4E7EC] parent-div  hover:border-[#d1d5db]">
                                <div className="text-[16px] lg:text-[18px] text-[#3A3E49] 3xl:text-[0.938vw] min-h-[20px] lg:min-h-[20px] 3xl:min-h-[1.823vw] child-div">
                                    Assets Logs
                                </div>
                                <div className="text-[12px] lg:text-[14px] text-[#84878D] 3xl:text-[0.729vw] lg:min-h-[38px] min-h-[38px] 3xl:min-h-[1.979vw]">
                                    {" "}
                                    Generate a report to see assets history.
                                </div>
                            </div>
                            <div className="border border-[#E4E7EC] rounded-lg p-3 hover:bg-[#E4E7EC] parent-div  hover:border-[#d1d5db]">
                                <div className="text-[16px] lg:text-[18px] text-[#3A3E49] 3xl:text-[0.938vw] min-h-[20px] lg:min-h-[20px] 3xl:min-h-[1.823vw] child-div">
                                    Track Asset Fine
                                </div>
                                <div className="text-[12px] lg:text-[14px] text-[#84878D] 3xl:text-[0.729vw] min-h-[38px] 3xl:min-h-[1.979vw] lg:min-h-[38px]">
                                    {" "}
                                    Generate reports to see assets fine history.
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-5 grid-cols-2 cursor-pointer">
                            <div className="border border-[#E4E7EC] rounded-lg p-3 hover:bg-[#E4E7EC] parent-div  hover:border-[#d1d5db]">
                                <div className="text-[16px] lg:text-[18px] text-[#3A3E49] 3xl:text-[0.938vw] min-h-[20px] 3xl:min-h-[1.823vw] child-div ">
                                    Assets Not Checkedout
                                </div>
                                <div className="text-[12px] lg:text-[14px] text-[#84878D] 3xl:text-[0.729vw] min-h-[38px] 3xl:min-h-[1.979vw] lg:min-h-[38px]">
                                    {" "}
                                    Generate reports to see assets not checked out yet.
                                </div>
                            </div>
                            <div className="border border-[#E4E7EC] rounded-lg p-3 hover:bg-[#E4E7EC] parent-div  hover:border-[#d1d5db]">
                                <div className="text-[16px] lg:text-[18px] text-[#3A3E49] 3xl:text-[0.938vw] min-h-[20px]  3xl:min-h-[1.823vw] child-div ">
                                    Asset Geolocation
                                </div>
                                <div className="text-[12px] lg:text-[14px] text-[#84878D] 3xl:text-[0.729vw] min-h-[38px] 3xl:min-h-[1.979vw]">
                                    {" "}
                                    Generate report to see assets by their Geolocation`
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-5 grid-cols-2 cursor-pointer">
                            <div onClick={() => setAssetsRefreshShow(true)} className="border border-[#E4E7EC] rounded-lg p-3 hover:bg-[#E4E7EC] parent-div  hover:border-[#d1d5db]">
                                <div className="text-[16px] lg:text-[18px] text-[#3A3E49] 3xl:text-[0.938vw] min-h-[20px] 3xl:min-h-[1.823vw] child-div">
                                    Assets Refresh Report
                                </div>
                                <div className="text-[12px] lg:text-[14px] text-[#84878D] 3xl:text-[0.729vw] min-h-[38px]  3xl:min-h-[1.979vw]">
                                    Generate reports to see assets refresh Report
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Sidebar>

            <AssetsRefreshPopup
                visible={assetsRefreshShow}
                onHides={() => setAssetsRefreshShow(false)}
            />
        </>
    );
}
