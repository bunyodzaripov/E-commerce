import { Container, UIButton } from "@/components";
import { Brand1, Brand2, Brand3, Brand4, Brand5, HeroBg } from "@/assets";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export default function HeroSection() {
  const { lang } = useParams<{ lang: string }>();
  const { t, i18n } = useTranslation();
  const isRu = i18n.language === "ru";

  const stats = [
    { value: "200+", label: t("hero.stats.brands") },
    { value: "2,000+", label: t("hero.stats.products") },
    { value: "30,000+", label: t("hero.stats.customers") },
  ];

  return (
    <section className="bg-[#F2F0F1]">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pt-10 gap-6 lg:gap-13.5">
          <div className="flex flex-col gap-4 lg:gap-5">
            <h1
              className={`font-display leading-none tracking-tight text-black uppercase text-[24px] md:text-[36px] lg:text-[64px] ${isRu ? "lg:text-[58px] md:max-w-162.5" : "md:max-w-144.25"} text-balance`}
            >
              {t("hero.title")}
            </h1>

            <p className="text-sm md:max-w-144.25 lg:text-base text-black/60 md:leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="flex justify-center lg:justify-start">
              <UIButton
                to={`/${lang ?? "en"}/products`}
                className="bg-black text-white hover:bg-gray-800 border-none w-full md:w-auto"
              >
                {t("hero.button")}
              </UIButton>
            </div>

            <div className="flex flex-wrap justify-center md:justify-between lg:flex-nowrap lg:justify-start lg:divide-x lg:divide-gray-300 mt-2 lg:mt-10 gap-4 lg:gap-0">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col md:px-4 lg:px-6">
                  <span className="text-2xl lg:text-[40px] font-bold text-black">
                    {stat.value}
                  </span>
                  <span className="text-xs lg:text-base text-black/60 mt-1 whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-full flex justify-center">
            <img
              src={HeroBg}
              alt="Fashion models showcasing clothes"
              className="w-full h-full object-cover object-center"
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
            className="w-auto h-6 md:h-8 object-cover object-center"
          />
          <img
            src={Brand2}
            alt="Brands"
            className="w-auto h-6 md:h-8 object-cover object-center"
          />
          <img
            src={Brand3}
            alt="Brands"
            className="w-auto h-6 md:h-8 object-cover object-center"
          />
          <img
            src={Brand4}
            alt="Brands"
            className="w-auto h-6 md:h-8 object-cover object-center"
          />
          <img
            src={Brand5}
            alt="Brands"
            className="w-auto h-6 md:h-8 object-cover object-center"
          />
        </Container>
      </div>
    </section>
  );
}
