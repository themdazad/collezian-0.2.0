 import { Image, Link } from "@nextui-org/react"

const Groups = () => {
  return (
    <>
    <section className="my-16">
      <header className="flex flex-col items-center text-lg" >      
      <Image src="/gif/people.gif" height={50} width={50}/>
      Recommended Groups
      </header>
      <div className="groups flex justify-center my-8 gap-8">

      <Image src="/Groups_Image/collezian_dsa.jpg" height={80} width={80}/>
      <Link href="https://t.me/collezian_bcece_le">
      <Image src="/Groups_Image/bcece_le_quiz.png" height={80} width={80}/>
      </Link>
      <Image src="/Groups_Image/off_campus_placements.jpg" height={80} width={80}/>
      </div>
    </section>
    </>
  )
}

export default Groups