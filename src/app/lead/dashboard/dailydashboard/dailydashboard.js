import ChartWrapper from '@/app/components/chartwrapper'
import React, { useEffect, useState, } from "react";
import { Dropdown } from "primereact/dropdown";
import ReactEcharts from "echarts-for-react";
import DoublebarLinechart from '@/app/components/charts/techicianbarchart';
import { ProgressBar } from 'primereact/progressbar';
import Image from 'next/image';
import * as echarts from 'echarts';
import Assignedticketshourlytrend from '@/app/components/charts/assignedticketshourlytrend';
import Newticketsbtagebarchart from '@/app/components/charts/newticketsbtagebarchart';
import Newticketsbyagebarchart from '@/app/components/charts/newticketsbtagebarchart';

export default function dailydashboard() {
  const [top, setTop] = useState(true)

  const [selectedCluster, setSelectedCluster] = useState(null);
  const cluster = [
    { name: "All ", code: "NY" },
    { name: "Within SLA ", code: "RM" },
    { name: "Outside SLA ", code: "LDN" },
    
  ];

  const LineChartwithShadow = {
    tooltip: { trigger: "axis" },
    legend: {
      show: true,
      bottom: "15",
      left: "10",
      icon: "roundRect",
      itemWidth: 15,
      itemHeight: 1,
    },
    grid: {
      left:'5%',
      right:'5%',
      top:'5%',
      bottom:'20%',
      containLabel: true,
  },
    xAxis: [
      {
        type: "category",
        name: "Time ", // Add the common title for the x-axis here
        nameLocation: "center", // Set the position of the x-axis name to the center
        nameGap: 40, // Adjust the gap between the x-axis name and the axis
        interval:0,
        nameTextStyle: {
          color: "#888888", // Set title text color
          fontSize: 10, // Set title font size
        },
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#EDEEF1",
          },
        },
        axisLabel: {
          color: "#6C768B",
          fontSize: 11,
          lineHeight: 14,
          interval:0
        },
        data: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM" , "1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM"],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "No. of Tickets",
        nameLocation: "center", // Set the position of the y-axis name to the center
        nameGap: 30, // Adjust the gap between the y-axis name and the axis
        nameTextStyle: {
          color: "#84878D", // Set title text color
          fontSize: 10, // Set title font size
        },
        min: 0,
        max: 80,
        interval: 10,
        axisLabel: {
          color:"#6C768B",
          fontSize: 10,
          formatter: '{value}',
        },
        axisLine: {
          show: true,
          lineStyle: {
            color:"#EDEEF1",
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed",
            color:"#F2EEEE",
          },
        },
      },
    
    ],
    series: [
        {
          name:'New Tickets',
          data: [40, 27, 25, 49,60,52,65,50,40,30],
          type: 'line',
          smooth: false,
          symbol: 'circle',  // Set the symbol to circle
          symbolSize: 11,     // Adjust the symbol size
          itemStyle: {
            color: "#fff",
            borderWidth: 2,
            borderColor: "#4169E1",
          },
          lineStyle: {
            color: "#4169E1",
            shadowColor: "#4169E1",
            shadowBlur: 10
          },
          label: {
            show: true,
            color:'#24262D',
            position: 'top',
            formatter: "{c}",
            // formatter: '{@[n]} %',
            backgroundColor: "#EEF8F4",
            padding: [4, 8, 4, 8],
          },
          areaStyle: {
            

            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              {
                offset: 0,
                color: '#4169E1'
              },
              {
                offset: 1,
                color: 'rgba(255, 255, 255,0)'
              }
            ])
          },
        },
        {
          name:'Assigned Tickets',
          data: [30, 20, 40, 40,18,26,36,5,3,2],
          type: 'line',
          smooth: false,
          symbol: 'circle',  // Set the symbol to circle
          symbolSize: 11,     // Adjust the symbol size
          itemStyle: {
            color: "#fff",
            borderWidth: 2,
            borderColor: "#2C9999",
          },
          lineStyle: {
            color: "#2C9999",
            shadowColor: "#2C9999",
            shadowBlur: 10
          },
          label: {
            show: true,
            color:'#24262D',
            position: 'top',
            formatter: "{c}",
            // formatter: '{@[n]} %',
            backgroundColor: "#EEF8F4",
            padding: [4, 8, 4, 8],
          },
          areaStyle: {
            
           

            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
              {
                offset: 0,
                color: '#2C9999'
              },
              {
                offset: 1,
                color: 'rgba(255, 255, 255,0)'
              }
            ])
          },
        },
       
      ]
  };
  
  /***Budget vs. Expense*** */
  const BudgetExpense = {
    tooltip: { trigger: "axis" },
    legend: {
      show: true,
      bottom: 0,
      left: 0,
      data: [
        { name: "Budget", icon: "roundRect" },
        { name: "Revenue", icon: "roundRect" },
        { name: "Growth %", icon: "image:///assets/images/growth-legend.svg" },
      ],
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        fontSize: 10,
        color: "rgba(108, 118, 139, 1)",
        fontWeight: "400",
      },
    },
    grid: {
      left: "5%",
      right: "5%",
      top: "10%",
      bottom: "18%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["Q1", "Q2", "Q3", "Q4"],
        axisLine: {
          show: true,
          lineStyle: {
            color: "#EAEDF3",
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#363A44",
        },
      },
      {
        type: "category",
        data: ["-5%", "-2%", "4%", "4%"],
        axisLine: {
          show: false,
          lineStyle: {
            color: "#EAEDF3",
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "rgba(255, 255, 255, 1)",
          backgroundColor: "rgba(200, 30, 30, 1)",
          padding: [4, 4, 4, 4],
          borderRadius: [4, 4, 4, 4],
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        min: 0,
        max: 300,
        interval: 50,
        axisLabel: {
          formatter: "${value}",
          color: "#363A44",
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#EAEDF3",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dotted",
            color: "#EDEEF1",
          },
        },
      },
      {
        type: "value",
        name: "Growth %",
        min: 0,
        max: 14,
        interval: 2,
        axisLabel: {
          formatter: "{value} %",
          color: "#363A44",
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#EAEDF3",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "dotted",
            color: "#EDEEF1",
          },
        },
      },
    ],
    series: [
      {
        name: "Budget",
        data: [200, 225, 230, 250],
        type: "bar",
        color: "#009CDA",
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
        },
        label: {
          show: true,
          position: "insideTop",
          color: "rgba(255, 255, 255, 1)",
        },
      },
      {
        name: "Revenue",
        data: [210, 230, 220, 240],
        type: "bar",
        color: "#256D85",
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
        },
        label: {
          show: true,
          position: "insideTop",
          color: "rgba(255, 255, 255, 1)",
        },
      },
      {
        name: "Growth %",
        yAxisIndex: 1,
        data: [5, 10, 5, 9],
        type: "line",
        color: "#363A44",
        label: {
          show: true,
          formatter: "{@[n]} %",
          color: "#24262D",
          backgroundColor: "#EEF8F4",
          position: [-10, 10],
          padding: [4, 4, 4, 4],
        },
      },
    ],
  };

  const stackbarwithline = {
    tooltip: { trigger: "axis" },
    legend: {
      show: true,
      bottom: "bottom",
      left: "left",
      itemWidth: 8,
      itemHeight: 8,
      borderRadius: [4, 4, 0, 0],
      textStyle: {
        color: "#6C768B",
        fontSize: 12,
      },
    },
    grid: {
      left: "8%",
      right: "4%",
      bottom: "18%",
      top: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        name: "Quarters", // Add the common title for the x-axis here
        nameLocation: "center", // Set the position of the x-axis name to the center
        nameGap: 40, // Adjust the gap between the x-axis name and the axis
        nameTextStyle: {
          color: "#6C768B", // Set title text color
          fontSize: 12, // Set title font size

        },
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          color:"#363A44",
          fontSize: 10,

        },
        data: ["Q1", "Q2", "Q3", "Q4"],

      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Value ( in US $)",
        nameLocation: "center",
        nameGap: 40,
        nameTextStyle: {
          color: "#6C768B",
          fontSize: 12,
        },
        min: 0,
        max: 600,
        interval: 100,
        axisLabel: {
          color: "#6C768B",
          fontSize: 10,
          formatter: "{value}$",
        },
        axisLine: {
          show: true,
          lineStyle:  "#EAEDF3",
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
        name: "Salary",
        type: "bar",
        barWidth: 60,

        stack: "Ad",
        itemStyle: {
          color:  "#96BF0D",
        },
        label: {
          show: true,
          color: "#fff",
          formatter: "${c}",
        },
        emphasis: { focus: "series" },
        data: [200, 225, 230, 250],
      },

      {
        name: "Rent",
        type: "bar",
        stack: "Ad",
        itemStyle: {
          borderRadius: [0, 0, 0, 0],
          color:  "#009CDA",
        },
        label: {
          show: true,
          color: "#fff",
          formatter: "${c}",
        },
        emphasis: { focus: "series" },
        data: [180, 190, 198, 213],
      },

      {
        name: "Others",
        type: "bar",
        stack: "Ad",
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          color:"#256D85",
        },
        label: {
          show: true,
          color: "#fff",
          formatter: "${c}",
        },
        emphasis: { focus: "series" },
        data: [100, 120, 110, 110],
      },
    ],
  };

  const TecketsReReouted = {
    tooltip: { trigger: "axis" },
    legend: {
      show: true,
      bottom: "bottom",
      left: "left",
      itemWidth: 8,
      itemHeight: 8,
      borderRadius: [4, 4, 0, 0],
      textStyle: {
        color: "#6C768B",
        fontSize: 12,
      },
    },
    grid: {
      left: "8%",
      right: "4%",
      bottom: "18%",
      top: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        name: "Team", // Add the common title for the x-axis here
        nameLocation: "center", // Set the position of the x-axis name to the center
        nameGap: 40, // Adjust the gap between the x-axis name and the axis
        nameTextStyle: {
          color: "#6C768B", // Set title text color
          fontSize: 12, // Set title font size

        },
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          color: "#363A44",
          fontSize: 10,

        },
        data: ["Team1", "Team2", "Team3", "Team4", "Team5"],

      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Tickets Re-Routed",
        nameLocation: "center",
        nameGap: 40,
        nameTextStyle: {
          color: "#6C768B",
          fontSize: 12,
        },
        min: 0,
        max: 160,
        interval: 20,
        axisLabel: {
          color: "#6C768B",
          fontSize: 10,
          formatter: "{value} ",
        },
        axisLine: {
          show: true,
          lineStyle: { color: "#EAEDF3" },
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
        name: "Tickets Re-Routed",
        type: "bar",
        barWidth: 60,

        stack: "Ad",
        itemStyle: {
          color: "#009CDA",
          borderRadius: [5, 5, 0, 0]
        },
        label: {
          show: true,
          color: "#fff",
          formatter: "${c}",
        },
        emphasis: { focus: "series" },
        data: [120, 100, 142, 120, 130,]
      },

    ],
  };

  const investigationsData = {
    labels: [
      "Technician1",
      "Technician2",
      "Technician3",
      "Technician4",
      "Technician5",
      "Technician6",
    ],
    values1: [345, 260, 357, 330,250,360],
    values2: [240, 225, 260, 200,189,320],
    
  };

  const [selectedEmployeePerformance, setSelectedEmployeePerformance] = useState(null);
  const EmployeePerformance = [
    { name: "By Tickets Resolved", code: "NY" },
    { name: "By Tickets Resolved", code: "RM" },
    { name: "By Tickets Resolved", code: "LDN" },
  ];
  const employeeData = [
    {
      id: 1,
      name: 'Angel',
      image: 'employee1',
      team: 'Designantion',
      ticketsResolved: '450',
      rating: '4.5'
    },
    {
      id: 2,
      name: 'Shawn',
      image: 'employee2',
      team: 'Designantion',
      ticketsResolved: '450',
      rating: '4.5'
    },
    {
      id: 3,
      name: 'Mitchell',
      image: 'employee3',
      team: 'Designantion',
      ticketsResolved: '450',
      rating: '4.5'
    },
    {
      id: 4,
      name: 'Kyle',
      image: 'employee4',
      team: 'Designantion',
      ticketsResolved: '450',
      rating: '4.5'
    },
    {
      id: 5,
      name: 'Victoria',
      image: 'employee5',
      team: 'Designantion',
      ticketsResolved: '450',
      rating: '4.5'
    },
  ]
  const stackbarwithline2 = {
    tooltip: { trigger: "axis" },
    legend: {
      show: true,
      bottom: 10,
      left: 20,
      itemWidth: 8,
      itemHeight: 8,
      borderRadius: [4, 4, 0, 0],
      textStyle: {
        color: "#6C768B",
        fontSize: 12,
      },
    },
    grid: {
      left: 30,
      right: 20,
      bottom: 65,
      top: 20,
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        name: "Ages", // Add the common title for the x-axis here
        nameLocation: "center", // Set the position of the x-axis name to the center
        nameGap: 40, // Adjust the gap between the x-axis name and the axis
        nameTextStyle: {
          color: "#84878D", // Set title text color
          fontSize: 12, // Set title font size

        },
        splitLine: { show: false },
        axisTick: { show: false },
        axisLine: { show: false },
        axisLabel: {
          color:  "#20232E",
          fontSize: 10,

        },
        data: ["0 - 5", "6 - 10", "11 - 15", "16 - 20","21 - 25", "26 - 30", '30+'],

      },
    ],
    yAxis: [
      {
        type: "value",
        name: "No. of Tickets",
        nameLocation: "center",
        nameGap: 40,
        nameTextStyle: {
          color: "#6C768B",
          fontSize: 12,
        },
        min: 0,
        max: 140,
        interval: 20,
        axisLabel: {
          color: "#6C768B",
          fontSize: 10,
          formatter: "{value}$",
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
        name: "Low",
        type: "bar",
        barWidth: 60,
        
        stack: "Ad",
        itemStyle: {
          color: "#2C9999",
        },
        label: {
          show: true,
          color: "#fff",
          formatter: "{c}",
        },
        emphasis: { focus: "series" },
        data: [48, 5, 20, 55,18,38,10],
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
          show: true,
          color: "#fff",
          formatter: "{c}",
        },
        emphasis: { focus: "series" },
        data: [22, 25, 15, 10,35,65,25],
      },

      {
        name: "High",
        type: "bar",
        stack: "Ad",
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          color: "#309DC1",
        },
        label: {
          show: true,
          color: "#fff",
          formatter: "{c}",
        },
        emphasis: { focus: "series" },
        data: [10, 40, 35, 23,10,20,28],
      },
    ],
  };

  // prettier-ignore
const hours = [
  '12a', '1a', '2a', '3a', '4a', '5a', '6a',
  '7a', '8a', '9a', '10a', '11a',
  '12p', '1p', '2p', '3p', '4p', '5p',
  '6p', '7p', '8p', '9p', '10p', '11p'
];
// prettier-ignore
const days = [
  'Saturday', 'Friday', 'Thursday',
  'Wednesday', 'Tuesday', 'Monday', 'Sunday', 'Monday', 'Sunday'
];
// prettier-ignore
const data = [ [0, 0,1],[0, 1,1],[0, 2,1],[0, 3,1],[0, 1,1],[0, 4,1],
             [0, 5,1],[0, 6,1],[0, 7,1],[0, 8,1],[0, 9,1],[0, 10,1],
             [0, 11,1],[0, 12,1],[0, 13,1],[0, 14,1],[0, 15,1],[0, 16,1],
             [0, 17,1],[0, 18,1],[0, 19,1],[0, 20,1],[0, 21,1],[0, 22,1],
             [0, 23,1],[1, 0,1],[1, 1,1],[1, 2,1],[1, 3,1],[1, 1,1],[1, 4,1],
             [1, 5,1],[1, 6,1],[1, 7,1],[1, 8,1],[1, 9,1],[1, 10,1],
             [1, 11,1],[1, 12,1],[1, 13,1],[1, 14,1],[1, 15,1],[1, 16,1],
             [1, 17,1],[1, 18,1],[1, 19,1],[1, 20,1],[1, 21,1],[1, 22,1],
             [1, 23,1], [2, 0,4],[2, 1,4],[2, 2,4],[2, 3,4],[2, 4,4],[2, 5,4]
             ,[2, 6,4],[2, 7,1],[2, 8,1],[2, 9,1],[2, 10,1],
             [2, 11,1],[2, 12,1],[2, 13,1],[2, 14,1],[2, 15,1],[2, 16,1],
             [2, 17,1],[2, 18,1],[2, 19,1],[2, 20,1],[2, 21,1],[2, 22,1],
             [2, 23,1],[3, 0,4],[3, 1,4],[3, 2,4],[3, 3,4],[3, 4,4],[3, 5,4]
             ,[3, 6,4],[3, 7,4],[3, 8,4],[3, 9,4],[3, 10,4],[3, 11,4],[3, 12,4]
             ,[3, 13,4],[3, 14,4],[3, 15,4],[3, 16,4],[3, 17,4],[3, 18,4],[3, 19,4]
             ,[3, 20,4],[3, 21,4],[3, 22,4],[3, 23,4],[4, 0,4],[4, 1,4],[4, 2,4],[4, 3,4],[4, 4,4],[4, 5,4]
             ,[4, 6,4],[4, 7,4],[4, 8,4],[4, 9,4],[4, 10,4],[4, 4,4],[4, 11,4]
             ,[4, 12,4],[4, 13,4],[4, 14,4],[4, 15,4],[4, 16,4],[4, 17,4],[4, 18,4]
             ,[4, 19,4],[4, 20,4],[4, 21,4],[4, 22,4],[4, 23,4],
             [5, 0,9],[5, 1,9],[5, 2,9],[5, 3,9],[5, 4,9]
             ,[5, 5,9],[5, 6,9],[5, 7,9],[5, 8,9],[5, 9,9],[5, 10,9],[5, 11,9]
             ,[5, 12,9],[5, 13,9],[5, 14,9],[5, 15,9],[5, 16,9],[5, 17,9],[5, 18,9]
             ,[5, 19,9],[5, 20,5],[5, 21,5],[5, 22,5],[5, 23,5],
             [6, 0,9],[6, 1,9],[6, 2,9],[6, 3,9],[6, 4,9]
             ,[6, 5,9],[6, 6,9],[6, 7,9],[6, 8,9],[6, 9,9],[6, 10,9],[6, 11,9]
             ,[6, 12,9],[6, 13,9],[6, 14,9],[6, 15,9],[6, 16,9],[6, 17,9],[6, 18,9]
             ,[6, 19,9],[6, 20,9],[6, 21,9],[6, 22,9],[6, 23,9],
             [7, 0,9],[7, 1,9],[7, 2,9],[7, 3,9],[7, 4,9]
             ,[7, 5,9],[7, 6,9],[7, 7,9],[7, 8,9],[7, 9,9],[7, 10,9],[7, 11,9]
             ,[7, 12,9],[7, 13,9],[7, 14,9],[7, 15,9],[7, 16,9],[7, 17,9],[7, 18,9]
             ,[7, 19,9],[7, 20,9],[7, 21,9],[7, 22,9],[7, 23,9],
             [8, 0,9],[8, 1,9],[8, 2,9],[8, 3,9],[8, 4,9]
             ,[8, 5,9],[8, 6,9],[8, 7,9],[8, 8,9],[8, 9,9],[8, 10,9],[8, 11,9]
             ,[8, 12,9],[8, 13,9],[8, 14,9],[8, 15,9],[8, 16,9],[8, 17,9],[8, 18,9]
             ,[8, 19,9],[8, 20,9],[8, 21,9],[8, 22,9],[8, 23,9]]
  .map(function (item) {
  return [item[1], item[0], item[2] || '-'];
});
const Heatmap = {
tooltip: {
  position: 'top'
},
grid: {
 
  top: 10,
  right:20,
  left:20,
  bottom:40
},

xAxis: {
  type: 'category',
  data: hours,
  splitArea: {
    show: true
  },
  show:false
 
},
yAxis: {
  type: 'category',
  data: days,
  splitArea: {
    show: true
  },
  show:false
},
visualMap: {
  min: 0,
  max: 10,
   type: 'piecewise',
   selectedMode: 'multiple', // Add this line
  orient: 'horizontal',
  
  left: 20,
  bottom: 0,
    itemWidth:15,
  inRange: {
    color: ['#4169E1', '#256d85', '#2C9999'] // specify your desired colors here
  },
   pieces: [
    { min: 8, label: 'High', color: '#2C9999'},
    { min: 4, max: 8, label: 'Medium', color: '#256d85' },
    { max: 4, label: 'Low', color: '#4169E1' , borderColor: '#fff'}
  ]
},
series: [
  {
    name: 'Punch Card',
    type: 'heatmap',
    data: data,
    label: {
      show: false
    },
    itemStyle:{
       borderColor:"#fff",
        borderWidth:0.5
    },
  
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
       
      }
    }
  }
]
};

  return (
    <div>
    <div className="grid grid-cols-12 xl:grid-cols-12 gap-[20px] 3xl:gap-[0.800vw] mt-[24px] 3xl:mt-[1.25vw]">
                <div className="col-span-12 sm:col-span-6  lg:col-span-6 xl:col-span-2 ">
                  <div
                    className="shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC]  bg-[#fff] px-[16px] py-[12px] lg:py-[16px] lg:px-[12px] 3xl:py-[0.833vw] 
                            3xl:px-[0.625vw]"
                  >
                   

                    <div className="flex items-center gap-[16px] 3xl:gap-[0.833vw]">
                      <div>
                        <Image
                          src={`/assets/images/profile.svg`}
                          alt="notification"
                          width={40}
                          height={40}
                          className="3xl:w-[2.083vw] w-[40px] h-auto"
                        />
                      </div>
                      <div>
                        <div className="text-[#20232E] text-[18px] 3xl:text-[0.938vw] font-normal ">
                          Wade Warren
                        </div>
                      </div>
                    </div>
                    <div className="mt-[32px] xl:mt-[30px] lg:mt-[30px] 3xl:mt-[1.900vw]">
                      <div className="flex items-center gap-[16px] 3xl:gap-[0.833vw]">
                        <div className="border border-[#E4E7EC] p-[10px] xl:p-[10px] lg:p-[10px] 3xl:p-[0.469vw] rounded-md">
                          <Image
                            src={`/assets/images/profile-circle.svg`}
                            alt="notification"
                            width={32}
                            height={32}
                            className="3xl:w-[1.667vw] w-[32px] h-auto"
                          />
                        </div>
                        <div>
                          <div className="text-[#262626] text-[22px] 3xl:text-[1.146vw] font-semibold ">
                            3453741
                          </div>
                          <div className="text-[#424242] text-[14px] lg:text-[14px]  3xl:text-[0.729vw] font-light ">
                            Employee ID
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-12  lg:col-span-10 xl:col-span-10">
                  <div
                    className="shadow-md shadow-[#0000000D] rounded-lg border border-[#E4E7EC]  bg-[#fff] px-[16px] py-[12px] lg:py-[16px] lg:px-[12px] 3xl:py-[0.833vw] 
                            3xl:px-[0.625vw]"
                  >
                    <div className="text-[#3A3E49] text-[14px] lg:text-[14px]  3xl:text-[0.729vw] font-medium ">
                      Number of Tickets in each Status Today
                    </div>
                    <div className="flex flex-wrap  mt-[20px] xl:mt-[20px] lg:mt-[20px] 3xl:mt-[0.890vw] w-full ">
                                        <div className="border border-[#E4E7EC] p-[16px] xl:p-[10px] lg:p-[16px] 3xl:p-[0.633vw]  rounded-l-lg bg-[#FAFAFA] grow">
                                            <div className="text-[#20232E] text-[14px] lg:text-[14px]  3xl:text-[0.729vw] font-light ">
                                            New
                                            </div>
                                            <div className="3xl:mt-[0.417vw] lg:mt-[8px] mt-[8px]">
                                            <div className="flex items-center   xl:gap-[2px] lg:gap-1 3xl:gap-2">
                                                <div className="text-[#20232E] text-[20px] lg:text-[20px]  3xl:text-[1.25vw] font-semibold ">
                                                10
                                                </div>
                                                <i className="asetsmng-arrow-up-circle-fill text-[16px]  lg:text-[16px]  3xl:text-[0.833vw] text-[#057A55]"></i>{" "}
                                                <div className="text-[#057A55] text-[12px] 3xl:text-[0.625vw] text-right font-medium">
                                                2%
                                                </div>
                                                <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light">
                                                by yesterday
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    {/* 2nd */}
                                    <div className="border border-[#E4E7EC] p-[16px] xl:p-[10px] lg:p-[16px] 3xl:p-[0.633vw] bg-[#FAFAFA] grow">
                                        <div className="text-[#20232E] text-[14px] lg:text-[14px]  3xl:text-[0.729vw] font-light ">
                                        Assigned
                                        </div>
                                        <div className="3xl:mt-[0.417vw] lg:mt-[8px] mt-[8px]">
                                        <div className="flex items-center     xl:gap-[2px] lg:gap-1 3xl:gap-2">
                                            <div className="text-[#20232E] text-[20px] lg:text-[20px]  3xl:text-[1.25vw] font-semibold ">
                                            12
                                            </div>
                                            <i className="asetsmng-arrow-up-circle-fill text-[16px]  lg:text-[16px]  3xl:text-[0.833vw] text-[#057A55]"></i>{" "}
                                            <div className="text-[#057A55] text-[12px] 3xl:text-[0.625vw] text-right font-medium">
                                            2%
                                            </div>
                                            <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light">
                                            by yesterday
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                   {/* 3rd */}
                                   <div className="border border-[#E4E7EC] p-[16px] xl:p-[10px] lg:p-[16px] 3xl:p-[0.633vw] bg-[#FAFAFA] grow">
                                        <div className="text-[#20232E] text-[14px] lg:text-[14px]  3xl:text-[0.729vw] font-light ">
                                        In-Progress
                                        </div>
                                        <div className="3xl:mt-[0.417vw] lg:mt-[8px] mt-[8px]">
                                        <div className="flex items-center    xl:gap-[2px] lg:gap-1 3xl:gap-2">
                                            <div className="text-[#20232E] text-[20px] lg:text-[20px]  3xl:text-[1.25vw] font-semibold ">
                                            2
                                            </div>
                                            <i className="asetsmng-arrow-up-circle-fill text-[16px]  lg:text-[16px]  3xl:text-[0.833vw] text-[#B21E4B]"></i>{" "}
                                            <div className="text-[#B21E4B] text-[12px] 3xl:text-[0.625vw] text-right font-medium">
                                            2%
                                            </div>
                                            <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light">
                                            by yesterday
                                            </div>
                                        </div>
                                        </div>
                                    </div>

                                    {/* 4th */}
                                   <div className="border border-[#E4E7EC] p-[16px] xl:p-[10px] lg:p-[16px] 3xl:p-[0.633vw] bg-[#FAFAFA] grow">
                                        <div className="text-[#20232E] text-[14px] lg:text-[14px]  3xl:text-[0.729vw] font-light ">
                                        Awaiting Parts/Updates
                                        </div>
                                        <div className="3xl:mt-[0.417vw] lg:mt-[8px] mt-[8px]">
                                        <div className="flex items-center   xl:gap-[2px] lg:gap-1 3xl:gap-2">
                                            <div className="text-[#20232E] text-[20px] lg:text-[20px]  3xl:text-[1.25vw] font-semibold ">
                                            5
                                            </div>
                                            <i className="asetsmng-arrow-up-circle-fill text-[16px]  lg:text-[16px]  3xl:text-[0.833vw]  text-[#B21E4B]"></i>{" "}
                                            <div className="text-[#B21E4B] text-[12px] 3xl:text-[0.625vw] text-right font-medium">
                                            2%
                                            </div>
                                            <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light">
                                            by yesterday
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* 5th */}
                                    <div className="border border-[#E4E7EC] p-[16px] xl:p-[10px] lg:p-[16px] 3xl:p-[0.633vw] bg-[#FAFAFA] grow">
                                        <div className="text-[#20232E] text-[14px] lg:text-[14px]  3xl:text-[0.729vw] font-light ">
                                        Awaiting User Input
                                        </div>
                                        <div className="3xl:mt-[0.417vw] lg:mt-[8px] mt-[8px]">
                                        <div className="flex items-center    xl:gap-[2px] lg:gap-1 3xl:gap-2">
                                            <div className="text-[#20232E] text-[20px] lg:text-[20px]  3xl:text-[1.25vw] font-semibold ">
                                            4
                                            </div>
                                            <i className="asetsmng-arrow-up-circle-fill text-[16px]  lg:text-[16px]  3xl:text-[0.833vw]  text-[#057A55]"></i>{" "}
                                            <div className="text-[#057A55] text-[12px] 3xl:text-[0.625vw] text-right font-medium">
                                            2%
                                            </div>
                                            <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light">
                                            by yesterday
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                     {/* 6th */}
                                   <div className="border border-[#E4E7EC] p-[16px] xl:p-[10px] lg:p-[16px] 3xl:p-[0.633vw] bg-[#FAFAFA] grow">
                                        <div className="text-[#20232E] text-[14px] lg:text-[14px]  3xl:text-[0.729vw] font-light ">
                                        Resolved
                                        </div>
                                        <div className="3xl:mt-[0.417vw] lg:mt-[8px] mt-[8px]">
                                        <div className="flex items-center    xl:gap-[2px] lg:gap-1 3xl:gap-2">
                                            <div className="text-[#20232E] text-[20px] lg:text-[20px]  3xl:text-[1.25vw] font-semibold ">
                                            20
                                            </div>
                                            <i className="asetsmng-arrow-up-circle-fill text-[16px]  lg:text-[16px]  3xl:text-[0.833vw]  text-[#B21E4B]"></i>{" "}
                                            <div className="text-[#B21E4B] text-[12px] 3xl:text-[0.625vw] text-right font-medium">
                                            2%
                                            </div>
                                            <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light">
                                            by yesterday
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* 7th */}
                                    <div className="border border-[#E4E7EC] p-[16px] xl:p-[10px] lg:p-[16px] 3xl:p-[0.633vw] rounded-r-lg bg-[#FAFAFA] grow">
                                        <div className="text-[#20232E] text-[14px] lg:text-[14px]  3xl:text-[0.729vw] font-light ">
                                        Closed
                                        </div>
                                        <div className="3xl:mt-[0.417vw] lg:mt-[8px] mt-[8px]">
                                        <div className="flex items-center    xl:gap-[2px] lg:gap-1 3xl:gap-2">
                                            <div className="text-[#20232E] text-[20px] lg:text-[20px]  3xl:text-[1.25vw] font-semibold ">
                                            7
                                            </div>
                                            <i className="asetsmng-arrow-up-circle-fill text-[16px]  lg:text-[16px]  3xl:text-[0.833vw]  text-[#057A55]"></i>{" "}
                                            <div className="text-[#057A55] text-[12px] 3xl:text-[0.625vw] text-right font-medium">
                                            2%
                                            </div>
                                            <div className="text-[#84878D] text-[12px] 3xl:text-[0.625vw] text-right font-light">
                                            by yesterday
                                            </div>
                                        </div>
                                        </div>
                                    </div>


                    </div>
                  </div>
                </div>
              </div>
    <div className="grid grid-cols-2 xl:gap-[1.250vw] gap-5 xl:mt-[1.458vw] mt-[24px]">
      {/**col**/}
      <div className="bg-white border border-[#EAEDF3] shadow-md rounded-2xl xl:rounded-[0.833vw]  ">
        <ChartWrapper
          title={" Technician -Assigned to Resolved"}
          ExportIcon={true}
          tabSection={true}
          infoIcon={true}
          bulbIcon={true}
          downloadIcon={true}
          graphIcon={true}
          data={
            <div className="w-full xl:h-[19.333vw] relative">
              <div className="flex justify-end ">
                <div className="chartdropdown mr-[16px] 3xl:mr-[0.833vw]">
                  <Dropdown
                    value={selectedCluster}
                    onChange={(e) => setSelectedCluster(e.value)}
                    options={cluster}
                    optionLabel="name"
                    placeholder="Within SLA"
                    className="w-full"
                  />
                </div>
              </div>

              <div className='w-full h-[380px] 3xl:h-[19.792vw] px-[16px] 3xl:px-[0.833vw]'>
              <DoublebarLinechart

                data={investigationsData}
                barname={["Assigned", "Resolved"]}
                legend={{
                  left: 0,
                  bottom: 2,
                  itemWidth: 10,
                  itemHeight: 10,
                  symbolKeepAspect: true,
                  data: [
                    { name: 'Assigned', },
                    { name: 'Resolved', },
                    
                  ],
                  textStyle: {
                    color:  "#344054",
                  },
                }}
                grid={{
                  top: 30,
                  bottom: 90,
                  right: 60,
                  left: 70,
                }}
                maxBar1={400}
                interval1={50}
                // maxBar2={100}
                // interval2={10}
                axistop={true}
                axistoplabel={["4%", "4%", "4%", "4%"]}
                color1={"#4169E1"}
                color2={"#2C9999"}
                color3={"#363A44"}
                xAxisName={"Technicians"}
                xAxisNameGap={"55"}
                xAxisNamePosition={"middle"}
                yAxisName={"Count of Tickets"}
                
                yAxisNameGap={50}
                yAxisNameGap1={45}
                yAxisNamePosition={"middle"}
              />
              </div>




            </div>
          }
        />

      </div>
      {/**col**/}
      {/**col**/}
      <div className="bg-white border border-[#EAEDF3] shadow-md rounded-2xl xl:rounded-[0.833vw] ">
        <ChartWrapper
          title={"Tickets by Priority"}
          ExportIcon={true}
          tabSection={true}
          infoIcon={true}
          bulbIcon={true}
          downloadIcon={true}
          graphIcon={true}
          data={
            <>

              <div className="w-full min-h-[421px] 3xl:min-h-[21.927vw]">

                <div className="flex justify-end px-[16px] 3xl:px-[0.833vw]">
                  
                  <div className="chartdropdown ">
                    <Dropdown
                      value={selectedEmployeePerformance}
                      onChange={(e) => setSelectedEmployeePerformance(e.value)}
                      options={EmployeePerformance}
                      optionLabel="name"
                      placeholder="By Tickets Resolved"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="w-full xl:h-[20.229vw] ">
                <ReactEcharts
                  option={Heatmap}
                  style={{ height: "120%", width: "100%" }}
                />

              </div>


              </div>
            </>
          }
        />
      </div>
      {/**col**/}
      <div className="bg-white border border-[#EAEDF3] shadow-md rounded-2xl xl:rounded-[0.833vw] ">
        <ChartWrapper
          title={"New Tickets To Assigned Tickets (Hourly Trend) "}
          ExportIcon={true}
          tabSection={true}
          infoIcon={true}
          bulbIcon={true}
          downloadIcon={true}
          graphIcon={true}
          data={
            <>
              <div className="w-full h-[359px] 3xl:h-[22.90vw]">
              <ReactEcharts
              echarts={echarts}
              option={LineChartwithShadow}
              style={{ width: '100%', height: '100%' }}
              />

              </div>
            </>
          }
        />
      </div>

      {/**col**/}
      <div className="bg-white border border-[#EAEDF3] shadow-md rounded-2xl xl:rounded-[0.833vw] ">
        <ChartWrapper
          title={"New Tickets By Age"}
          ExportIcon={true}
          tabSection={true}
          infoIcon={true}
          bulbIcon={true}
          downloadIcon={true}
          graphIcon={true}
          data={
            <>
              <div className="flex gap-2 pb-2">
                
              </div>
              <div className="w-full xl:h-[19.90vw] ">
               

                <Newticketsbyagebarchart/>

              </div>
            </>
          }
        />
      </div>


    </div>
  </div>
  )
}

