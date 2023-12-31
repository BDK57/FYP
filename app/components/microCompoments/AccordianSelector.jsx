import React from 'react'

const AccordianSelector = ({accodrianTitle,list_item_title,list}) => {
  return (
   <>
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
   </>
  )
}

export default AccordianSelector