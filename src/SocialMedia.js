import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineUser,
  AiFillGithub,
} from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { RiContactsBookLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL, EMAIL_URL } from "./Constants";

export const RESPONSIVE_NAVBAR_SOCIAL_ICONS = [
  {
    icon: <AiFillGithub className="text-lightGreen font-medium text-lg"/>,
    url: GITHUB_URL,
  },
  {
    icon: <FaLinkedinIn className="text-lightGreen font-medium text-lg"/>,
    url: LINKEDIN_URL,
  },
  {
    icon: <GoMail className="text-lightGreen font-medium text-lg"/>,
    url: EMAIL_URL,
  },
];

