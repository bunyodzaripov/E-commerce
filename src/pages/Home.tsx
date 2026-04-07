import { HeroSection, Navbar } from "@/modules";
import BrowseByStyle from "@/modules/home/Browsebystyle";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BrowseByStyle />
      </main>
    </>
  );
};

export default Home;
