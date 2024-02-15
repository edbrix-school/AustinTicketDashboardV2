import React from 'react'
import Image from 'next/image';
function Index() {
    return (
        <>
            <div className='bg-[#ccd3e2]'>
                <div className='text-[#131D32] text-[24px] font-medium xl:text-[1.25vw] pb-[42px] xl:pb-[2.188vw]'>Standard Reports</div>
                <div className='grid grid-cols-12'>
                    <div className='col-span-3'>
                        <div className='shadow-1 shadow-[#1018281A] bg-white '>
                            <div className='flex '>
                                <div>
                                <div className='text-[#667085] text-[12px] xl:text-[0.625vw] '> Standard Reports</div>
                            <div className='text-[#101828] text-[24px] xl:text-[1.25vw]'>Assets</div>
                                </div>
                            <div className=''>
                            <Image className='mx-auto my-5' height={100} width={150} src={"/images/assets/assetsimg.png"} alt={"imgaes1"}></Image>
                            </div>
                            </div>
                            <Image className='mx-auto my-5' height={300} width={500} src={"/images/assets/reportImg.svg"} alt={"imgaes"}></Image>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Index