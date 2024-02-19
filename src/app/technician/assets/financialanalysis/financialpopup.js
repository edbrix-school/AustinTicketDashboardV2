import React from 'react'
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { useTheme } from "next-themes";
function Financialpopup({
    labelShow, data, grid, yAxisName, yAxisNameGap, yAxisNamePosition, areaStyle, color1, fillcolor, lineColor, lineType,  xAxisName, xAxisNameGap, xAxisNamePosition, borderColor, name1, legend }) {
    const { systemTheme, theme, setTheme } = useTheme();

    const currentTheme = theme === 'system' ? systemTheme : theme;
    const options = {
        tooltip: {
            trigger: 'axis'
          },
    legend: legend,
    xAxis: {
        name: xAxisName,
        nameLocation: xAxisNamePosition,
        nameGap: xAxisNameGap,
        type: 'category',
        data: data.labels,
        nameTextStyle: {
            color: "#9CA1AB"
        },
        label: {
            show: true // show labels for all data points
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            interval: 0,
            fontSize: 10,
            color: '#9CA1AB',
            fontWeight:400
        },
    },
    grid: grid,
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color:currentTheme == "dark" ? "#BECDE3": "#BECDE3",

            }
        },
        name: yAxisName,
        nameLocation: yAxisNamePosition,
        nameGap: yAxisNameGap,
        nameTextStyle: {
            color: currentTheme === "dark" ? "#B3B9C6" : "#6C768B"
        },
        axisLabel: {
            color: currentTheme === "dark" ? "#B3B9C6" : "#6C768B",
            fontSize: 8,
            fontWeight:400,
            formatter: '{value}',
        }
    },
    series: [
        {
            name: name1,
            data: data.values,
            type: 'line',
            emphasis: {
                focus: 'series'
            },
            symbol: 'circle',
            symbolSize: 10,
            smooth: true,
            label: {
                show: labelShow,
                fontSize: 12,
                position: 'outside',
                formatter: '{c}',
                textStyle: {
                    color: "#fff",
                    fontSize: 9,
                    fontWeight: 500,
                    backgroundColor: "#1D224E",
                    padding: [2, 2, 2, 2],
                }
            },
            lineStyle: {
                color: lineColor[0],
                width: 2,
                type: lineType,
                itemStyle: {
                    borderColor: borderColor,
                    borderWidth: 2
                },
            },
            itemStyle: {
                color: fillcolor[0],
                borderWidth: 1,
                borderColor: borderColor,
            }
        },
    ]
};
    const LineChartData = {
        labels: ["2020 Q1", "2020 Q2", "2020 Q3", "2020 Q4", "2020 Q1", "2020 Q2", "2020 Q3", "2020 Q4","2020 Q1", "2020 Q2", "2020 Q3", "2020 Q4",],
        values: ["4650", "4400", "4000", "3510", "2750", "2100","1510","1480","1350","1000","550","350"],
    };
  return (
    <>
        <financialanalysis
                                    legend={{
                                        show: true,
                                        bottom: 5,
                                        itemWidth: 10,
                                        itemHeight: 10,
                                        width: "100%",
                                        textStyle: {
                                            fontSize: 10,
                                            color: "#6C768B",
                                        },
                                    }}
                                    labelShow={
                                        true
                                    }
                                    grid={{
                                        top: "15%",
                                        bottom: "0%",
                                        left: "0%",
                                        right: "0%",
                                    }}
                                    data={LineChartData}
                                    lineType={"line"}
                                    color1={"black"}
                                    fillcolor={["#1D224E"]}
                                    borderColor={"#FFF"}
                                    lineColor={["#1D224E"]}
                                    yAxisNameGap={"33"}
                                    yAxisNamePosition={"middle"}
                                />
                                      <ReactEcharts
        echarts={echarts}
        option={options}
        opts={{ renderer: 'svg' }}
        style={{width:'100%', height: '100%'}}
    />
    
    </>
  )
}

export default Financialpopup