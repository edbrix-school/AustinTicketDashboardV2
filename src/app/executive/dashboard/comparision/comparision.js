
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import ComparisonDoublebarLinechart from "@/app/components/charts/comparisondoublebarliechart";

export default function Comparision() {
    const [team, setTeam] = useState(false);
    const [selected, setSelected] = useState(null);
    const option = [
        { name: 'Schools/Offices', code: 'RM' },
        { name: 'Teams', code: 'NY' },
        { name: 'Technician', code: 'LDN' }
    ];

    const assignedData = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
        ],
        values1: [2400, 3200, 2400, 3300, 2300],
        values2: [1500, 1000, 1500, 1000, 1500],
        values3: [20, 35, 25, 40, 10],
    };


    return (
        <div>
            <div className="3xl:mt-[0.833vw] mt-[16px]">
                <div className="grid grid-cols-12 gap-[24px] 3xl:gap-[1.250vw]">
                    {/* col */}
                    <div className="3xl:col-span-3 xl:col-span-3 col-span-12  bg-white border-[#E4E7EC] p-[24px] 3xl:p-[1.25vw] 3xl:rounded-[0.833vw] rounded-2xl border tileShow">
                        <div className="3xl:mb-[1.25vw] mb-[24px] custDropdownBox dropdown_bg01">
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

                    {/* col */}
                    <div className="3xl:col-span-9 xl:col-span-9 col-span-12 ">
                        <div className="bg-white border-[#E4E7EC] p-[24px] 3xl:p-[1.25vw] 3xl:rounded-[0.833vw] rounded-2xl border tileShow">
                            <div className="text-[#3A3E49] text-[18px] 3xl:text-[0.938vw] font-medium">Comparison by Incoming tickets</div>
                            <div className="mt-[24px] 3xl:mt-[1.25vw]">
                                {/* table start */}
                                <div className="bg-white border border-[#EAEDF3] rounded-lg 3xl:mb-[1.250vw] mb-[24px]">
                                    <table className="text-[14px] xl:text-[0.729] custCompareTable w-full">
                                        <thead>
                                            <tr className="text-left ">
                                                <th width='190px' className='py-3 px-5 text-[#3A3E49] bg-[#DFE7FA] text-left rounded-tl-lg'>Key Metrics</th>
                                                <th width='433' className='py-3 px-5 text-[#3A3E49] bg-[#DFE7FA]'>Team 1</th>
                                                <th width='433' className='py-3 px-5 text-[#3A3E49] bg-[#DFE7FA]'>Team 2</th>
                                                <th width='433' className='py-3 px-5 text-[#3A3E49] bg-[#DFE7FA] rounded-tr-lg'>Team 14</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td width='1000' height='44px'>
                                                    Number of Technicians Deployed
                                                </td>
                                                <td width='433'>30</td>
                                                <td width='433'>20</td>
                                                <td width='433'>10</td>
                                            </tr>
                                            <tr>
                                                <td >
                                                    Total New Tickets Received
                                                </td>
                                                <td width='433' className="font-semibold">1500&nbsp;&nbsp;&nbsp;(13%)</td>
                                                <td width='433' className="font-semibold">1200&nbsp;&nbsp;&nbsp;(12%)</td>
                                                <td width='433' className="font-semibold">1600&nbsp;&nbsp;&nbsp;(14%)</td>
                                            </tr>
                                            <tr>
                                                <td >
                                                    Total Tickets Resolved
                                                </td>
                                                <td width='433'>300</td>
                                                <td width='433'>400</td>
                                                <td width='433'>500</td>
                                            </tr>
                                            <tr>
                                                <td >
                                                    <ul className="list-disc pl-5">
                                                        <li>Within SLA</li>
                                                    </ul>
                                                </td>
                                                <td width='433'>60%</td>
                                                <td width='433'>50%</td>
                                                <td width='433'>30%</td>
                                            </tr>
                                            <tr>
                                                <td >
                                                    <ul className="list-disc pl-5">
                                                        <li>Outside SLA</li>
                                                    </ul>
                                                </td>
                                                <td width='433'>40%</td>
                                                <td width='433'>50%</td>
                                                <td width='433'>70%</td>
                                            </tr>
                                            <tr>
                                                <td >
                                                    Ticket Resolved %
                                                </td>
                                                <td width='433'>20%</td>
                                                <td width='433'>33%</td>
                                                <td width='433'>31%</td>
                                            </tr>
                                            <tr>
                                                <td className="rounded-bl-lg">
                                                    Average Days to Resolve Tickets
                                                </td>
                                                <td width='433'>21</td>
                                                <td width='433'>34</td>
                                                <td width='433'>11</td>
                                            </tr>
                                            <tr>
                                                <td >
                                                    Average Days to Resolve Re-Routed Tickets
                                                </td>
                                                <td width='433'>4</td>
                                                <td width='433'>7</td>
                                                <td width='433'>2</td>
                                            </tr>
                                            <tr>
                                                <td className="rounded-br-lg">
                                                    Average Ratings
                                                </td>
                                                <td width='433'>4</td>
                                                <td width='433'>3.5</td>
                                                <td width='433'>2</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* table end */}
                                <div className="text-[#3A3E49] text-[18px] 3xl:text-[0.938vw] font-medium">Trendline - New Tickets to Resolved Last 5 Months</div>
                                <div className="grid grid-cols-3 gap-[16px] 3xl:gap-[0.833vw]">
                                    <div className="bg-white border border-[#EAEDF3] rounded-lg 3xl:my-[1.250vw] my-[24px] tileShow">
                                        <div className='w-full h-[270px] 3xl:h-[16.75vw]'>
                                            <ComparisonDoublebarLinechart
                                                data={assignedData}
                                                barname={["New Tickets", "Resolved", "Avg Days to resolve"]}
                                                legend={{
                                                    left: 10,
                                                    bottom: 10,
                                                    itemWidth: 10,
                                                    itemHeight: 10,
                                                    symbolKeepAspect: true,
                                                    data: [
                                                        { name: 'New Tickets', },
                                                        { name: 'Resolved', },
                                                        { name: 'Avg Days to resolve', },
                                                    ],
                                                    textStyle: {
                                                        color: "#84878D",
                                                        fontSize: 10
                                                    },
                                                }}
                                                grid={{
                                                    top: 45,
                                                    bottom: 65,
                                                    right: 30,
                                                    left: 40,
                                                }}
                                                maxBar1={4000}
                                                interval1={500}
                                                maxBar2={40}
                                                interval2={5}
                                                color1={"#2C9999"}
                                                color2={"#256D85"}
                                                color3={"#333330"}
                                                yAxisLabelFormmater1='{value}'
                                                yAxisLabelFormmater2="{value}"
                                                barLabelFormatter="{c}"
                                            />
                                        </div>
                                    </div>
                                    <div className="bg-white border border-[#EAEDF3] rounded-lg 3xl:my-[1.250vw] my-[24px] tileShow">
                                        <div className='w-full h-[270px] 3xl:h-[16.75vw]'>
                                            <ComparisonDoublebarLinechart
                                                data={assignedData}
                                                barname={["New Tickets", "Resolved", "Avg Days to resolve"]}
                                                legend={{
                                                    left: 10,
                                                    bottom: 10,
                                                    itemWidth: 10,
                                                    itemHeight: 10,
                                                    symbolKeepAspect: true,
                                                    data: [
                                                        { name: 'New Tickets', },
                                                        { name: 'Resolved', },
                                                        { name: 'Avg Days to resolve', },
                                                    ],
                                                    textStyle: {
                                                        color: "#84878D",
                                                        fontSize: 10
                                                    },
                                                }}
                                                grid={{
                                                    top: 45,
                                                    bottom: 65,
                                                    right: 30,
                                                    left: 40,
                                                }}
                                                maxBar1={4000}
                                                interval1={500}
                                                maxBar2={40}
                                                interval2={5}
                                                color1={"#2C9999"}
                                                color2={"#256D85"}
                                                color3={"#333330"}
                                                yAxisLabelFormmater1='{value}'
                                                yAxisLabelFormmater2="{value}"
                                                barLabelFormatter="{c}"
                                            />
                                        </div>
                                    </div>
                                    <div className="bg-white border border-[#EAEDF3] rounded-lg 3xl:my-[1.250vw] my-[24px] tileShow">
                                        <div className='w-full h-[270px] 3xl:h-[16.75vw]'>
                                            <ComparisonDoublebarLinechart
                                                data={assignedData}
                                                barname={["New Tickets", "Resolved", "Avg Days to resolve"]}
                                                legend={{
                                                    left: 10,
                                                    bottom: 10,
                                                    itemWidth: 10,
                                                    itemHeight: 10,
                                                    symbolKeepAspect: true,
                                                    data: [
                                                        { name: 'New Tickets', },
                                                        { name: 'Resolved', },
                                                        { name: 'Avg Days to resolve', },
                                                    ],
                                                    textStyle: {
                                                        color: "#84878D",
                                                        fontSize: 10
                                                    },
                                                }}
                                                grid={{
                                                    top: 45,
                                                    bottom: 65,
                                                    right: 30,
                                                    left: 40,
                                                }}
                                                maxBar1={4000}
                                                interval1={500}
                                                maxBar2={40}
                                                interval2={5}
                                                color1={"#2C9999"}
                                                color2={"#256D85"}
                                                color3={"#333330"}
                                                yAxisLabelFormmater1='{value}'
                                                yAxisLabelFormmater2="{value}"
                                                barLabelFormatter="{c}"
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

    );
}