import React from 'react'
import ReactEcharts from "echarts-for-react";
import { color } from 'echarts';
import { useTheme } from 'next-themes';


export const DrillDownChart = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const drillDownCharts = {

    series: [{
      type: "tree",
      symbol: "roundRect",
      emphasis:false,
      data: [{
        name: (() => {
          return "Provision \n $1275M "
        //   <>
        //   <div className='text-[#fff] font-normal text-[14px]'>Provision</div>
        //   <div className='text-[#fff] font-bold text-[20px]'>$1275M</div>
        // </>
        })(),
        

        label: {
          show: true,
          position: "inside",
          color: '#fff',
          background:'#ffff',
          fontSize: '12',
          fontWeight: '500',
          textAlign: 'left',
          borderColor: '0',
          lineHeight: 15,
          emphasis:false
        },
        
         symbolSize: 85,
        itemStyle: {
          color: '#24262d',
          // color: '#24262D',
          emphasis: false
        },
        children: [{
          lineStyle: {
            width: 20,
            color: "rgba(2, 166, 102, 0.47)"
          },
          itemStyle: {
            background:"#000",
             // color: '#24262D',
             emphasis: false
           },
          symbolSize: 0,
          label: {
            show: true,
            position: "right",
            lineHeight: 15,
            background:"#F6F7F9",
            color: '#24262D',
            backgroundColor:"#F6F7F9",
            padding: [8, 20, 8, 8]
          },
         
          name: (() => {
            return "Services    \n $271M"
          })(),
        },
        {
          name: (() => {
            return "MEA \n $244M"
          })(),
          lineStyle: {
            width: 20,
            color: "#EA547878",
          },
          symbolSize: 0,
          label: {
            show: true,
            position: "right",
            lineHeight: 15,
            color: '#363A44',
            backgroundColor:"#F6F7F9",
            padding: [8, 20, 8, 8]
          },
        },
        {
          name: (() => {
            return "KSA \n $134M"
          })(),
          lineStyle: {
            width: 20,
            color: "rgba(2, 166, 102, 0.47)"
          },
          symbolSize: 0,
          label: {
            show: true,
            position: "right",
            lineHeight: 15,
            color:'#363A44',
            backgroundColor:"#F6F7F9",
            padding: [8, 20, 8, 8]
          },
        },
        // 2nd
        {
          lineStyle: {
            width: 20,
            color: "#EA547878",

          },
           symbolSize: 85,
          label: {
            show: true,
            position: "inside",
            color: '#fff',
            fontSize: '12',
            fontWeight: '600',
            textAlign: 'left',
            lineHeight: 15,
            color: '#fff',
          },
          itemStyle: {
            color: '#24262d',
          },
          name: "Technology \n $271",
          children: [
        
          {
            name: "Distribution \n $99M",
            label: {
              show: true,
              position: "inside",
              color: '#fff',
              fontSize: '12',
              fontWeight: '600',
              textAlign: 'left',
              lineHeight: 15,
              background: '#000',
            },
             symbolSize: 85,
            itemStyle: {
              color: '#029046',
            },
            collapsed: false,
            children: [{
              name: "Others\n $25M",
              lineStyle: {
                width: 20,
                color: "#02A66678"
              },
              symbolSize: 0,
              label: {
                show: true,
                position: "right",
                lineHeight: 15,
                color: '#363A44',
                backgroundColor:"#F6F7F9",
                padding: [8, 20, 8, 8]
              },
            },
            {
              name: "Redington \n Middle East \n LLC (UAE) \n 74$M",
              collapsed: false,
              children: [{
                name: "Prod 1 \n $25.0M",
                lineStyle: {
                  width: 20,
                  color: "#02A66678",

                },
                symbolSize:0,
                label: {
                  show: true,
                  position: "right",
                  lineHeight: 15,
                  color: '#363A44',
                  backgroundColor:"#F6F7F9",
                  padding: [8, 20, 8, 8]
                },
              },
              {
                name: "Prod 2 \n $24.2M",
                lineStyle: {
                  width: 24,
                  color: "#EA547878"
                },
                symbolSize: 0,
                label: {
                  show: true,
                  position: "right",
                  lineHeight: 15,
                  color: '#363A44',
                  backgroundColor:"#F6F7F9",
                  padding: [8, 20, 8, 8]
                },
              },
              {
                name: "Prod 3 \n $47.1M",
                lineStyle: {
                  width: 14,
                  color: "#EA547878"
                },
                symbolSize: 0,
                label: {
                  show: true,
                  position: "right",
                  lineHeight: 15,
                  color: '#363A44',
                  backgroundColor:"#F6F7F9",
                  padding: [8, 20, 8, 8]
                },
              },
              {
                name: "Prod 4 \n $25.0M",
                lineStyle: {
                  width: 12,
                  color: "#EA547878"
                },
                symbolSize: 0,
                label: {
                  show: true,
                  position: "right",
                  lineHeight: 15,
                  color: '#363A44',
                  backgroundColor:"#F6F7F9",
                  padding: [8, 20, 8, 8]
                },
              },
              {
                name: "Prod 5 \n $44.3M",
                lineStyle: {
                  width: 12,
                  color: "#02A66678"
                },
                symbolSize: 0,
                label: {
                  show: true,
                  position: "right",
                  lineHeight: 15,
                  color: '#363A44',
                  backgroundColor:"#F6F7F9",
                  padding: [8, 20, 8, 8]
                },
              },
         
              ],
              lineStyle: {
                width: 20,
                color: "#EA547878"
              },
               symbolSize: 85,
              label: {
                show: true,
                position: "inside",
                color: '#fff',
                fontSize: '12',
                fontWeight: '600',
                textAlign: 'left',
                lineHeight: 15,
                color: '#fff',
              },
              itemStyle: {
                color: '#029046',
              },
            },
       
            ],
            lineStyle: {
              width: 20,
              color: "#EA547878"
            },
          },
         
       
        
          ],
        },
        
        {
          name: "SCM \n $78M",
          lineStyle: {
            width: 20,
            color: "#02A66678"
          },
          symbolSize: 0,
          label: {
            show: true,
            position: "right",
            lineHeight: 15,
            color: '#363A44',
            backgroundColor:"#F6F7F9",
            padding: [8, 20, 8, 8]
          },

        },
        {
          name: "EPSG \n $70M",
          lineStyle: {
            width: 20,
            color: "#02A66678"
          },
          symbolSize: 0,
          label: {
            show: true,
            position: "right",
            lineHeight: 15,
            color: '#363A44',
            backgroundColor:"#F6F7F9",
            padding: [8, 20, 8, 8]
          },
        },
        {
          name: "MSG \n $63M",
          lineStyle: {
            width: 20,
            color: "#02A66678"
          },
          symbolSize: 0,
          label: {
            show: true,
            position: "right",
            lineHeight: 15,
            color: '#363A44',
            backgroundColor:"#F6F7F9",
            padding: [8, 20, 8, 8]
          },
        },
        {
          name: "Pro Connect \n $60M",
          lineStyle: {
            width: 20,
            color: "#EA547878",

          },
          symbolSize: 0,
          label: {
            show: true,
            position: "right",
            lineHeight: 15,
            color: '#363A44',
            backgroundColor:"#F6F7F9",
            padding: [8, 20, 8, 8]
          },
        },
        {
          name: "Others \n $256M",
          lineStyle: {
            width: 20,
            color: "#02A66678"
          },
          symbolSize: 0,
          label: {
            show: true,
            position: "right",
            lineHeight: 15,
            color: '#363A44',
            backgroundColor:"#F6F7F9",
            padding: [8, 20, 8, 8]
          },
        }
        ]
      }],
      itemStyle: {
        emphasis: {
          
          
          emphasis: false,
        },
      },
      label: {
        position: "right",
        color: '#fff',
        lineHeight: 15,
        color: '#363A44',
      },
      lineStyle: {
        width: 30,
        color: "#fff"
      },
      symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIKSURBVHgB7da9TUMxFEDhe11AywjZgIyQSBR0MAqZAJggsAl0FEhkhGxARqAFpGfsF0ARLJAcna/y++mOru2Mv5Zns5LlokZcZsQktPdaq3VGrof6fhuL1Wb3W/6ulrOTkkfXbXUVOmB59x36bXwa323jvrTVNHTw+kTX+jHvkUt/8T25xoVoUzsteXy9XS9nkxb4NYQz1GFefkqLp0Reti26ujVTZV70M9jAXJMSQjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBoYzMJyB4QwMZ2A4A8MZGM7AcAaGMzCcgeEMDGdgOAPDGRjOwHAGhjMwnIHhDAxnYDgDwxkYzsBwBobrgTchpBqxLlHrYwgpI9dliPoQQhpq3pZYPK/aFN+HWHrTxdNmvGQN8XnT9+sQQm/Zm/b19ha9WL3V+jF3kgFaw7Fla9of898Py/NJieGmZpy2j9PQ3msTu8l2WR7vU/3I3fEFO3Nf7zpxuL0AAAAASUVORK5CYII=",
   
      height: "90%",
      top: '-30',
      left: '60',
      bottom:'-20%',
      
      on: {
        click: function (params) {
          var node = params.data;
          if (node.symbolSize === 0) {
            node.symbolSize = 70;
            if (node.children) {
              node.children.forEach(function (child) {
                child.symbolSize = 70;
              });
            }
          } else {
            node.symbolSize = 0;
            if (node.children) {
              node.children.forEach(function (child) {
                child.symbolSize = 0;
              });
            }
          }
          myChart.setOption(option);
        }
      }
    }]
  }


  return (
    <div className='h-[1100px]'>
      <ReactEcharts option={drillDownCharts} style={{ width: '100%', height: '100%' }} />
    </div>
  )
} 
