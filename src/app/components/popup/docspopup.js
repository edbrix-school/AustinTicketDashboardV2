import React, { useState } from "react";
import { Button } from "primereact/button";
import { Sidebar } from 'primereact/sidebar';
function Docspopup() {
    const [visible, setVisible] = useState(false);
    return (
        <>

            <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} />
            <Sidebar
                // visible={props.visible} 
                position="right" className="custmSidebar width740 w-[730px]"
                // onHide={() => props.onHides(false)}
                Sidebar visible={visible} onHide={() => setVisible(false)}
            >
                {/* Header */}
                <div className="  rounded-tl-2xl xl:rounded-tl-2xl-[0.833vw]  z-10 ">
                    <div className="3xl:space-y-[0.417vw] space-y-2">
                        <div className="grid grid-cols-12">
                            <div className="col-span-8 h-full">
                                <div className="3xl:p-[1.25vw] p-6 ">
                                    <div className=" text-[#20232E] text-xl font-medium leading-7 3xl:leading-[1.458vw] 3xl:text-[1.25vw]">Doc 1</div>
                                    <div className="border-b border-[#D3D3CE] pb-[8px] xl:pb-[0.417vw]">
                                        <div className="text-[#20232E] text-[18px] 3xl:text-[0.938vw]">John Doe</div>
                                        <div className="text-[#3A3E49] text-[16px] 3xl:text-[0.833vw]">234 Avenue Street Gustave Delory</div>
                                    </div>
                                    <div className="text-[#3A3E49] text-[16px] 3xl:text-[0.833vw] mt-[24px] xl:mt-[1.25vw]">October 17, 2022</div>

                                    <div className="text-[#3A3E49] text-[16px] xl:text-[0.866vw] mt-[4px]">
                                        <p>Lorem ipsum dolor sit amet consectetur. Quis malesuada sed non praesent malesuada. Leo convallis nunc risus interdum faucibus. Mattis nunc rutrum et tortor massa auctor volutpat.</p><br></br>
                                        <p>Habitasse facilisis neque facilisi cursus faucibus egestas. Eget consectetur convallis accumsan viverra etiam et justo massa. Risus tellus risus senectus amet. Viverra arcu magna proin arcu nullam sed. Sem massa vitae vitae enim penatibus non libero. Nisl amet quam sed praesent sem semper imperdiet ultricies elit. Diam in non et vitae. Mi in quam aliquet facilisi laoreet. Porttitor porttitor odio et volutpat id purus eu faucibus sed. Morbi aenean lobortis quis sed et facilisis.</p><br></br>
                                        <p>Dui ultrices arcu nunc volutpat adipiscing. Bibendum condimentum magna in arcu pellentesque pellentesque. Quis eu sed ante erat. Ullamcorper congue ut luctus pharetra dignissim arcu facilisis. Eget ligula nisl id egestas accumsan egestas diam vestibulum tempor. Nibh proin netus habitant faucibus. Ipsum eleifend donec amet interdum egestas. Ipsum nisl ornare ut placerat turpis ut quis. Duis quis pretium eget mi quis ante fermentum.</p>

                                    </div>


                                    <div className="absolute bottom-0 left-0 3xl:p-[1.25vw] p-6  ">
                                        <div className="text-[#20232E] text-[18px] xl:text-[0.938vw] font-medium border-t border-[#D3D3CE] pt-[8px] xl:pt-[0.417vw]">Signature (Hard copy letter)</div>
                                        <div className="text-[#3A3E49] text-[16px] xl:text-[0.866vw]">
                                            <div>Brian Smith</div>
                                            <div>Student Coordinator</div>
                                            <div>Central College Café</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4">
                                <div className="bg-[#F9F9FC] py-[16px] xl:py-[0.933vw] px-[24px] xl:px-[1.25vw]">
                                    <div className="text-[#20232E] text-xl font-medium leading-7 3xl:leading-[1.458vw] 3xl:text-[1.25vw] ">Key Fields</div>
                                    <div className="text-[#3A3E49] text-[14px] xl:text-[0.729vw] mt-[28px] xl:mt-[1.458vw] pl-[40px] xl:pl-[2.083vw] ">Document Name</div>
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