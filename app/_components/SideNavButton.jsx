import Link from "next/link";

function SideNavButton({ children, href }) {
  return (
    <Link
      href={href}
      className="flex items-center w-full my-2 place-items-center p-3 leading-tight transition-all rounded-lg outline-none text-xl text-start hover:bg-indigo-600  hover:text-indigo-50 focus:bg-indigo-600 focus:text-indigo-50 active:bg-indigo-600  active:text-indigo-50"
    >
      {children}
    </Link>
  );
}

export default SideNavButton;
