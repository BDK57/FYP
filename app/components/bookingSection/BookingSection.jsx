'use client'
import React, { useState } from 'react'
import { ConfigProvider } from "antd";

import theme from "@/theme/themeConfig";
import Image from 'next/image';
import { InfoCircleOutlined, UserOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Input, Tooltip, TimePicker, Space } from 'antd';
import Icon_deatil from '../microCompoments/Icon_deatil'
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

// import AccordianWithSelectOption from '../microCompoments/AccordianWithSelectOption'
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
    const [sixToggle, setssixToggle] = useState(true);


    
const [accordianValue, setaccordianValue] = useState(1);
const handleAccordian = (e) => {
  console.log('radio checked', e.target.value);
  setaccordianValue(e.target.value);
};
    return (

        <ConfigProvider theme={theme}>
            {console.log(firstToggle, secondToggle, thirdToggle, fourToggle)}
            {console.log(accordianValue)}
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
                            height: "auto",
                            // opacity:"0"
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
                            <div className="w-full flex justify-normal flex-col gap-10 mt-5 items-center" style={{ overflowY: "scroll", height: "36vw" }}>
                               
                                <div className="w-full flex flex-col items-start justify-between gap-4">
                                    <h3 className='text-start font-semibold text-lg'>Package</h3>
                                    
                                   <div className="w-full"> <Radio.Group defaultValue="a" size="large" onChange={handleAccordian} value={accordianValue} style={{width:"100%"}}>
                                    <details className="mt-5 group  bg-gray-50 rounded-2xl w-full" open>
                                        <summary className="rounded-xl flex justify-between items-center font-medium cursor-pointer list-none  bg-[#f1f1f1] py-5 px-5">
                                        <Radio value={1}>A
                                    </Radio>
                                            <span className="text-paraColor text-lg font-normal leading-6">
                                                Multi Dish Menu 1
                                            </span>
                                            <div className="flex gap-4">
                                                <span className="text-mainColor text-lg font-semibold leading-6">
                                                    PKR 2,700
                                                </span>
                                                <span className="transition group-open:rotate-180">
                                                    <svg
                                                        fill="none"
                                                        height={24}
                                                        shapeRendering="geometricPrecision"
                                                        stroke="#d5af80"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="3.5"
                                                        viewBox="0 0 24 24"
                                                        width={24}
                                                    >
                                                        <path d="M6 9l6 6 6-6" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </summary>
                                        <div className="text-neutral-600 mt-3 group-open:animate-fadeIn"></div>

                                        <div className="acc-deatils px-5 text-neutral-600 mt-3 group-open:animate-fadeIn">
                                            <div className="flex w-3/4 justify-between">
                                                <Icon_deatil
                                                    srcIcon="assets/icons/amenities-logo.svg"
                                                    alt="Icons"
                                                    title="desserts"
                                                    para="Sweet (2 Types from selection)"
                                                >
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 17 19"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.4976 14.636C11.1775 15.4446 11.8103 16.1969 12.4424 16.9498C12.5031 17.0222 12.5667 17.0938 12.6162 17.1734C12.8577 17.5615 12.6459 17.9719 12.1855 18.0111C12.119 18.0167 12.0515 18.0135 11.9845 18.0135C9.80059 18.0136 7.61671 18.0123 5.43283 18.0151C5.16252 18.0155 4.91209 17.9968 4.77778 17.7178C4.6375 17.4265 4.75578 17.2 4.94748 16.9762C5.53225 16.2936 6.10899 15.6045 6.6882 14.9174C6.75276 14.8408 6.81314 14.7608 6.91237 14.6359C6.55573 14.6359 6.25353 14.6302 5.95162 14.6369C3.75269 14.6854 1.26209 13.2503 0.763256 10.3188C0.725522 10.0971 0.697429 9.87336 0.674905 9.6496C0.639941 9.30227 0.85956 9.05201 1.21714 9.0243C1.29332 9.0184 1.37032 9.0222 1.44694 9.0222C6.28405 9.02214 11.1212 9.0221 15.9583 9.0222C16.6056 9.02221 16.7836 9.21288 16.7213 9.83835C16.4767 12.2934 14.9275 14.0243 12.4956 14.5454C12.227 14.603 11.947 14.6216 11.6712 14.6324C11.3015 14.6468 10.9308 14.636 10.4976 14.636ZM1.89373 10.148C1.90159 10.229 1.90168 10.2948 1.91501 10.3579C2.30025 12.1822 3.89007 13.4974 5.79213 13.5188C7.73632 13.5407 9.68099 13.5299 11.6254 13.5202C12.2955 13.5168 12.9346 13.3535 13.5174 13.0221C14.6451 12.3807 15.3063 11.422 15.5377 10.148H1.89373ZM6.47509 16.8852H10.9232C10.1687 16.0053 9.44111 15.1567 8.69673 14.2886C7.96054 15.1491 7.23658 15.9952 6.47509 16.8852Z"
                                                            fill="#dfaf80"
                                                        />
                                                        <path
                                                            d="M16.7429 7.8679H15.6171C15.5697 6.74327 15.1231 5.81572 14.1879 5.14432C13.5557 4.69049 12.8369 4.48568 12.0588 4.50948C11.1306 4.53787 10.328 4.87053 9.67269 5.52551C9.02416 6.17366 8.73862 6.97083 8.69175 7.8674H7.58002C7.62267 6.31945 8.21999 5.05878 9.52703 4.20072C11.0727 3.18597 12.7309 3.10496 14.3702 3.95406C15.9346 4.76437 16.6589 6.1214 16.7429 7.8679Z"
                                                            fill="#dfaf80"
                                                        />
                                                        <path
                                                            d="M1.79445 7.86375H0.677368C0.746454 6.14257 1.47883 4.82662 2.99819 3.96706C4.44496 3.14858 6.5247 3.23883 7.7996 4.16144C7.58757 4.44648 7.37532 4.73183 7.14972 5.03512C6.00892 4.36248 4.81668 4.3008 3.63651 4.90232C2.44 5.51216 1.86814 6.54155 1.79445 7.86375Z"
                                                            fill="#dfaf80"
                                                        />
                                                        <path
                                                            d="M12.6118 2.23151C12.2146 2.25593 11.8341 2.28643 11.453 2.29695C11.3734 2.29915 11.27 2.247 11.214 2.18716C9.89581 0.777523 7.51868 0.774308 6.19797 2.18877C6.14224 2.24845 6.03794 2.29896 5.95793 2.29671C5.57712 2.28602 5.19689 2.25558 4.81946 2.23235C5.12076 1.22274 6.91701 0.115768 8.42245 0.0227256C10.1217 -0.0822962 12.0191 0.915353 12.6118 2.23151Z"
                                                            fill="#dfaf80"
                                                        />
                                                    </svg>
                                                </Icon_deatil>
                                                <Icon_deatil
                                                    srcIcon="assets/icons/amenities-logo.svg"
                                                    alt="Icons"
                                                    title="drinks"
                                                    para=""
                                                    list={["Cold Drink", "Mineral Water"]}
                                                >
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 9 15"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M7.11328 13.4526C7.46875 13.4526 7.76953 13.7534 7.76953 14.1089C7.76953 14.4917 7.46875 14.7651 7.11328 14.7651H2.30078C1.91797 14.7651 1.64453 14.4917 1.64453 14.1089C1.64453 13.7534 1.91797 13.4526 2.30078 13.4526H4.05078V10.3354C2.27344 10.0073 0.988281 8.39404 1.23438 6.58936L1.97266 1.53076C2.02734 1.09326 2.38281 0.765137 2.82031 0.765137H6.56641C7.00391 0.765137 7.35938 1.09326 7.41406 1.53076L8.15234 6.58936C8.39844 8.39404 7.11328 10.0073 5.36328 10.3354V13.4526H7.11328ZM6.18359 2.07764H3.20312L2.875 4.26514H6.51172L6.18359 2.07764ZM2.51953 6.78076C2.41016 7.62842 3.12109 9.07764 4.70703 9.07764C6.29297 9.07764 6.97656 7.62842 6.86719 6.75342L6.70312 5.57764H2.68359L2.51953 6.78076Z"
                                                            fill="#dfaf80"
                                                        />
                                                    </svg>
                                                </Icon_deatil>
                                            </div>

                                            <div className="mt-5">
                                                <Icon_deatil
                                                    srcIcon="assets/icons/amenities-logo.svg"
                                                    alt="Icons"
                                                    title="main course"
                                                    para=""
                                                    list={[
                                                        "Chicken Qorma",
                                                        "Chicken Green Masala",
                                                        "White Shahi Qorma",
                                                        "Chicken Biryani/Chicken Pulao",
                                                        "Chicken Hyderabadi Biryani",
                                                        "Chicken Boti",
                                                        "Chicken Malai Boti",
                                                        "Chicken Green Boti",
                                                        "Chicken Seekh Kabab",
                                                        "Chicken Reshmi Kabab",
                                                        "Beef Gola Kabab",
                                                        "Variety of Naan",
                                                        "Variety of Salad",
                                                        "Variety of Sauce",
                                                    ]}
                                                >
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 14 15"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M11.8945 0.593262C12.5781 0.593262 13.125 1.16748 13.125 1.87842V13.937C13.125 14.3198 12.8242 14.5933 12.4688 14.5933C12.0859 14.5933 11.8125 14.3198 11.8125 13.937V1.93311C11.4297 2.04248 10.5273 2.58936 9.98047 3.68311C9.46094 4.72217 9.1875 6.39014 10.8008 8.52295C11.0195 8.82373 10.9648 9.23389 10.6641 9.45264C10.3633 9.67139 9.95312 9.58936 9.73438 9.31592C7.62891 6.49951 8.25781 4.20264 8.80469 3.08154C9.59766 1.55029 10.9922 0.593262 11.8945 0.593262ZM3.0625 4.96826C2.67969 4.96826 2.40625 4.69482 2.40625 4.31201V1.24951C2.40625 0.894043 2.67969 0.593262 3.0625 0.593262C3.41797 0.593262 3.71875 0.894043 3.71875 1.24951V4.31201C3.71875 4.69482 3.41797 4.96826 3.0625 4.96826ZM4.8125 4.96826C4.42969 4.96826 4.15625 4.69482 4.15625 4.31201V1.24951C4.15625 0.894043 4.42969 0.593262 4.8125 0.593262C5.16797 0.593262 5.46875 0.894043 5.46875 1.24951V4.31201C5.46875 4.69482 5.16797 4.96826 4.8125 4.96826ZM6.78125 0.593262C7.13672 0.593262 7.4375 0.894043 7.4375 1.24951V5.18701C7.4375 6.36279 6.58984 7.34717 5.46875 7.56592L5.66016 13.4722C5.66016 13.7729 5.55078 14.0737 5.35938 14.2651C5.14062 14.4839 4.86719 14.5933 4.56641 14.5933H3.28125C2.98047 14.5933 2.70703 14.4839 2.48828 14.2651C2.29688 14.0737 2.1875 13.7729 2.1875 13.4722L2.37891 7.56592C1.25781 7.34717 0.4375 6.36279 0.4375 5.18701V1.24951C0.4375 0.894043 0.710938 0.593262 1.09375 0.593262C1.44922 0.593262 1.75 0.894043 1.75 1.24951V5.18701C1.75 5.81592 2.21484 6.28076 2.84375 6.28076H3.03516C3.22656 6.28076 3.39062 6.36279 3.5 6.49951C3.63672 6.60889 3.69141 6.80029 3.69141 6.96436L3.5 13.2808H4.34766L4.15625 6.96436C4.15625 6.80029 4.21094 6.60889 4.34766 6.49951C4.45703 6.36279 4.62109 6.28076 4.8125 6.28076H5.03125C5.63281 6.28076 6.125 5.81592 6.125 5.18701V1.24951C6.125 0.894043 6.39844 0.593262 6.78125 0.593262Z"
                                                            fill="#dfaf80"
                                                        />
                                                    </svg>
                                                </Icon_deatil>
                                            </div>
                                        </div>
                                    </details>
                                    <details className="mt-5 group  bg-gray-50 rounded-2xl w-full" open>
                                        <summary className="rounded-xl flex justify-between items-center font-medium cursor-pointer list-none  bg-[#f1f1f1] py-5 px-5">
                                        <Radio value={2}>B
                                    </Radio>
                                            <span className="text-paraColor text-lg font-normal leading-6">
                                                Multi Dish Menu 1
                                            </span>
                                            <div className="flex gap-4">
                                                <span className="text-mainColor text-lg font-semibold leading-6">
                                                    PKR 2,700
                                                </span>
                                                <span className="transition group-open:rotate-180">
                                                    <svg
                                                        fill="none"
                                                        height={24}
                                                        shapeRendering="geometricPrecision"
                                                        stroke="#d5af80"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="3.5"
                                                        viewBox="0 0 24 24"
                                                        width={24}
                                                    >
                                                        <path d="M6 9l6 6 6-6" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </summary>
                                        <div className="text-neutral-600 mt-3 group-open:animate-fadeIn"></div>

                                        <div className="acc-deatils px-5 text-neutral-600 mt-3 group-open:animate-fadeIn">
                                            <div className="flex w-3/4 justify-between">
                                                <Icon_deatil
                                                    srcIcon="assets/icons/amenities-logo.svg"
                                                    alt="Icons"
                                                    title="desserts"
                                                    para="Sweet (2 Types from selection)"
                                                >
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 17 19"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.4976 14.636C11.1775 15.4446 11.8103 16.1969 12.4424 16.9498C12.5031 17.0222 12.5667 17.0938 12.6162 17.1734C12.8577 17.5615 12.6459 17.9719 12.1855 18.0111C12.119 18.0167 12.0515 18.0135 11.9845 18.0135C9.80059 18.0136 7.61671 18.0123 5.43283 18.0151C5.16252 18.0155 4.91209 17.9968 4.77778 17.7178C4.6375 17.4265 4.75578 17.2 4.94748 16.9762C5.53225 16.2936 6.10899 15.6045 6.6882 14.9174C6.75276 14.8408 6.81314 14.7608 6.91237 14.6359C6.55573 14.6359 6.25353 14.6302 5.95162 14.6369C3.75269 14.6854 1.26209 13.2503 0.763256 10.3188C0.725522 10.0971 0.697429 9.87336 0.674905 9.6496C0.639941 9.30227 0.85956 9.05201 1.21714 9.0243C1.29332 9.0184 1.37032 9.0222 1.44694 9.0222C6.28405 9.02214 11.1212 9.0221 15.9583 9.0222C16.6056 9.02221 16.7836 9.21288 16.7213 9.83835C16.4767 12.2934 14.9275 14.0243 12.4956 14.5454C12.227 14.603 11.947 14.6216 11.6712 14.6324C11.3015 14.6468 10.9308 14.636 10.4976 14.636ZM1.89373 10.148C1.90159 10.229 1.90168 10.2948 1.91501 10.3579C2.30025 12.1822 3.89007 13.4974 5.79213 13.5188C7.73632 13.5407 9.68099 13.5299 11.6254 13.5202C12.2955 13.5168 12.9346 13.3535 13.5174 13.0221C14.6451 12.3807 15.3063 11.422 15.5377 10.148H1.89373ZM6.47509 16.8852H10.9232C10.1687 16.0053 9.44111 15.1567 8.69673 14.2886C7.96054 15.1491 7.23658 15.9952 6.47509 16.8852Z"
                                                            fill="#dfaf80"
                                                        />
                                                        <path
                                                            d="M16.7429 7.8679H15.6171C15.5697 6.74327 15.1231 5.81572 14.1879 5.14432C13.5557 4.69049 12.8369 4.48568 12.0588 4.50948C11.1306 4.53787 10.328 4.87053 9.67269 5.52551C9.02416 6.17366 8.73862 6.97083 8.69175 7.8674H7.58002C7.62267 6.31945 8.21999 5.05878 9.52703 4.20072C11.0727 3.18597 12.7309 3.10496 14.3702 3.95406C15.9346 4.76437 16.6589 6.1214 16.7429 7.8679Z"
                                                            fill="#dfaf80"
                                                        />
                                                        <path
                                                            d="M1.79445 7.86375H0.677368C0.746454 6.14257 1.47883 4.82662 2.99819 3.96706C4.44496 3.14858 6.5247 3.23883 7.7996 4.16144C7.58757 4.44648 7.37532 4.73183 7.14972 5.03512C6.00892 4.36248 4.81668 4.3008 3.63651 4.90232C2.44 5.51216 1.86814 6.54155 1.79445 7.86375Z"
                                                            fill="#dfaf80"
                                                        />
                                                        <path
                                                            d="M12.6118 2.23151C12.2146 2.25593 11.8341 2.28643 11.453 2.29695C11.3734 2.29915 11.27 2.247 11.214 2.18716C9.89581 0.777523 7.51868 0.774308 6.19797 2.18877C6.14224 2.24845 6.03794 2.29896 5.95793 2.29671C5.57712 2.28602 5.19689 2.25558 4.81946 2.23235C5.12076 1.22274 6.91701 0.115768 8.42245 0.0227256C10.1217 -0.0822962 12.0191 0.915353 12.6118 2.23151Z"
                                                            fill="#dfaf80"
                                                        />
                                                    </svg>
                                                </Icon_deatil>
                                                <Icon_deatil
                                                    srcIcon="assets/icons/amenities-logo.svg"
                                                    alt="Icons"
                                                    title="drinks"
                                                    para=""
                                                    list={["Cold Drink", "Mineral Water"]}
                                                >
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 9 15"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M7.11328 13.4526C7.46875 13.4526 7.76953 13.7534 7.76953 14.1089C7.76953 14.4917 7.46875 14.7651 7.11328 14.7651H2.30078C1.91797 14.7651 1.64453 14.4917 1.64453 14.1089C1.64453 13.7534 1.91797 13.4526 2.30078 13.4526H4.05078V10.3354C2.27344 10.0073 0.988281 8.39404 1.23438 6.58936L1.97266 1.53076C2.02734 1.09326 2.38281 0.765137 2.82031 0.765137H6.56641C7.00391 0.765137 7.35938 1.09326 7.41406 1.53076L8.15234 6.58936C8.39844 8.39404 7.11328 10.0073 5.36328 10.3354V13.4526H7.11328ZM6.18359 2.07764H3.20312L2.875 4.26514H6.51172L6.18359 2.07764ZM2.51953 6.78076C2.41016 7.62842 3.12109 9.07764 4.70703 9.07764C6.29297 9.07764 6.97656 7.62842 6.86719 6.75342L6.70312 5.57764H2.68359L2.51953 6.78076Z"
                                                            fill="#dfaf80"
                                                        />
                                                    </svg>
                                                </Icon_deatil>
                                            </div>

                                            <div className="mt-5">
                                                <Icon_deatil
                                                    srcIcon="assets/icons/amenities-logo.svg"
                                                    alt="Icons"
                                                    title="main course"
                                                    para=""
                                                    list={[
                                                        "Chicken Qorma",
                                                        "Chicken Green Masala",
                                                        "White Shahi Qorma",
                                                        "Chicken Biryani/Chicken Pulao",
                                                        "Chicken Hyderabadi Biryani",
                                                        "Chicken Boti",
                                                        "Chicken Malai Boti",
                                                        "Chicken Green Boti",
                                                        "Chicken Seekh Kabab",
                                                        "Chicken Reshmi Kabab",
                                                        "Beef Gola Kabab",
                                                        "Variety of Naan",
                                                        "Variety of Salad",
                                                        "Variety of Sauce",
                                                    ]}
                                                >
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 14 15"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M11.8945 0.593262C12.5781 0.593262 13.125 1.16748 13.125 1.87842V13.937C13.125 14.3198 12.8242 14.5933 12.4688 14.5933C12.0859 14.5933 11.8125 14.3198 11.8125 13.937V1.93311C11.4297 2.04248 10.5273 2.58936 9.98047 3.68311C9.46094 4.72217 9.1875 6.39014 10.8008 8.52295C11.0195 8.82373 10.9648 9.23389 10.6641 9.45264C10.3633 9.67139 9.95312 9.58936 9.73438 9.31592C7.62891 6.49951 8.25781 4.20264 8.80469 3.08154C9.59766 1.55029 10.9922 0.593262 11.8945 0.593262ZM3.0625 4.96826C2.67969 4.96826 2.40625 4.69482 2.40625 4.31201V1.24951C2.40625 0.894043 2.67969 0.593262 3.0625 0.593262C3.41797 0.593262 3.71875 0.894043 3.71875 1.24951V4.31201C3.71875 4.69482 3.41797 4.96826 3.0625 4.96826ZM4.8125 4.96826C4.42969 4.96826 4.15625 4.69482 4.15625 4.31201V1.24951C4.15625 0.894043 4.42969 0.593262 4.8125 0.593262C5.16797 0.593262 5.46875 0.894043 5.46875 1.24951V4.31201C5.46875 4.69482 5.16797 4.96826 4.8125 4.96826ZM6.78125 0.593262C7.13672 0.593262 7.4375 0.894043 7.4375 1.24951V5.18701C7.4375 6.36279 6.58984 7.34717 5.46875 7.56592L5.66016 13.4722C5.66016 13.7729 5.55078 14.0737 5.35938 14.2651C5.14062 14.4839 4.86719 14.5933 4.56641 14.5933H3.28125C2.98047 14.5933 2.70703 14.4839 2.48828 14.2651C2.29688 14.0737 2.1875 13.7729 2.1875 13.4722L2.37891 7.56592C1.25781 7.34717 0.4375 6.36279 0.4375 5.18701V1.24951C0.4375 0.894043 0.710938 0.593262 1.09375 0.593262C1.44922 0.593262 1.75 0.894043 1.75 1.24951V5.18701C1.75 5.81592 2.21484 6.28076 2.84375 6.28076H3.03516C3.22656 6.28076 3.39062 6.36279 3.5 6.49951C3.63672 6.60889 3.69141 6.80029 3.69141 6.96436L3.5 13.2808H4.34766L4.15625 6.96436C4.15625 6.80029 4.21094 6.60889 4.34766 6.49951C4.45703 6.36279 4.62109 6.28076 4.8125 6.28076H5.03125C5.63281 6.28076 6.125 5.81592 6.125 5.18701V1.24951C6.125 0.894043 6.39844 0.593262 6.78125 0.593262Z"
                                                            fill="#dfaf80"
                                                        />
                                                    </svg>
                                                </Icon_deatil>
                                            </div>
                                        </div>
                                    </details>
                                 
                                 
</Radio.Group></div>
                                    {/* <AccordianWithSelectOption/> */}
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
                        <div className="w-full flex justify-normal flex-col gap-10 mt-5 items-center" style={{ overflowY: "scroll", height: "36vw" }}>
                                <div className="w-full  grid grid-cols-2 gap-4 border-2 border-dashed border-secColor-800 py-5 px-6 rounded-xl" style={{ boxShadow: "rgba(60, 70, 85, 0.2) 0px 0px 6px 6px inset" }} >
                                    <div className="txt-bx space-y-1">
                                        <h2 className='font-semibold text-lg'>Booked  2 Vendor</h2>
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
                                    <details className="mt-5 group  bg-gray-50 rounded-2xl w-full" open>
                                        <summary className="rounded-xl flex justify-between items-center font-medium cursor-pointer list-none  bg-[#f1f1f1] py-5 px-5">
                                            <span className="text-paraColor text-lg font-normal leading-6">
                                                Multi Dish Menu 1
                                            </span>
                                            <div className="flex gap-4">
                                                <span className="text-mainColor text-lg font-semibold leading-6">
                                                    PKR 2,700
                                                </span>
                                                <span className="transition group-open:rotate-180">
                                                    <svg
                                                        fill="none"
                                                        height={24}
                                                        shapeRendering="geometricPrecision"
                                                        stroke="#d5af80"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="3.5"
                                                        viewBox="0 0 24 24"
                                                        width={24}
                                                    >
                                                        <path d="M6 9l6 6 6-6" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </summary>
                                        <div className="text-neutral-600 mt-3 group-open:animate-fadeIn"></div>

                                        <div className="acc-deatils px-5 text-neutral-600 mt-3 group-open:animate-fadeIn">
                                            <div className="flex w-3/4 justify-between">
                                                <Icon_deatil
                                                    srcIcon="assets/icons/amenities-logo.svg"
                                                    alt="Icons"
                                                    title="desserts"
                                                    para="Sweet (2 Types from selection)"
                                                >
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 17 19"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M10.4976 14.636C11.1775 15.4446 11.8103 16.1969 12.4424 16.9498C12.5031 17.0222 12.5667 17.0938 12.6162 17.1734C12.8577 17.5615 12.6459 17.9719 12.1855 18.0111C12.119 18.0167 12.0515 18.0135 11.9845 18.0135C9.80059 18.0136 7.61671 18.0123 5.43283 18.0151C5.16252 18.0155 4.91209 17.9968 4.77778 17.7178C4.6375 17.4265 4.75578 17.2 4.94748 16.9762C5.53225 16.2936 6.10899 15.6045 6.6882 14.9174C6.75276 14.8408 6.81314 14.7608 6.91237 14.6359C6.55573 14.6359 6.25353 14.6302 5.95162 14.6369C3.75269 14.6854 1.26209 13.2503 0.763256 10.3188C0.725522 10.0971 0.697429 9.87336 0.674905 9.6496C0.639941 9.30227 0.85956 9.05201 1.21714 9.0243C1.29332 9.0184 1.37032 9.0222 1.44694 9.0222C6.28405 9.02214 11.1212 9.0221 15.9583 9.0222C16.6056 9.02221 16.7836 9.21288 16.7213 9.83835C16.4767 12.2934 14.9275 14.0243 12.4956 14.5454C12.227 14.603 11.947 14.6216 11.6712 14.6324C11.3015 14.6468 10.9308 14.636 10.4976 14.636ZM1.89373 10.148C1.90159 10.229 1.90168 10.2948 1.91501 10.3579C2.30025 12.1822 3.89007 13.4974 5.79213 13.5188C7.73632 13.5407 9.68099 13.5299 11.6254 13.5202C12.2955 13.5168 12.9346 13.3535 13.5174 13.0221C14.6451 12.3807 15.3063 11.422 15.5377 10.148H1.89373ZM6.47509 16.8852H10.9232C10.1687 16.0053 9.44111 15.1567 8.69673 14.2886C7.96054 15.1491 7.23658 15.9952 6.47509 16.8852Z"
                                                            fill="#dfaf80"
                                                        />
                                                        <path
                                                            d="M16.7429 7.8679H15.6171C15.5697 6.74327 15.1231 5.81572 14.1879 5.14432C13.5557 4.69049 12.8369 4.48568 12.0588 4.50948C11.1306 4.53787 10.328 4.87053 9.67269 5.52551C9.02416 6.17366 8.73862 6.97083 8.69175 7.8674H7.58002C7.62267 6.31945 8.21999 5.05878 9.52703 4.20072C11.0727 3.18597 12.7309 3.10496 14.3702 3.95406C15.9346 4.76437 16.6589 6.1214 16.7429 7.8679Z"
                                                            fill="#dfaf80"
                                                        />
                                                        <path
                                                            d="M1.79445 7.86375H0.677368C0.746454 6.14257 1.47883 4.82662 2.99819 3.96706C4.44496 3.14858 6.5247 3.23883 7.7996 4.16144C7.58757 4.44648 7.37532 4.73183 7.14972 5.03512C6.00892 4.36248 4.81668 4.3008 3.63651 4.90232C2.44 5.51216 1.86814 6.54155 1.79445 7.86375Z"
                                                            fill="#dfaf80"
                                                        />
                                                        <path
                                                            d="M12.6118 2.23151C12.2146 2.25593 11.8341 2.28643 11.453 2.29695C11.3734 2.29915 11.27 2.247 11.214 2.18716C9.89581 0.777523 7.51868 0.774308 6.19797 2.18877C6.14224 2.24845 6.03794 2.29896 5.95793 2.29671C5.57712 2.28602 5.19689 2.25558 4.81946 2.23235C5.12076 1.22274 6.91701 0.115768 8.42245 0.0227256C10.1217 -0.0822962 12.0191 0.915353 12.6118 2.23151Z"
                                                            fill="#dfaf80"
                                                        />
                                                    </svg>
                                                </Icon_deatil>
                                                <Icon_deatil
                                                    srcIcon="assets/icons/amenities-logo.svg"
                                                    alt="Icons"
                                                    title="drinks"
                                                    para=""
                                                    list={["Cold Drink", "Mineral Water"]}
                                                >
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 9 15"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M7.11328 13.4526C7.46875 13.4526 7.76953 13.7534 7.76953 14.1089C7.76953 14.4917 7.46875 14.7651 7.11328 14.7651H2.30078C1.91797 14.7651 1.64453 14.4917 1.64453 14.1089C1.64453 13.7534 1.91797 13.4526 2.30078 13.4526H4.05078V10.3354C2.27344 10.0073 0.988281 8.39404 1.23438 6.58936L1.97266 1.53076C2.02734 1.09326 2.38281 0.765137 2.82031 0.765137H6.56641C7.00391 0.765137 7.35938 1.09326 7.41406 1.53076L8.15234 6.58936C8.39844 8.39404 7.11328 10.0073 5.36328 10.3354V13.4526H7.11328ZM6.18359 2.07764H3.20312L2.875 4.26514H6.51172L6.18359 2.07764ZM2.51953 6.78076C2.41016 7.62842 3.12109 9.07764 4.70703 9.07764C6.29297 9.07764 6.97656 7.62842 6.86719 6.75342L6.70312 5.57764H2.68359L2.51953 6.78076Z"
                                                            fill="#dfaf80"
                                                        />
                                                    </svg>
                                                </Icon_deatil>
                                            </div>

                                            <div className="mt-5">
                                                <Icon_deatil
                                                    srcIcon="assets/icons/amenities-logo.svg"
                                                    alt="Icons"
                                                    title="main course"
                                                    para=""
                                                    list={[
                                                        "Chicken Qorma",
                                                        "Chicken Green Masala",
                                                        "White Shahi Qorma",
                                                        "Chicken Biryani/Chicken Pulao",
                                                        "Chicken Hyderabadi Biryani",
                                                        "Chicken Boti",
                                                        "Chicken Malai Boti",
                                                        "Chicken Green Boti",
                                                        "Chicken Seekh Kabab",
                                                        "Chicken Reshmi Kabab",
                                                        "Beef Gola Kabab",
                                                        "Variety of Naan",
                                                        "Variety of Salad",
                                                        "Variety of Sauce",
                                                    ]}
                                                >
                                                    <svg
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 14 15"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M11.8945 0.593262C12.5781 0.593262 13.125 1.16748 13.125 1.87842V13.937C13.125 14.3198 12.8242 14.5933 12.4688 14.5933C12.0859 14.5933 11.8125 14.3198 11.8125 13.937V1.93311C11.4297 2.04248 10.5273 2.58936 9.98047 3.68311C9.46094 4.72217 9.1875 6.39014 10.8008 8.52295C11.0195 8.82373 10.9648 9.23389 10.6641 9.45264C10.3633 9.67139 9.95312 9.58936 9.73438 9.31592C7.62891 6.49951 8.25781 4.20264 8.80469 3.08154C9.59766 1.55029 10.9922 0.593262 11.8945 0.593262ZM3.0625 4.96826C2.67969 4.96826 2.40625 4.69482 2.40625 4.31201V1.24951C2.40625 0.894043 2.67969 0.593262 3.0625 0.593262C3.41797 0.593262 3.71875 0.894043 3.71875 1.24951V4.31201C3.71875 4.69482 3.41797 4.96826 3.0625 4.96826ZM4.8125 4.96826C4.42969 4.96826 4.15625 4.69482 4.15625 4.31201V1.24951C4.15625 0.894043 4.42969 0.593262 4.8125 0.593262C5.16797 0.593262 5.46875 0.894043 5.46875 1.24951V4.31201C5.46875 4.69482 5.16797 4.96826 4.8125 4.96826ZM6.78125 0.593262C7.13672 0.593262 7.4375 0.894043 7.4375 1.24951V5.18701C7.4375 6.36279 6.58984 7.34717 5.46875 7.56592L5.66016 13.4722C5.66016 13.7729 5.55078 14.0737 5.35938 14.2651C5.14062 14.4839 4.86719 14.5933 4.56641 14.5933H3.28125C2.98047 14.5933 2.70703 14.4839 2.48828 14.2651C2.29688 14.0737 2.1875 13.7729 2.1875 13.4722L2.37891 7.56592C1.25781 7.34717 0.4375 6.36279 0.4375 5.18701V1.24951C0.4375 0.894043 0.710938 0.593262 1.09375 0.593262C1.44922 0.593262 1.75 0.894043 1.75 1.24951V5.18701C1.75 5.81592 2.21484 6.28076 2.84375 6.28076H3.03516C3.22656 6.28076 3.39062 6.36279 3.5 6.49951C3.63672 6.60889 3.69141 6.80029 3.69141 6.96436L3.5 13.2808H4.34766L4.15625 6.96436C4.15625 6.80029 4.21094 6.60889 4.34766 6.49951C4.45703 6.36279 4.62109 6.28076 4.8125 6.28076H5.03125C5.63281 6.28076 6.125 5.81592 6.125 5.18701V1.24951C6.125 0.894043 6.39844 0.593262 6.78125 0.593262Z"
                                                            fill="#dfaf80"
                                                        />
                                                    </svg>
                                                </Icon_deatil>
                                            </div>
                                        </div>
                                    </details>
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
                                    setsfourToggle(false), setsfiveToggle(true)
                                }}>Back</Button>
                                <Button type="primary" style={{ width: "120px", height: "fit-content", paddingBlock: "5px" }} onClick={() => {
                                    setsfiveToggle(true), setssixToggle(false);
                                }}>Next</Button>

                            </div>



                        </div>

                     
                        <div className={`absolute top-10 flex flex-col w-5/6   ${sixToggle && "hidden"}`}>
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