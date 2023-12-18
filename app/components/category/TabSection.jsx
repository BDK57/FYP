"use client";
import React from "react";
import { Tabs } from "antd";
import { Divider } from "antd";
import theme from "../../../theme/themeConfig";
import Image from "next/image";
import { ConfigProvider } from "antd";
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

        <div data-profile="details" className="profile_detailscontainer__3dGx-" style={{ display: "block" }}>
          <div className="profile_infoheading__1nChc">
            <h2 className="text-xl font-bold">Details</h2>
          </div>
          <div className="profile_details__LPp88 grid grid-cols-2 gap-x-16 gap-y-5">
            <div className="profile_detail__2X3nM">
              <Image src='assets/icons/venue_type.svg' width={18} height={18}

                alt="wedding photographers Makeup artists henna mehndi catering decor wedding venues  Profile Icons"></Image>

              <div className="profile_detailtext__vI83J">
                <h3>venue type</h3>
                <div>Marquee/Banquet</div>
              </div>
            </div>
            <div className="profile_detail__2X3nM">

              <Image src='assets/icons/amenities-logo.svg' width={18} height={18}

                alt="wedding photographers Makeup artists henna mehndi catering decor wedding venues  Profile Icons"></Image>

              <div className="profile_detailtext__vI83J">
                <h3>amenities</h3>
                <div>Bridal Room, Groom Room, Washrooms, Valet, Security Guards</div>
              </div>
            </div>
            <div className="profile_detail__2X3nM">
              <Image src='assets/icons/parking_space.svg' width={18} height={18}

                alt="wedding photographers Makeup artists henna mehndi catering decor wedding venues  Profile Icons"></Image>

              <div className="profile_detailtext__vI83J">
                <h3>parking space</h3>
                <div>500</div>
              </div>
            </div>
            <div className="profile_detail__2X3nM">
              <Image src='assets/icons/catering.svg' width={18} height={18}

                alt="wedding photographers Makeup artists henna mehndi catering decor wedding venues  Profile Icons"></Image>


              <div className="profile_detailtext__vI83J">
                <h3>catering</h3>
                <div>Internal</div>
              </div>
            </div>
            <div className="profile_detail__2X3nM">
              <Image src='assets/icons/wheelchair_accessible.svg' width={18} height={18}

                alt="wedding photographers Makeup artists henna mehndi catering decor wedding venues  Profile Icons"></Image>


              <div className="profile_detailtext__vI83J">
                <h3>wheelchair accessible</h3>
                <div>Yes</div>
              </div>
            </div>
            <div className="profile_detail__2X3nM">
              <Image src='assets/icons/staff.svg' width={18} height={18}

                alt="wedding photographers Makeup artists henna mehndi catering decor wedding venues  Profile Icons"></Image>


              <div className="profile_detailtext__vI83J">
                <h3>staff</h3>
                <div>Male, Female</div>
              </div>
            </div>
          </div>
          <div style={{ margin: "20px 0" }} className="profile_detail__2X3nM">
            <img
              src="/icons/profile/description.svg"
              alt="wedding photographers Makeup artists henna mehndi catering decor wedding venues  Description Icon"
            />
            <div className="profile_detailtext__vI83J">
              <h2>Description</h2>
              <div>
                White Rose Marquee, an elegant vintage themed event space and your ideal location for weddings, engagement parties, corporate events,
                bridal and baby showers, anniversaries, birthday parties and more.{" "}
              </div>
            </div>
          </div>
          <div style={{ margin: "20px 0" }} className="profile_detail__2X3nM">
            <img
              src="/icons/profile/additional-info.svg"
              alt="wedding photographers Makeup artists henna mehndi catering decor wedding venues Additional Information Icon"
            />
            <div className="profile_detailtext__vI83J">
              <h2>Additional Information</h2>
              <div>100% payment is required 10 days before the event</div>
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
