import MainSection from "@/components/shared/home/MainSection";
import Hero from "../components/shared/home/Hero";
import Navbar from "../components/shared/home/Navbar";
import Section from "@/components/shared/home/Section";
import ActionStateEx from "@/components/ActionStateEx";

function Home() {
  return (
    <div className=" font-inter">
      {/* <Navbar />
      <Hero />
      <MainSection />
      <Section /> */}
      <ActionStateEx />
    </div>
  );
}

export default Home;
