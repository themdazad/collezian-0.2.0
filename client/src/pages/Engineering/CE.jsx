
import { Content } from "./Content"
import { useState } from "react"

const CivilEngineering = () => {
  
  const [data, setData] = useState({
    title:"Civil Engineering",
    description:"Explore Civil engineering: lectures, notes, and practice questions for a comprehensive understanding of key concepts.",      
  },)

  return (
    <>
        <Content title={data.title} description = {data.description}/>
    </>
  )
  
}

export default CivilEngineering