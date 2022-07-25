import { HeartIcon } from "@heroicons/react/solid";
import i18next from "i18next";
import { URL_PORTFOLIO } from "contants";
import Services from "./Services";
import Contact from "./Contact";
const Footer = () => (
  <>
    <Services />
    <Contact />

    <footer className="bg-black text-white mt-8 p-6 text-center w-full flex md:flex-row flex-col justify-between">
      <div>
        <p>Venty™</p>
      </div>
      <div>
        <p>
          <a
            href={URL_PORTFOLIO}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-current"
          >
            <>
              {i18next.t("footer.tagline")}
              {/* <HeartIcon className="inline-block w-4 h-4 -mt-1 text-red-600 animate-pulse mx-2" /> */}
              {i18next.t("footer.sub-tagline")}
            </>
          </a>
        </p>
      </div>

      <ul className="space-x-2 my-2 flex justify-center">
        <li>
          <a target="_blank" href="#">
            <img src="/svg/icons8-facebook.svg" className="invert" />
          </a>
        </li>

        <li>
          <a target="_blank" href="#">
            <img src="/svg/icons8-instagram.svg" className="invert" />
          </a>
        </li>

        <li>
          <a target="_blank" href="#">
            <img src="/svg/icons8-tiktok.svg" className="invert" />
          </a>
        </li>
        <li>
          <a target="_blank" href="#">
            <img src="/svg/icons8-twitter.svg" className="invert" />
          </a>
        </li>
      </ul>
    </footer>
  </>
);

export default Footer;
