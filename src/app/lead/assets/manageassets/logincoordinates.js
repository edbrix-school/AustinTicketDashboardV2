import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Calendar } from 'primereact/calendar';
import { Sidebar } from "primereact/sidebar";
import LocationHistoryTable from "./locationhistory"

// Custom Previous Arrow Component
const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, top: '0%', zIndex:'9'}}
        onClick={onClick}
      />
    );
  };
  
  // Custom Next Arrow Component
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, bottom: '0%',  zIndex:'9' }}
        onClick={onClick}
      />
    );
  };

  
  

const LogincoordinatesMap = (props) => {    
    const [date, setDate] = useState(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
      };


      const [LocationHistory, setLocationHistory] = useState(true);
      const [geolocation, setgeolocation] = useState(false);
    
      const toggleVisibility = () => {
        setLocationHistory(!LocationHistory);
        setgeolocation(!geolocation);
      };

    /****MultiDev Active******/
      const [activeDiv, setActiveDiv] = useState(1);

      const handleClick = (divNumber) => {
        setActiveDiv(divNumber);
      };

    return (
        <>
        <div>
            <Sidebar visible={props.visible} position="right" className="custmSidebar width1600" onHide={() => props.onHides(false)}>
                {/* Header */}
                <div className="bg-[#F9F9FC] flex items-center justify-between rounded-tl-2xl xl:rounded-tl-2xl-[0.833vw] 3xl:p-[1.25vw] p-6 z-10 relative">
                    <div className="3xl:space-y-[0.417vw] space-y-2">
                        <div className="text-[#84878D] text-base font-medium leading-5 3xl:leading-[1.042vw] 3xl:text-[0.833vw]">Asset Code</div>
                        <div className="text-[#20232E] text-xl font-medium leading-7 3xl:leading-[1.458vw] 3xl:text-[1.25vw]">AC-22242</div>
                    </div>
                    <div>
                    {LocationHistory &&
                        <div className="text-[#4B586E] text-sm 3xl:text-[0.729vw] font-normal leading-[18px] 3xl:leading-[0.938vw] bg-white border border-[#D3D3CE] rounded-lg 3xl:rounded-[0.417vw] 3xl:px-[0.625vw] px-3 3xl:py-[0.521vw] py-2.5 cursor-pointer" onClick={toggleVisibility}>Check Location History</div>
                    }
                    {geolocation && <div className="text-[#4B586E] text-sm 3xl:text-[0.729vw] font-normal leading-[18px] 3xl:leading-[0.938vw] bg-white border border-[#D3D3CE] rounded-lg 3xl:rounded-[0.417vw] 3xl:px-[0.625vw] px-3 3xl:py-[0.521vw] py-2.5 cursor-pointer" onClick={toggleVisibility}>Back to Geolocation</div>
                    }
                    </div>
                </div>
                {/* Header */} 
                {LocationHistory &&
                <div className="h-full relative">
                <div className="absolute top-0 left-0 vertical-shadow 3xl:pl-[1.667vw] 3xl:pt-[1.667vw] pl-8 pt-8 rounded-bl-2xl">
                <div className="shadow-lg 3xl:rounded-[0.208vw] rounded bg-[#F9F9FC] 3xl:px-[0.625vw] px-3 3xl:py-[0.417vw] 3xl:w-[5.26vw] 3xl:h-[2.396vw] w-[101px] h-[46px] flex flex-col justify-center">
            <div className="text-[#9CA1AB] 3xl:text-[0.521vw] text-[10px] font-normal">Date</div>
            <Calendar value={date} onChange={(e) => setDate(e.value)} className="custmCalendar" placeholder="07/12/2023" />
            </div>
                {/*Slider*/}
                <div className="3xl:mt-[4.063vw] mt-[78px]">
                <div className="vertical-slider-container h-[75vh] w-[110px] 3xl:w-[5.729vw] z-20 relative">
                <Slider {...settings}>
                {/* 1 */}    
                <div>
                <div className="bg-[#F9F9FC] py-1 3xl:py-[0.208vw] px-1 flex items-center justify-between w-[100px] h-14 3xl:w-[5.208vw] 3xl:h-[2.917vw] cursor-pointer time_location_btn">
                    <div className="text-[#3A3E49] text-xs font-semibold leading-4 3xl:text-[0.625vw] 3xl:leading-[0.833vw] text-center grow w-full"><span>12:00 AM</span></div>
                    <div className="grow w-[17px]"><Image src={'/assets/images/barchart.svg'} width={17} height={34} alt="34" /></div>
                </div>
                </div>
                {/* 2 */}
                <div>
                <div className="bg-[#F9F9FC] py-1 3xl:py-[0.208vw] px-1 flex items-center justify-between w-[100px] h-14 3xl:w-[5.208vw] 3xl:h-[2.917vw] cursor-pointer time_location_btn">
                    <div className="text-[#3A3E49] text-xs font-semibold leading-4 3xl:text-[0.625vw] 3xl:leading-[0.833vw] text-center grow w-full"><span>01:00 PM</span></div>
                    <div className="grow w-[17px]"><Image src={'/assets/images/barchart.svg'} width={17} height={34} alt="34" /></div>
                </div>
                </div>
                {/* 3 */}
                <div>
                <div className="bg-[#F9F9FC] py-1 3xl:py-[0.208vw] px-1 flex items-center justify-between w-[100px] h-14 3xl:w-[5.208vw] 3xl:h-[2.917vw] cursor-pointer time_location_btn">
                    <div className="text-[#3A3E49] text-xs font-semibold leading-4 3xl:text-[0.625vw] 3xl:leading-[0.833vw] text-center grow w-full"><span>02:00 PM</span></div>
                    <div className="grow w-[17px]"><Image src={'/assets/images/barchart.svg'} width={17} height={34} alt="34" /></div>
                </div>
                </div>
                {/* 4 */}
                <div>
                <div className="bg-[#F9F9FC] py-1 3xl:py-[0.208vw] px-1 flex items-center justify-between w-[100px] h-14 3xl:w-[5.208vw] 3xl:h-[2.917vw] cursor-pointer time_location_btn">
                    <div className="text-[#3A3E49] text-xs font-semibold leading-4 3xl:text-[0.625vw] 3xl:leading-[0.833vw] text-center grow w-full"><span>03:00 PM</span></div>
                    <div className="grow w-[17px]"><Image src={'/assets/images/barchart.svg'} width={17} height={34} alt="34" /></div>
                </div>
                </div>
                {/* 5 */}
                <div>
                <div className={`bg-[#F9F9FC] py-1 3xl:py-[0.208vw] px-1 flex items-center justify-between w-[100px] h-14 3xl:w-[5.208vw] 3xl:h-[2.917vw] cursor-pointer  time_location_btn ${activeDiv === 1 ? 'activelocation' : ''}`}
        onClick={() => handleClick(1)}>
                    <div className="text-[#3A3E49] text-xs font-semibold leading-4 3xl:text-[0.625vw] 3xl:leading-[0.833vw] text-center grow w-full"><span>04:00 PM</span></div>
                    <div className="grow w-[17px]"><Image src={'/assets/images/barchart.svg'} width={17} height={34} alt="34" /></div>
                </div>
                </div>
                {/* 6 */}
                <div>
                <div className="bg-[#F9F9FC] py-1 3xl:py-[0.208vw] px-1 flex items-center justify-between w-[100px] h-14 3xl:w-[5.208vw] 3xl:h-[2.917vw] cursor-pointer time_location_btn">
                    <div className="text-[#3A3E49] text-xs font-semibold leading-4 3xl:text-[0.625vw] 3xl:leading-[0.833vw] text-center grow w-full"><span>05:00 PM</span></div>
                    <div className="grow w-[17px]"><Image src={'/assets/images/barchart.svg'} width={17} height={34} alt="34" /></div>
                </div>
                </div>
                {/* 7 */}
                <div>
                <div className="bg-[#F9F9FC] py-1 3xl:py-[0.208vw] px-1 flex items-center justify-between w-[100px] h-14 3xl:w-[5.208vw] 3xl:h-[2.917vw] cursor-pointer time_location_btn">
                    <div className="text-[#3A3E49] text-xs font-semibold leading-4 3xl:text-[0.625vw] 3xl:leading-[0.833vw] text-center grow w-full"><span>06:00 PM</span></div>
                    <div className="grow w-[17px]"><Image src={'/assets/images/barchart.svg'} width={17} height={34} alt="34" /></div>
                </div>
                </div>
                {/* 8 */}
                <div>
                <div className={`bg-[#F9F9FC] py-1 3xl:py-[0.208vw] px-1 flex items-center justify-between w-[100px] h-14 3xl:w-[5.208vw] 3xl:h-[2.917vw] cursor-pointer time_location_btn ${activeDiv === 2 ? 'activelocation' : ''}`}
        onClick={() => handleClick(2)}>
                    <div className="text-[#3A3E49] text-xs font-semibold leading-4 3xl:text-[0.625vw] 3xl:leading-[0.833vw] text-center grow w-full"><span>07:00 PM</span></div>
                    <div className="grow w-[17px]"><Image src={'/assets/images/barchart.svg'} width={17} height={34} alt="34" /></div>
                </div>
                </div>
                {/* 9 */}
                <div>
                <div className="bg-[#F9F9FC] py-1 3xl:py-[0.208vw] px-1 flex items-center justify-between w-[100px] h-14 3xl:w-[5.208vw] 3xl:h-[2.917vw] cursor-pointer time_location_btn">
                    <div className="text-[#3A3E49] text-xs font-semibold leading-4 3xl:text-[0.625vw] 3xl:leading-[0.833vw] text-center grow w-full"><span>08:00 PM</span></div>
                    <div className="grow w-[17px]"><Image src={'/assets/images/barchart.svg'} width={17} height={34} alt="34" /></div>
                </div>
                </div>
                {/* 10 */}
                <div>
                <div className="bg-[#F9F9FC] py-1 3xl:py-[0.208vw] px-1 flex items-center justify-between w-[100px] h-14 3xl:w-[5.208vw] 3xl:h-[2.917vw] cursor-pointer time_location_btn">
                    <div className="text-[#3A3E49] text-xs font-semibold leading-4 3xl:text-[0.625vw] 3xl:leading-[0.833vw] text-center grow w-full"><span>09:00 PM</span></div>
                    <div className="grow w-[17px]"><Image src={'/assets/images/barchart.svg'} width={17} height={34} alt="34" /></div>
                </div>
                </div>
                {/* 11 */}
                <div>
                <div className="bg-[#F9F9FC] py-1 3xl:py-[0.208vw] px-1 flex items-center justify-between w-[100px] h-14 3xl:w-[5.208vw] 3xl:h-[2.917vw] cursor-pointer time_location_btn">
                    <div className="text-[#3A3E49] text-xs font-semibold leading-4 3xl:text-[0.625vw] 3xl:leading-[0.833vw] text-center grow w-full"><span>10:00 PM</span></div>
                    <div className="grow w-[17px]"><Image src={'/assets/images/barchart.svg'} width={17} height={34} alt="34" /></div>
                </div>
                </div>
                {/* 12 */}
                <div>
                <div className="bg-[#F9F9FC] py-1 3xl:py-[0.208vw] px-1 flex items-center justify-between w-[100px] h-14 3xl:w-[5.208vw] 3xl:h-[2.917vw] cursor-pointer time_location_btn">
                    <div className="text-[#3A3E49] text-xs font-semibold leading-4 3xl:text-[0.625vw] 3xl:leading-[0.833vw] text-center grow w-full"><span>11:00 PM</span></div>
                    <div className="grow w-[17px]"><Image src={'/assets/images/barchart.svg'} width={17} height={34} alt="34" /></div>
                </div>
                </div>
                {/* 12 */}
                {/* Add more slides as needed */}
                </Slider>
                </div>
                </div>
                </div>              
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6888.461931240338!2d-118.38355915588066!3d34.0888958938212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bed921f033e3%3A0x50e44c2d0e8a26a7!2sWest%20Hollywood%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1708085630826!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen style={{borderRadius:'0px 0 0 16px',}}></iframe>
                <div className={`map_location_view ${activeDiv === 1 ? 'map-view-marker' : ''}`} onClick={() => handleClick(1)}>
                    <div className="flex">
                        <div className="bg-[#4169E1] rounded-full ripple-container text-white 3xl:text-[1.042vw] w-8 h-8 3xl:w-[1.667vw] 3xl:h-[1.667vw] flex items-center justify-center"><i className="asetsmng-loaction"></i></div>
                        <div className="shadow-lg rounded-lg 3xl:rounded-[0.417vw] w-[300px] 3xl:w-[18.229vw] bg-white">
                            <div className="bg-[#F9F9FC] border-b border-[#E4E7EC] py-4 3xl:py-[0.833vw] px-5 3xl:px-[1.042vw] flex items-center gap-5 3xl:gap-[1.042vw]">
                            <div className="text-[#4169E1] text-[20px] 3xl:text-[1.042vw]"><i className="asetsmng-map-view"></i></div>
                            <div className="flex flex-col items-start gap-2 3xl:gap-[0.417vw]">
                                <div className="text-[#20232E] text-lg 3xl:text-[0.938vw] font-medium leading-[22px] 3xl:leading-[1.146vw]">Asset Coordinates</div>
                                <div className="bg-[#801B40] text-white rounded 3xl:rounded-[0.208vw] py-1 3xl:py-[0.208vw] px-2 3xl:px-[0.417vw]">04:00 PM</div>
                            </div>
                            </div>
                            {/*row*/}
                            <div className="p-[20px] 3xl:p-[1.042vw] 3xl:space-y-[0.625vw] space-y-3">
                            {/*col1*/}
                            <div className='space-y-1 3xl:space-y-[0.208vw]'>
                                <div className="text-[#84878D] text-xs 3xl:text-[0.625vw] font-normal leading-4 3xl:leading-[0.833vw] capitalize">coordinates</div>
                                <div className="text-[#3A3E49] text-base 3xl:text-[0.833vw] font-medium leading-5 3xl:leading-[1.042vw]">37.0902° N 95.7129° W</div>
                            </div>
                            {/*col2*/}
                            <div className='space-y-1 3xl:space-y-[0.208vw]'>
                                <div className="text-[#84878D] text-xs 3xl:text-[0.625vw] font-normal leading-4 3xl:leading-[0.833vw] capitalize">Date</div>
                                <div className="text-[#3A3E49] text-base 3xl:text-[0.833vw] font-medium leading-5 3xl:leading-[1.042vw]">08/12/2023</div>
                            </div>
                            {/*col3*/}
                            <div className='space-y-1 3xl:space-y-[0.208vw]'>
                                <div className="text-[#84878D] text-xs 3xl:text-[0.625vw] font-normal leading-4 3xl:leading-[0.833vw] capitalize">zip Code</div>
                                <div className="text-[#3A3E49] text-base 3xl:text-[0.833vw] font-medium leading-5 3xl:leading-[1.042vw]">30545</div>
                            </div>
                            {/*col4*/}
                            <div className='space-y-1 3xl:space-y-[0.208vw]'>
                                <div className="text-[#84878D] text-xs 3xl:text-[0.625vw] font-normal leading-4 3xl:leading-[0.833vw] capitalize">IP Address</div>
                                <div className="text-[#3A3E49] text-base 3xl:text-[0.833vw] font-medium leading-5 3xl:leading-[1.042vw]">124.123.66.112</div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Map View 2 */}
                <div className={`map_location_view ${activeDiv === 2 ? 'map-view-marker-2' : ''}`} onClick={() => handleClick(2)}>
                    <div className="flex">
                        <div className="bg-[#4169E1] rounded-full ripple-container text-white 3xl:text-[1.042vw] w-8 h-8 3xl:w-[1.667vw] 3xl:h-[1.667vw] flex items-center justify-center"><i className="asetsmng-loaction"></i></div>
                        <div className="shadow-lg rounded-lg 3xl:rounded-[0.417vw] w-[300px] 3xl:w-[18.229vw] bg-white">
                            <div className="bg-[#F9F9FC] border-b border-[#E4E7EC] py-4 3xl:py-[0.833vw] px-5 3xl:px-[1.042vw] flex items-center gap-5 3xl:gap-[1.042vw]">
                            <div className="text-[#4169E1] text-[20px] 3xl:text-[1.042vw]"><i className="asetsmng-map-view"></i></div>
                            <div className="flex flex-col items-start gap-2 3xl:gap-[0.417vw]">
                                <div className="text-[#20232E] text-lg 3xl:text-[0.938vw] font-medium leading-[22px] 3xl:leading-[1.146vw]">Asset Coordinates</div>
                                <div className="bg-[#801B40] text-white rounded 3xl:rounded-[0.208vw] py-1 3xl:py-[0.208vw] px-2 3xl:px-[0.417vw]">04:00 PM</div>
                            </div>
                            </div>
                            {/*row*/}
                            <div className="p-[20px] 3xl:p-[1.042vw] 3xl:space-y-[0.625vw] space-y-3">
                            {/*col1*/}
                            <div className='space-y-1 3xl:space-y-[0.208vw]'>
                                <div className="text-[#84878D] text-xs 3xl:text-[0.625vw] font-normal leading-4 3xl:leading-[0.833vw] capitalize">coordinates</div>
                                <div className="text-[#3A3E49] text-base 3xl:text-[0.833vw] font-medium leading-5 3xl:leading-[1.042vw]">37.0910° N 34.4567° E</div>
                            </div>
                            {/*col2*/}
                            <div className='space-y-1 3xl:space-y-[0.208vw]'>
                                <div className="text-[#84878D] text-xs 3xl:text-[0.625vw] font-normal leading-4 3xl:leading-[0.833vw] capitalize">Date</div>
                                <div className="text-[#3A3E49] text-base 3xl:text-[0.833vw] font-medium leading-5 3xl:leading-[1.042vw]">08/12/2023</div>
                            </div>
                            {/*col3*/}
                            <div className='space-y-1 3xl:space-y-[0.208vw]'>
                                <div className="text-[#84878D] text-xs 3xl:text-[0.625vw] font-normal leading-4 3xl:leading-[0.833vw] capitalize">zip Code</div>
                                <div className="text-[#3A3E49] text-base 3xl:text-[0.833vw] font-medium leading-5 3xl:leading-[1.042vw]">30545</div>
                            </div>
                            {/*col4*/}
                            <div className='space-y-1 3xl:space-y-[0.208vw]'>
                                <div className="text-[#84878D] text-xs 3xl:text-[0.625vw] font-normal leading-4 3xl:leading-[0.833vw] capitalize">IP Address</div>
                                <div className="text-[#3A3E49] text-base 3xl:text-[0.833vw] font-medium leading-5 3xl:leading-[1.042vw]">124.123.66.112</div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Map View 2 */}
                <div className='absolute bottom-0 left-0'><Image src={'/assets/images/horizontal-shadow.svg'} width={1600} height={269} className="w-full rounded-bl-2xl" /></div>
                </div>
            }

            {geolocation && 
            <>
            <div className="p-[32px] 3xl:p-[1.667vw]">
            <div className="flex items-center gap-2 3xl:gap-[0.417vw]">
            <div className="shadow-lg 3xl:rounded-[0.208vw] rounded bg-[#F9F9FC] 3xl:px-[0.625vw] px-3 3xl:py-[0.417vw] 3xl:w-[5.26vw] 3xl:h-[2.396vw] w-[101px] h-[46px] flex flex-col justify-center">
            <div className="text-[#9CA1AB] 3xl:text-[0.521vw] text-[10px] font-normal">From Date</div>
            <Calendar value={date} onChange={(e) => setDate(e.value)} className="custmCalendar" placeholder="07/12/2023" />
            </div>
            <div className="shadow-lg 3xl:rounded-[0.208vw] rounded bg-[#F9F9FC] 3xl:px-[0.625vw] px-3 3xl:py-[0.417vw] 3xl:w-[5.26vw] 3xl:h-[2.396vw] w-[101px] h-[46px] flex flex-col justify-center">
            <div className="text-[#9CA1AB] 3xl:text-[0.521vw] text-[10px] font-normal">To Date</div>
            <Calendar value={date} onChange={(e) => setDate(e.value)} className="custmCalendar" placeholder="08/12/2023" />
            </div>
            </div>
            <div className="3xl:mt-[1.25vw] mt-6">            
            <LocationHistoryTable />
            </div>
            </div>
            </>
            }
            </Sidebar>

            
        </div>             
        </>
    );
}

export default LogincoordinatesMap;