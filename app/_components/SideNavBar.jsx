import {
  FaBedPulse,
  FaPerson,
  FaPowerOff,
  FaUserDoctor,
} from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { GrDocumentText } from "react-icons/gr";
import SideNavButton from "./SideNavButton";

function SideNavBar() {
  return (
    <div className="relative flex h-screen max-w-[15rem] flex-col rounded-xl bg-indigo-50 bg-clip-border p-4  text-gray-700 shadow-xl ">
      <div className="mt-14 absolute">
        <SideNavButton>
          <FaBedPulse /> <span className="mx-10">Wards</span>
        </SideNavButton>
        <SideNavButton>
          <FaPerson /> <span className="mx-10">Patients</span>
        </SideNavButton>
        <SideNavButton>
          <GiReceiveMoney />
          <span className="mx-10">Orders</span>
        </SideNavButton>
        {/* <div class="grid ml-auto place-items-center justify-self-end">
            <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-full select-none whitespace-nowrap bg-blue-gray-500/20 text-blue-gray-900">
              <span class="">14</span>
            </div>
          </div> */}
        <SideNavButton>
          <GrDocumentText />
          <span className="mx-10">Reports</span>
        </SideNavButton>
      </div>
      <div className="absolute bottom-6">
        <hr className="my-3 w-full border-gray-300" />
        <SideNavButton>
          <FaUserDoctor />
          <span className="mx-10">Profile</span>
        </SideNavButton>
        <SideNavButton>
          <FaPowerOff />
          <span className="mx-10">Log Out</span>
        </SideNavButton>
      </div>
    </div>
  );
}

export default SideNavBar;
