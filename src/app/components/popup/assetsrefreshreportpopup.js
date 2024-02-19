import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";

export default function AssetsRefreshPopup(props) {
    const [datestart, setDateStart] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const District = [
        { name: "District 1", },
        { name: "District 2", },
        { name: "District 3", },
    ];
    const [selectedAssetType, setSelectedAssetType] = useState(null);
    const AssetType = [
        { name: "AssetType 1", },
        { name: "AssetType 2", },
        { name: "AssetType 3", },
    ];
    const [selectedCampus, setSelectedCampus] = useState(null);
    const Campus = [
        { name: "Campus 1", },
        { name: "Campus 2", },
        { name: "Campus 3", },
    ];

    const [selectedAssetCategory, setSelectedAssetCategory] = useState(null);
    const AssetCategory = [
        { name: "AssetCategory 1", },
        { name: "AssetCategory 2", },
        { name: "AssetCategory 3", },
    ];

    const [selectedAssetStatus, setSelectedAssetStatus] = useState(null);
    const AssetStatus = [
        { name: "AssetStatus 1", },
        { name: "AssetStatus 2", },
        { name: "AssetStatus 3", },
    ];
    return <Sidebar
        visible={props.visible}
        position="right"
        blockScroll={true}
        onHide={props.onHides}
        className="w-[922px] xl:w-[48.021vw] 3xl:w-[48.021vw] custmSidebar rounded-lg"
    >
        <div className="relative h-full">
            <div className="">
                <div className="bg-[#F9F9FC] px-[24px] lg:px-[24px] 3xl:px-[1.25vw] py-[38px] lg:py-[38px] 3xl:py-[1.979vw]">
                    <div className="text-[24px] lg:text-[24px] 3xl:text-[1.25vw] font-normal text-[#20232E]">
                        Generate Report for <span className="font-semibold">“Asset Refresh Report”</span>
                    </div>
                </div>

                <div className="space-y-[24px] lg:space-y-[24px] 3xl:space-y-[1.25vw] mt-[40px] 3xl:mt-[2.083vw] px-[24px] 3xl:px-[1.25vw]">
                    <div className="grid grid-cols-2 gap-[24px] lg:gap-[24px] 3xl:gap-[1.25vw]">
                        <div>
                            <div className="text-[#262626] text-[14px] lg:text-[14px] 3xl:text-[0.729vw] font-medium mb-[4px] xl:mb-[0.417vw]">Expiring From Date</div>
                            <div className="customCalendar">
                            <Calendar
                                value={datestart}
                                onChange={(e) => setDateStart(e.value)}
                                showIcon
                                placeholder="24/04/2023"
                                className="w-full rounded-lg"
                            /> 
                            </div>
                        </div>
                        <div>
                            <div className="text-[#262626] text-[14px] lg:text-[14px] 3xl:text-[0.729vw] font-medium mb-[4px] xl:mb-[0.417vw]">Expiring To Date</div>
                            <div className="customCalendar">
                            <Calendar
                                value={datestart}
                                onChange={(e) => setDateStart(e.value)}
                                showIcon
                                placeholder="24/04/2023"
                                className="w-full rounded-lg"
                            /> 
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-[24px] lg:gap-[24px] 3xl:gap-[1.25vw]">
                        <div>
                            <div className="text-[#262626] text-[14px] lg:text-[14px] 3xl:text-[0.729vw] font-medium mb-[4px] xl:mb-[0.417vw]">District</div>
                            <div className="custDropdownBox">
                                <Dropdown
                                    value={selectedDistrict}
                                    onChange={(e) => setSelectedDistrict(e.value)}
                                    options={District}
                                    optionLabel="name"
                                    placeholder="--Select--"
                                    className="w-full md:w-14rem "
                                />
                            </div>
                        </div>
                        <div>
                            <div className="text-[#262626] text-[14px] lg:text-[14px] 3xl:text-[0.729vw] font-medium mb-[4px] xl:mb-[0.417vw]">Campus</div>
                            <div className="custDropdownBox">
                                <Dropdown
                                    value={selectedCampus}
                                    onChange={(e) => setSelectedCampus(e.value)}
                                    options={Campus}
                                    optionLabel="name"
                                    placeholder="--Select--"
                                    className="w-full md:w-14rem border"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-[24px] lg:gap-[24px] 3xl:gap-[1.25vw]">
                        <div>
                            <div className="text-[#262626] text-[14px] lg:text-[14px] 3xl:text-[0.729vw] font-medium mb-[4px] xl:mb-[0.417vw]">Asset Category</div>
                            <div className="custDropdownBox">
                                <Dropdown
                                    value={selectedAssetCategory}
                                    onChange={(e) => setSelectedAssetCategory(e.value)}
                                    options={AssetCategory}
                                    optionLabel="name"
                                    placeholder="--Select--"
                                    className="w-full md:w-14rem border"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="text-[#262626] text-[14px] lg:text-[14px] 3xl:text-[0.729vw] font-medium mb-[4px] xl:mb-[0.417vw]">Asset Type</div>
                            <div className="custDropdownBox">
                                <Dropdown
                                    value={selectedAssetType}
                                    onChange={(e) => setSelectedAssetType(e.value)}
                                    options={AssetType}
                                    optionLabel="name"
                                    placeholder="--Select--"
                                    className="w-full md:w-14rem border"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-[24px] lg:gap-[24px] 3xl:gap-[1.25vw]">
                        <div>
                            <div className="text-[#262626] text-[14px] lg:text-[14px] 3xl:text-[0.729vw] font-medium mb-[4px] xl:mb-[0.417vw]">Asset Status</div>
                            <div className="custDropdownBox">
                                <Dropdown
                                    value={selectedAssetStatus}
                                    onChange={(e) => setSelectedAssetStatus(e.value)}
                                    options={AssetStatus}
                                    optionLabel="name"
                                    placeholder="--Select--"
                                    className="w-full md:w-14rem border"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 left-0">
                <div className="flex justify-end gap-3 bg-[#F9F9FC] px-[30px] lg:px-[30px] 3xl:px-[1.563vw] py-[18px] lg:py-[18px] 3xl:py-[0.938vw]">
                    <div className="text-[#4B586E] text-[14px] xl:text-[14px] 3xl:text-[0.729vw] font-normal px-[12px] lg:px-[12px] 3xl:px-[0.625vw] py-[10px] lg:py-[10px] 3xl:py-[0.521vw] bg-[#FFFFFF] border border-[#BECDE3] rounded-lg cursor-pointer">Cancel</div>
                    <div className="text-[#fff] text-[14px] xl:text-[14px] 3xl:text-[0.729vw] font-normal px-[12px] lg:px-[12px] 3xl:px-[0.625vw] py-[10px] lg:py-[10px] 3xl:py-[0.521vw] bg-[#1570EF] border border-[#1570EF] rounded-lg cursor-pointer">Generate Report</div>
                </div>
            </div>
        </div>
    </Sidebar>

}
