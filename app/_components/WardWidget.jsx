import Link from "next/link";

function WardWidget({ children, href, src }) {
  return (
    <Link href={href}>
      <div className="h-auto grid grid-row-2 hover:bg-indigo-600 hover:text-indigo-50 p-12 rounded-md w-auto bg-indigo-50">
        <h1 className="text-center text-base md:text-xl">{children}</h1>
        <div className="mt-6 mx-auto">{src}</div>
      </div>
    </Link>
  );
}

export default WardWidget;
