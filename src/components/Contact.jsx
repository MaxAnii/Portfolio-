import React, { useRef } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import emailjs from "@emailjs/browser";
import SocialMedia from "./SocialMedia";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const sendMail = async (e) => {
    e.preventDefault();

    toast("Sending mail");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast("mail send successfully");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      {" "}
      <ToastContainer position="top-right" theme="dark" newestOnTop={false} />;
      <div className="text-center">
        <div className="text-center about md:text-5xl text-3xl">
          Get in touch
        </div>
        <div className="pt-2">Feel free to drop me a line - Contact us</div>
        <div className="text-[#ff5d56] text-7xl mt-[-35px] font-bold">
          . . . .
        </div>
      </div>
      <div className="border-2 border-l-rose-400 border-t-rose-400 md:mx-[10vw] lg:mx-[15vw] mx-4 mt-[9vh] p-6 rounded-3xl">
        <form onSubmit={sendMail} ref={form}>
          <div className="flex   md:gap-10 gap-3">
            <Input
              type="email"
              label="Email"
              labelPlacement="outside"
              isRequired
              placeholder="Enter your email"
              name="user_email"
            />
            <Input
              type="text"
              label="Name"
              labelPlacement="outside"
              isRequired
              placeholder="Enter your name"
              name="user_name"
            />
          </div>
          <div className="pt-[3vh] w-[100%]">
            <Input
              type="text"
              label="Subject"
              labelPlacement="outside"
              isRequired
              placeholder="Enter your subject"
              name="subject"
            />
          </div>
          <div className="pt-[3vh] w-[100%]">
            <Textarea
              type="text"
              isRequired
              label="Description"
              labelPlacement="outside"
              minRows="4"
              placeholder="How can i help you?"
              name="message"
            />
          </div>
          <div className="flex justify-end pt-3">
            <Button
              color="danger"
              variant="bordered"
              className=" text-[#ff5d56] mt-4 p-5"
              type="submit"
            >
              Send
            </Button>
          </div>
        </form>
      </div>
      <div className="md:mx-[10vw] mx-4 mt-[3vh] p-6">
        <SocialMedia></SocialMedia>
      </div>
    </div>
  );
};

export default Contact;
