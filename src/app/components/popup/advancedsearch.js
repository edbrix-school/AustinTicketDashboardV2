import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";

export default function AdvancedSearchPopup(props) {
  const [activeTab, setActiveTab] = useState(0);
  const [ingredient, setIngredient] = useState("");
  const [dateAdded, setDateAdded] = useState("");
  const [owner, setOwner] = useState("");
  const [file, setFile] = useState(false);
  const [description, setDescription] = useState(false);
  const [notes, setNotes] = useState(false);
  const [optionalfile, setOptionalFile] = useState(false);
  const [date, setDate] = useState(null);
  const [selectedOwner, setSelectedOwner] = useState("");

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const OwnerList = [
    { name: "Adam", code: "NY" },
    { name: "Richard", code: "RM" },
  ];
  return (
    <div>
      <Sidebar
        visible={props.visible}
        position="right"
        onHide={() => props.onHides(false)}
        className="sidebarwidth custmSidebar rounded-l-xl "
        title={props.title}
      >
        <div className="">
          <div className="py-[24px] xl:py-[1.25vw] text-[24px] text-[#20232E]">
            Advanced Search
          </div>
          <Tabs selectedIndex={activeTab} onSelect={handleTabClick}>
            <div>
              <TabList>
                <div className="flex">
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-l-lg cursor-pointer ${
                        activeTab === 0
                          ? "bg-[#4169E1] dark:bg-[#4169E1] text-white active border border-[#4169E1] dark:border-[#4169E1]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] dark:bg-[#13161B] text-[#424242] dark:text-[#AAAAAA] border border-[#EAE0E] dark:border-[#374151]"
                      }`}
                    >
                      First
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] cursor-pointer ${
                        activeTab === 1
                          ? "bg-[#4169E1] dark:bg-[#4169E1] text-white active border border-[#4169E1] dark:border-[#4169E1]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] dark:bg-[#13161B] text-[#424242] dark:text-[#AAAAAA] border border-[#EAE0E] dark:border-[#374151]"
                      }`}
                    >
                      Second
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-r-lg cursor-pointer ${
                        activeTab === 2
                          ? "bg-[#4169E1] dark:bg-[#4169E1] text-white active border border-[#4169E1] dark:border-[#4169E1]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] dark:bg-[#13161B] text-[#424242] dark:text-[#AAAAAA] border border-[#EAE0E] dark:border-[#374151]"
                      }`}
                    >
                      Third
                    </div>
                  </Tab>
                </div>
              </TabList>
            </div>
            <div>
              <TabPanel>
                <div className="grid mt-[24px] 3xl:mt-[1.25vw] pr-[16px] 3xl:pr-[0.833vw] gap-[16px] 3xl:gap-[0.833vw]">
                  <div className="bg-[#F9F9FC] rounded-lg border p-[16px] 3xl:p-[0.833vw] grid gap-[20px] 3xl:gap-[1.042vw]">
                    <div className="grid gap-[8px] 3xl:gap-[0.417vw]">
                      <div className="3xl:text-[0.833vw] text-[16px] font-medium">
                        Keyword
                      </div>
                      <span className="p-input-icon-left productSearch">
                        <i className="asetsmng-td-search" />
                        <InputText
                          placeholder="Type in here"
                          className="xl:h-[2.083vw] h-[36px]"
                          style={{
                            background: "#F5F6F8",
                            border: "1px solid #BECDE3",
                            borderRadius: "8px",
                          }}
                        />
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center custRadioButton">
                        <RadioButton
                          inputId="ingredient1"
                          name="keyword"
                          value="yes"
                          onChange={(e) => setIngredient(e.value)}
                          checked={ingredient === "yes"}
                        />
                        <label
                          htmlFor="ingredient1"
                          className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                        >
                          Any Word
                        </label>
                      </div>
                      <div className="flex items-center custRadioButton">
                        <RadioButton
                          inputId="ingredient2"
                          name="keyword"
                          value="no"
                          onChange={(e) => setIngredient(e.value)}
                          checked={ingredient === "no"}
                        />
                        <label
                          htmlFor="ingredient2"
                          className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                        >
                          All Words
                        </label>
                      </div>
                      <div className="flex items-center custRadioButton">
                        <RadioButton
                          inputId="ingredient3"
                          name="keyword"
                          value="other"
                          onChange={(e) => setIngredient(e.value)}
                          checked={ingredient === "other"}
                        />
                        <label
                          htmlFor="ingredient3"
                          className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                        >
                          Exact Phase
                        </label>
                      </div>
                    </div>
                    <div className="grid gap-[8px] 3xl:gap-[0.417vw]">
                      <div className="flex items-center justify-start   ">
                        <Checkbox
                          onChange={(e) => setFile(e.checked)}
                          checked={file}
                        ></Checkbox>
                        <label className="ml-2">
                          Search in File / Folder Name
                        </label>
                      </div>
                      <div className="flex items-center justify-start">
                        <Checkbox
                          onChange={(e) => setDescription(e.checked)}
                          checked={description}
                        ></Checkbox>
                        <label className="ml-2">Search in Description</label>
                      </div>
                      <div className="flex items-center justify-start">
                        <Checkbox
                          onChange={(e) => setNotes(e.checked)}
                          checked={notes}
                        ></Checkbox>
                        <label className="ml-2">Search in Notes</label>
                      </div>
                      <div className="flex items-center justify-start">
                        <Checkbox
                          onChange={(e) => setOptionalFile(e.checked)}
                          checked={optionalfile}
                        ></Checkbox>
                        <label className="ml-2">
                          Search for text Inside Files (Optional)
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F9F9FC] rounded-lg border p-[16px] 3xl:p-[0.833vw] grid gap-[20px] 3xl:gap-[1.042vw] w-full">
                    <div className="grid gap-[8px] 3xl:gap-[0.417vw]">
                      <div className="3xl:text-[0.833vw] text-[16px] font-medium">
                        Date
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="flex items-center custRadioButton">
                          <RadioButton
                            inputId="ingredient1"
                            name="date"
                            value="yes"
                            onChange={(e) => setDateAdded(e.value)}
                            checked={dateAdded === "yes"}
                          />
                          <label
                            htmlFor="ingredient1"
                            className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                          >
                            Date Added
                          </label>
                        </div>
                        <div className="flex custRadioButton">
                          <RadioButton
                            inputId="ingredient2"
                            name="date"
                            value="no"
                            onChange={(e) => setDateAdded(e.value)}
                            checked={dateAdded === "no"}
                          />
                          <label
                            htmlFor="ingredient2"
                            className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                          >
                            Last Updated
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-[8px] 3xl:gap-[0.417vw]">
                      <div className="custInput  customCalendar">
                        <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                          From
                        </label>
                        <Calendar
                          value={date}
                          onChange={(e) => setDate(e.value)}
                          showIcon
                          placeholder="24/04/2023"
                          className="w-full border rounded-lg "
                        />
                      </div>
                      <div className="custInput  customCalendar">
                        <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                          To
                        </label>
                        <Calendar
                          value={date}
                          onChange={(e) => setDate(e.value)}
                          showIcon
                          placeholder="24/04/2023"
                          className="w-full border rounded-lg "
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F9F9FC] rounded-lg border p-[16px] 3xl:p-[0.833vw] grid gap-[20px] 3xl:gap-[1.042vw] w-full">
                    <div className="grid gap-[8px] 3xl:gap-[0.417vw]">
                      <div className="3xl:text-[0.833vw] text-[16px] font-medium">
                        Owner
                      </div>
                      <div className="grid grid-cols-2">
                        <div className="flex items-center custRadioButton">
                          <RadioButton
                            inputId="ingredient1"
                            name="Owner"
                            value="yes"
                            onChange={(e) => setOwner(e.value)}
                            checked={owner === "yes"}
                          />
                          <label
                            htmlFor="ingredient1"
                            className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                          >
                            Added By
                          </label>
                        </div>
                        <div className="flex custRadioButton">
                          <RadioButton
                            inputId="ingredient2"
                            name="Owner"
                            value="no"
                            onChange={(e) => setOwner(e.value)}
                            checked={owner === "no"}
                          />
                          <label
                            htmlFor="ingredient2"
                            className="ml-[8px] xl:ml-[0.417vw] text-[#363A44] text-[14px] xl:text-[0.729vw] font-medium"
                          >
                            Last Updated By
                          </label>
                        </div>
                      </div>
                      <div className="flex flex-col w-full custDropdownBox">
                        <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 dark:text-[#fff]">
                          Select
                        </label>
                        <Dropdown
                          value={selectedOwner}
                          onChange={(e) => setSelectedOwner(e.value)}
                          options={OwnerList}
                          optionLabel="name"
                          placeholder="Select a Owner"
                          className="w-full md:w-14rem border"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#F9F9FC] rounded-lg border p-[16px] 3xl:p-[0.833vw] grid gap-[20px] 3xl:gap-[1.042vw] w-full">
                    <div className="flex justify-between items-center">
                      <div className="text-[16px] 3xl:text-[0.833vw] font-medium leading-5">
                        Conditions
                      </div>
                      <div
                        className="bg-[#FFFFFF] border border-[#E4E7EC] rounded-lg gap-[8px] 3xl:gap-[0.417vw] px-[12px] 3xl:px-[0.625vw]
                        py-[8px] 3xl:py-[0.417vw] flex items-center"
                      >
                        <div className="">
                          <i className="asetsmng-plus-rounded-box text-[16px] 3xl:text-[0.833vw]"></i>
                        </div>
                        <div className="text-[12px] 3xl:text-[0.625vw] font-medium leading-4">
                          Add Condition
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#FFF] p-[12px] 3xl:p-[0.625vw] grid w-full">
                      <div className="grid w-full">
                        <div className="flex gap-[8px] 3xl:gap-[0.417vw]">
                          <Dropdown
                            value={selectedOwner}
                            onChange={(e) => setSelectedOwner(e.value)}
                            options={OwnerList}
                            optionLabel="name"
                            placeholder="Select a Owner"
                            className="w-full md:w-14rem border"
                          />
                          <Dropdown
                            value={selectedOwner}
                            onChange={(e) => setSelectedOwner(e.value)}
                            options={OwnerList}
                            optionLabel="name"
                            placeholder="Select a Owner"
                            className="w-full md:w-14rem border"
                          />
                          <Dropdown
                            value={selectedOwner}
                            onChange={(e) => setSelectedOwner(e.value)}
                            options={OwnerList}
                            optionLabel="name"
                            placeholder="Select a Owner"
                            className="w-full md:w-14rem border"
                          />
                          <div className="flex">
                            <div className="bg-[#dfe7fa] rounded-lg p-[4px] 3xl:p-[0.208vw] flex items-center gap-[4px] 3xl:gap-[0.208vw]">
                                <div>And</div>
                                <div className="h-[10px] w-[10px] rounded-full border border-[#4169e1] bg-[#4169e1]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div>Second</div>
              </TabPanel>
              <TabPanel>
                <div>Third</div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </Sidebar>
    </div>
  );
}
