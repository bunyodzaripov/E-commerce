import { HeroSection, Navbar, NewArrivals } from "@/modules";
import BrowseByStyle from "@/modules/home/Browsebystyle";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <NewArrivals />
        <BrowseByStyle />
      </main>
    </>
  );
};

export default Home;
