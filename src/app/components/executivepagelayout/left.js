import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';

export default function Left(props) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const rourter = usePathname()

  // Define a function to check if a given link is active
  const isLinkActive = (href) => {

    const pathname = usePathname();
    return pathname === href;
  };


  return (
    <>
      <div className={` fixed top-0 left-0 z-[9] max-md:h-full left-menu-sec`}>
        <div className="w-[96px] hover:w-[328px] bg-white left-menu-h py-5 xl:py-[1.04vw] px-5 border-r border-[#E5E7EB] dark:border-[#191A1E] overflow-hidden max-md:h-full dark:bg-[#191A1E]">
          <div className="relative h-full">
            <div className='logo-block h-[89px] mb-[16px]'>
              <div className="logo_icon flex justify-center" data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
                <Image src="/assets/images/left-menu-icons/logo-icon.svg" width={55} height={55} alt='logo icon' />

              </div>
              <div className="logo min-w-[200px] xl:min-w-[10vw]">
                <Link href='/' className='block text-center w-[280px]'>


                  {currentTheme === 'dark' ?
                    <div>    <Image src="/assets/images/left-menu-icons/logo_dark.svg" width={280} height={23} alt='logo icon' /></div>
                    :
                    <div>      <Image src="/assets/images/left-menu-icons/logo.svg" width={280} height={23} className='w-[280px] xl:w-[22.583vw]' alt='logo icon' /></div>
                  }
                </Link>
              </div>
              <div className="lock_icon mt-4" data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
                <i className='leftmenu-lock dark:bg-[#191A1E] px-5 xl:px-[1.04vw]'></i>
              </div>
              <div className="logo min-w-[150px] mt-4 mr-[15px] border-b-2 border-[#E5E7EB] dark:border-[#2A2C32] text-right relative">
                <i className='leftmenu-unlock absolute top-[-20px] right-[-15px] bg-[#fff] dark:bg-[#191A1E]' ></i>
              </div>
            </div>


            <SimpleBar>
              <div data-simplebar>
                <div className="visible lg:hidden"></div>
                <ul className="left-menu h-full">
                  <li className={`${isLinkActive('/executive/dashboard') ? 'active' : ''} ico-dashboard`}>
                    <Link href='/executive/dashboard'>
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('') ? 'active' : ''} ico-assets`}>
                    <Link href=''>
                      <span>Assets</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('') ? 'active' : ''} ico-students`}>
                    <Link href=''>
                      <span>Students</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('') ? 'active' : ''} ico-employee`}>
                    <Link href=''>
                      <span>Employee</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('') ? 'active' : ''} ico-software`}>
                    <Link href=''>
                      <span>Software</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('') ? 'active' : ''} ico-location`}>
                    <Link href=''>
                      <span>Locations</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('') ? 'active' : ''} ico-help_desk`}>
                    <Link href=''>
                      <span>Help Desk</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('') ? 'active' : ''} ico-invoices`}>
                    <Link href=''>
                      <span>Invoices</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('/csjpod') ? 'active' : ''} settings`}>
                    <Link href='/csjpod'>
                      <span>Settings</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('') ? 'active' : ''} ico-reports`}>
                    <Link href=''>
                      <span>Reports</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('') ? 'active' : ''} ico-eliabrary`}>
                    <Link href=''>
                      <span>E- Library</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </SimpleBar>
            <div className="absolute left-0 right-0 bottom-0">
              <ul className="left-menu hoverNone">
                <li className="settings"><Link href='/setting'><span>Settings</span></Link></li>
                <li className='dark-mode'>
                  <Link href=""> {currentTheme === "dark" ?
                    <span onClick={() => setTheme("light")}>Dark Theme</span>
                    :
                    <span onClick={() => setTheme("dark")}>Light Theme</span>} </Link>
                </li>
                <li className="support mt-[12px] xl:mt-[0.625vw]"><Link href='' className="supportBg"><span>Support Tickets</span></Link></li>
                <li className="userProfile relative mt-[24px] xl:mt-[1.250vw] -ml-[3px]">
                  <div className="flex items-center" >
                    <div className="userPic ml-2">
                      <Image src={'/assets/images/left-menu-icons/profile.svg'} width={48} height={48} alt='profile' />
                    </div>
                    <div>

                      <Link href=''>
                        <span className="text-[#4C525F] dark:text-[#FFFFFF] text-[16px] xl:text-[0.833vw] font-semibold block">Jese Leos</span>
                        <span className="text-[#6B7280] dark:text-[#B3B9C6] text-[14px] xl:text-[0.729vw] block">Joined in August 2014</span>
                      </Link>
                    </div>
                    
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 userprofileIcon">
                    <Link href='#'>
                    <Image src="/assets/images/left-menu-icons/more_square_white.svg" width={50} height={50} className='w-[16px] h-[16px]' alt='more_square_white' />
                      </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}