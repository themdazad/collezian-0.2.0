
import { Content } from "./Content"
import { useState } from "react"

const MechanicalEngineering = () => {  
  const [data, setData] = useState({
    title:"Mechanical Engineering",
    description:"Explore Mechanical Engineering: lectures, notes, and practice questions for a comprehensive understanding of key concepts.",      
  },)

  return (
    <>
        <Content title={data.title} description = {data.description}/>
    </>
  )
  
}

export default MechanicalEngineering ;