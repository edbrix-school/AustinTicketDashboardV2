import React from 'react'
import ComparisonDoublebarLinechart from "@/app/components/charts/comparisondoublebarliechart";
import ReactEcharts from 'echarts-for-react';

export default function SchoolsAndOffice() {

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
    const stackbarwithline = {
        tooltip: { trigger: "axis" },
        legend: {
          show: true,
          bottom: 10,
          left: 20,
          itemWidth: 8,
          itemHeight: 8,
          borderRadius: [4, 4, 4, 4],
          textStyle: {
            color: "#6C768B",
            fontSize: 12,
          },
        },
        grid: {
          left: 10,
          right: 20,
          bottom: 50,
          top: 40,
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            splitLine: { show: false },
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: {
              color:  "#20232E",
              fontSize: 10,
    
            },
            data: ["Jan", "Feb", "Mar", "Apr","May",],
    
          },
        ],
        yAxis: [
          {
            type: "value",
            min: 0,
            max: 4000,
            interval: 500,
            axisLabel: {
              color: "#6C768B",
              fontSize: 10,
              formatter: "{value}",
            },
            axisLine: {
              show: true,
              lineStyle: { color:  "#EAEDF3" },
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
                color: "#EAEDF3",
              },
            },
          },
        ],
    
        series: [
          {
            name: "High",
            type: "bar",
            barWidth: 30,
            stack: "Ad",
            itemStyle: {
              color: "#2C9999",
            },
            label: {
              show: false,
            },
            emphasis: { focus: "series" },
            data: [1400, 1200, 1400, 2300, 2300],
          },
    
          {
            name: "Medium",
            type: "bar",
            stack: "Ad",
            itemStyle: {
              borderRadius: [0, 0, 0, 0],
              color: "#256D85",
            },
            label: {
              show: false,
            },
            emphasis: { focus: "series" },
            data: [500, 1200, 1400, 1000, 500],
          },
    
          {
            name: "Low",
            type: "bar",
            stack: "Ad",
            itemStyle: {
              borderRadius: [4, 4, 0, 0],
              color: "#309DC1",
            },
            label: {
              show: false,
            },
            emphasis: { focus: "series" },
            data: [1400, 1200, 1400, 500, 500],
          },
        ],
      };

    return (
        <>
            <div className="text-[#3A3E49] text-[18px] 3xl:text-[0.938vw] font-medium">Comparison by Incoming tickets</div>
            <div className="mt-[24px] 3xl:mt-[1.25vw]">
                {/* table start */}
                <div className="bg-white border border-[#EAEDF3] rounded-lg 3xl:mb-[1.250vw] mb-[24px]">
                    <table className="text-[14px] xl:text-[0.729] custCompareTable w-full">
                        <thead>
                            <tr className="text-left ">
                                <th width='190px' className='py-3 px-5 text-[#3A3E49] bg-[#DFE7FA] text-left rounded-tl-lg'>Key Metrics</th>
                                <th width='433' className='py-3 px-5 text-[#3A3E49] bg-[#DFE7FA]'>Technician 1</th>
                                <th width='433' className='py-3 px-5 text-[#3A3E49] bg-[#DFE7FA]'>Technician 2</th>
                                <th width='433' className='py-3 px-5 text-[#3A3E49] bg-[#DFE7FA] rounded-tr-lg'>Technician 6</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width='1000' height='44px'>
                                Total New Tickets Received
                                </td>
                                <td width='433' className="font-semibold">1500&nbsp;&nbsp;&nbsp;(13%)</td>
                                <td width='433' className="font-semibold">1200&nbsp;&nbsp;&nbsp;(12%)</td>
                                <td width='433' className="font-semibold">1600&nbsp;&nbsp;&nbsp;(14%)</td>
                            </tr>
                            <tr>
                                <td >
                                    <ul className="list-disc pl-5">
                                        <li>High</li>
                                    </ul>
                                </td>
                                <td width='433'>600&nbsp;&nbsp;&nbsp;(40%)</td>
                                <td width='433'>600&nbsp;&nbsp;&nbsp;(40%)</td>
                                <td width='433'>1000&nbsp;&nbsp;&nbsp;(45%)</td>
                            </tr>
                            <tr>
                                <td >
                                    <ul className="list-disc pl-5">
                                        <li>Medium</li>
                                    </ul>
                                </td>
                                <td width='433'>500&nbsp;&nbsp;&nbsp;(25%)</td>
                                <td width='433'>300&nbsp;&nbsp;&nbsp;(30%)</td>
                                <td width='433'>500&nbsp;&nbsp;&nbsp;(35%)</td>
                            </tr>
                            <tr>
                                <td >
                                    <ul className="list-disc pl-5">
                                        <li>Low</li>
                                    </ul>
                                </td>
                                <td width='433'>400&nbsp;&nbsp;&nbsp;(35%)</td>
                                <td width='433'>300&nbsp;&nbsp;&nbsp;(30%)</td>
                                <td width='433'>100&nbsp;&nbsp;&nbsp;(20%)</td>
                            </tr>
                            <tr>
                                <td >
                                Tickets for Tech Ops
                                </td>
                                <td width='433'>900&nbsp;&nbsp;&nbsp;(13%)</td>
                                <td width='433'>200&nbsp;&nbsp;&nbsp;(13%)</td>
                                <td width='433'>900&nbsp;&nbsp;&nbsp;(13%)</td>
                            </tr>
                            <tr>
                                <td className="rounded-bl-lg">
                                Tickets for Enterprise System
                                </td>
                                <td width='433'>600&nbsp;&nbsp;&nbsp;(14%)</td>
                                <td width='433'>1000&nbsp;&nbsp;&nbsp;(14%)</td>
                                <td width='433'>700&nbsp;&nbsp;&nbsp;(14%)</td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>
                {/* table end */}
                <div className="text-[#3A3E49] text-[18px] 3xl:text-[0.938vw] font-medium">Trendline - New Tickets to Resolved Last 5 Months</div>
                <div className="grid grid-cols-3 gap-[16px] 3xl:gap-[0.833vw]">
                    <div className="bg-white border border-[#EAEDF3] rounded-lg 3xl:my-[1.250vw] my-[24px] tileShow">
                        <div className='w-full h-[270px] 3xl:h-[16.75vw]'>
                            <ReactEcharts
                                option={stackbarwithline}
                                style={{ height: "100%", width: "100%" }}
                            />
                        </div>
                    </div>
                    <div className="bg-white border border-[#EAEDF3] rounded-lg 3xl:my-[1.250vw] my-[24px] tileShow">
                        <div className='w-full h-[270px] 3xl:h-[16.75vw]'>
                        <ReactEcharts
                                option={stackbarwithline}
                                style={{ height: "100%", width: "100%" }}
                            />
                        </div>
                    </div>
                    <div className="bg-white border border-[#EAEDF3] rounded-lg 3xl:my-[1.250vw] my-[24px] tileShow">
                        <div className='w-full h-[270px] 3xl:h-[16.75vw]'>
                        <ReactEcharts
                                option={stackbarwithline}
                                style={{ height: "100%", width: "100%" }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
