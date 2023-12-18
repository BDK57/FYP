import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import React from "react";
import { Avatar, List, Space } from "antd";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight:"400", subsets: ["latin"] })

const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: "https://ant.design",
  title: `Hassan Banquet Hall ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
}));
//   const IconText = ({ icon, text }) => (
//     <Space>
//       {React.createElement(icon)}
//       {text}
//     </Space>
//   );
console.log(data);
const TablePagination = () => {
  // const [Sponsored, setSponsored] = useState(true)
  return (
    <List
      itemLayout="vertical"
      style={{
        fontFamily:"'__Poppins_8c1529', '__Poppins_Fallback_8c1529' !important"}}
      size="large"
      className="table-menu"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={data}
      // footer={
      //   <div>
      //     <b>ant design</b> footer part
      //   </div>
      // }
      renderItem={(item, index) => {
        console.log(index);
        return index == 1 ? (
          <div className="flex flex-col justify-start px-5 table-menu">
            <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 md:my-5 rounded-xl shadow-lg p-3 max-w-xs md:max-w-5xl mx-auto border border-white bg-white">
              <div className="w-full bg-white grid place-items-center md:w-2/5 max-w-2/5 object-cover overflow-hidden max-h-80 rounded-xl">
                <img
                  src="https://shadiyana-vendor-images.s3.ap-south-1.amazonaws.com/venues/lahore/47/WhatsApp%20Image%202023-07-17%20at%2010.16.49%20AM.webp?auto=format&fit=max&w=3840"
                  alt="tailwind logo"
                  className="rounded-xl"
                />
              </div>
              <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                <div className="flex justify-between item-center">
                  <p className="text-gray-500 font-medium hidden md:block">
                    Banquet
                  </p>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <p className="text-gray-600 font-bold text-sm ml-1">
                      4.96
                      <span className="text-gray-500 font-normal">
                        (76 reviews)
                      </span>
                    </p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-pink-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {/* <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                  Sponsored
                  </div> */}
                </div>
                <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                  {item.title}
                </h3>
                <div className="flex items-center">
                  <Image
                    src={"assets/images/map.svg"}
                    width={18}
                    height={18}
                    alt="map-logo"
                  ></Image>
                  <p className="text-gray-600 font-bold text-sm ml-2">
                    <span className="text-gray-500 font-normal">
                      Street 1, Bahria Town Phase 7 ,
                    </span>
                    Islamabad
                  </p>
                </div>

                {/* <div className="flex items-center justify-between">
   <div className="bg-mainColor px-2 py-2 text-white rounded-lg">31 Dec Available</div>
   <div className="bg-red-300 text-red-700 py-1 px-1 mb-2 rounded-lg">December Dates Discounted</div>
   <div className="font-bold text-secColor py-2 px-2 rounded-lg">December Dates Discounted</div>
</div> */}
                <p className="md:text-lg text-gray-500 text-base">
                  White Rose Marquee, an elegant vintage themed event space and
                  your ideal location for weddings, engagement parties,
                  corporate events, bridal and baby showers, anniversaries,
                  birthday parties and more.
                </p>
                <p className="text-lg font-black text-gray-800">
                  Starting at PKR 2,700
                  <span className="font-normal text-gray-600 text-base">
                    /night
                  </span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-start px-5">
            <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 md:my-5 rounded-xl shadow-lg p-3 max-w-xs md:max-w-5xl mx-auto border border-white bg-white">
              <div className="w-full  bg-white grid place-items-center md:w-2/5 max-w-2/5 object-cover overflow-hidden max-h-80 rounded-xl">
                <img
                  src="https://shadiyana-vendor-images.s3.ap-south-1.amazonaws.com/venues/lahore/47/WhatsApp%20Image%202023-07-17%20at%2010.16.49%20AM.webp?auto=format&fit=max&w=3840"
                  alt="tailwind logo"
                  className="rounded-xl"
                />
              </div>
              <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                <div className="flex justify-between item-center">
                  {/* <div className="flex items-center">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <p className="text-gray-600 font-bold text-sm ml-1">
                    4.96
                    <span className="text-gray-500 font-normal">
                    (76 reviews)
                    </span>
                    </p>
                </div> */}
                  <div className="flex justify-between gap-1 items-center">
                    <p className="text-gray-500 font-medium hidden md:block">
                      Banquet
                    </p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-pink-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                    Sponsored
                  </div>
                </div>
                <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                  {item.title}
                </h3>
                <div className="flex items-center">
                  <Image
                    src={"assets/images/map.svg"}
                    width={18}
                    height={18}
                    alt="map-logo"
                  ></Image>
                  <p className="text-gray-600 font-bold text-sm ml-2">
                    <span className="text-gray-500 font-normal">
                      Street 1, Bahria Town Phase 7 ,
                    </span>
                    Islamabad
                  </p>
                </div>

                <div className="flex items-center justify-start  w-100 flex-wrap">
                  <div className="bg-mainColor px-2 py-2 text-white rounded-lg text-lg">
                    31 Dec Available
                  </div>
                  <div className="bg-red-300 text-red-700 py-1 px-1 mb-1 rounded-lg text-lg md:ml-1">
                    December Dates Discounted
                  </div>
                  <div className="font-bold text-secColor py-2 px-2 rounded-lg text-lg">
                    December Dates Discounted
                  </div>
                </div>
                <p className="md:text-lg text-gray-500 text-base">
                  White Rose Marquee, an elegant vintage themed event space and
                  your ideal location for weddings, engagement parties,
                  corporate events, bridal and baby showers, anniversaries,
                  birthday parties and more.
                </p>
                <p className="text-lg font-black text-gray-800">
                  Starting at PKR 2,700
                  <span className="font-normal text-gray-600 text-base">
                    /night
                  </span>
                </p>
              </div>
            </div>
          </div>
        );

        //     <List.Item
        //     key={item.title}
        //     // actions={[
        //     //   <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
        //     //   <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
        //     //   <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        //     // ]}
        //     extra={
        //       <img
        //         width={272}
        //         alt="logo"
        //         src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        //       />
        //     }
        //   >
        //     <List.Item.Meta
        //       avatar={<Avatar src={item.avatar} />}
        //       title={<a href={item.href}>{item.title}</a>}
        //       description={item.description}
        //     />
        //     {item.content}
        //   </List.Item>
      }}
    />
  );
};

export default TablePagination;
