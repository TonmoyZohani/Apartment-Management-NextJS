import Link from "next/link";
import Hero from "../components/Hero";
import InfoBoxes from "../components/InfoBoxes";
import Footer from "../components/Footer";
import HomeProperties from "../components/HomeProperties";

export default function HomePage() {
  console.log(process.env.MONGODB_URI);

  return (
    <div>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
      <Footer />
    </div>
  );
}
