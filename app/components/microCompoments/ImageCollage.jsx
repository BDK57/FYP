import React from 'react'
import { Image } from 'antd';
const data =[
  {imgSrc:"https://shadiyana-vendor-images.s3.ap-south-1.amazonaws.com/venues/lahore/Defenceorchards/324558511_848985733062799_8338023955667721565_n.jpg"},
  {imgSrc:"https://shadiyana-vendor-images.s3.ap-south-1.amazonaws.com/venues/lahore/Defenceorchards/324715508_3506686172940594_5336883706125667624_n.jpg"},

  {imgSrc:"https://shadiyana-vendor-images.s3.ap-south-1.amazonaws.com/venues/lahore/Defenceorchards/324672855_1208630209744019_5765899198733941783_n.jpg"},
  {imgSrc:"https://shadiyana-vendor-images.s3.ap-south-1.amazonaws.com/venues/twin-cities/White-Rose/4.webp"},
  {imgSrc:"https://shadiyana-vendor-images.s3.ap-south-1.amazonaws.com/venues/twin-cities/White-Rose/5.webp"},
  {imgSrc:"https://shadiyana-vendor-images.s3.ap-south-1.amazonaws.com/venues/twin-cities/White-Rose/3.webp"},
  {imgSrc:"https://shadiyana-vendor-images.s3.ap-south-1.amazonaws.com/venues/lahore/Defenceorchards/324672855_1208630209744019_5765899198733941783_n.jpg"},

  {imgSrc:"https://shadiyana-vendor-images.s3.ap-south-1.amazonaws.com/venues/twin-cities/White-Rose/3.webp"},
  
  {imgSrc:"https://shadiyana-vendor-images.s3.ap-south-1.amazonaws.com/venues/lahore/Defenceorchards/324672855"}
]
const ImageCollage = () => {
  
  return (
    <Image.PreviewGroup>
    <div className='flex flex-col justify-center items-center p-2  bg-[#f5f5f5f5] rounded-md border border-[#a9a9a9] box-border cursor-pointer' >
   <div className='overflow-hidden imageViewPortionOne w-full'>
   <Image
   style={{height:"320px",objectFit:"cover",width:"100%"}}
      src={data[0].imgSrc}
      preview={

 false
       
      }
    />
 
   </div>

   <div className='h-36  flex md:justify-between  gap-1'>
 {data.map((e,i)=>{
 if(i<=6){
  return(
  i==6 ? <Image key={Math.random()*i+"ImageCollage"}
  style={{height:"100%"}}
 className='h-full w-full object-cover overflow-hidden customPreveiwImage'
 src={e.imgSrc}
 preview={{
  maskClassName:"customMask",
  visible: true,
  mask: `+${data.length-6}`,
}}
/> : i>0 ?
<Image key={Math.random()*i+"ImageCollage"}
  style={{height:"100%"}}
 className='h-full w-full object-cover overflow-hidden'
 src={e.imgSrc}

/>:""
  
  
  )
}
 })}
    
    
   </div>
  </div>
  </Image.PreviewGroup>
  )
}

export default ImageCollage