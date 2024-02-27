import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { graphic } from "echarts";
import { useTheme } from "next-themes";



export default function DoublebarLinechart({ legend, grid, data, xAxisName, xAxisNameGap, xAxisNamePosition, yAxisName, yAxisName1, yAxisNameGap, yAxisNameGap1,minBar1=0,minBar2=0, maxBar1,maxBar2, color1, color2, color3,barname,interval1,interval2,yAxisLabelFormmater1,yAxisLabelFormmater2,axisLabel2=true, barLabelFormatter }) {

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
                        color: '#363A44' // set text color to red
                    }
                },
                axisTick: {
                    show:false,
                },
                nameGap: xAxisNameGap,
                nameLocation: xAxisNamePosition,
                nameTextStyle: {
                    color: '#84878D',
                    fontSize: 12,
                },
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
                    color:'#6C768B',
                    fontSize: 12,
                },
                min: minBar1,
                max: maxBar1,
                interval: interval1,
                axisLabel: {
                    color:"#6C768B",
                    fontSize: 10,
                    formatter: yAxisLabelFormmater1,
                },
                axisLine: {
                    show: true,
                    lineStyle: "#EDEEF1" ,
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        type: "dashed",
                        color: "#EAEDF3",
                    },
                },
            },
            {
                type: "value",
                name: yAxisName1,
                nameLocation: "center",
                nameGap: yAxisNameGap1,
                nameTextStyle: {
                    color: '#84878D',
                    fontSize: 12,
                },
                min: minBar2,
                max: maxBar2,
                interval: interval2,
                axisLabel: {
                    show: axisLabel2,
                    color:"#6C768B",
                    fontSize: 10,
                    formatter: yAxisLabelFormmater2,
                },
                axisLine: {
                    show: true,
                    lineStyle: "#EDEEF1",
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
                type: 'scatter',
                symbol: 'circle',
                symbolKeepAspect: true,
                itemStyle: {
                    color:'#fff',
                    borderWidth: 2,
                    borderColor:color3
                },
                yAxisIndex: 1,
                color: color3,
                data: data.values3,
                symbolSize: 10,
                label: {
                    show: true,
                    formatter: '{c} %',
                    color:'#24262D',
                    position:'top',
                    backgroundColor: "#EDEDF7",
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