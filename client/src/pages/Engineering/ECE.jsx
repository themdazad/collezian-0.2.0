
import { Content } from "./Content"
import { useState } from "react"

const ECEngineering = () => {
  
  const [data, setData] = useState({
    title:"Electronics & Communication Engineering",
    description:"Explore EC Engineering: lectures, notes, and practice questions for a comprehensive understanding of key concepts.",      
  },)

  return (
    <>
        <Content title={data.title} description = {data.description}/>
    </>
  )
  
}

export default ECEngineering