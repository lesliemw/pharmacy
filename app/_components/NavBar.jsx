import Image from "next/image";

const navigation = ["Ward", "Patient", "New", "Orders", "Reports"];
import icon from "@/app/public/icon.png";

function NavBar() {
  return (
    <div className="mx-auto absolute  top-0 z-10 w-screen px-2 sm:px-6 max-h-max lg:px-8 bg-indigo-600 text-indigo-50 ">
      <div className="hidden sm:ml-6 sm:block ">
        <div className="flex sm:h-16 space-x-4 flex-">
          <div className="relative">
            <Image
              src={icon}
              className="object-cover my-2"
              height={45}
              width={45}
              alt="snake and staff pharmacy icon"
            />
          </div>
          <h1 className="my-auto font-light tracking-widest text-3xl">
            DispensEasy
          </h1>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
