"use client"
import React, { useState } from 'react'
import { Button, ConfigProvider } from "antd";

import { Switch } from "antd";
import theme from "@/theme/themeConfig";
import Link from 'next/link';
import { MenuOutlined ,CloseOutlined,MessageOutlined} from '@ant-design/icons';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const Navbar = () => {
    const [menuToggle, setmenuToggle] = useState(false)
    return (
        <ConfigProvider theme={theme}>
    <header className="h-16 bg-white navBoxShadow ">
  <nav className="relative px-5 py-3 container mx-auto">
    <div className="container mx-auto flex justify-between items-center">
      <img src="/assets/images/Hero_Standard_AuroraLogo.svg" className='w-12' alt="Tailwindcss Navigation" />
      <ul className="hidden md:flex space-x-6">
        <li className='text-textColor'><a href="#">Home</a></li>
        <li className='text-textColor'><a href="#">News</a></li>
        <li className="flex relative group text-textColor">
          <a href="#" className="mr-1">Services</a> 
          <i className="fa-solid fa-chevron-down fa-2xs pt-3" />
          {/* Submenu starts */}
          <ul className="absolute bg-secColor p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
            <li className="text-sm hover:bg-slate-100 leading-8"><a href="#">Webdesign</a></li>
            <li className="text-sm hover:bg-slate-100 leading-8"><a href="#">Digital marketing</a></li>
            <li className="text-sm hover:bg-slate-100 leading-8"><a href="#">SEO</a></li>
            <li className="text-sm hover:bg-slate-100 leading-8"><a href="#">Ad campaigns</a></li>
            <li className="text-sm hover:bg-slate-100 leading-8"><a href="#">UX Design</a></li>
          </ul>
          {/* Submenu ends */}
        </li>
        <li className='text-textColor'><a href="#">About</a></li>
        <li className='text-textColor'><a href="#">Contact</a></li>
        
        <li className='text-mainColor font-bold text-base hidden xl:block'><a href="#">+92 3112546597</a></li>
      </ul>
      <div className="flex justify-between space-x-3 items-start">
      <Link href='/google' className='md:block hidden'>
      <Button  className='border-mainColor' style={{borderColor:"#d5af80", color:'var(--mainColor)'}} >Live Your Bussiness</Button>
      
      </Link>
      <div className='border-mainColor border rounded-3xl flex items-center justify-center p-2 mr-3 md:mr-0'>
      <MessageOutlined className='text-xl text-mainColor' style={{color:"var(--mainColor)"}}/>
      </div>
      <Link href='/user/login' className='md:block hidden'>
      <Button type="primary"  >Sign In</Button>
      
      </Link>
      </div>

      {/* Mobile menu icon */}
     <div className='md:hidden'>
     {/* <Link href='/google' className='md:hidden mr-3'>
      <Button type="primary" >Sign In</Button>
      
      </Link> */}
     <button id="mobile-icon" className="md:hidden">
        {menuToggle ? 
        <CloseOutlined  onClick={()=>{
        setmenuToggle(!menuToggle)
      }}/> :  
        
      <MenuOutlined onClick={()=>{
        setmenuToggle(!menuToggle)
      }}/>
          }
      </button>
     
     </div>
    </div>
    {/* Mobile menu */}
    <div className="md:hidden flex justify-center mt-3 w-full" style={{    transition: "all 1s ease-out",
    transform: `${menuToggle ? 'translateX(0px)' : 'translateX(-1000%)'}`}}>
        
      <div id="mobile-menu" className="mobile-menu absolute top-23 w-full"> {/* add hidden here later */}
        <ul className="bg-gray-50 text-white shadow-lg leading-9 font-bold h-screen">
          <li className=" text-textColor border-b-2 border-white hover:bg-secColor hover:text-white pl-4"><a href="https://google.com" className="block pl-7">Home</a></li>
          <li className=" text-textColor border-b-2 border-white hover:bg-secColor hover:text-white pl-4"><a href="#" className="block pl-7">News</a></li>
          <li className=" text-textColor border-b-2 border-white hover:bg-secColor hover:text-white">
            <a href="#" className="block pl-11">Services <i className="fa-solid fa-chevron-down fa-2xs pt-4" /></a> 
            {/* Submenu starts */}
            <ul className="bg-white text-gray-800 w-full">
              <li className="text-sm leading-8 font-normal hover:bg-slate-200"><a className="block pl-16" href="#">Webdesign</a></li>
              <li className="text-sm leading-8 font-normal hover:bg-slate-200"><a className="block pl-16" href="#">Digital marketing</a></li>
              <li className="text-sm leading-8 font-normal hover:bg-slate-200"><a className="block pl-16" href="#">SEO</a></li>
              <li className="text-sm leading-8 font-normal hover:bg-slate-200"><a className="block pl-16" href="#">Ad campaigns</a></li>
              <li className="text-sm leading-8 font-normal hover:bg-slate-200"><a className="block pl-16" href="#">UX Design</a></li>
            </ul>
            {/* Submenu ends */}
          </li>
          <li className=" text-textColor border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="#" className="block pl-7">About</a></li>
          <li className=" text-textColor border-b-2 border-white hover:bg-red-400 hover:text-white pl-4"><a href="#" className="block pl-7">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>

  
  </ConfigProvider>
  )
}

export default Navbar