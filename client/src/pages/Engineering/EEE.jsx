
import { Content } from "./Content"
import { useState } from "react"

const ElectricalElectronicsEngineering = () => {
  
  const [data, setData] = useState({
    title:"Electrical and Electronics Engineering",
    description:"Explore EE Engineering: lectures, notes, and practice questions for a comprehensive understanding of key concepts.",      
  },)

  return (
    <>
        <Content title={data.title} description = {data.description}/>
    </>
  )
  
}

export default ElectricalElectronicsEngineering