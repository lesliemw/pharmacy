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

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} `}>
        <NavBar />
      </body>
    </html>
  );
}

export default RootLayout;
