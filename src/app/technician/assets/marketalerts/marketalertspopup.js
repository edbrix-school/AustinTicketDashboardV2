"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Sidebar } from 'primereact/sidebar';
import * as echarts from 'echarts';
import ReactEcharts from "echarts-for-react";
import { useRouter } from "next/navigation";
function marketalertspopup() {
    const [visible, setVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: 'Acer Aspire 5 (A5 15-56-5', code: 'NY', link: '#' },
    { name: 'Acer Nitro 5 (A1 15-56-5', code: 'RM', link: '/technician/assets' },
    { name: 'Acer Aspire 7 (A5 14-54G', code: 'LDN', link: '#' },
    { name: 'Acer TravelMate P648-M-700F', code: 'IST', link: '#' },
    { name: 'Acer Aspire R3 131T-P9J9', code: 'PRS', link: '#' }
  ];

  const handleCityClick = (option) => {
    // Perform any action you want here

    setVisible(true)
  };
  const linechartdata = {
    grid: {
      left: '0%',
      right: '0%',
      top: '0%',
      bottom: '5%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      // data:props.label,
      data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'],
      show: false
    },
    yAxis: {
      type: 'value',
      show: false
    },

    series: [
      {
        // data: props.data,
        data: [2, 3.5, 1.8, 3, 3.8, 2.8, 3.4, 2, 3, 3.6, 3, 3.5, 2, 3.3, 2.3],
        type: 'line',
        symbol: 'none',
        itemStyle: {
          color: '#96CF4C'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              // color: '#96BF0D'rgba(185, 225, 120, 0)
              color: 'rgba(185,225,120,1)'
            },

            {
              offset: 1,
              // color: '#ffff'
              color: 'rgba(185,225,120,0)'
            },

          ])
        },
      }

    ]
  };
  //   const label = [
  //     "01",
  //     "02",
  //     "03",
  //     "04",
  //     "05",
  //     "06",
  //     "07",
  //     "08",
  //     "09",
  //     "10",
  //     "11",
  //     "12",
  //     "13",
  //   ];
  // const data = [2, 3.5, 1.8, 3, 3.8, 2.8, 3.4, 2, 3, 3.6, 3, 3.5, 2, 3.3, 2.3];

  const optionTemplate = (option) => {
    return (
      <div>
        <Link href={option.link}>{option.name}</Link>
        <button onClick={() => handleCityClick(option)}>{option.name}</button>
      </div>
    );
  };

  const router = useRouter();

  function handleDropDownChange(e) {
    console.log("handleDropDownChange", e.value);
    setSelectedCity(e.value);
      
    if (e?.value?.code == 'RM') {
      router.push("/technician/assets")
    } else {
      setVisible(true);
    }
    // setSelectedCity(e.value)
  }
  return (
    <div>
 <div className="p-input-icon-left">
                <Dropdown value={selectedCity} onChange={handleDropDownChange} options={cities} optionLabel="name"
                  placeholder="Select a City" className="w-full md:w-14rem"  />
              </div>
<Sidebar
        // visible={props.visible} 
        position="right" className="custmSidebar width740 w-[730px]"
        // onHide={() => props.onHides(false)}
        Sidebar visible={visible} onHide={() => setVisible(false)}
      >
        {/* Header */}
        <div className="  rounded-tl-2xl xl:rounded-tl-2xl-[0.833vw] 3xl:p-[1.25vw] p-6 z-10 relative">
          <div className="3xl:space-y-[0.417vw] space-y-2">
            <div className="text-[#20232E] text-xl font-medium leading-7 3xl:leading-[1.458vw] 3xl:text-[1.25vw]">Market Alert</div>

            <div className="grid gap-[24px] xl:gap-[1.25vw]  grid-cols-12 items-center">
              <div className="col-span-3 border border-[#E4E7EC] rounded-lg py-[18px] px-[12px] xl:px-[0.625vw] xl:py-[0.838vw]">
                <Image src={"/assets/images/manageAlertImg.svg"} width={150} height={150} />
              </div>
              <div className="col-span-9">
                <div className="text-[#20232E] text-[20px] xl:-[1.042vw] font-medium ">Aspire 5 A515-56-51EV Notebook</div>
                <div className="text-[#84878D] text-[12px] xl:text-[0.625vw]">Model: A515-56-51EV</div>
                <div>
                  <ReactEcharts
                    option={linechartdata}
                    // label={label} data={data}
                    style={{ height: "80%", width: "100%" }}
                  />
                </div>
                <div>
                  <div><span className="text-[20px] xl:text-[0.625vw] text-[#000000] font-medium ">$3450</span> <span className="text-[#6D9636] text-[14px] font-semibold xl:text-[0.729vw]">20.4% Increased</span><span className="text-[#84878D] text-[12px] xl:text-[0.625vw]">Current Price, at 2 PM. On 30th Nov</span></div>
                </div>
              </div>
            </div>
          </div>


        </div>
        {/* Header */}
        {/*Map view */}

        {/*Map view */}
      </Sidebar>
    </div>
  )
}

export default marketalertspopup