import React from 'react'
import Image from "next/image";
const Icon_deatil = ({ srcIcon, alt, title, para }) => {
  return (
    <div className="profile_detail__2X3nM flex items-baseline gap-4">
      <Image src={srcIcon} width={18} height={18}

        alt={alt}></Image>

      <div className="space-y-1">
        <h3 className="text-sm font-bold capitalize">{title}</h3>
        <div className="text-base">{para}</div>
      </div>
    </div>
  )
}

export default Icon_deatil