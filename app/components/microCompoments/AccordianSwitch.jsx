import { Button, Divider } from "antd";
import React from "react";
import { Switch } from 'antd';
const AccordianSwitch = ({title="Enter Title"}) => {
  return (
    <>
  <div className="group px-5">
  <div className="flex justify-between items-center font-medium ">
    <p className="text-paraColor font-semibold">
    
     {title}
    </p>
    <Switch defaultChecked />
  </div>
  

 
 {/* <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
    SAAS platform is a cloud-based software service that allows users to access
    and use a variety of tools and functionality.
  </p>  */}
</div>

      <Divider className="bg-gray-300" />
    </>
  );
};

export default AccordianSwitch;
