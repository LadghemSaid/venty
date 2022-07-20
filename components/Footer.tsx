import { HeartIcon } from "@heroicons/react/solid";
import i18next from "i18next";
import { URL_PORTFOLIO } from "contants";
const Footer = () => (
  <footer className="container xl:max-w-screen-xl mx-auto p-6 mt-8 text-center">
    <p>
      <a
        href={URL_PORTFOLIO}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-current"
      >
        {i18next.t("footer.tagline")}
        <HeartIcon className="inline-block w-4 h-4 -mt-1 text-red-600 animate-pulse" />
        {i18next.t("footer.sub-tagline")}
      </a>
    </p>
  </footer>
);

export default Footer;