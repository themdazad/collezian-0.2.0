
import { Content } from "./Content"
import { useState } from "react"

const ComputerScienceEngineering = () => {
  
  const [data, setData] = useState({
    title:"Computer Science & Engineering",
    description:"Explore Computer Science and  Engineering: lectures, notes, and practice questions for a comprehensive understanding of key concepts.",      
  },)

  return (
    <>
        <Content title={data.title} description = {data.description}/>
    </>
  )
  
}

export default ComputerScienceEngineering