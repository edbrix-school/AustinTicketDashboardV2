import React, { useRef, useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Divider } from "primereact/divider";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { MultiSelect } from "primereact/multiselect";

export default function AdvancedSearchPopup(props) {
  const [activeTab, setActiveTab] = useState(0);
  const [studentName, setStudentName] = useState(false);
  const [ingredient, setIngredient] = useState("");
  const [dateAdded, setDateAdded] = useState("");
  const [owner, setOwner] = useState("");
  const [file, setFile] = useState(false);
  const [description, setDescription] = useState(false);
  const [notes, setNotes] = useState(false);
  const [optionalfile, setOptionalFile] = useState(false);
  const [date, setDate] = useState(null);
  const [selectedOwner, setSelectedOwner] = useState("");
  const [selectName, setSelectName] = useState("");
  const [nameText, setNameText] = useState("");
  const [nameTextOne, setNameTextOne] = useState("");
  const [nameTextTwo, setNameTextTwo] = useState("");
  const [nameTextThree, setNameTextThree] = useState("");
  const [nameTextFour, setNameTextFour] = useState("");
  const [conditionOne, setConditionOne] = useState("");
  const [conditionTwo, setConditionTwo] = useState("");
  const [conditionThree, setConditionThree] = useState("");
  const [conditionFour, setConditionFour] = useState("");
  const [conditionFive, setConditionFive] = useState("");
  const [conditionSix, setConditionSix] = useState("");
  const [conditionSeven, setConditionSeven] = useState("");
  const [conditionEight, setConditionEight] = useState("");
  const [conditionNine, setConditionNine] = useState("");
  const [conditionTen, setConditionTen] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [expandedOption, setExpandedOption] = useState(null);
  const [selectedParent, setSelectedParent] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionTwo, setSelectedOptionTwo] = useState(null);
  const [selectedOptionThree,setSelectedOptionThree] =  useState(null);
  const [selectedOptionFour,setSelectedOptionFour] = useState(null);
  const [selectedOptionFive,setSelectedOptionFive] = useState(null);
  const [expandedItem, setExpandedItem] = useState(null);
  const [selectedChild, setSelectedChild] = useState(null);
  const [showChildTemplates, setShowChildTemplates] = useState(false);
  const dropdownRef = useRef(null);
  const handleParentChange = (e) => {
    setSelectedParent(e.value);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const OwnerList = [
    { name: "Adam", code: "NY" },
    { name: "Richard", code: "RM" },
  ];
  const ParameterList = [
    {
      name: "Student",
      code: "NY",
      template: [
        { name: "Profile name", code: "NY" },
        { name: "Index name", code: "In" },
        { name: "Parameter C", code: "PC" },
        { name: "Parameter D", code: "PD" },
        { name: "Parameter E", code: "PE" },
      ],
    },
    {
      name: "School",
      code: "RM",
      template: [{ name: "School 123" }, { name: "School 1234" }],
    },
    {
      name: "District",
      code: "R",
      template: [{ name: "District 123" }, { name: "District 1234" }],
    },
  ];
  const handleSelectValues = (e) => {
    setSelectedOption([e]);
    setSelectedOptionTwo([e]);
    setSelectedOptionThree([e]);
    setSelectedOptionFour([e]);
    setSelectedOptionFive([e]);
  };

  const customOptionTemplate = (option) => {
    return (
      <div>
        <div className="flex items-center">
          <div onClick={() => handleExpandClick(option)} className="mr-1"> 
            {expandedItem?.code === option?.code ? (
              <i className="asetsmng-arrow-up-circle-outline"></i>
            ) : (
              <i className="asetsmng-arrow-down-circle-outline"></i>
            )}
          </div>
          <div className="font-medium">{option.name}</div>
        </div>

        {showChildTemplates && option?.code === expandedItem?.code && (
          <ul className="pl-3 pt-2 space-y-2">
            {option.template.map((child, index) => (
              <li key={index} className="">
                <button onClick={() => handleSelectValues(child)} className="flex gap-2 items-center">
                  <RadioButton
                    className="conditionbtn "
                    inputId="ingredient1"
                    value={child.name}
                    onChange={(e) => setIngredient(e.value)}
                    checked={ingredient === child.name}
                  />
                 <div className="text-[14px] xl:text-[0.729vw] font-medium"> {child.name}</div>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  const handleExpandClick = (option) => {
    if (expandedItem?.code === option?.code) {
      setExpandedItem(null);
      setShowChildTemplates(false); // Collapse child templates
    } else {
      setExpandedItem(option);
      setShowChildTemplates(true); // Expand child templates
    }
  };

  const ConditionList = [
    // { name: "Between", code: "vr" },
    { name: "And", code: "er" },
    { name: "Or", code: "vr" },
    { name: "Not", code: "er" },
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
        <div className="3xl:px-[1.25vw] xl:px-[24px] xl:py-[0.521vw] py-[12px]">
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
                          ? "bg-[#4169E1] text-white active border border-[#4169E1]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] text-[#424242] border border-[#EAE0E] "
                      }`}
                    >
                      First
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] cursor-pointer ${
                        activeTab === 1
                          ? "bg-[#4169E1] text-white active border border-[#4169E1]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] text-[#424242] border border-[#EAE0E] "
                      }`}
                    >
                      Second
                    </div>
                  </Tab>
                  <Tab>
                    <div
                      className={`flex items-center font-normal text-[14px] xl:text-[0.729vw] xl:py-[0.521vw] py-[12px] xl:px-[1.042vw] px-[18px] rounded-r-lg cursor-pointer ${
                        activeTab === 2
                          ? "bg-[#4169E1] text-white active border border-[#4169E1]"
                          : "bg-[#FFFFFFD9] hover:bg-[#F0E9EA] text-[#424242] border border-[#EAE0E] "
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
                        <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 ">
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
                        <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 ">
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
                        <label className="block text-[#262626] text-[14px] xl:text-[0.729vw] font-medium leading-8 ">
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
                    <div className="bg-[#FFF]  p-[12px] 3xl:p-[0.625vw] grid w-full gap-[8px] 3xl:gap-[0.417vw]">
                      <div className="grid w-full ">
                        <div className="flex gap-[8px] 3xl:gap-[0.417vw]  w-full ">
                        <div className="custDropdownBox grow">
                          <MultiSelect
                            value={selectedOption}
                            options={ParameterList}
                            optionLabel="name"
                            placeholder="Name"
                            maxSelectedLabels={3}
                            itemTemplate={customOptionTemplate}
                            className="w-full border"
                          />
                          </div>
                            <div className="custDropdownBox grow">
                          <Dropdown
                            value={conditionTwo}
                            onChange={(e) => setConditionTwo(e.value)}
                            options={ConditionList}
                            optionLabel="name"
                            placeholder="And"
                            className="w-full border"
                          />
                         </div>

                          <div className="custInputBox grow">
                          <InputText
                            value={nameText}
                            onChange={(e) => setNameText(e.value)}
                            optionLabel="name"
                            placeholder="Alex Smith - SC1001"
                            className="w-full border"
                          />
                          </div>
                          <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                            <div className="bg-[#dfe7fa] rounded-3xl p-[4px] 3xl:p-[0.208vw] flex items-center gap-[4px] 3xl:gap-[0.208vw] px-[8px] 3xl:px-[0.417vw]">
                              <div>And</div>
                              <div className="h-[12px] w-[12px] rounded-full border border-[#4169e1] bg-[#4169e1]"></div>
                            </div>
                            <div>
                              <i className="asetsmng-close-circle text-[16px] 3xl:text-[0.833vw]"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid w-full">
                        <div className="flex gap-[8px] 3xl:gap-[0.417vw]  w-full ">
                        <div className="custDropdownBox grow">
                        <MultiSelect
                            value={selectedOptionTwo}
                            options={ParameterList}
                            optionLabel="name"
                            placeholder="Name"
                            maxSelectedLabels={3}
                            itemTemplate={customOptionTemplate}
                            className="w-full md:w-20rem expandeble border"
                          />
                          </div>
                          <div className="custDropdownBox grow">
                          <Dropdown
                            value={conditionFour}
                            onChange={(e) => setConditionFour(e.value)}
                            options={ConditionList}
                            optionLabel="name"
                            placeholder="And"
                            className="w-full md:w-14rem border"
                          />
                          </div>
                          <div className="custInputBox grow">
                          <InputText
                            value={nameTextOne}
                            onChange={(e) => setNameTextOne(e.value)}
                            optionLabel="name"
                            placeholder="Value"
                            className="w-full md:w-14rem border"
                          />
                          </div>
                          <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                            <div className="border rounded-3xl p-[4px] 3xl:p-[0.208vw] flex items-center gap-[4px] 3xl:gap-[0.208vw] px-[8px] 3xl:px-[0.417vw]">
                              <div>
                                <i className="asetsmng-plus-rounded-box text-[13px] 3xl:text-[0.677vw]"></i>
                              </div>
                              <div>And</div>
                            </div>
                            <div>
                              <i className="asetsmng-close-circle text-[16px] 3xl:text-[0.833vw]"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center border-[#e4e7ec] w-full relative">
                        <div className="bg-[#dfe7fa] rounded-3xl p-[4px] 3xl:p-[0.208vw] flex items-center gap-[4px] 3xl:gap-[0.208vw] z-10 px-[8px] 3xl:px-[0.417vw]">
                          <div>And</div>
                          <div className="h-[12px] w-[12px]  rounded-full border border-[#4169e1] bg-[#4169e1]"></div>
                        </div>
                        <Divider className="absolute" />
                      </div>
                      <div className="grid w-full">
                        <div className="flex gap-[8px] 3xl:gap-[0.417vw]  w-full ">
                        <div className="custDropdownBox grow">
                        <MultiSelect
                            value={selectedOptionTwo}
                            options={ParameterList}
                            optionLabel="name"
                            placeholder="Name"
                            maxSelectedLabels={3}
                            itemTemplate={customOptionTemplate}
                            className="w-full md:w-20rem expandeble border"
                          />
                          </div>
                          <div className="custDropdownBox grow">
                          <Dropdown
                            value={conditionFour}
                            onChange={(e) => setConditionFour(e.value)}
                            options={ConditionList}
                            optionLabel="name"
                            placeholder="condition"
                            className="w-full md:w-14rem border"
                          />
                          </div>
                          <div className="custInputBox grow">
                          <InputText
                            value={nameTextOne}
                            onChange={(e) => setNameTextOne(e.value)}
                            optionLabel="name"
                            placeholder="Value"
                            className="w-full md:w-14rem border"
                          />
                          </div>
                          <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                            <div className="bg-[#dfe7fa] rounded-3xl p-[4px] 3xl:p-[0.208vw] flex items-center gap-[4px] 3xl:gap-[0.208vw] px-[8px] 3xl:px-[0.417vw]">
                              <div>And</div>
                              <div className="h-[12px] w-[12px] rounded-full border border-[#4169e1] bg-[#4169e1]"></div>
                            </div>
                            <div>
                              <i className="asetsmng-close-circle text-[16px] 3xl:text-[0.833vw]"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid w-full">
                        <div className="flex gap-[8px] 3xl:gap-[0.417vw]  w-full ">
                        <div className="custDropdownBox grow">
                        <MultiSelect
                            value={selectedOptionTwo}
                            options={ParameterList}
                            optionLabel="name"
                            placeholder="Name"
                            maxSelectedLabels={3}
                            itemTemplate={customOptionTemplate}
                            className="w-full md:w-20rem expandeble border"
                          />
                          </div>
                          <div className="custDropdownBox grow">
                          <Dropdown
                            value={conditionFour}
                            onChange={(e) => setConditionFour(e.value)}
                            options={ConditionList}
                            optionLabel="name"
                            placeholder="condition"
                            className="w-full md:w-14rem border"
                          />
                          </div>
                          <div className="custInputBox grow">
                          <InputText
                            value={nameTextOne}
                            onChange={(e) => setNameTextOne(e.value)}
                            optionLabel="name"
                            placeholder="Value"
                            className="w-full md:w-14rem border"
                          />
                          </div>
                          <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                            <div className="border rounded-3xl p-[4px] 3xl:p-[0.208vw] flex items-center gap-[4px] 3xl:gap-[0.208vw] px-[8px] 3xl:px-[0.417vw]">
                              <div>
                                <i className="asetsmng-plus-rounded-box text-[13px] 3xl:text-[0.677vw]"></i>
                              </div>
                              <div>And</div>
                            </div>
                            <div>
                              <i className="asetsmng-close-circle text-[16px] 3xl:text-[0.833vw]"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center border-[#e4e7ec] w-full relative">
                        <div className="bg-[#dfe7fa] rounded-3xl p-[4px] 3xl:p-[0.208vw] flex items-center gap-[4px] 3xl:gap-[0.208vw] z-10 px-[8px] 3xl:px-[0.417vw]">
                          <div>And</div>
                          <div className="h-[12px] w-[12px]  rounded-full border border-[#4169e1] bg-[#4169e1]"></div>
                        </div>
                        <Divider className="absolute" />
                      </div>
                      <div className="grid w-full">
                        <div className="flex gap-[8px] 3xl:gap-[0.417vw]">
                        <div className="custDropdownBox grow">
                        <MultiSelect
                            value={selectedOptionTwo}
                            options={ParameterList}
                            optionLabel="name"
                            placeholder="Name"
                            maxSelectedLabels={3}
                            itemTemplate={customOptionTemplate}
                            className="w-full md:w-20rem expandeble border"
                          />
                          </div>
                          <div className="custDropdownBox grow">
                          <Dropdown
                            value={conditionFour}
                            onChange={(e) => setConditionFour(e.value)}
                            options={ConditionList}
                            optionLabel="name"
                            placeholder="condition"
                            className="w-full md:w-14rem border"
                          />
                          </div>
                          <div className="custInputBox grow">
                          <InputText
                            value={nameTextOne}
                            onChange={(e) => setNameTextOne(e.value)}
                            optionLabel="name"
                            placeholder="Value"
                            className="w-full md:w-14rem border"
                          />
                          </div>
                          <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw]">
                            <div className="border rounded-3xl p-[4px] 3xl:p-[0.208vw] flex items-center gap-[4px] 3xl:gap-[0.208vw] px-[8px] 3xl:px-[0.417vw]">
                              <div>
                                <i className="asetsmng-plus-rounded-box text-[13px] 3xl:text-[0.677vw]"></i>
                              </div>
                              <div>And</div>
                            </div>
                            <div>
                              <i className="asetsmng-close-circle text-[16px] 3xl:text-[0.833vw]"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end w-full items-center py-[16px] 3xl:py-[0.833vw]">
              <div className="flex items-center gap-[8px] 3xl:gap-[0.417vw] xl:gap-[0.417vw]">
                <div className="w-full text-[#84878D] text-[16px] xl:text-[0.833vw] 3xl:text-[0.833vw]  cursor-pointer
                rounded-lg border border-[#D3D3CE] px-[12px] xl:px-[0.625vw] 3xl:px-[0.625vw] py-[8px] xl:py-[0.427vw] 3xl:py-[0.427vw]">
                  Reset
                </div>
                <div className="w-full bg-[#4169E1] text-[#FFFFFF] text-[16px] xl:text-[0.833vw] 3xl:text-[0.833vw] cursor-pointer
                 rounded-lg border border-[#4169E1] px-[12px] xl:px-[0.625vw] 3xl:px-[0.625vw] py-[8px] xl:py-[0.427vw] 3xl:py-[0.427vw]">
                  Apply
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
