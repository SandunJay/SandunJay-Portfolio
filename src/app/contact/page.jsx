// "use client";
// import { motion } from "framer-motion";
// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const ContactPage = () => {
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);
//   const text = "Say Hello";

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setError(false);
//     setSuccess(false);

//     emailjs
//       .sendForm(
//         process.env.NEXT_PUBLIC_SERVICE_ID,
//         process.env.NEXT_PUBLIC_TEMPLATE_ID,
//         form.current,
//         process.env.NEXT_PUBLIC_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setSuccess(true);
//           form.current.reset();
//         },
//         () => {
//           setError(true);
//         }
//       );
//   };

//   return (
//     <motion.div
//       className="h-full"
//       initial={{ y: "-200vh" }}
//       animate={{ y: "0%" }}
//       transition={{ duration: 1 }}
//     >
//       <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
//         {/* TEXT CONTAINER */}
//         <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
//           <div>
//             {text.split("").map((letter, index) => (
//               <motion.span
//                 key={index}
//                 initial={{ opacity: 1 }}
//                 animate={{ opacity: 0 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   delay: index * 0.1,
//                 }}
//               >
//                 {letter}
//               </motion.span>
//             ))}

//           </div>
//         </div>
//         {/* FORM CONTAINER */}
//         <form
//           onSubmit={sendEmail}
//           ref={form}
//           className="h-1/2 lg:h-full lg:w-1/2 bg-gray-600 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
//         >
//           <span>Dear Sandun,</span>
//           <textarea
//             rows={6}
//             className="bg-transparent border-b-2 border-b-black outline-none resize-none"
//             name="user_message"
//           />
//           <span>Email:</span>
//           <input
//             name="user_email"
//             type="text"
//             className="bg-transparent border-b-2 border-b-black outline-none"
//           />
//           <span>Regards</span>
//           <button className="bg-gray-500 rounded font-semibold text-gray-900 p-4">
//             Send
//           </button>
//           {success && (
//             <span className="text-green-600 font-semibold">
//               Your message has been sent successfully!
//             </span>
//           )}
//           {error && (
//             <span className="text-red-600 font-semibold">
//               Something went wrong!
//             </span>
//           )}
//         </form>
//       </div>
//     </motion.div>
//   );
// };

// export default ContactPage;

"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        "service_xw480wm",
        "template_9vwboxi",
        form.current,
        "Q0klrOqp4rurQbEBQ"
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-4xl md:text-5xl lg:text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-gray-600 rounded-xl text-lg md:text-xl flex flex-col gap-6 lg:gap-8 justify-center p-6 lg:p-12"
        >
          <span>Dear Sandun,</span>
          <textarea
            rows={8} // Increase the number of rows for user_message
            className="bg-transparent border-b-2 border-b-black outline-none"
            name="user_message"
          />
          <span>Email:</span>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none"
            style={{ height: "20px" }} // Decrease the height of user_email input
          />
          <span>Regards</span>
          <button className="bg-gray-500 rounded font-semibold text-gray-900 p-3 lg:p-4">
            Send
          </button>
          <div className="items-center justify-center">
            {success && (
              <span className="text-black-600 font-semibold">
                Your message has been sent successfully!
              </span>
            )}
            {error && (
              <span className="text-red-600 font-semibold">
                Something went wrong!
              </span>
            )}
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
