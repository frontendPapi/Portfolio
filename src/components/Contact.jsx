import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-full bg-[#292929] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/6f03108c-0ca7-4cb4-928d-de8de0a4f0a3"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl text-[#f5f5f5] font-bold inline border-b-4 border-[#ED2939]">
            Contact
          </p>
          <p className="text-[#f5f5f5] text-[1.3rem] pt-4">
            Submit the form below or shoot me on e-mail
          </p>
          <p className="text-[#f5f5f5] text-[1.3rem]" >dejan.mihajlov@hotmail.com</p>
        </div>
        <input
          className="bg-[#787878] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#787878]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#787878] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-[#f5f5f5] border-2 hover:border-[#ED2939] hover:bg-[#ED2939] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Colaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
