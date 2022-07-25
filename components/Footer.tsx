import { HeartIcon } from "@heroicons/react/solid";
import i18next from "i18next";
import { URL_PORTFOLIO } from "contants";
import Services from "./Services";
import Contact from "./Contact";
const Footer = () => (
  <>
    <Services />
    <Contact />

    <footer className="bg-black mt-8 p-6 text-center w-full">
      <p>
        <a
          href={URL_PORTFOLIO}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-current"
        >
          <>
            {i18next.t("footer.tagline")}
            <HeartIcon className="inline-block w-4 h-4 -mt-1 text-red-600 animate-pulse mx-2" />
            {i18next.t("footer.sub-tagline")}
          </>
        </a>
      </p>
    </footer>
  </>
);

export default Footer;
