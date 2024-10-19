import { FaBaby, FaNotesMedical } from "react-icons/fa";
import { MdOutlineSick } from "react-icons/md";
import { BsBandaid } from "react-icons/bs";
import { FaBedPulse, FaHandsHoldingChild } from "react-icons/fa6";
import { LiaBoneSolid } from "react-icons/lia";
import { GiScalpel } from "react-icons/gi";
import { RiPsychotherapyFill } from "react-icons/ri";

export const wards = [
  { name: "Critical Care Unit", src: <MdOutlineSick size={60} /> },
  { name: "Emergency Department", src: <BsBandaid size={60} /> },
  { name: "Maternity", src: <FaBaby size={60} /> },
  { name: "Medical", src: <FaBedPulse size={60} /> },
  {
    name: "Medical Assessment Unit",
    src: <FaNotesMedical size={60} />,
  },
  { name: "Paediatrics", src: <FaHandsHoldingChild size={60} /> },
  { name: "Psychiatry", src: <RiPsychotherapyFill size={60} /> },
  { name: "Radiology", src: <LiaBoneSolid size={60} /> },
  { name: "Theatre", src: <GiScalpel size={60} /> },
];
