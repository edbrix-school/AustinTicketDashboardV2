import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Sidebar } from "primereact/sidebar";

// Custom Previous Arrow Component
const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, top: '0%', left: '50%', transform: 'translate(-50%, -50%) rotate(90deg)', background:"#000" }}
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
        style={{ ...style, bottom: '0%', left: '50%', transform: 'translate(-50%, 200%) rotate(90deg)', background:"#000" }}
        onClick={onClick}
      />
    );
  };

const LogincoordinatesMap = (props) => {    

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
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
                        <div className="text-[#4B586E] text-sm 3xl:text-[0.729vw] font-normal leading-[18px] 3xl:leading-[0.938vw] bg-white border border-[#D3D3CE] rounded-lg 3xl:rounded-[0.417vw] 3xl:px-[0.625vw] px-3 3xl:py-[0.521vw] py-2.5 cursor-pointer">Check Location History</div>
                    </div>
                </div>           
                {/* Header */} 
                {/*Map view */}
                <div className="h-full relative">
                <div className="absolute top-0 left-0 vertical-shadow 3xl:pl-[1.667vw] 3xl:pt-[1.667vw] pl-8 pt-8 rounded-bl-2xl">
                <div className="shadow-lg 3xl:rounded-[0.208vw] rounded bg-[#F9F9FC] 3xl:px-[0.625vw] px-3 3xl:py-[0.417vw] 3xl:w-[5.26vw] 3xl:h-[2.396vw] w-[101px] h-[46px] flex flex-col justify-center">
                <div className="text-[#84878D] 3xl:text-[0.521vw] text-[10px] font-normal">Date</div>
                <div className="text-[#3A3E49] 3xl:text-[0.729vw] text-sm font-normal">08/12/2023</div>
                </div>
                {/*Slider*/}
                <div className="3xl:mt-[4.063vw] mt-[40px]">
                <div className="vertical-slider-container">
                <Slider {...settings}>
                <div>
                <h3>Slide 1</h3>
                </div>
                <div>
                <h3>Slide 2</h3>
                </div>
                <div>
                <h3>Slide 3</h3>
                </div>
                <div>
                <h3>Slide 4</h3>
                </div>
                <div>
                <h3>Slide 5</h3>
                </div>
                <div>
                <h3>Slide 6</h3>
                </div>
                {/* Add more slides as needed */}
                </Slider>
                </div>
                </div>
                </div>              
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6888.461931240338!2d-118.38355915588066!3d34.0888958938212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bed921f033e3%3A0x50e44c2d0e8a26a7!2sWest%20Hollywood%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1708085630826!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen style={{borderRadius:'0px 0 0 16px',}}></iframe>
                <div className='absolute bottom-0 left-0'><Image src={'/assets/images/horizontal-shadow.svg'} width={1600} height={269} className="w-full rounded-bl-2xl" /></div>
                </div>
                {/*Map view */}
            </Sidebar>

            
        </div>             
        </>
    );
}

export default LogincoordinatesMap;