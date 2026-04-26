import { AnimatedSection } from "@/components";
import { HappyCustomers, HeroSection, NewArrivals } from "@/modules";
import BrowseByStyle from "@/modules/home/Browsebystyle";

const Home = () => {
  return (
    <>
      <AnimatedSection>
        <HeroSection />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <NewArrivals />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <BrowseByStyle />
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <HappyCustomers />
      </AnimatedSection>
    </>
  );
};

export default Home;
