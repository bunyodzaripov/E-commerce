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
const footerLinks = [
  {
    title: "Company",
    links: ["About", "Features", "Works", "Career"],
  },
  {
    title: "Help",
    links: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "FAQ",
    links: ["Account", "Manage Deliveries", "Orders", "Payments"],
  },
  {
    title: "Resources",
    links: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist",
    ],
  },
];

const socialLinks = [
  { icon: TwitterIcon, href: "#" },
  { icon: FacebookIcon, href: "#" },
  { icon: InstagramIcon, href: "#" },
  { icon: GithubIcon, href: "#" },
];

const paymentMethods = [Payment1, Payment2, Payment3, Payment4, Payment5];

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F0] mt-50 md:mt-45">
      <Container className="pt-25 pb-22 ">
        <div className="relative">
          <div className="absolute -top-60 md:-top-50">
            <Newsletter />
          </div>
        </div>
        <div className="mt-20 md:mt-10 lg:mt-20 flex flex-col md:flex-row items-end gap-6 md:gap-28.5">
          <div className="flex w-full flex-col gap-2 md:max-w-62">
            <img src={Logo} alt="logo" className="w-36 md:w-auto h-auto mb-2" />

            <p className="text-sm text-black/60 leading-relaxed">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>

            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map(({ icon: Icon, href }) => (
                <a
                  araia-label={href}
                  key={href + Icon.name}
                  href={href}
                  className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-6">
            {footerLinks.map((section) => (
              <div
                key={section.title}
                className="flex flex-col md:justify-between"
              >
                <h3 className="text-sm md:text-base font-medium text-black uppercase tracking-widest">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-2 mt-4 md:mt-6">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm md:text-base font-normal text-gray-500 hover:text-black transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="mb-6 mt-12 bg-[#0000001a]" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            shop.co © 2000-2023, All Rights Reserved
          </p>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            {paymentMethods.map((method, id) => (
              <img
                src={method}
                key={id}
                className="w-14 h-auto"
                alt="payment method"
              />
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
