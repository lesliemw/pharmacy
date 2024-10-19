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
import "@/app/_styles/globals.css";
import SideNavBar from "./_components/SideNavBar";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} `}>
        <div className="grid grid-cols-[16rem_1fr] h-full">
          <NavBar />
          <SideNavBar />
          <main className="mt-14 w-full p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
