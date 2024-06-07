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
            tagcolor:"yellow"
        }
    },
        {desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", 
        filesize: ".9Mb",
        close: true,
        tag: {
            isOpen: true,
            tagTitle: "download later",
            tagcolor:"purple"
        }
    },
        {desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", 
        filesize: ".9Mb",
        close: true,
        tag: {
            isOpen: true,
            tagTitle: "download later",
            tagcolor:"pink"
        }
    },
        {desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", 
        filesize: ".9Mb",
        close: true,
        tag: {
            isOpen: true,
            tagTitle: "download later",
            tagcolor:"violet"
        }
    },
    ]
  return (
    <div ref={ref} className='fixed z-[3] w-full h-full top-0 left-0 flex flex-wrap gap-5'>
        {data.map((item,index)=>(
        <Card key={item} data={item} reference={ref}/>
        ))}
      </div>
  )
}

export default Foreground
