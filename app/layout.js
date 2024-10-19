import "@/app/_styles/globals.css";
import { Montserrat } from "next/font/google";
import NavBar from "./_components/NavBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s  |  DispensEasy",
    default: "Welcome  |  DispensEasy",
  },
  description:
    "Pharmacy dispensing system for use in the hospital and community pharmacy settings.",
};
import SideNavBar from "./_components/SideNavBar";

function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="  no-scrollbar overflow-x-hidden overflow-y-scroll"
    >
      <body className={`${montserrat.className} cursor-pointer`}>
        <div className="grid gap-10  sm:grid-cols-[200px_1fr] w-full h-full ">
          <NavBar />
          <SideNavBar />
          <main className="mt-0 sm:mt-14 w-full px-10 sm:p-10  ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
