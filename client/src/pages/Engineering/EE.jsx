
import { Content } from "./Content"


const ElectricalEngineering = () => {
  const data = [{
      title:"Electrical Engineering",
      description:"Explore electrical engineering: lectures, notes, and practice questions for a comprehensive understanding of key concepts."
      
      
  },]
  
  return (
    <>
        <Content title={data.title} description = {data.description}/>
    </>
  )
  
}

export default ElectricalEngineering