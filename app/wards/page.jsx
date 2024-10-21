import WardWidget from "../_components/WardWidget";
import { wards } from "../lib/wardsData";

function page() {
  return (
    <div className="h-screen grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
      {wards.map((ward, i) => (
        <WardWidget href={ward.href} alt={ward.name} src={ward.src} key={i}>
          {ward.name}
        </WardWidget>
      ))}
    </div>
  );
}

export default page;
