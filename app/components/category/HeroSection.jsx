"use client";
import React from "react";
import { Divider } from "antd";
import { ConfigProvider } from "antd";

import theme from "../../../theme/themeConfig";
import AccordianCheckBox from "../microCompoments/AccordianCheckBox";
import AccordianSwitch from "../microCompoments/AccordianSwitch";
import TablePagination from "../microCompoments/TablePagination";

const HeroSection = () => {
  return (
    <ConfigProvider theme={theme}>
      <div className="container mx-auto px-5">
        <div className="mainSection flex flex-col lg:flex-row">
          <div className="w-100 lg:w-3/12">
            <p className="text-xl capitalize text-paraColor">filter</p>

            <Divider className="bg-gray-300" style={{ marginTop: "0.5rem" }} />

            <AccordianCheckBox
              title="City"
              options={[
                {
                  label: "Karachi",
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
              ]}
            />

            <AccordianCheckBox
              title="Budget (per person)"
              options={[
                {
                  label: "0 - 1400",
                  value: "0-1400",
                },
                {
                  label: "1401 - 1800",
                  value: "1401-1800",
                },
                {
                  label: "1801 - 2400",
                  value: "1801-2400",
                },
                {
                  label: "2401 - 3500",
                  value: "2401-3500",
                },
                {
                  label: "3501 - 4500",
                  value: "3501-4500",
                },
              ]}
            />

            <AccordianSwitch title="Parking Space" />

            <AccordianSwitch title="Wheelchair Accessible" />

            <AccordianCheckBox
              title="Type"
              options={[
                {
                  label: "Hall",
                  value: "hall",
                },
                {
                  label: "Marquee/Banquet",
                  value: "Marquee-Banquet",
                },
                {
                  label: "Outdoor",
                  value: "Outdoor",
                },
                {
                  label: "Other",
                  value: "Other",
                },
              ]}
            />

            <AccordianCheckBox
              title="Capacity"
              options={[
                {
                  label: "0 - 1400",
                  value: "0-1400",
                },
                {
                  label: "1401 - 1800",
                  value: "1401-1800",
                },
                {
                  label: "1801 - 2400",
                  value: "1801-2400",
                },
                {
                  label: "2401 - 3500",
                  value: "2401-3500",
                },
                {
                  label: "3501 - 4500",
                  value: "3501-4500",
                },
              ]}
            />

            <AccordianCheckBox
              title="Staff"
              options={[
                {
                  label: "Male",
                  value: "male",
                },
                {
                  label: "Female",
                  value: "female",
                },
                {
                  label: "Transgender",
                  value: "transgender",
                },
              ]}
            />

            <AccordianCheckBox
              title="Cancellation Policy"
              options={[
                {
                  label: "Refundable",
                  value: "refundable",
                },
                {
                  label: "Non-refundable",
                  value: "non-refundable",
                },
                {
                  label: "Partially Refundable",
                  value: "partially-refundable",
                },
              ]}
            />
          </div>

          <div className="w-100 lg:w-4/5">
            <TablePagination />
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default HeroSection;
