import { HappyCustomers, HeroSection, NewArrivals } from "@/modules";
import BrowseByStyle from "@/modules/home/Browsebystyle";

const Home = () => {
  return (
    <>
      <HeroSection />
      <NewArrivals />
      <BrowseByStyle />
      <HappyCustomers />
    </>
  );
};

export default Home;
