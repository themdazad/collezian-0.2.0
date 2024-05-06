/* eslint-disable no-unused-vars */

import { useState } from "react"
import { Content } from "./Content"


const ElectricalEngineering = () => {

  const [data, setData] = useState({
    title:"Electrical Engineering",
    description:"We aim to be your one-stop destination for all things related to electrical engineering. Here's what you can expect to find on our platform.",      
  },)

  console.log(data.title)
  
  return (
    <>
        <Content title={data.title} description = {data.description}/>
    </>
  )
  
}

export default ElectricalEngineering