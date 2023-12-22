import React from 'react'
import Sidebar from './Sidebar/Sidebar'

import { ConfigProvider } from "antd";

import theme from "@/theme/themeConfig";
const page = () => {
  return (
    <ConfigProvider theme={theme}>

      <Sidebar/>
      </ConfigProvider>
  )
}

export default page