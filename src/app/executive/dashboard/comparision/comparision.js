
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";

export default function Comparision() {
    const [team, setTeam] = useState(false);
    const [selected, setSelected] = useState(null);
    const option = [
        { name: 'Schools/Offices', code: 'RM' },
        { name: 'Teams', code: 'NY' },
        { name: 'Technician', code: 'LDN' }
    ];


    return (
        <div>
            <div className="3xl:mt-[0.833vw] mt-[16px]">
                <div className="grid grid-cols-12 gap-[24px] 3xl:gap-[1.250vw]">
                    <div className="3xl:col-span-3 xl:col-span-3 col-span-12 ">
                        <div className="bg-white border-[#E4E7EC] p-[24px] 3xl:p-[1.25vw] 3xl:rounded-[0.833vw] rounded-2xl border tileShow">
                            <div className="3xl:mb-[1.25vw] mb-[24px] custDropdownBox">
                                <label for="name" className="text-[#24262D] text-[14px] 3xl:text-[0.729vw] font-medium ">
                                    Compare By
                                </label>
                                <Dropdown
                                    value={selected}
                                    onChange={(e) => setSelected(e.value)}
                                    options={option}
                                    optionLabel="name"
                                    placeholder="--select--"
                                    className="w-full 3xl:mt-[0.417vw] mt-[8px]"
                                />
                            </div>
                            <div className="flex items-center gap-[10px] 3xl:gap-[0.521vw]">
                                <div className="comparisionSearch w-full">
                                    <span className="p-input-icon-left w-full">
                                        <i className="asetsmng-search-big" />
                                        <InputText placeholder="Search" className="w-[14rem] 3xl:w-full" />
                                    </span>
                                </div>
                                <div className="flex items-center bg-[#4169E1] p-[13px] 3xl:p-[0.521vw] rounded-[8px]">
                                    <i className="asetsmng-td-search text-[19px] 3xl:text-[1.146vw] text-[#fff]" />
                                </div>
                            </div>
                            <div className="text-[#9CA1AB] text-[14px] 3xl:text-[0.729vw] font-normal mt-[8px] 3xl:mt-[0.417vw]">103 Results</div>
                            <div className="space-y-[16px] 3xl:space-y-[0.833vw] mt-[24px] 3xl:mt-[1.25vw]">
                                <div className="flex items-center justify-start">
                                    <Checkbox
                                        onChange={(e) => setTeam(e.checked)}
                                        checked={team}
                                        className="custumCheckbox"
                                    ></Checkbox>
                                    <label className="text-[#20232E] text-[14px] 3xl:text-[0.729vw] font-medium ml-2">Team 1</label>
                                </div>
                                <div className="flex items-center justify-start">
                                    <Checkbox
                                        onChange={(e) => setTeam(e.checked)}
                                        checked={team}
                                        className="custumCheckbox"
                                    ></Checkbox>
                                    <label className="text-[#20232E] text-[14px] 3xl:text-[0.729vw] font-medium ml-2">Team 2</label>
                                </div>
                                <div className="flex items-center justify-start">
                                    <Checkbox
                                        onChange={(e) => setTeam(e.checked)}
                                        checked={team}
                                        className="custumCheckbox"
                                    ></Checkbox>
                                    <label className="text-[#20232E] text-[14px] 3xl:text-[0.729vw] font-medium ml-2">Team 2</label>
                                </div>
                                <div className="flex items-center justify-start">
                                    <Checkbox
                                        onChange={(e) => setTeam(e.checked)}
                                        checked={team}
                                        className="custumCheckbox"
                                    ></Checkbox>
                                    <label className="text-[#20232E] text-[14px] 3xl:text-[0.729vw] font-medium ml-2">Team 3</label>
                                </div>
                                <div className="flex items-center justify-start">
                                    <Checkbox
                                        onChange={(e) => setTeam(e.checked)}
                                        checked={team}
                                        className="custumCheckbox"
                                    ></Checkbox>
                                    <label className="text-[#20232E] text-[14px] 3xl:text-[0.729vw] font-medium ml-2">Team 4</label>
                                </div>
                                <div className="flex items-center justify-start">
                                    <Checkbox
                                        onChange={(e) => setTeam(e.checked)}
                                        checked={team}
                                        className="custumCheckbox"
                                    ></Checkbox>
                                    <label className="text-[#20232E] text-[14px] 3xl:text-[0.729vw] font-medium ml-2">Team 5</label>
                                </div>
                                <div className="flex items-center justify-start">
                                    <Checkbox
                                        onChange={(e) => setTeam(e.checked)}
                                        checked={team}
                                        className="custumCheckbox"
                                    ></Checkbox>
                                    <label className="text-[#20232E] text-[14px] 3xl:text-[0.729vw] font-medium ml-2">Team 6</label>
                                </div>
                                <div className="flex items-center justify-start">
                                    <Checkbox
                                        onChange={(e) => setTeam(e.checked)}
                                        checked={team}
                                        className="custumCheckbox"
                                    ></Checkbox>
                                    <label className="text-[#20232E] text-[14px] 3xl:text-[0.729vw] font-medium ml-2">Team 7</label>
                                </div>
                                <div className="flex items-center justify-start">
                                    <Checkbox
                                        onChange={(e) => setTeam(e.checked)}
                                        checked={team}
                                        className="custumCheckbox"
                                    ></Checkbox>
                                    <label className="text-[#20232E] text-[14px] 3xl:text-[0.729vw] font-medium ml-2">Team 8</label>
                                </div>
                                <div className="flex items-center justify-start">
                                    <Checkbox
                                        onChange={(e) => setTeam(e.checked)}
                                        checked={team}
                                        className="custumCheckbox"
                                    ></Checkbox>
                                    <label className="text-[#20232E] text-[14px] 3xl:text-[0.729vw] font-medium ml-2">Team 9</label>
                                </div>
                                <div className="flex items-center justify-start">
                                    <Checkbox
                                        onChange={(e) => setTeam(e.checked)}
                                        checked={team}
                                        className="custumCheckbox"
                                    ></Checkbox>
                                    <label className="text-[#20232E] text-[14px] 3xl:text-[0.729vw] font-medium ml-2">Team 10</label>
                                </div>
                                <div className="flex items-center justify-start">
                                    <Checkbox
                                        onChange={(e) => setTeam(e.checked)}
                                        checked={team}
                                        className="custumCheckbox"
                                    ></Checkbox>
                                    <label className="text-[#20232E] text-[14px] 3xl:text-[0.729vw] font-medium ml-2">Team 12</label>
                                </div>
                                <div className="flex items-center justify-start">
                                    <Checkbox
                                        onChange={(e) => setTeam(e.checked)}
                                        checked={team}
                                        className="custumCheckbox"
                                    ></Checkbox>
                                    <label className="text-[#20232E] text-[14px] 3xl:text-[0.729vw] font-medium ml-2">Team 13</label>
                                </div>
                                <div className="flex items-center justify-start">
                                    <Checkbox
                                        onChange={(e) => setTeam(e.checked)}
                                        checked={team}
                                        className="custumCheckbox"
                                    ></Checkbox>
                                    <label className="text-[#20232E] text-[14px] 3xl:text-[0.729vw] font-medium ml-2">Team 14</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="3xl:col-span-9 xl:col-span-3 col-span-12 ">

                    </div>
                </div>
            </div>
        </div>

    );
}