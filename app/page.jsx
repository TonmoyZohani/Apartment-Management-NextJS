import Hero from "../components/Hero";
import InfoBoxes from "../components/InfoBoxes";
import Footer from "../components/Footer";
import HomeProperties from "../components/HomeProperties";
import connectDB from "../config/database";

export default function HomePage() {
  // console.log(process.env.MONGODB_URI);

  connectDB();

  return (
    <div>
      <Hero />
      <InfoBoxes />
      {/* <HomeProperties /> */}
      <Footer />
    </div>
  );
}
