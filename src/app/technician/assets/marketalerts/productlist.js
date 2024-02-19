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
export default function MarketAlerts() {
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
    <>
      <div className="mt-[15px] lg:mt-[40px] xl:mt-[67px] 3xl:mt-[3.49vw]">
        <div className="w-full max-w-[1144px] 3xl:max-w-[59.583vw] mx-auto bg-white rounded-[16px] lg:rounded-[24px] 3xl:rounded-[1.25vw] px-[15px] lg:px-[56px] 3xl:px-[2.917vw] py-[15px] lg:py-[40px] 3xl:py-[2.083vw]">
          <div className="text-[#20232E] text-[18px] lg:text-[24px] 3xl:text-[1.25vw] font-medium text-center">
            Chose Product for Market Alert
          </div>
          <div className="flex justify-center productSearch gap-[16px] 3xl:gap-[0.833vw] mt-[15px] lg:mt-[36px] 3xl:mt-[1.875vw] mb-[24px] lg:mb-[48px] 3xl:mb-[2.5vw]">
            <div className="p-input-icon-left">
              <i className="asetsmng-search-big text-[20px] 3xl:text-[1.042vw] text-[#4B586E]" />
              {/* <i className="asetsmng-microphone text-[20px] 3xl:text-[1.042vw] text-[#4B586E] leading-none" /> */}
              {/* <InputText
                className="placeholder:text-[#84878D] placeholder:text-[16px] 3xl:placeholder:text-[0.833vw]"
                placeholder="Search products by name, brand, etc.,"
              /> */}
              <div className="p-input-icon-left">
                <Dropdown value={selectedCity} onChange={handleDropDownChange} options={cities} optionLabel="name"
                  placeholder="Select a City" className="w-full md:w-14rem"  />
              </div>
            </div>
            <div className="col min-h-full">
              <Button type="submit" label="Search" />
            </div>
          </div>
          {/* row */}
          <div className="flex justify-between">
            <div className="text-[#20232E]">Popular Searches</div>
            <div className="text-[#4169E1]">
              <Link href={""}>See all Popular Products</Link>
            </div>
          </div>
          {/* row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-[15px] lg:gap-[32px] 3xl:gap-[1.667vw] mt-[16px] 3xl:mt-[0.833vw]">
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop1.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                HP 15s
              </div>
            </div>
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop2.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                Dell Alienware x16
              </div>
            </div>
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop3.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                HP Pavilion Plus
              </div>
            </div>
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop1.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                HP Victus
              </div>
            </div>
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop2.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                Asus Vivobook S 140
              </div>
            </div>
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop3.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                Acer Predator Triton 17 X
              </div>
            </div>
            <div className="col">
              <div className="w-full bg-[#F9F9FC] h-[120px] flex items-center justify-center rounded-[8px] 3xl:rounded-[0.417vw]">
                <Image
                  src={"/assets/images/laptop1.png"}
                  width={"80"}
                  height={"80"}
                  alt=""
                />
              </div>
              <div className="productTitle mt-[11px] 3xl:mt-[0.573vw] text-center">
                HP Envy x360 15
              </div>
            </div>
          </div>
        </div>
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
    </>
  );
}
