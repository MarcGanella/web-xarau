import Hero from "./home/Hero";
import Advantages from "./home/Advantages";
import ExamsB from "./home/ExamsB";
import AboutUs from "./home/AboutUs";
import ContactBlock from "./home/ContactBlock";
import "./home/home.css";

export default function Home() {
  return (
    <main className="page">
      <Hero />
      <Advantages />
      <ExamsB />
      <AboutUs />
      <ContactBlock />
    </main>
  );
}
