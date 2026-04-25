import { useTranslation } from "react-i18next";
import {
  Logo,
  Payment1,
  Payment2,
  Payment3,
  Payment4,
  Payment5,
} from "@/assets";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "@/assets/icons";
import { Container } from "@/components";
import { Newsletter } from "@/modules";

export default function Footer() {
  const { t } = useTranslation();

  // Ijtimoiy tarmoqlar
  const socialLinks = [
    { icon: TwitterIcon, href: "https://twitter.com" },
    { icon: FacebookIcon, href: "https://facebook.com" },
    { icon: InstagramIcon, href: "https://instagram.com" },
    { icon: GithubIcon, href: "https://github.com" },
  ];

  // To'lov usullari
  const paymentMethods = [Payment1, Payment2, Payment3, Payment4, Payment5];

  // Footer bo'limlari va linklari (i18n bilan)
  const footerLinks = [
    {
      title: t("footer.sections.company.title"),
      links: [
        { label: t("footer.sections.company.about"), path: "#" },
        { label: t("footer.sections.company.features"), path: "#" },
        { label: t("footer.sections.company.works"), path: "#" },
        { label: t("footer.sections.company.career"), path: "#" },
      ],
    },
    {
      title: t("footer.sections.help.title"),
      links: [
        { label: t("footer.sections.help.support"), path: "#" },
        { label: t("footer.sections.help.delivery"), path: "#" },
        { label: t("footer.sections.help.terms"), path: "#" },
        { label: t("footer.sections.help.privacy"), path: "#" },
      ],
    },
    {
      title: t("footer.sections.faq.title"),
      links: [
        { label: t("footer.sections.faq.account"), path: "#" },
        { label: t("footer.sections.faq.manage"), path: "#" },
        { label: t("footer.sections.faq.orders"), path: "#" },
        { label: t("footer.sections.faq.payments"), path: "#" },
      ],
    },
    {
      title: t("footer.sections.resources.title"),
      links: [
        { label: t("footer.sections.resources.ebooks"), path: "#" },
        { label: t("footer.sections.resources.tutorial"), path: "#" },
        { label: t("footer.sections.resources.blog"), path: "#" },
        { label: t("footer.sections.resources.playlist"), path: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#F0F0F0] dark:bg-background mt-50 md:mt-45">
      <Container className="pt-25 pb-22">
        {/* Newsletter Section */}
        <div className="relative">
          <div className="absolute -top-60 md:-top-50 w-full">
            <Newsletter />
          </div>
        </div>

        <div className="mt-20 md:mt-10 lg:mt-20 flex flex-col md:flex-row items-start justify-between gap-10 md:gap-20">
          {/* Brand Info */}
          <div className="flex w-full flex-col gap-4 md:max-w-62">
            <img
              src={Logo}
              alt="logo"
              className="w-36 md:w-auto h-auto mb-2 dark:invert"
            />
            <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-gray-300 bg-background flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-col">
                <h3 className="text-sm md:text-base font-bold text-foreground uppercase tracking-widest mb-4 md:mb-6">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.path}
                        className="text-sm md:text-base font-normal text-black/60 dark:text-white/60 hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="mb-6 mt-12 border-black/10 dark:border-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black/60 dark:text-white/60 text-center md:text-left">
            {t("footer.rights")}
          </p>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            {paymentMethods.map((method, id) => (
              <img
                key={id}
                src={method}
                className="w-10 h-auto object-contain"
                alt="payment method"
              />
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
