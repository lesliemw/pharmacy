import Image from "next/image";

const navigation = ["Ward", "Patient", "New", "Orders", "Reports"];

function NavBar() {
  return (
    <div className="mx-auto w-screen px-2 sm:px-6 lg:px-8 bg-slate-500">
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          <div className="relative">
            <Image
              src="/icon.png"
              fill
              className="object-cover"
              alt="snake and staff pharmacy icon"
            />
          </div>

          {navigation.map((item) => (
            <button className="list-none" key={item}>
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
