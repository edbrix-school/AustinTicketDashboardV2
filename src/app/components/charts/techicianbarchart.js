import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { graphic } from "echarts";
import { useTheme } from "next-themes";



export default function DoublebarLinechart({ legend, grid, data, xAxisName, xAxisNameGap, xAxisNamePosition, yAxisName, yAxisName1, yAxisNameGap, yAxisNameGap1,minBar1=0,minBar2=0, maxBar1,maxBar2, color1, color2, color3,barname,interval1,interval2,axistop,axistoplabel,yAxisLabelFormmater1="${value}",yAxisLabelFormmater2="{value}%",axisLabel2=true, barLabelFormatter="${c}" }) {

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const options = {
        tooltip: { trigger: "axis" },
        legend: legend,
        grid: grid,
        xAxis: [
            {
                type: 'category',
                data: data.labels,
                name: xAxisName,
                interval: 0,
                axisPointer: {
                    type: 'shadow'
                },
                axisLine:{
                    lineStyle: {
                    color: '#EDEEF1'
                }
                },
                axisLabel: {
                    interval:0,
                    textStyle: {
                        fontSize: 10,
                        color: currentTheme == "dark" ? "#ffff" : '#363A44' // set text color to red
                    }
                },
                axisTick: {
                    show:false,
                },
                nameGap: xAxisNameGap,
                nameLocation: xAxisNamePosition,
                nameTextStyle: {
                    color: currentTheme == "dark" ? "#ffff" : '#363A44',
                    fontSize: 12,
                },
            },
            {
        
                splitLine: { show: false },
                axisTick: { show: false },
                axisLine: { show: false },
                axisLabel: {
                    show:axistop,
                  color: currentTheme == "dark" ? "#fff" : "#fff",
                  fontSize: 13,
                  backgroundColor: "#046C4E",
                  padding: 5,
                },
                data: axistoplabel,
              },
        ],
        yAxis: [
            {
                type: "value",
                name: yAxisName,
                nameLocation: "center",
                nameGap: yAxisNameGap,
                nameTextStyle: {
                    // color: "#6C768B",
                    color: currentTheme == "dark" ? "#ffff" : '#6C768B',
                    fontSize: 12,
                },
                min: minBar1,
                max: maxBar1,
                interval: interval1,
                axisLabel: {
                    color: currentTheme == "dark" ? "#ffff" : "#6C768B",
                    fontSize: 10,
                    formatter: yAxisLabelFormmater1,
                },
                axisLine: {
                    show: true,
                    lineStyle: { color: currentTheme == "dark" ? "#2A2C32" : "#EDEEF1" },
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        type: "dashed",
                        color: currentTheme == "dark" ? "#2A2C32" : "#EAEDF3",
                    },
                },
            },
            {
                type: "value",
                name: yAxisName1,
                nameLocation: "center",
                nameGap: yAxisNameGap1,
                nameTextStyle: {
                    color: currentTheme == "dark" ? "#ffff" : '#6C768B',
                    fontSize: 12,
                },
                min: minBar2,
                max: maxBar2,
                interval: interval2,
                axisLabel: {
                    show: axisLabel2,
                    color: currentTheme == "dark" ? "#ffff" : "#6C768B",
                    fontSize: 10,
                    formatter: yAxisLabelFormmater2,
                },
                axisLine: {
                    show: true,
                    lineStyle: { color: currentTheme == "dark" ? "#2A2C32" : "#EDEEF1" },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "dashed",
                        color: currentTheme == "dark" ? "#2A2C32" : "#EAEDF3",
                    },
                },
            },
        ],
        series: [
            {
                name: barname[0],
                type: 'bar',
                color: color1,
                barGap: "10%",
                data: data.values1,
                label:{
                    show: true,
                    fontSize: 9,
                    formatter: barLabelFormatter,
                    color: '#FFFFFF'
                },
                itemStyle: {
                    borderRadius: [4, 4, 0, 0],
                }
            },
            {
                name: barname[1],
                type: 'bar',
                color: color2,
                data: data.values2,
                itemStyle: {
                    borderRadius: [4, 4, 0, 0],
                },
                label:{
                    show: true,
                    fontSize: 9,
                    formatter: barLabelFormatter,
                    color: '#FFFFFF'
                },
            },
            {
                name: barname[2],
                type: 'line',
                yAxisIndex: 1,
                color: color3,
                data: data.values3,
                symbolSize: 8,
                label: {
                    show: true,
                    formatter: '{@[n]} %',
                    color:'#24262D',
                    backgroundColor: "#EEF8F4",
                    padding: [4, 4, 4, 4]
                    }
            }
        ],
    };

    return (
        <ReactEcharts
            echarts={echarts}
            option={options}
            style={{ width: '100%', height: '100%' }}
        />
    )
};