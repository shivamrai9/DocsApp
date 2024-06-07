import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineCloudDownload } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data , reference}) {

   // Extract color and title from the data
   const { tagcolor, tagTitle } = data.tag;


  const dynamicStyle = {
    backgroundColor: tagcolor,
  };

  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.2}
    dragTransition={{bounceDamping: 10,bounceStiffness: 100}} className=' relative flex-shrink-0  overflow-hidden w-60 h-72 rounded-[30px] text-white px-5 py-10 bg-zinc-900/90'>
      <FaRegFileAlt />
      <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
      <div className='footer absolute bottom-0  w-full left-0'>
        <div className='flex items-center justify-between mb-3 px-8 py-3'>
          <h5>{data.filesize}</h5>
          <span className='w-6 h-6 bg-zinc-600 rounded-full flex justify-center items-center'>
            {
              data.close ? <IoCloseCircleOutline /> : <MdOutlineCloudDownload size=".8em" color='#fff' />
            }
          </span>
        </div>
        {data.tag.isOpen && (
          <div style={dynamicStyle} className={`tag flex justify-center items-center w-full py-4  `}>
            <h3 className='text-md font-semibold'>{tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Card
