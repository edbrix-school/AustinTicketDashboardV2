import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Sidebar } from 'primereact/sidebar';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Tooltip } from 'primereact/tooltip';
import { OverlayPanel } from 'primereact/overlaypanel';

function Docspopup() {
    const op = useRef(null);
    const [isClicked, setIsClicked] = useState(false);
    console.log("clickkk",isClicked)
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');

    const toggleFunction = () => {
        setIsClicked(true);
    };
    return (
        <>

            <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
            <Sidebar
                // visible={props.visible} 
                blockScroll={true}
                position="right" className="custmSidebar docsidebar width740 w-[730px]"
                // onHide={() => props.onHides(false)}
                Sidebar visible={visible} onHide={() => setVisible(false)}
            >
                {/* Header */}
                <div className="  rounded-tl-2xl xl:rounded-tl-2xl-[0.833vw]  z-10 ">
                    <div className="3xl:space-y-[0.417vw] space-y-2">
                        <div className="grid grid-cols-12">
                            <div className="col-span-8 ">
                                <div className="3xl:p-[1.25vw] p-6  ">
                                    <div className=" text-[#20232E] text-xl font-medium leading-7 3xl:leading-[1.458vw] 3xl:text-[1.25vw]">Doc 1</div>
                                    <div className="border-b border-[#D3D3CE] pb-[8px] xl:pb-[0.417vw]">
                                        <div className="text-[#20232E] text-[18px] 3xl:text-[0.938vw]">John Doe</div>
                                        <div className="text-[#3A3E49] text-[16px] 3xl:text-[0.833vw]">234 Avenue Street Gustave Delory</div>
                                    </div>
                                    <div className="text-[#3A3E49] text-[16px] 3xl:text-[0.833vw] mt-[24px] xl:mt-[1.25vw]">October 17, 2022</div>

                                    <div className="text-[#3A3E49] text-[16px] xl:text-[0.866vw] mt-[4px] pb-7">
                                        <p>Lorem ipsum dolor sit amet consectetur. Quis malesuada sed non praesent malesuada. Leo convallis nunc risus interdum faucibus. Mattis nunc rutrum et tortor massa auctor volutpat.</p><br></br>
                                        <p>Habitasse facilisis neque facilisi cursus faucibus egestas. Eget consectetur convallis accumsan viverra etiam et justo massa. Risus tellus risus senectus amet. Viverra arcu magna proin arcu nullam sed. Sem massa vitae vitae enim penatibus non libero. Nisl amet quam sed praesent sem semper imperdiet ultricies elit. Diam in non et vitae. Mi in quam aliquet facilisi laoreet. Porttitor porttitor odio et volutpat id purus eu faucibus sed. Morbi aenean lobortis quis sed et facilisis.</p><br></br>
                                        <p>Dui ultrices arcu nunc volutpat adipiscing. Bibendum condimentum magna in arcu pellentesque pellentesque. Quis eu sed ante erat. Ullamcorper congue ut luctus pharetra dignissim arcu facilisis. Eget ligula nisl id egestas accumsan egestas diam vestibulum tempor. Nibh proin netus habitant faucibus. Ipsum eleifend donec amet interdum egestas. Ipsum nisl ornare ut placerat turpis ut quis. Duis quis pretium eget mi quis ante fermentum.</p>

                                    </div>


                                    <div className="  border-t border-[#D3D3CE] pt-[8px] xl:pt-[0.417vw] ">
                                        <div className="flex justify-between items-center pt-[16px]">
                                            <div>
                                                <div className="text-[#20232E] text-[18px] xl:text-[0.938vw] font-medium ">Signature (Hard copy letter)</div>
                                                <div className="text-[#3A3E49] text-[16px] xl:text-[0.866vw]">
                                                    <div>Brian Smith</div>
                                                    <div>Student Coordinator</div>
                                                    <div>Central College Café</div>
                                                </div>
                                            </div>
                                            <div>

                                              {
                                                isClicked ?
                                                <i onClick={(e) => {op.current.toggle(e), setIsClicked(false);}} className=" asetsmng-cross cursor-pointer text-[16px] xl:text-[0.866vw] text-white bg-[#4169E1] p-[0.729vw] rounded-full border-[3px] border-[#9EBBF2]"></i>
                                               :
                                               <i onClick={(e) => {op.current.toggle(e), setIsClicked(true);}} className=" asetsmng-plus cursor-pointer text-[16px] xl:text-[0.866vw] text-white bg-[#4169E1] p-[0.729vw] rounded-full border-[3px] border-[#9EBBF2]"></i>

                                              }
                                              
                                                <OverlayPanel ref={op}  className="docOverlypanel ">
                                                <Tooltip target=".disabled-button"  tooltipOptions={{ position: 'right' }}/>
                                                    <div data-pr-tooltip="Share"    data-pr-position="right" data-pr-at="right+5 top"  data-pr-my="left center-2"  className="disabled-button rounded-[4px] py-[4px] px-[8px] xl:px-[0.417vw] xl:py-[0.208vw] shadow-sm shadow-[#0000004d] "><i className="asetsmng-share-file"></i></div>
                                                    <div data-pr-tooltip="Print"    data-pr-position="right" data-pr-at="right+5 top"  data-pr-my="left center-2"  className="disabled-button rounded-[4px] py-[4px] px-[8px] xl:px-[0.417vw] xl:py-[0.208vw] shadow-sm shadow-[#0000004d]"><i className="asetsmng-printer-fill"></i></div>
                                                    <div data-pr-tooltip="Download"    data-pr-position="right" data-pr-at="right+5 top"  data-pr-my="left center-2"  className="disabled-button rounded-[4px] py-[4px] px-[8px] xl:px-[0.417vw] xl:py-[0.208vw] shadow-sm shadow-[#0000004d]"><i className="asetsmng-download-file"></i></div>
                                                    <div data-pr-tooltip="Folder"    data-pr-position="right" data-pr-at="right+5 top"  data-pr-my="left center-2"  className="disabled-button rounded-[4px] py-[4px] px-[8px] xl:px-[0.417vw] xl:py-[0.208vw] shadow-sm shadow-[#0000004d]"><i className="asetsmng-file-copy"></i></div>
                                                </OverlayPanel>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4">
                                <div className="bg-[#F9F9FC] py-[16px] xl:py-[0.933vw] px-[24px] xl:px-[1.25vw] h-full">
                                    <div>
                                        <div className="text-[#20232E] text-xl font-medium leading-7 3xl:leading-[1.458vw] 3xl:text-[1.25vw] ">Key Fields</div>
                                        <div className="text-[#3A3E49] text-[14px] xl:text-[0.729vw] mt-[28px] xl:mt-[1.458vw] pl-[40px] xl:pl-[1.083vw] ">Document Name</div>
                                        <InputText placeholder="Doc 1" value={value} onChange={(e) => setValue(e.target.value)} className="w-full  mx-[14px] xl:mx-[0.729vw] mt-[8px] text-[14px] xl:text-[0.729vw] docinputbox placeholder:text-[14px] xl:placeholder:text-[0.729vw]" />
                                    </div>

                                    <div>

                                        <div className="text-[#3A3E49] text-[14px] xl:text-[0.729vw] mt-[24px] xl:mt-[1.25vw] pl-[40px] xl:pl-[1.083vw] ">Description</div>
                                        <InputText placeholder="Asset Lost" value={value} onChange={(e) => setValue(e.target.value)} className="w-full  mx-[14px] xl:mx-[0.729vw] mt-[8px] text-[14px] xl:text-[0.729vw] docinputbox placeholder:text-[14px] xl:placeholder:text-[0.729vw]" />
                                    </div>
                                    <div>

                                        <div className="text-[#3A3E49] text-[14px] xl:text-[0.729vw] mt-[24px] xl:mt-[1.25vw] pl-[40px] xl:pl-[1.083vw] ">Document Type</div>
                                        <InputText placeholder="PDF" value={value} onChange={(e) => setValue(e.target.value)} className="w-full  mx-[14px] xl:mx-[0.729vw] mt-[8px] text-[14px] xl:text-[0.729vw] docinputbox placeholder:text-[14px] xl:placeholder:text-[0.729vw]" />
                                    </div>
                                    <div>

                                        <div className="text-[#3A3E49] text-[14px] xl:text-[0.729vw] mt-[24px] xl:mt-[1.25vw] pl-[40px] xl:pl-[1.083vw] ">Asset ID</div>
                                        <InputText placeholder="AC-1111" value={value} onChange={(e) => setValue(e.target.value)} className="w-full  mx-[14px] xl:mx-[0.729vw] mt-[8px] text-[14px] xl:text-[0.729vw] docinputbox placeholder:text-[14px] xl:placeholder:text-[0.729vw]" />
                                    </div>
                                    <div>

                                        <div className="text-[#3A3E49] text-[14px] xl:text-[0.729vw] mt-[24px] xl:mt-[1.25vw] pl-[40px] xl:pl-[1.083vw] ">Campus</div>
                                        <InputText placeholder="Allison Elementary" value={value} onChange={(e) => setValue(e.target.value)} className="w-full  mx-[14px] xl:mx-[0.729vw] mt-[8px] text-[14px] xl:text-[0.729vw] docinputbox placeholder:text-[14px] xl:placeholder:text-[0.729vw]" />
                                    </div>
                                    <div>

                                        <div className="text-[#3A3E49] text-[14px] xl:text-[0.729vw] mt-[24px] xl:mt-[1.25vw] pl-[40px] xl:pl-[1.083vw] ">Notes</div>
                                        <InputTextarea autoResize value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={15} placeholder="Notes on letter of recommendation for Alex Smith" className="w-full docinputbox  mx-[14px] xl:mx-[0.729vw] mt-[8px] text-[14px] xl:text-[0.729vw] placeholder:text-[14px] xl:placeholder:text-[0.729vw]" />
                                    </div>


                                </div>

                            </div>
                        </div>



                    </div>


                </div>

            </Sidebar>


        </>
    )
}

export default Docspopup