"use client";
import React from "react";
import { Tabs } from "antd";
import theme from "../../../theme/themeConfig";

import { ConfigProvider } from "antd";
const { TabPane } = Tabs;
const TabSection = () => {
  return (
    <ConfigProvider theme={theme}>
      <div className="container mx-auto px-5">
        <div className="mainSection flex">
          <div className="w-2/4 border border-red-500">
            <div className="">
              {/* <h4>ReactJS Ant-Design ConfigProvider Component</h4>  */}
              <Tabs items={[
    {
      label: "Tab 1",
      key: "1",
      children: <>
        <p>Content of Tab 1</p>
        {/* <MyComponent /> */}
      </>
    },

    {
        label: "Tab 2",
        key: "2",
        children: <>
          <p>Content of Tab 2</p>
          <img src="next.svg" alt="" />
          {/* <MyComponent /> */}
        </>
      },
    // ...
  ]} />
            </div>
          </div>

          <div className="w-2/4 border border-blue-600">Gallery Section</div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default TabSection;
