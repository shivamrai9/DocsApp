import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null)
    const data = [
        {desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", 
        filesize: ".9Mb",
        close: true,
        tag: {
            isOpen: true,
            tagTitle: "download Now",
            tagcolor:"green"
        }
    },
        {desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", 
        filesize: ".9Mb",
        close: true,
        tag: {
            isOpen: true,
            tagTitle: "download later",
            tagcolor:"green"
        }
    },
        {desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", 
        filesize: ".9Mb",
        close: true,
        tag: {
            isOpen: true,
            tagTitle: "download later",
            tagcolor:"blue"
        }
    },
        {desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", 
        filesize: ".9Mb",
        close: true,
        tag: {
            isOpen: true,
            tagTitle: "download later",
            tagcolor:"green"
        }
    },
    ]
  return (
    <div ref={ref} className='fixed z-[3] w-full h-full top-0 left-0 flex flex-wrap gap-5'>
        {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
        ))}
      </div>
  )
}

export default Foreground
