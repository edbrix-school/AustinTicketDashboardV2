import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";

export default function Landing() {

  return (
    <>
        <div className="login-wrap-bg">
            <div className="h-screen">
                <div className="absolute top-[20px] md:top-[50px] xl:top-[2.604vw] left-0 right-0">
                    <Image
                    src={"/assets/images/logo-white.svg"}
                    width={350}
                    height={125}
                    className="mx-auto"
                    alt="logo"
                    />
                </div>
                <div className="h-full flex flex-col items-center justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2.500vw] text-center">                        
                        <div className="col">                            
                            <Link
                                href={"/technician/dashboard"}
                                className="btn draw-border tracking-[0.2vw] inline-flex flex-col items-center justify-center text-[16px] md:text-[18px] xl:text-[1.150vw] text-[#4169E1] uppercase font-semibold w-[200px] xl:w-[13.021vw] h-[200px] xl:h-[13.021vw]"
                            >
                            <Image
                                src={"/assets/images/logo.svg"}
                                width={"60"}
                                height={"60"}
                                className="mb-[20px] xl:mb-[1.042vw] iconSize"
                                alt="icon"
                            />
                            Technician
                            </Link>
                        </div>
                        <div className="col">
                            <Link
                                href={"/lead/dashboard"}
                                className="btn draw-border tracking-[0.2vw] inline-flex flex-col items-center justify-center text-[16px] md:text-[18px] xl:text-[1.150vw] text-[#4169E1] uppercase font-semibold w-[200px] xl:w-[13.021vw] h-[200px] xl:h-[13.021vw]"
                            >
                            <Image
                                src={"/assets/images/logo.svg"}
                                width={"60"}
                                height={"60"}
                                className="mb-[20px] xl:mb-[1.042vw] iconSize"
                                alt="icon"
                            />
                            Lead
                            </Link>
                        </div>
                        <div className="col">
                            <Link
                                href={"/executive/dashboard"}
                                className="btn draw-border tracking-[0.2vw] inline-flex flex-col items-center justify-center text-[16px] md:text-[18px] xl:text-[1.150vw] text-[#4169E1] uppercase font-semibold w-[200px] xl:w-[13.021vw] h-[200px] xl:h-[13.021vw]"
                            >
                            <Image
                                src={"/assets/images/logo.svg"}
                                width={"60"}
                                height={"60"}
                                className="mb-[20px] xl:mb-[1.042vw] iconSize"
                                alt="icon"
                            />
                            Executive
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

  );
}