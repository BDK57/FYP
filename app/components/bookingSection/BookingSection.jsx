'use client'
import React, { useState } from 'react'
import { ConfigProvider } from "antd";

import theme from "@/theme/themeConfig";
import Image from 'next/image';
import { InfoCircleOutlined, UserOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Input, Tooltip, TimePicker, Space } from 'antd';

import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,

    InputNumber,
    Row,
    Select,
} from 'antd';

import { DatePicker, Radio } from 'antd';
import Link from 'next/link';
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 30,
        },
    },
};
const BookingSection = () => {
    const [placement, SetPlacement] = useState('bottomLeft');
    const placementChange = (e) => {
        SetPlacement(e.target.value);
    };
    const [form] = Form.useForm();
    const { Option } = Select;
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 50,
                }}
            >
                <Option value="86" selected>+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );

    const onChange = (time, timeString) => {
        console.log(time, timeString);
    };

    const handleDateChange = (date, dateString) => {
        // date: Moment object representing the selected date
        // dateString: String representation of the selected date
        console.log('Selected Date:', dateString);
        setSelectedDate(date);
    };

    const [selectedDate, setSelectedDate] = useState(null);

    const [firstToggle, setfirstToggle] = useState(false);
    const [secondToggle, setsecondToggle] = useState(true);
    const [thirdToggle, setsthirdToggle] = useState(true);
    const [fourToggle, setsfourToggle] = useState(true);
    const [fiveToggle, setsfiveToggle] = useState(true);

    return (

        <ConfigProvider theme={theme}>
            {console.log(firstToggle, secondToggle, thirdToggle, fourToggle)}
            <div className="container w-full relative mx-auto">
                <div className="flex h-full justify-between ">
                    <div className="flex  mt-5 w-7/12 flex-col justify-end items-center">

                        <Image src="/assets/images/Footer_Logo.svg" alt='bg-pic' width={240} height={200} style={{
                            textAlign: "center"
                            // width: " 100%",
                            // height: "auto"
                        }}
                        ></Image>
                        <Image src="/assets/images/booking_page_1.avif" alt='bg-pic' width={740} height={740} style={{
                            width: " 100%",
                            height: "auto"
                        }}></Image>
                    </div>
                    <div className="flex  w-2/3 p-16 flex-col relative">
                        <div className={`absolute top-5 flex flex-col w-5/6  ${firstToggle && "hidden"}`}>
                            <h1 className="text-lg font-extrabold text-textColor capitalize">Booking Details</h1>
                            <div className="w-2/3 flex justify-between flex-col gap-10 mt-5">
                                <div className="inputs h-7">
                                    <Input
                                        placeholder="Booking Deatails"
                                        // prefix={<UserOutlined className="site-form-item-icon" />}
                                        // prefix={<UserOutlined className="site-form-item-icon" />}
                                        style={{ height: "50px" }}
                                        suffix={
                                            <Tooltip title="Extra information">
                                                <InfoCircleOutlined
                                                    style={{
                                                        color: 'rgba(0,0,0,.45)',
                                                    }}
                                                />
                                            </Tooltip>
                                        }
                                    />
                                </div>
                                <div className="inputs h-7">
                                    <Input

                                        placeholder="Phone number"
                                        type='number'
                                        style={{ height: "50px" }}
                                        suffix={
                                            <Tooltip title="Extra information">
                                                <InfoCircleOutlined
                                                    style={{
                                                        color: 'rgba(0,0,0,.45)',
                                                    }}
                                                />
                                            </Tooltip>
                                        }
                                    />
                                </div>




                                <DatePicker placement={placement} onChange={handleDateChange} />




                            </div>
                            <div className="w-full mt-8">
                                <Radio.Group defaultValue="a" size="large" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: '15px' }} className='col-3 custonRadioButtn'>
                                    <Radio.Button value="a" style={{ borderRadius: "none", height: "fit-content", width: "fit-content", paddingBlock: "20px", paddingInline: '40px' }} ><div className='flex flex-col justify-between items-start'>
                                        <p className='text-base font-bold'>12 Dec 2023</p>
                                        <span className='text-center text-xs'>Morning Available</span>
                                    </div></Radio.Button>
                                    <Radio.Button value="b" style={{ borderRadius: "none", height: "fit-content", width: "fit-content", paddingBlock: "20px", paddingInline: '40px' }} ><div className='flex flex-col justify-between items-start'>
                                        <p className='text-base font-bold'>12 Dec 2023</p>
                                        <span className='text-center text-xs'>Evening Available</span>
                                    </div></Radio.Button>
                                    <Radio.Button value="c" style={{ borderRadius: "none", height: "fit-content", width: "fit-content", paddingBlock: "20px", paddingInline: '40px' }} ><div className='flex flex-col justify-between items-start'>
                                        <p className='text-base font-bold'>13 Dec 2023</p>
                                        <span className='text-center text-xs'>Morning Available</span>
                                    </div></Radio.Button>
                                    <Radio.Button value="d" style={{ borderRadius: "none", height: "fit-content", width: "fit-content", paddingBlock: "20px", paddingInline: '40px' }} ><div className='flex flex-col justify-between items-start'>
                                        <p className='text-base font-bold'>13 Dec 2023</p>
                                        <span className='text-center text-xs'>Evening Available</span>
                                    </div></Radio.Button>
                                    <Radio.Button value="e" style={{ borderRadius: "none", height: "fit-content", width: "fit-content", paddingBlock: "20px", paddingInline: '40px' }} ><div className='flex flex-col justify-between items-start'>
                                        <p className='text-base font-bold'>14 Dec 2023</p>
                                        <span className='text-center text-xs'>Morning Available</span>
                                    </div></Radio.Button>
                                    <Radio.Button value="f" style={{ borderRadius: "none", height: "fit-content", width: "fit-content", paddingBlock: "20px", paddingInline: '40px' }} ><div className='flex flex-col justify-between items-start'>
                                        <p className='text-base font-bold'>14 Dec 2023</p>
                                        <span className='text-center text-xs'>Evening Available</span>
                                    </div></Radio.Button>


                                </Radio.Group>
                            </div>
                            <div className="w-11/12 flex justify-end gap-4 items-center mt-8">
                                <Button className='border-mainColor' style={{ borderColor: "#d5af80", color: 'var(--mainColor)', width: "120px", height: "fit-content", paddingBlock: "5px" }} >Back</Button>
                                <Button type="primary" style={{ width: "120px", height: "fit-content", paddingBlock: "5px" }} onClick={() => { setfirstToggle(true), setsecondToggle(false) }} >Next</Button>
                            </div>
                        </div>
                        <div className={`absolute top-5 flex flex-col w-5/6  ${secondToggle && "hidden"}`}>
                            <h1 className="text-lg font-extrabold text-textColor capitalize">Meeting Details</h1>
                            <div className="w-2/3 flex justify-between flex-col gap-10 mt-5">
                                <div className="inputs h-7">
                                    <Input
                                        placeholder="Custumer Name"
                                        // prefix={<UserOutlined className="site-form-item-icon" />}
                                        // prefix={<UserOutlined className="site-form-item-icon" />}
                                        style={{ height: "50px" }}
                                        suffix={
                                            <Tooltip title="Extra information">
                                                <InfoCircleOutlined
                                                    style={{
                                                        color: 'rgba(0,0,0,.45)',
                                                    }}
                                                />
                                            </Tooltip>
                                        }
                                    />
                                </div>





                                <DatePicker placement={placement} onChange={handleDateChange} />




                            </div>
                            <div className="flex w-full mt-5">

                                <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
                            </div>
                            <div className="w-11/12 flex justify-end gap-4 items-center mt-8">
                                <Button className='border-mainColor' style={{ borderColor: "#d5af80", color: 'var(--mainColor)', width: "120px", height: "fit-content", paddingBlock: "5px" }} onClick={() => {
                                    setfirstToggle(false), setsecondToggle(true)
                                }}>Back</Button>
                                <Button type="primary" style={{ width: "120px", height: "fit-content", paddingBlock: "5px" }} onClick={() => {
                                    setsthirdToggle(false), setsecondToggle(true)
                                }} >Next</Button>
                            </div>
                        </div>
                        <div className={`absolute top-5 flex flex-col w-5/6  ${thirdToggle && "hidden"}`}>
                            <h1 className="text-lg font-extrabold text-textColor capitalize">Extra Details</h1>
                            <div className="w-2/3 flex justify-between flex-col gap-10 mt-5">
                                <TextArea rows={10} placeholder="Type Your Extra Details Here" maxLength={6} />



                            </div>
                            <div className="flex w-full mt-5">


                            </div>
                            <div className="w-11/12 flex justify-end gap-4 items-center mt-8">
                                <Button className='border-mainColor' style={{ borderColor: "#d5af80", color: 'var(--mainColor)', width: "120px", height: "fit-content", paddingBlock: "5px" }} onClick={() => {
                                    setsecondToggle(false), setsthirdToggle(true)
                                }}>Back</Button>
                                <Button type="primary" style={{ width: "120px", height: "fit-content", paddingBlock: "5px" }} onClick={() => {
                                    setsthirdToggle(true), setsfourToggle(false);
                                }}>Next</Button>

                            </div>
                        </div>
                        <div className={`absolute top-10 flex flex-col w-5/6   ${fourToggle && "hidden"}`}>
                            <div className="w-full flex justify-between flex-col gap-10 mt-5 items-center">
                            <div className="w-full  grid grid-cols-2 gap-4 border-2 border-dashed border-secColor-800 p-8 rounded-xl" style={{boxShadow: "rgba(60, 70, 85, 0.2) 0px 0px 6px 6px inset"}} >
                                  <div className="txt-bx space-y-1">
                                  <h2 className='font-semibold text-lg'>Booked Vendor</h2>
                                    <p className='text-base'>{'<Booked Hall Name>'}</p>
                                  </div>
                                  <div className="txt-bx space-y-1">
                                  <h2 className='font-semibold text-lg'>Contact Number</h2>
                                    <p className='text-base'>{'<Contact Number of Customer>'}</p>
                                  </div>
                                  <div className="txt-bx space-y-1">
                                  <h2 className='font-semibold text-lg'>Booking Name</h2>
                                    <p className='text-base'>{'<Booking Name>'}</p>
                                  </div>
                                  <div className="txt-bx space-y-1">
                                  <h2 className='font-semibold text-lg'>Selected Event Slot</h2>
                                    <p className='text-base'>{'Timming Slot Evening / Morning'}</p>
                                    
                                  </div>
                                  <div className="txt-bx space-y-1">
                                  <h2 className='font-semibold text-lg'>Selected Event Date</h2>
                                    
                                    <p className='text-base'>{'Date When You Booking'}</p>
                                  </div>
                                  
                                </div>
                                <div className="w-full flex flex-col items-start justify-between gap-4">
                                <h3 className='text-start font-semibold text-lg'>Package</h3>
                                <div className="w-full  grid grid-cols-2 gap-4 border-2 border-dashed border-secColor-800 p-8 rounded-xl" style={{boxShadow: "rgba(60, 70, 85, 0.2) 0px 0px 6px 6px inset"}} >
                                  <div className="txt-bx space-y-1">
                                  <h2 className='font-semibold text-lg'>Booked Vendor</h2>
                                    <p className='text-base'>{'<Booked Hall Name>'}</p>
                                  </div>
                                  <div className="txt-bx space-y-1">
                                  <h2 className='font-semibold text-lg'>Contact Number</h2>
                                    <p className='text-base'>{'<Contact Number of Customer>'}</p>
                                  </div>
                                  <div className="txt-bx space-y-1">
                                  <h2 className='font-semibold text-lg'>Booking Name</h2>
                                    <p className='text-base'>{'<Booking Name>'}</p>
                                  </div>
                                  <div className="txt-bx space-y-1">
                                  <h2 className='font-semibold text-lg'>Selected Event Slot</h2>
                                    <p className='text-base'>{'Timming Slot Evening / Morning'}</p>
                                    
                                  </div>
                                  <div className="txt-bx space-y-1">
                                  <h2 className='font-semibold text-lg'>Selected Event Date</h2>
                                    
                                    <p className='text-base'>{'Date When You Booking'}</p>
                                  </div>
                                  
                                </div>
                                </div>
                                {/* <CheckCircleOutlined style={{ fontSize: "10rem", color: "var(--mainColor)" }} />
                                <h1 className='text-4xl'>Booking Request Received 4</h1>
                                <p className='text-2xl text-center'>Your Request Send to the Vendor he will Contact you as soon as possible</p> */}
                                {/* <Link href={'/'}>

                                    <Button type="primary" style={{ width: "120px", height: "fit-content", paddingBlock: "5px" }}>Home</Button>
                                </Link> */}
                            </div>

                            <div className="w-11/12 flex justify-end gap-4 items-center mt-8">
                                <Button className='border-mainColor' style={{ borderColor: "#d5af80", color: 'var(--mainColor)', width: "120px", height: "fit-content", paddingBlock: "5px" }} onClick={() => {
                                    setsthirdToggle(false), setsfourToggle(true)
                                }}>Back</Button>
                                <Button type="primary" style={{ width: "120px", height: "fit-content", paddingBlock: "5px" }} onClick={() => {
                                    setsfourToggle(true), setsfiveToggle(false);
                                }}>Next</Button>

                            </div>


                        </div>
                        <div className={`absolute top-10 flex flex-col w-5/6  ${fiveToggle && "hidden"}`}>
                            <div className="w-full flex justify-between flex-col gap-10 mt-5 items-center">
                                <CheckCircleOutlined style={{ fontSize: "10rem", color: "var(--mainColor)" }} />
                                <h1 className='text-4xl'>Booking Request Received</h1>
                                <p className='text-2xl text-center'>Your Request Send to the Vendor he will Contact you as soon as possible</p>
                                <Link href={'/'}>

                                    <Button type="primary" style={{ width: "120px", height: "fit-content", paddingBlock: "5px" }}>Home</Button>
                                </Link>
                            </div>

                            


                        </div>
                    </div>
                </div>
            </div>

        </ConfigProvider >
    )
}

export default BookingSection