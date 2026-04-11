import { Container, UIButton } from "@/components";
import { Brand1, Brand2, Brand3, Brand4, Brand5, HeroBg } from "@/assets";
const stats = [
  { value: "200+", label: "International Brands" },
  { value: "2,000+", label: "High-Quality Products" },
  { value: "30,000+", label: "Happy Customers" },
];

export default function HeroSection() {
  return (
    <section className="bg-[#F2F0F1]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-10 gap-6 md:gap-13.5">
          <div className="flex flex-col gap-4 md:gap-5">
            <h1 className="text-[36px] md:text-[64px] font-black leading-none tracking-tight text-black uppercase">
              Find Clothes That Matches Your Style
            </h1>

            <p className="text-sm md:text-base text-black/60 leading-relaxed">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <div className="flex justify-center md:justify-start">
              <UIButton className="bg-black text-white hover:bg-gray-800">
                Shop Now
              </UIButton>
            </div>

            <div className="flex flex-wrap justify-center xl:flex-nowrap md:justify-start xl:divide-x xl:divide-gray-300 mt-2 md:mt-10 gap-4 md:gap-0">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col px-4 md:px-6">
                  <span className="text-2xl md:text-[40px] font-bold text-black">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-base text-black/60 mt-1 whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 md:shrink-0 flex justify-center ">
            <img
              src={HeroBg}
              alt="Fashion models showcasing clothes"
              className="w-full h-auto object-cover object-center"
            />
          </div>
        </div>
      </Container>

      {/* Brands section */}
      <div className=" bg-black">
        <Container className="flex flex-wrap gap-4 justify-between py-10 px-4">
          <img
            src={Brand1}
            alt="Brands"
            className="w-auto h-8.25 object-cover object-center"
          />
          <img
            src={Brand2}
            alt="Brands"
            className="w-auto h-8.25 object-cover object-center"
          />
          <img
            src={Brand3}
            alt="Brands"
            className="w-auto h-8.25 object-cover object-center"
          />
          <img
            src={Brand4}
            alt="Brands"
            className="w-auto h-8.25 object-cover object-center"
          />
          <img
            src={Brand5}
            alt="Brands"
            className="w-auto h-8.25 object-cover object-center"
          />
        </Container>
      </div>
    </section>
  );
}
