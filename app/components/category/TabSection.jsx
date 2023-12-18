"use client";
import React from "react";
import { Tabs } from "antd";
import { Divider } from "antd";
import theme from "../../../theme/themeConfig";
import Image from "next/image";
import { ConfigProvider } from "antd";
import Icon_deatil from "../microCompoments/Icon_deatil";
const data = [
  {
    label: "Details",
    key: "1",
    children: (
      <>
        <div className="flex flex-col justify-start items-start gap-4">
          <div className="flex items-center">
            <Image
              className="mr-4"
              src="assets/images/verified-DP-2.svg"
              alt="wedding photographers Makeup artists henna mehndi catering decor wedding venues Name"
              width={50}
              height={50}
            />
            <h1 className="text-3xl font-bold">White Rose</h1>
          </div>
          <div className="flex items-center flex-row gap-4">
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="text-gray-600 font-bold text-sm ml-1">
                4.96
                <span className="text-gray-500 font-normal">(76 reviews)</span>
              </p>
            </div>
            <div className="flex items-center">
              <Image src={"assets/images/map.svg"} width={18} height={18} alt="map-logo"></Image>
              <p className="text-gray-600 font-bold text-sm ml-2">
                <span className="text-gray-500 font-semibold">Street 1, Bahria Town Phase 7 ,</span>
                Islamabad
              </p>
            </div>
          </div>
        </div>

        <Divider className="bg-gray-300" />

        <div className="flex items-start gap-4 flex-col">
          <div className="profile_infoheading__1nChc">
            <h2 className="text-2xl font-bold">Details</h2>
          </div>
          <div className=" grid grid-cols-2 gap-x-16 gap-y-5">
            <Icon_deatil srcIcon="assets/icons/venue_type.svg" alt="Icons" title="venue type" para="Marquee/Banquet" />
            <Icon_deatil
              srcIcon="assets/icons/amenities-logo.svg"
              alt="Icons"
              title="amenities"
              para="Bridal Room, Groom Room, Washrooms, Valet, Security Guards"
            />

            <Icon_deatil srcIcon="assets/icons/parking_space.svg" alt="Icons" title="parking space" para="500" />
            <Icon_deatil srcIcon="assets/icons/catering.svg" alt="Icons" title="catering" para="Internal" />
            <Icon_deatil srcIcon="assets/icons/wheelchair_accessible.svg" alt="Icons" title="wheelchair accessible" para="Yes" />
            <Icon_deatil srcIcon="assets/icons/staff.svg" alt="Icons" title="staff" para="Male, Female" />
          </div>
          <div className="mt-3">
            <Icon_deatil
              srcIcon="assets/icons/description.svg"
              alt="Icons"
              title="Description"
              para="White Rose Marquee, an elegant vintage themed event space and your ideal location for weddings, engagement parties, corporate events, bridal and baby showers, anniversaries, birthday parties and more. "
            />

            <Icon_deatil
              srcIcon="assets/icons/description.svg"
              alt="Icons"
              title="Additional Information"
              para="100% payment is required 10 days before the event"
            />
          </div>
        </div>

        <Divider className="bg-gray-300" />

        <div className="flex items-start flex-col ">
          <h1 className="text-2xl font-bold">Verify Pricing</h1>

          <div className="profile_deals__1ZwS0 bg-mainColor
    h-28
    mx-4
    flex;
    flex-row
    justify-center
    items-center
  " style={{  backgroundImage: "url(assets/icons/golden-sparkle-2.svg)",
  backgroundPosition: 'right 100px top 100px;',
  backgroundRepeat:"repeat",
  backgroundSize: '1.5em 1.5em'}}>
            <div className="profile_dealTextContainer__2woy2">
              <div className="profile_dealHeadlineContainer__28yb5">
                <div className="profile_dealHeadline__v7jMF">Deals</div>
                <div className="profile_dealTitle__3O5lA">: Free customized 3 tiered wedding cake</div>
              </div>
              <div className="profile_dealText__2f7yP">Only available on Shadiyana. T&amp;Cs apply.</div>
            </div>
            <div className="profile_dealButtonContainer__1Wm28">
              <button className="profile_dealButton__tUeq3">Get Discount</button>
            </div>
          </div>
        </div>
      </>
    ),
  },

  {
    label: "Pricing",
    key: "2",
    children: (
      <>
        <p>Content of Tab 2</p>
        <img src="next.svg" alt="" />
        {/* <MyComponent /> */}
      </>
    ),
  },
  // ...
];
const TabSection = () => {
  return (
    <ConfigProvider theme={theme}>
      <div className="container mx-auto px-5">
        <div className="mainSection flex">
          <div className="w-2/4 border border-red-500">
            <div className="">
              {/* <h4>ReactJS Ant-Design ConfigProvider Component</h4>  */}
              <Tabs items={data} />
            </div>
          </div>

          <div className="w-2/4 border border-blue-600">Gallery Section</div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default TabSection;
