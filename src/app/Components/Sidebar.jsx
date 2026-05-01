"use client"
import Link from "next/link";

import {Button} from "@heroui/react"


const Sidebar = ({ book }) => {
   
  return (

<div className="w-75 space-y-3">
      <Link href='/books' >
      <Button fullWidth>
       {book.category}
      </Button>
      </Link>
      
    </div>

  )
}

export default Sidebar
