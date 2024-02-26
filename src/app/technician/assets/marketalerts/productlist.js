"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { AutoComplete } from "primereact/autocomplete";
// import { CountryService } from './service/CountryService';

export default function MarketAlerts(probs) {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const [countries, setCountries] = useState([
    { name: 'Acer Aspire 5 (A5 15-56-5', desc: 'Starts from $3500' , code: 'A', img: '/assets/images/laptop8.png' },
    { name: 'Acer Nitro 5 (A1 15-56-5', desc: 'Starts from $3200' , code: 'N', img: '/assets/images/laptop7.png' },
    { name: 'Acer Aspire 7 (A5 14-54G', desc: 'Starts from $3900' , code: 'A', img: '/assets/images/laptop8.png' },
    { name: 'Acer TravelMate P648-M-700F', desc: 'Starts from $4500' , code: 'A', img: '/assets/images/laptop6.png' },
    { name: 'Acer Aspire R3 131T-P9J9', desc: 'Starts from $3500' , code: 'A', img: '/assets/images/laptop5.png' },
]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);

  const search = (event) => {
      // Timeout to emulate a network connection
      setTimeout(() => {
          let _filteredCountries;

          if (!event.query.trim().length) {
              _filteredCountries = [...countries];
          }
          else {
              _filteredCountries = countries.filter((country) => {
                  return country.name.toLowerCase().startsWith(event.query.toLowerCase());
              });
          }

          setFilteredCountries(_filteredCountries);
      }, 250);
  }

  const itemTemplate = (item) => {
      return (
          <div className="flex items-center">
              <img
                  alt={item.name}
                  src={item.img}
                  className={`flag flag-${item.code.toLowerCase()} mr-2`}
                  style={{width: '80px'}}
              />
              <div>
                <h5 className="text-[18px] 3xl:text-[16px] text-[#000] font-medium mb-[6px]">{item.name}</h5>
                <p className="text-[12px] 3xl:text-[14px] text-[#000]">{item.desc}</p>
              </div>
          </div>
      );
  };

  // useEffect(() => {
  //     CountryService.getCountries().then((data) => setCountries(data));
  // }, []);

  function handleDropDownChange(e) {
    console.log("handleDropDownChange", e.value);
    if (e?.value?.code == "N") {
      probs.setSearchShow(true)
    } else if(e?.value?.code == "A"){
      probs.setAlertPopupVisible(true);
    }
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
              <i className="asetsmng-search-big text-[20px] 3xl:text-[1.042vw] text-[#4B586E] z-[1]" />
              <i className="asetsmng-microphone text-[20px] 3xl:text-[1.042vw] text-[#4B586E] leading-none z-[1]" />
              {/* <InputText
              onChange={inputHandler}
                className="placeholder:text-[#84878D] placeholder:text-[16px] 3xl:placeholder:text-[0.833vw]"
                placeholder="Search products by name, brand, etc.,"
              /> */}
              <AutoComplete field="name" value={selectedCountry} suggestions={filteredCountries} 
                completeMethod={search} onChange={(e) => {
                  setSelectedCountry(e.value);
                  handleDropDownChange(e);
                }} itemTemplate={itemTemplate}
                
                className="placeholder:text-[#84878D] placeholder:text-[16px] 3xl:placeholder:text-[0.833vw] w-full"
                placeholder="Search products by name, brand, etc.,"
                dropdownClassName="custom-dropdown-class"
              />
             
            </div>
            <div className="col min-h-full">
              <Button type="submit" label="Search" onClick={()=>probs.setSearchShow(true)} />
            </div>
            <>
              
            </>
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
      
    </>
  );
}
