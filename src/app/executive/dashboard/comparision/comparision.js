
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function Comparision() {
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
                            <div className="3xl:mb-[0.833vw] mb-[16px] custDropdownBox custInputBox custDropdownWhite">
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
                           
                        </div>
                    </div>
                    <div className="3xl:col-span-9 xl:col-span-3 col-span-12 ">
                    
                    </div>
                </div>
            </div>
        </div>

    );
}