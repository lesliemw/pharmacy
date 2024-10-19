import SideNavButton from "./SideNavButton";
import { lowerNavData, navData } from "../lib/sideNavData";

function SideNavBar() {
  return (
    <div className="fixed sm:grid hidden flex-2 h-screen w-[15rem] flex-col rounded-xl bg-indigo-50 bg-clip-border p-4  text-gray-700 shadow-xl ">
      <div className="mt-16 p-4 absolute">
        {navData.map((data, i) => (
          <SideNavButton key={i} href={data.href}>
            {data.icon}
            <span className="mx-10">{data.text}</span>
          </SideNavButton>
        ))}
      </div>
      <div className="absolute p-4 bottom-6">
        <hr className="my-3 w-full border-gray-300" />
        {lowerNavData.map((data, i) => (
          <SideNavButton key={i} href={data.href}>
            {data.icon}
            <span className="mx-10">{data.text}</span>
          </SideNavButton>
        ))}
      </div>
    </div>
  );
}

export default SideNavBar;
