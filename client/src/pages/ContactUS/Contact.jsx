import {Button } from "@nextui-org/react";

export default function Contact() {
  return (
    <>
     <section className="min-h-80 place-content-center m-auto">
      <h2 className="text-center text-2xl text-sky-600 font-bold ">Contact</h2>

      <form className="grid gap-4 place-content-center" action="" method="post">
        <div className="input_box">
        <label>Email</label><br/>
        <input type="text" name="Email" id="Name" placeholder="example@email.com" />
        </div>
        <div className="input_box">
        <label>Massage</label><br/>
        <input type="text" name="Email" id="Name" placeholder="Type your massage here..." />
        </div>
        <Button className="p-4 text-xl rounded-xl" color="primary" to="#" variant="flat">
            Send
          </Button>
      </form>

     </section>
    </>
  );
}
