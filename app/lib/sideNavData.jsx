import {
  FaBedPulse,
  FaPerson,
  FaPowerOff,
  FaUserDoctor,
} from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { GrDocumentText } from "react-icons/gr";

export const navData = [
  { icon: <FaBedPulse />, text: "Wards", href: "/wards" },
  { icon: <FaPerson />, text: "Patients", href: "/" },
  { icon: <GiReceiveMoney />, text: "Orders", href: "/" },
  { icon: <GrDocumentText />, text: "Reports", href: "/" },
];

export const lowerNavData = [
  { icon: <FaUserDoctor />, text: "Profile", href: "/profile" },
  { icon: <FaPowerOff />, text: "Log Out", href: "/" },
];
