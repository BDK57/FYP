
import { Button, Divider } from "antd";
import React from "react";
import { Checkbox } from "antd";
const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};
const plainOptions = ["Apple", "Pear", "Orange"];
// const options = 
// const optionsWithDisabled = [
//   {
//     label: "Apple",
//     value: "Apple",
//   },
//   {
//     label: "Pear",
//     value: "Pear",
//   },
//   {
//     label: "Orange",
//     value: "Orange",
//     disabled: false,
//   },
// ];
const AccordianCheckBox = ( {
   title="Enter Title", 
   optionsWithDisabled = [
    {
        label: "Karachi Default",
        value: "karachi",
      },
      {
        label: "Lahore",
        value: "lahore",
      },
      {
        label: "Islamabad",
        value: "islamabad",
      },
  ] ,
  options=
  [
    {
      label: "Karachi Default",
      value: "karachi",
    },
    {
      label: "Lahore",
      value: "lahore",
    },
    {
      label: "Islamabad",
      value: "islamabad",
    },
  ]}) => {
  return (
    <>
    {/* <Divider className="bg-gray-300" /> */}
<details className="group px-5">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none">
  <span className="text-paraColor font-semibold">
  {title}
  </span>
  <span className="transition group-open:rotate-180">
    <svg fill="none" height={24} shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width={24}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  </span>
</summary>
<div className="text-neutral-600 mt-3 group-open:animate-fadeIn">
</div>

<div className="acc-deatils text-neutral-600 mt-3 group-open:animate-fadeIn ">
{/* <Checkbox.Group
        options={plainOptions}
        defaultValue={["Apple"]}
        onChange={onChange}
        className=""
      /> */}
      {/* <br />
      <br /> */}
      <Checkbox.Group
        options={options}
        defaultValue={["Pear"]}
        onChange={onChange}
        style={{rowGap:'1rem'}}
        className="checkBox-Custom"
      />
      <br />
      <br />
      <Checkbox.Group
        options={optionsWithDisabled}
        disabled
        defaultValue={["Apple"]}
        onChange={onChange}
      />
</div>

{/* <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
  SAAS platform is a cloud-based software service that allows users to access
  and use a variety of tools and functionality.
</p>  */}
</details>

    <Divider className="bg-gray-300" />
  </>
  )
}

export default AccordianCheckBox