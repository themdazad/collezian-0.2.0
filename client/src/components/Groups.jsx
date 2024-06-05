 import { Image } from "@nextui-org/react"
import { MdGroupAdd } from "react-icons/md"

const Groups = () => {
  return (
    <>
    <section className="my-16">
      <header className="flex flex-col items-center text-lg" >      
      <Image src="/gif/people.gif" height={50} width={50}/>
      Recommended Groups
      </header>
      <div className="groups flex justify-center my-8 gap-8">
        
      <Image src="/Groups_Image/collezian_dsa.jpg" height={100} width={100}/>
      <Image src="/Groups_Image/bcece_le_quiz.png" height={100} width={100}/>
      <Image src="/Groups_Image/off_campus_placements.jpg" height={100} width={100}/>
      </div>
    </section>
    </>
  )
}

export default Groups