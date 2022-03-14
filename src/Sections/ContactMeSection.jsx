import React from "react";
import { FiMail } from "react-icons/fi";
import ContactDetailsCard from "../Components/ContactDetailsCard";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  INSTAGRAM_URL,
  EMAIL_URL,
  LINKEDIN_URL,
  LOCATION_URL,
} from "../Constants";
import Loader from "../Components/Loader";
import FormFieldError from "../Components/FormFieldError";

const detailsCards = [
  {
    name: "Email",
    value: "batrakawaljeetsingh@gmail.com",
    icon: <FiMail className="text-2xl text-white" />,
    url: EMAIL_URL,
  },
  {
    name: "LinkedIn",
    value: "@kawaljeetsinghbatra",
    icon: <FaLinkedinIn className="text-2xl text-white" />,
    url: LINKEDIN_URL,
  },
  {
    name: "Instagram",
    value: "@kawaljeet_sb",
    icon: <AiFillInstagram className="text-2xl text-white" />,
    url: INSTAGRAM_URL,
  },
  {
    name: "Location",
    value: "Ghaziabad, U.P India",
    icon: <ImLocation className="text-2xl text-white" />,
    url: LOCATION_URL,
  },
];

const ContactMeSection = ({ reference }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const sendMessage = async (data) => {
    try {
      const res = await addDoc(collection(db, "portfolio_responses"), data);
      if (res) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        reset();
        setIsSubmitting(false);
      }
    } catch (err) {
      console.log(err);
      toast.error("Error occurred. Please try again.");
    }
  };

  const onSubmit = (data) => {
    setIsSubmitting(true);
    let currentDate = new Date();
    currentDate.toLocaleDateString();
    data["date"] = currentDate;
    sendMessage(data);
  };

  React.useEffect(() => {
    if (!isSubmitting) document.body.style.overflow = "unset";
  }, [isSubmitting]);
  return (
    <div
      className="flex items-center justify-center flex-col px-6 md:px-44 pt-24 pb-36 bg-darkGrey w-full"
      ref={reference}
    >
      <h3 className="text-white font-bold text-3xl text-center md:text-5xl ">
        Contact Me
      </h3>
      <p className="text-lightGreen font-medium mt-2 text-center">
        Just leave a message and I'll Connect with you
      </p>
      <div className="mt-12 md:mt-24 flex md:flex-row flex-col-reverse items-start w-full px-6 md:px-20 h-full">
        <div className="w-full md:w-6/12 md:mt-0 mt-12 flex flex-col items-start justify-start h-full">
          {detailsCards.map((item, index) => (
            <ContactDetailsCard
              name={item.name}
              value={item.value}
              icon={item.icon}
              url={item.url}
              key={index}
            />
          ))}
        </div>
        <ToastContainer
          hideProgressBar
          autoClose={3000}
          bodyClassName="text-darkGrey font-bold text-sm"
        />
        {isSubmitting && <Loader />}
        <form
          className="w-full md:w-6/12 h-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="text-gray-200 font-medium">Name</p>
          <input
            type="text"
            {...register("name", {
              required: "Name cannot be empty.",
            })}
            className="mt-1 bg-slateGrey bg-opacity-100 rounded-md p-3 w-full text-gray-400"
          />
          <FormFieldError errors={errors} fieldname="name" />
          <p className="text-gray-200 font-medium mt-8">Email</p>
          <input
            type="email"
            {...register("email", {
              required: "Email cannot be empty.",
            })}
            className="mt-1 bg-slateGrey bg-opacity-100 rounded-md p-3 w-full text-gray-400"
          />
          <FormFieldError errors={errors} fieldname="email" />
          <p className="text-gray-200 font-medium mt-8">Message</p>
          <textarea
            {...register("message", {
              required: "Message cannot be empty.",
            })}
            className="mt-1 bg-slateGrey bg-opacity-100 rounded-md p-3 w-full text-gray-400 "
            rows={6}
          ></textarea>
          <FormFieldError errors={errors} fieldname="message" />
          <button
            type="submit"
            className="text-slateGrey bg-lightGreen px-8 py-2.5 rounded-md font-bold mt-4 hover:bg-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMeSection;
