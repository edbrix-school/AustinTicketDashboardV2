import React, { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { OverlayPanel } from 'primereact/overlaypanel';
import { CSVLink } from "react-csv";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
// import { useReactToPrint } from "react-to-print";
import ReactFullscreen from 'react-easyfullscreen';
// import ExcelDownloader from '../exportn/ExcelDownloader';
// import PdfDownloader from '../exportn/PdfDownloader';
import { Dropdown } from "primereact/dropdown";

export default function ChartWrapper(props) {

  const [visible, setVisible] = useState(false);
  const [infoIcon, setInfoIcon] = useState(props.infoIcon);
  const [dropdown2, setDropdown2] = useState(props.dropdown2);
  const [dropdown1, setDropdown1] = useState(props.dropdown1);
  const [bulbIcon, setBulbIcon] = useState(props.bulbIcon);
  const [ExportIcon, setExportIcon] = useState(props.ExportIcon);
  const [graphIcon, setGraphIcon] = useState(props.graphIcon);
  const [downloadIcon, setDownloadIcon] = useState(props.downloadIcon);
  const [expand, setExpand] = useState(props.expand);
  const [historicalPrice, setHistoricalPrice] = useState(props.historicalPrice);
  
  

  const op = useRef(null);
  const Bots = useRef();
  const handleClick = (e) => {
    document.querySelector('body').classList.toggle('echartHeight');
  }

  //Print Function
  // const handlePrintBots = useReactToPrint({
  //   content: () => Bots.current,
  // });

  const { formatDownloadedData = [], formatFileName = 'Demo', isDetailedExport = false, disablepdf = false, title = 'abc', subtitle = 'abc', placeholder1 = 'Dimention', placeholder2 = 'Dimention2', data = [] } = props;

  const headers = [
    { label: "First Name", key: "id" },
    { label: "Last Name", key: "name" },
    { label: "Email", key: "value" },
    { label: "Age", key: "age" }
  ];

  const csvReport = {
    data: formatDownloadedData,
    headers: headers,
    filename: `${formatFileName}.csv`
  };

  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
  ];
  const price = [
    { name: "US $", code: "NY" },
    { name: "IND", code: "RM" },
  ];

  const [drodownlonValueClick,setDroDownvalueClick] = useState(false)
  const dropwonClick = (e) => {

    if(e === "dropwonClick"){
        document.querySelector('body').classList.add('expandDiv')
       setDroDownvalueClick(false)
    }else if(e === "bodyclick" && drodownlonValueClick){
        document.querySelector('body').classList.remove('expandDiv')
        setDroDownvalueClick(false)

    }
}

  return (
    <div onClick={()=>dropwonClick("bodyclick")}>
      <ReactFullscreen>
        {({ ref, onToggle, onExit }) => (
          <div ref={ref} className=' h-full fullScreen'>
            <div>
              <div className='border-b border-b-[#BECDE3] bordercolorB px-[16px] 3xl:px-[0.833vw] py-[14px] 3xl:py-[0.725vw]'>
                <div className='flex items-center justify-between'>
                <div className='flex items-center 3xl:gap-[0.625vw] gap-[12px]'>
                  {/* <div><i className='asetsmng-folder text-[20px] 3xl:text-[1.042vw]'></i></div> */}
                  <div className={`text-[#000000] dark:text-[#FFF] text-[16px] 3xl:text-[0.833vw] font-semibold  ${props.text}`}>
                    <p>{props.title}</p>
                  </div>

                  {
                    expand == true ?
                      <div className='text-[#4169E1] text-[14px] 3xl:text-[0.729vw] font-medium'>
                        <Link href={""} onClick={()=>{dropwonClick("dropwonClick"),setDroDownvalueClick(true)}} className='expandHide'>Expand</Link>
                        <Link href={""} onClick={()=>{dropwonClick("dropwonClick"),setDroDownvalueClick(true)}} className='expandShow'>Collapse</Link>
                      </div>
                      : null
                  }
                 
                  <div className={`text-[#6C768B] text-[14px] 3xl:text-[0.729vw] font-normal  ${props.text}`}><p>{props.subtitle}</p></div>
                </div>
                <div className='space-x-[8px] 3xl:space-x-[0.417vw] optionbtn flex items-center wrapper_icons items-center custm_dropdwon text-[#6C768B] dark:text-[#B3B9C6]'>
                  {
                    dropdown1 == true ?
                      <Dropdown
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
                        options={cities}
                        optionLabel="name"
                        placeholder={props.placeholder1}
                        className="w-full 3xl:w-[10.417vw] md:h-[40px]"
                        style={{ border: "1px solid #DDE1EA", borderRadius: "8px" }}
                      />
                      : null
                  }
                  {
                    dropdown2 == true ?
                      <Dropdown
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
                        options={cities}
                        optionLabel="name"
                        placeholder={props.placeholder2}
                        className="w-full 3xl:w-[10.417vw] md:h-[40px]"
                        style={{ border: "1px solid #DDE1EA", borderRadius: "8px" }}
                      />
                      : null
                  }
                  {
                    graphIcon == true ?
                      <Link href='' className='leading-none'><i className='asetsmng-linechart-outline text-[14px] 3xl:text-[0.94vw] align-top' title='Add proper title here'></i></Link>
                      : null
                  }
                  {
                    downloadIcon == true ?
                      <Link href='' className='leading-none'><i className='asetsmng-lamp text-[14px] 3xl:text-[0.94vw] align-top' title='Add proper title here'></i></Link>
                      : null
                  }
                  {
                    bulbIcon == true ?
                      <Link href='' className='leading-none'><i className='asetsmng-download text-[14px] 3xl:text-[0.94vw] align-top' title='Add proper title here'></i></Link>
                      : null
                  }
                  {
                    infoIcon == true ?
                      <Link href='' className='leading-none'><i className='asetsmng-Info-circle text-[14px] 3xl:text-[0.94vw] align-top' title='Add proper title here'></i></Link>
                      : null
                  }
                  {
                    props.maximizeIcon == true ?
                      <Link href=''
                        className='leading-none'
                        onClick={() => {
                          onToggle();
                        }}
                      >
                        <i onClick={handleClick} className='redingtonHR-pluse text-[14px] 3xl:text-[0.94vw] align-top'></i></Link>
                      : null
                  }
                  {
                    ExportIcon == true ?
                      <div>
                        <div className="card flex">
                          <button onClick={(e) => op.current.toggle(e)}>
                            <div className="cursor-pointer flex items-center leading-none">
                              <i className='asetsmng-three-dots-box text-[14px] 3xl:text-[0.94vw] align-top' title='Click here for multiple option'></i>
                            </div>
                           
                          </button>
                          
                          <OverlayPanel ref={op} className="dropdownList">
                            <div className='flex flex-col text-left gap-y-2 wrapperOption text-[14px] 3xl:text-[0.730vw] text-[#363A44] dark:text-[#B3B9C6]'>
                              <button className='flex gap-2 items-center hover:text-[#4FB155] dark:hover:text-[#4FB155] ease-linear duration-200' href='' onClick={() => { handlePrintBots(); onExit(); }}>
                                <i className='pi pi-print '></i>
                                <span>Print to pdf</span>
                              </button>
                              <button className='flex gap-2 items-center hover:text-[#4FB155] dark:hover:text-[#4FB155] ease-linear duration-200'>
                                <i className='pi pi-download '></i>
                                <CSVLink {...csvReport}>Export to CSV</CSVLink>
                              </button>
                              {/* <div className='flex gap-2 items-center cursor-pointer hover:text-[#4FB155] dark:hover:text-[#4FB155] ease-linear duration-200'>
                                <i className='pi pi-download '></i>
                                <ExcelDownloader data={formatDownloadedData} />
                              </div> */}
                              {/* <div className='flex gap-2 items-center cursor-pointer hover:text-[#4FB155] dark:hover:text-[#4FB155] ease-linear duration-200'>
                                <i className='pi pi-download '></i>
                                <PdfDownloader
                                  title={formatFileName}
                                  isDetailedExport={isDetailedExport}
                                  data={formatDownloadedData}
                                  id={props.id}
                                /></div> */}
                            </div>
                          </OverlayPanel>
                        </div>
                      </div>
                      : null
                  }
                </div>
                </div>
                {
                    historicalPrice == true ?
                      <div className='flex items-center mt-[24px] 3xl:mt-[1.25vw]'>
                        <div className='flex items-center gap-[45px] 3xl:gap-[2.344vw]'>
                        <div className='col custPriceDropdown'>
                        <Dropdown
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
                        options={price}
                        optionLabel="name"
                        placeholder="US $"
                        className="w-full"
                      />
                        </div>
                        <div className='flex items-center gap-[65px] 3xl:gap-[3.385vw]'>
                          <div className='col space-y-[6px] 3xl:space-y-[0.313vw]'>
                            <div className='text-[#3A3E49] text-[12px] 3xl:text-[0.625vw]'>Actual Price</div>
                            <div className='text-[##20232E] text-[14px] 3xl:text-[0.729vw] font-medium'>$3438</div>
                          </div>
                          <div className='col space-y-[6px] 3xl:space-y-[0.313vw]'>
                            <div className='text-[#3A3E49] text-[12px] 3xl:text-[0.625vw]'>Changes - 24hrs</div>
                            <div className='text-[##20232E] text-[14px] 3xl:text-[0.729vw] font-medium'>$3435 <span className='text-[#6D9636] text-[12px] 3xl:text-[0.625vw]'>11.4%</span> <span className='text-[#6D9636] text-[12px] 3xl:text-[0.625vw]'><i className='asetsmng-arrow-up-line'></i></span></div>
                          </div>
                          <div className='col space-y-[6px] 3xl:space-y-[0.313vw]'>
                            <div className='text-[#3A3E49] text-[12px] 3xl:text-[0.625vw]'>High - 24hrs</div>
                            <div className='text-[##20232E] text-[14px] 3xl:text-[0.729vw] font-medium'>$3555 <span className='text-[#6D9636] text-[12px] 3xl:text-[0.625vw]'>12.4%</span> <span className='text-[#6D9636] text-[12px] 3xl:text-[0.625vw]'><i className='asetsmng-arrow-up-line'></i></span></div>
                          </div>
                          <div className='col space-y-[6px] 3xl:space-y-[0.313vw]'>
                            <div className='text-[#3A3E49] text-[12px] 3xl:text-[0.625vw]'>Low - 24hrs</div>
                            <div className='text-[##20232E] text-[14px] 3xl:text-[0.729vw] font-medium'>$3342 <span className='text-[#E71111] text-[12px] 3xl:text-[0.625vw]'>12.4%</span> <span className='text-[#E71111] text-[12px] 3xl:text-[0.625vw]'><i className='asetsmng-arrow-down-line'></i></span></div>
                          </div>
                        </div>
                        </div>
                      </div>
                      : null
                  }
                
              </div>
              <div className="">
                <div className='grid grid-cols-1 wrapper_icons center-content'>
                  <div ref={Bots}>
                    {props.data}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </ReactFullscreen>
    </div>
  )
}