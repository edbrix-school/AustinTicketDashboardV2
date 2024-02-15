import React, { useLayoutEffect, useState } from 'react'
import Link from 'next/link';
import Image from "next/image";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { useTheme } from 'next-themes';
import { Tooltip } from 'primereact/tooltip';


export default function Left(props) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [usermail, setusermail] = useState();
  const [userName, setUserName] = useState();
  const [profilePicture, setProfilePicture] = useState();


  useLayoutEffect(() => {
    let userInfo = JSON.parse(sessionStorage.getItem("userInfo"))
    setusermail(userInfo?.email)
    setUserName(userInfo?.name)
    setProfilePicture(userInfo?.picture)
  }, [])
  let UserUnit = "";
  var userinfo = usermail
  var PickLetter = userinfo?.match(/\b(\w)/g)
  var acronym = PickLetter?.join(''); // JSON
  UserUnit = acronym?.slice(0, 1);

  // Define a function to check if a given link is active
  const isLinkActive = (href) => {
    // const { pathname } = useRouter();
    // return pathname === href;
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
                    <div>    <Image src="/assets/images/left-menu-icons/logo_dark.png" width={280} height={23} alt='logo icon' /></div>
                    :
                    <div>      <Image src="/assets/images/left-menu-icons/logo.svg" width={280} height={23} className='w-[280px] xl:w-[22.583vw]' alt='logo icon' /></div>
                  }

                  <span className='inline-block bg-[#FCF5F6] rounded px-[8px] xl:px-[0.417vw] py-[6px] xl:py-[0.317vw] text-[0.625vw] mt-[18px] whitespace-nowrap dark:bg-[#1C2026]'>Teacher Management Application</span>
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
                  <li className={`${isLinkActive('/') ? 'active' : ''} ico-home`}>
                    <Link href={'#'}>
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('/') ? 'active' : ''} ico-dashboard`}>
                    <Link href='#'>
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('/applicants') ? 'active' : ''} ico-applications`}>
                    <Link href='/applicants'>
                      <span>Applications</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('/programs') ? 'active' : ''} ico-programs`}>
                    <Link href='/programs'>
                      <span>Programs</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('/placement') ? 'active' : ''} ico-placements`}>
                    <Link href='/placement'>
                      <span>Placements</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('/personnel') ? 'active' : ''} ico-personnel`}>
                    <Link href='/personnel'>
                      <span>Personnel</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('/school') ? 'active' : ''} ico-school`}>
                    <Link href='/school'>
                      <span>School</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('/groups') ? 'active' : ''} ico-groups`}>
                    <Link href='/groups'>
                      <span>Groups</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('/users') ? 'active' : ''} ico-users`}>
                    <Link href='/users'>
                      <span>Users</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('/csjpod') ? 'active' : ''} ico-csjpod`}>
                    <Link href='/csjpod'>
                      <span>CSJ POD</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('/competency') ? 'active' : ''} ico-competency`}>
                    <Link href='/competency'>
                      <span>Competency</span>
                    </Link>
                  </li>
                  <li className={`${isLinkActive('/assignments') ? 'active' : ''} ico-assignments`}>
                    <Link href='/assignments'>
                      <span>Assignments</span>
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
                    {/* <div className="userPic ml-2">
                      <Image src={profilePicture} width={48} height={48} alt='profile' />
                    </div> */}
                    <div className="userPic ml-2" style={{ display: "flex", cursor: 'pointer', minWidth: 48, minHeight: 48, backgroundColor: '#5e656d', borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                      <div style={{ fontSize: 22, color: 'white', fontWeight: 600, textTransform: 'uppercase' }}>{UserUnit}</div>

                    </div>
                    <div>

                      <Link href=''>
                        <span className="text-[#4C525F] dark:text-[#FFFFFF] text-[16px] xl:text-[0.833vw] font-semibold block"> {userName} </span>
                        <span className="text-[#6B7280] dark:text-[#B3B9C6] text-[14px] xl:text-[0.729vw] block"> {usermail} </span>
                      </Link>
                    </div>
                    <Link  href=''>
                    <Tooltip target=".logout" content="Logout" position="top" className="custom-tooltip-content" />
                      {/* <div className="logout mx-2 bg-[#fff] border border-[#EAE0E0]  hover:bg-[#F0E9EA] p-3" style={{ fontSize: 22, color:currentTheme === 'dark'?"White": 'black', fontWeight: 300, alignItems: 'center'}}> */}
                        {/* <RiLogoutCircleLine /> */}
                        <i className='pi pi-sign-out text-[#AF1E27]'></i>
                      {/* </div> */}
                      {/* {currentTheme === 'dark' ?
                        <Image src="/assets/images/left-menu-icons/more_square_dark.svg" width={50} height={50} className='w-[30px] h-[30px]' alt='more_square_dark' />
                        :
                        <Image src="/assets/images/left-menu-icons/more_square_white.svg" width={50} height={50} className='w-[30px] h-[30px]' alt='more_square_white' />
                      } */}
                    </Link>
                  </div>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 userprofileIcon">
                    {/* <Link href='#'><img src={UserProfile} alt="" /></Link> */}
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